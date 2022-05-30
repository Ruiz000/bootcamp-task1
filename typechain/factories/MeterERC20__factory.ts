/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MeterERC20 } from "../MeterERC20";

export class MeterERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MeterERC20> {
    return super.deploy(overrides || {}) as Promise<MeterERC20>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MeterERC20 {
    return super.attach(address) as MeterERC20;
  }
  connect(signer: Signer): MeterERC20__factory {
    return super.connect(signer) as MeterERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MeterERC20 {
    return new Contract(address, _abi, signerOrProvider) as MeterERC20;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getBlackList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "setBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604080518082018252600581526426b2ba32b960d91b6020808301918252835180850185526004815263076312e360e41b908201529151902060c08181527fe8245ed8f93ccf147bc8972ab6d5f8278ed994d647700daaa5b7ebde9370aa6f60e08190524660a081815286517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8188018190528189019690965260608101939093526080808401929092523083820152865180840390910181529190920190945283519390920192909220905261010052600380546001600160a01b0319166a4d657465724e61746976651790556200010e60003362000114565b62000279565b6200012b82826200015760201b620009811760201c565b6000828152600160209081526040909120620001529183906200098f62000167821b17901c565b505050565b62000163828262000187565b5050565b60006200017e836001600160a01b03841662000227565b90505b92915050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000163576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001e33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000818152600183016020526040812054620002705750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000181565b50600062000181565b60805160a05160c05160e05161010051611a2b620002be6000396000611015015260006110640152600061103f01526000610fc301526000610fec0152611a2b6000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806372700241116100c3578063a217fddf1161007c578063a217fddf14610335578063a9059cbb1461033d578063ca15c87314610350578063d547741f14610363578063d89135cd14610376578063dd62ed3e1461037e57600080fd5b806372700241146102925780637ecebe00146102a55780639010d07c146102c557806391d14854146102f057806395d89b41146103035780639fd5a6cf1461032257600080fd5b80632f2ff15d116101155780632f2ff15d1461020e57806330adf81f14610223578063313ce5671461024a57806336568abe146102595780633fbdc67d1461026c57806370a082311461027f57600080fd5b806301ffc9a71461015d57806306fdde0314610185578063095ea7b3146101af57806318160ddd146101c257806323b872dd146101d8578063248a9ca3146101eb575b600080fd5b61017061016b3660046117c9565b6103b7565b60405190151581526020015b60405180910390f35b60408051808201909152600581526426b2ba32b960d91b60208201525b60405161017c9190611881565b6101706101bd36600461171f565b6103e2565b6101ca61044e565b60405190815260200161017c565b6101706101e63660046115fd565b6104d0565b6101ca6101f936600461176b565b60009081526020819052604090206001015490565b61022161021c366004611784565b610596565b005b6101ca7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6040516012815260200161017c565b610221610267366004611784565b6105bd565b61017061027a3660046115af565b6105df565b6101ca61028d3660046115af565b61062a565b6102216102a03660046115af565b6106a8565b6101ca6102b33660046115af565b60056020526000908152604090205481565b6102d86102d33660046117a7565b6106f8565b6040516001600160a01b03909116815260200161017c565b6101706102fe366004611784565b610717565b60408051808201909152600381526226aa2960e91b60208201526101a2565b610170610330366004611639565b610740565b6101ca600081565b61017061034b36600461171f565b610905565b6101ca61035e36600461176b565b61091b565b610221610371366004611784565b610932565b6101ca61093c565b6101ca61038c3660046115ca565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60006001600160e01b03198216635a05180f60e01b14806103dc57506103dc826109a4565b92915050565b3360008181526002602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061043d9086815260200190565b60405180910390a350600192915050565b6003546040805163076e361d60e01b815290516000926001600160a01b03169163076e361d916004808301926020929190829003018186803b15801561049357600080fd5b505afa1580156104a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cb91906117f3565b905090565b6001600160a01b03831660009081526002602090815260408083203384529091528120548211156105485760405162461bcd60e51b815260206004820152601f60248201527f6275696c74696e3a20696e73756666696369656e7420616c6c6f77616e63650060448201526064015b60405180910390fd5b6001600160a01b03841660009081526002602090815260408083203384529091528120805484929061057b90849061190e565b9091555061058c90508484846109d9565b5060019392505050565b6105a08282610ba3565b60008281526001602052604090206105b8908261098f565b505050565b6105c78282610bc9565b60008281526001602052604090206105b89082610c43565b60006105eb8133610717565b6106075760405162461bcd60e51b815260040161053f906118b4565b506001600160a01b03811660009081526004602052604090205460ff165b919050565b600354604051630511d90360e01b81526001600160a01b0383811660048301526000921690630511d9039060240160206040518083038186803b15801561067057600080fd5b505afa158015610684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dc91906117f3565b6106b3600033610717565b6106cf5760405162461bcd60e51b815260040161053f906118b4565b6001600160a01b03166000908152600460205260409020805460ff19811660ff90911615179055565b60008281526001602052604081206107109083610c58565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60004283101561077d5760405162461bcd60e51b8152602060048201526008602482015267657870697265642160c01b604482015260640161053f565b6001600160a01b038616600090815260056020526040812080547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c99189918991899190866107ca8361196c565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810185905260e001604051602081830303815290604052805190602001209050600061082982610c64565b905060006108378286610cb2565b9050806001600160a01b0316896001600160a01b03161461089a5760405162461bcd60e51b815260206004820152601960248201527f5065726d69743a20696e76616c6964207369676e617475726500000000000000604482015260640161053f565b6001600160a01b038981166000818152600260209081526040808320948d16808452948252918290208b905590518a81527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350600198975050505050505050565b60006109123384846109d9565b50600192915050565b60008181526001602052604081206103dc90610cd6565b6105c78282610ce0565b6003546040805163ccc7df9d60e01b815290516000926001600160a01b03169163ccc7df9d916004808301926020929190829003018186803b15801561049357600080fd5b61098b8282610d06565b5050565b6000610710836001600160a01b038416610d8a565b60006001600160e01b03198216637965db0b60e01b14806103dc57506301ffc9a760e01b6001600160e01b03198316146103dc565b6001600160a01b03831660009081526004602052604090205460ff1615610a125760405162461bcd60e51b815260040161053f906118b4565b8015610b515760035460405163f14645f560e01b81526001600160a01b038581166004830152602482018490529091169063f14645f590604401602060405180830381600087803b158015610a6657600080fd5b505af1158015610a7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9e9190611749565b610aea5760405162461bcd60e51b815260206004820152601d60248201527f6275696c74696e3a20696e73756666696369656e742062616c616e6365000000604482015260640161053f565b60035460405163740b155f60e01b81526001600160a01b038481166004830152602482018490529091169063740b155f90604401600060405180830381600087803b158015610b3857600080fd5b505af1158015610b4c573d6000803e3d6000fd5b505050505b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b9691815260200190565b60405180910390a3505050565b600082815260208190526040902060010154610bbf8133610dd9565b6105b88383610d06565b6001600160a01b0381163314610c395760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161053f565b61098b8282610e3d565b6000610710836001600160a01b038416610ea2565b60006107108383610f95565b60006103dc610c71610fbf565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610cc185856110b2565b91509150610cce81611122565b509392505050565b60006103dc825490565b600082815260208190526040902060010154610cfc8133610dd9565b6105b88383610e3d565b610d108282610717565b61098b576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610d463390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000818152600183016020526040812054610dd1575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103dc565b5060006103dc565b610de38282610717565b61098b57610dfb816001600160a01b031660146112e0565b610e068360206112e0565b604051602001610e1792919061180c565b60408051601f198184030181529082905262461bcd60e51b825261053f91600401611881565b610e478282610717565b1561098b576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60008181526001830160205260408120548015610f8b576000610ec660018361190e565b8554909150600090610eda9060019061190e565b9050818114610f3f576000866000018281548110610efa57610efa6119c9565b9060005260206000200154905080876000018481548110610f1d57610f1d6119c9565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610f5057610f506119b3565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103dc565b60009150506103dc565b6000826000018281548110610fac57610fac6119c9565b9060005260206000200154905092915050565b60007f000000000000000000000000000000000000000000000000000000000000000046141561100e57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000808251604114156110e95760208301516040840151606085015160001a6110dd8782858561147c565b9450945050505061111b565b8251604014156111135760208301516040840151611108868383611569565b93509350505061111b565b506000905060025b9250929050565b60008160048111156111365761113661199d565b141561113f5750565b60018160048111156111535761115361199d565b14156111a15760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161053f565b60028160048111156111b5576111b561199d565b14156112035760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161053f565b60038160048111156112175761121761199d565b14156112705760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161053f565b60048160048111156112845761128461199d565b14156112dd5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161053f565b50565b606060006112ef8360026118ef565b6112fa9060026118d7565b67ffffffffffffffff811115611312576113126119df565b6040519080825280601f01601f19166020018201604052801561133c576020820181803683370190505b509050600360fc1b81600081518110611357576113576119c9565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611386576113866119c9565b60200101906001600160f81b031916908160001a90535060006113aa8460026118ef565b6113b59060016118d7565b90505b600181111561142d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106113e9576113e96119c9565b1a60f81b8282815181106113ff576113ff6119c9565b60200101906001600160f81b031916908160001a90535060049490941c9361142681611955565b90506113b8565b5083156107105760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161053f565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156114b35750600090506003611560565b8460ff16601b141580156114cb57508460ff16601c14155b156114dc5750600090506004611560565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611530573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661155957600060019250925050611560565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b0161158a8782888561147c565b935093505050935093915050565b80356001600160a01b038116811461062557600080fd5b6000602082840312156115c157600080fd5b61071082611598565b600080604083850312156115dd57600080fd5b6115e683611598565b91506115f460208401611598565b90509250929050565b60008060006060848603121561161257600080fd5b61161b84611598565b925061162960208501611598565b9150604084013590509250925092565b600080600080600060a0868803121561165157600080fd5b61165a86611598565b945061166860208701611598565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561169357600080fd5b818801915088601f8301126116a757600080fd5b8135818111156116b9576116b96119df565b604051601f8201601f19908116603f011681019083821181831017156116e1576116e16119df565b816040528281528b60208487010111156116fa57600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b6000806040838503121561173257600080fd5b61173b83611598565b946020939093013593505050565b60006020828403121561175b57600080fd5b8151801515811461071057600080fd5b60006020828403121561177d57600080fd5b5035919050565b6000806040838503121561179757600080fd5b823591506115f460208401611598565b600080604083850312156117ba57600080fd5b50508035926020909101359150565b6000602082840312156117db57600080fd5b81356001600160e01b03198116811461071057600080fd5b60006020828403121561180557600080fd5b5051919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611844816017850160208801611925565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611875816028840160208801611925565b01602801949350505050565b60208152600082518060208401526118a0816040850160208701611925565b601f01601f19169190910160400192915050565b6020808252600990820152683337b93134b23232b760b91b604082015260600190565b600082198211156118ea576118ea611987565b500190565b600081600019048311821515161561190957611909611987565b500290565b60008282101561192057611920611987565b500390565b60005b83811015611940578181015183820152602001611928565b8381111561194f576000848401525b50505050565b60008161196457611964611987565b506000190190565b600060001982141561198057611980611987565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122059c47045e802c8d2562e385fd8971251b58498e01b355a1011771c23e56a1f3464736f6c63430008070033";