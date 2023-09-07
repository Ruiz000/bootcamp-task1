/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ILayerZeroEndpointUpgradeableInterface
  extends ethers.utils.Interface {
  functions: {
    "estimateFees(uint16,address,bytes,bool,bytes)": FunctionFragment;
    "forceResumeReceive(uint16,bytes)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
    "getInboundNonce(uint16,bytes)": FunctionFragment;
    "getOutboundNonce(uint16,address)": FunctionFragment;
    "getReceiveLibraryAddress(address)": FunctionFragment;
    "getReceiveVersion(address)": FunctionFragment;
    "getSendLibraryAddress(address)": FunctionFragment;
    "getSendVersion(address)": FunctionFragment;
    "hasStoredPayload(uint16,bytes)": FunctionFragment;
    "isReceivingPayload()": FunctionFragment;
    "isSendingPayload()": FunctionFragment;
    "receivePayload(uint16,bytes,address,uint64,uint256,bytes)": FunctionFragment;
    "retryPayload(uint16,bytes,bytes)": FunctionFragment;
    "send(uint16,bytes,bytes,address,address,bytes)": FunctionFragment;
    "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
    "setReceiveVersion(uint16)": FunctionFragment;
    "setSendVersion(uint16)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "estimateFees",
    values: [BigNumberish, string, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInboundNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutboundNonce",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveLibraryAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveVersion",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendLibraryAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendVersion",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasStoredPayload",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReceivingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSendingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivePayload",
    values: [
      BigNumberish,
      BytesLike,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retryPayload",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [BigNumberish, BytesLike, BytesLike, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasStoredPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReceivingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSendingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;

  events: {};
}

export class ILayerZeroEndpointUpgradeable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILayerZeroEndpointUpgradeableInterface;

  functions: {
    estimateFees(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      nativeFee: BigNumber;
      zroFee: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "estimateFees(uint16,address,bytes,bool,bytes)"(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      nativeFee: BigNumber;
      zroFee: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "forceResumeReceive(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "getChainId()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getConfig(uint16,uint16,address,uint256)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getInboundNonce(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getInboundNonce(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getOutboundNonce(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getOutboundNonce(uint16,address)"(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getReceiveLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getReceiveLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getReceiveVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "getReceiveVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    getSendLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getSendLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getSendVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "getSendVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    hasStoredPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasStoredPayload(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isReceivingPayload(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isReceivingPayload()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    isSendingPayload(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isSendingPayload()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    receivePayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "receivePayload(uint16,bytes,address,uint64,uint256,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    retryPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "retryPayload(uint16,bytes,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    send(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "send(uint16,bytes,bytes,address,address,bytes)"(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setConfig(uint16,uint16,uint256,bytes)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setReceiveVersion(uint16)"(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSendVersion(uint16)"(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  estimateFees(
    _dstChainId: BigNumberish,
    _userApplication: string,
    _payload: BytesLike,
    _payInZRO: boolean,
    _adapterParam: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    nativeFee: BigNumber;
    zroFee: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "estimateFees(uint16,address,bytes,bool,bytes)"(
    _dstChainId: BigNumberish,
    _userApplication: string,
    _payload: BytesLike,
    _payInZRO: boolean,
    _adapterParam: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    nativeFee: BigNumber;
    zroFee: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  forceResumeReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "forceResumeReceive(uint16,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<number>;

  "getChainId()"(overrides?: CallOverrides): Promise<number>;

  getConfig(
    _version: BigNumberish,
    _chainId: BigNumberish,
    _userApplication: string,
    _configType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getConfig(uint16,uint16,address,uint256)"(
    _version: BigNumberish,
    _chainId: BigNumberish,
    _userApplication: string,
    _configType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getInboundNonce(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getInboundNonce(uint16,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOutboundNonce(
    _dstChainId: BigNumberish,
    _srcAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getOutboundNonce(uint16,address)"(
    _dstChainId: BigNumberish,
    _srcAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReceiveLibraryAddress(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getReceiveLibraryAddress(address)"(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getReceiveVersion(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<number>;

  "getReceiveVersion(address)"(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getSendLibraryAddress(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getSendLibraryAddress(address)"(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getSendVersion(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<number>;

  "getSendVersion(address)"(
    _userApplication: string,
    overrides?: CallOverrides
  ): Promise<number>;

  hasStoredPayload(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasStoredPayload(uint16,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isReceivingPayload(overrides?: CallOverrides): Promise<boolean>;

  "isReceivingPayload()"(overrides?: CallOverrides): Promise<boolean>;

  isSendingPayload(overrides?: CallOverrides): Promise<boolean>;

  "isSendingPayload()"(overrides?: CallOverrides): Promise<boolean>;

  receivePayload(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _dstAddress: string,
    _nonce: BigNumberish,
    _gasLimit: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "receivePayload(uint16,bytes,address,uint64,uint256,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _dstAddress: string,
    _nonce: BigNumberish,
    _gasLimit: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  retryPayload(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "retryPayload(uint16,bytes,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  send(
    _dstChainId: BigNumberish,
    _destination: BytesLike,
    _payload: BytesLike,
    _refundAddress: string,
    _zroPaymentAddress: string,
    _adapterParams: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "send(uint16,bytes,bytes,address,address,bytes)"(
    _dstChainId: BigNumberish,
    _destination: BytesLike,
    _payload: BytesLike,
    _refundAddress: string,
    _zroPaymentAddress: string,
    _adapterParams: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  setConfig(
    _version: BigNumberish,
    _chainId: BigNumberish,
    _configType: BigNumberish,
    _config: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setConfig(uint16,uint16,uint256,bytes)"(
    _version: BigNumberish,
    _chainId: BigNumberish,
    _configType: BigNumberish,
    _config: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setReceiveVersion(
    _version: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setReceiveVersion(uint16)"(
    _version: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSendVersion(
    _version: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSendVersion(uint16)"(
    _version: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    estimateFees(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      nativeFee: BigNumber;
      zroFee: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "estimateFees(uint16,address,bytes,bool,bytes)"(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      nativeFee: BigNumber;
      zroFee: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "forceResumeReceive(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<number>;

    "getChainId()"(overrides?: CallOverrides): Promise<number>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getConfig(uint16,uint16,address,uint256)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getInboundNonce(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInboundNonce(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutboundNonce(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutboundNonce(uint16,address)"(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiveLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getReceiveLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getReceiveVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "getReceiveVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getSendLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getSendLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getSendVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "getSendVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<number>;

    hasStoredPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasStoredPayload(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isReceivingPayload(overrides?: CallOverrides): Promise<boolean>;

    "isReceivingPayload()"(overrides?: CallOverrides): Promise<boolean>;

    isSendingPayload(overrides?: CallOverrides): Promise<boolean>;

    "isSendingPayload()"(overrides?: CallOverrides): Promise<boolean>;

    receivePayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "receivePayload(uint16,bytes,address,uint64,uint256,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    retryPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "retryPayload(uint16,bytes,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "send(uint16,bytes,bytes,address,address,bytes)"(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setConfig(uint16,uint16,uint256,bytes)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setReceiveVersion(uint16)"(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSendVersion(uint16)"(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    estimateFees(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "estimateFees(uint16,address,bytes,bool,bytes)"(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "forceResumeReceive(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "getChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getConfig(uint16,uint16,address,uint256)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInboundNonce(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInboundNonce(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutboundNonce(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutboundNonce(uint16,address)"(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiveLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReceiveLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceiveVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReceiveVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSendLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSendLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSendVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSendVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasStoredPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasStoredPayload(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isReceivingPayload(overrides?: CallOverrides): Promise<BigNumber>;

    "isReceivingPayload()"(overrides?: CallOverrides): Promise<BigNumber>;

    isSendingPayload(overrides?: CallOverrides): Promise<BigNumber>;

    "isSendingPayload()"(overrides?: CallOverrides): Promise<BigNumber>;

    receivePayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "receivePayload(uint16,bytes,address,uint64,uint256,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    retryPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "retryPayload(uint16,bytes,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    send(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "send(uint16,bytes,bytes,address,address,bytes)"(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setConfig(uint16,uint16,uint256,bytes)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setReceiveVersion(uint16)"(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSendVersion(uint16)"(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateFees(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "estimateFees(uint16,address,bytes,bool,bytes)"(
      _dstChainId: BigNumberish,
      _userApplication: string,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forceResumeReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "forceResumeReceive(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getConfig(uint16,uint16,address,uint256)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: string,
      _configType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInboundNonce(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInboundNonce(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutboundNonce(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOutboundNonce(uint16,address)"(
      _dstChainId: BigNumberish,
      _srcAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceiveLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReceiveLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceiveVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReceiveVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSendLibraryAddress(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSendLibraryAddress(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSendVersion(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSendVersion(address)"(
      _userApplication: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasStoredPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasStoredPayload(uint16,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isReceivingPayload(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isReceivingPayload()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSendingPayload(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isSendingPayload()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receivePayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "receivePayload(uint16,bytes,address,uint64,uint256,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: string,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    retryPayload(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "retryPayload(uint16,bytes,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    send(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "send(uint16,bytes,bytes,address,address,bytes)"(
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: string,
      _zroPaymentAddress: string,
      _adapterParams: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    setConfig(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setConfig(uint16,uint16,uint256,bytes)"(
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setReceiveVersion(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setReceiveVersion(uint16)"(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSendVersion(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSendVersion(uint16)"(
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}