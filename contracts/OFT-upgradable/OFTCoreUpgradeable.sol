// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "./interfaces/IOFTCoreUpgradeable.sol";
import "./lzApp/NonblockingLzAppUpgradeable.sol";

abstract contract OFTCoreUpgradeable is
    Initializable,
    NonblockingLzAppUpgradeable,
    IOFTCoreUpgradeable
{
    using BytesLib for bytes;

    uint256 public constant NO_EXTRA_GAS = 0;
    uint256 public constant FUNCTION_TYPE_SEND = 1;
    bool public useCustomAdapterParams;

    function __OFTCoreUpgradeable_init(
        address _endpoint,
        address admin
    ) internal onlyInitializing {
        __OFTCoreUpgradeable_init_unchained(_endpoint, admin);
    }

    function __OFTCoreUpgradeable_init_unchained(
        address _endpoint,
        address admin
    ) internal onlyInitializing {
        __NonblockingLzAppUpgradeable_init_unchained(_endpoint, admin);
    }

    function estimateSendFee(
        uint16 _dstChainId,
        bytes calldata _toAddress,
        uint256 _amount,
        bool _useZro,
        bytes calldata _adapterParams
    ) public view virtual override returns (uint256 nativeFee, uint256 zroFee) {
        // mock the payload for sendFrom()
        bytes memory payload = abi.encode(0, _toAddress, _amount);
        return
            lzEndpoint.estimateFees(
                _dstChainId,
                address(this),
                payload,
                _useZro,
                _adapterParams
            );
    }

    function sendFrom(
        address _token,
        address _from,
        uint16 _dstChainId,
        bytes calldata _toAddress,
        uint256 _amount,
        address payable _refundAddress,
        address _zroPaymentAddress,
        bytes calldata _adapterParams
    ) public payable virtual override {
        _send(
            _token,
            _from,
            _dstChainId,
            _toAddress,
            _amount,
            _refundAddress,
            _zroPaymentAddress,
            _adapterParams
        );
    }

    function setUseCustomAdapterParams(
        bool _useCustomAdapterParams
    ) public virtual onlyAdmin {
        useCustomAdapterParams = _useCustomAdapterParams;
        emit SetUseCustomAdapterParams(_useCustomAdapterParams);
    }

    function _nonblockingLzReceive(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        uint64 _nonce,
        bytes memory _payload
    ) internal virtual override {
        uint16 packetType;
        assembly {
            packetType := mload(add(_payload, 32))
        }

        if (packetType == 0) {
            _sendAck(_srcChainId, _srcAddress, _nonce, _payload);
        } else {
            revert("OFTCore: unknown packet type");
        }
    }

    function _send(
        address _token,
        address _from,
        uint16 _dstChainId,
        bytes memory _toAddress,
        uint256 _amount,
        address payable _refundAddress,
        address _zroPaymentAddress,
        bytes memory _adapterParams
    ) internal virtual {
        _checkAdapterParams(_dstChainId, 0, _adapterParams, NO_EXTRA_GAS);

        uint256 amount = _debitFrom(
            _token,
            _from,
            _dstChainId,
            _toAddress,
            _amount
        );

        bytes memory lzPayload = abi.encode(0, _token, _toAddress, amount);
        _lzSend(
            _dstChainId,
            lzPayload,
            _refundAddress,
            _zroPaymentAddress,
            _adapterParams,
            msg.value
        );

        emit SendToChain(_dstChainId, _token, _from, _toAddress, amount);
    }

    function _sendAck(
        uint16 _srcChainId,
        bytes memory,
        uint64,
        bytes memory _payload
    ) internal virtual {
        (, address token, bytes memory toAddressBytes, uint256 amount) = abi
            .decode(_payload, (uint16, address, bytes, uint256));

        address to = toAddressBytes.toAddress(0);

        amount = _creditTo(token, _srcChainId, to, amount);
        emit ReceiveFromChain(_srcChainId, to, amount);
    }

    function _checkAdapterParams(
        uint16 _dstChainId,
        uint16 _pkType,
        bytes memory _adapterParams,
        uint256 _extraGas
    ) internal virtual {
        if (useCustomAdapterParams) {
            _checkGasLimit(_dstChainId, _pkType, _adapterParams, _extraGas);
        } else {
            require(
                _adapterParams.length == 0,
                "OFTCore: _adapterParams must be empty."
            );
        }
    }

    function _debitFrom(
        address _token,
        address _from,
        uint16 _dstChainId,
        bytes memory _toAddress,
        uint256 _amount
    ) internal virtual returns (uint256);

    function _creditTo(
        address _token,
        uint16 _srcChainId,
        address _toAddress,
        uint256 _amount
    ) internal virtual returns (uint256);

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[50] private __gap;
}
