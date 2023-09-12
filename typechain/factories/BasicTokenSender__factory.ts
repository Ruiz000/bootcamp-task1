/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BasicTokenSender } from "../BasicTokenSender";

export class BasicTokenSender__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    router: string,
    link: string,
    overrides?: Overrides
  ): Promise<BasicTokenSender> {
    return super.deploy(
      router,
      link,
      overrides || {}
    ) as Promise<BasicTokenSender>;
  }
  getDeployTransaction(
    router: string,
    link: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(router, link, overrides || {});
  }
  attach(address: string): BasicTokenSender {
    return super.attach(address) as BasicTokenSender;
  }
  connect(signer: Signer): BasicTokenSender__factory {
    return super.connect(signer) as BasicTokenSender__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicTokenSender {
    return new Contract(address, _abi, signerOrProvider) as BasicTokenSender;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "MessageSent",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
    ],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Client.EVMTokenAmount[]",
        name: "tokensToSendDetails",
        type: "tuple[]",
      },
      {
        internalType: "enum BasicTokenSender.PayFeesIn",
        name: "payFeesIn",
        type: "uint8",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620013a8380380620013a883398101604081905262000034916200021c565b33806000816200008b5760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000be57620000be8162000154565b5050506001600160a01b03828116608081905290821660a0819052600560c05260405163095ea7b360e01b8152600481019290925260001960248301529063095ea7b3906044016020604051808303816000875af115801562000125573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014b919062000254565b5050506200027f565b336001600160a01b03821603620001ae5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640162000082565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b80516001600160a01b03811681146200021757600080fd5b919050565b600080604083850312156200023057600080fd5b6200023b83620001ff565b91506200024b60208401620001ff565b90509250929050565b6000602082840312156200026757600080fd5b815180151581146200027857600080fd5b9392505050565b60805160a05160c0516110dd620002cb60003960006104d80152600061079701526000818161066d015281816107de0152818161089f015281816109370152610a2901526110dd6000f3fe60806040526004361061007f5760003560e01c80638da5cb5b1161004e5780638da5cb5b146100f5578063b6d2440c14610122578063f2fde38b14610142578063fbca3b741461016257600080fd5b80633aeac4e11461008b5780633aebf083146100ad57806351cff8d9146100c057806379ba5097146100e057600080fd5b3661008657005b600080fd5b34801561009757600080fd5b506100ab6100a6366004610bb9565b61018f565b005b6100ab6100bb366004610c0f565b61027f565b3480156100cc57600080fd5b506100ab6100db366004610c5e565b610389565b3480156100ec57600080fd5b506100ab610427565b34801561010157600080fd5b506000546040516001600160a01b0390911681526020015b60405180910390f35b34801561012e57600080fd5b506100ab61013d366004610d25565b6104d1565b34801561014e57600080fd5b506100ab61015d366004610c5e565b6109f3565b34801561016e57600080fd5b5061018261017d366004610e1e565b610a07565b6040516101199190610e39565b610197610aa6565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156101de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102029190610e86565b60405163a9059cbb60e01b81526001600160a01b038581166004830152602482018390529192509083169063a9059cbb906044016020604051808303816000875af1158015610255573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102799190610e9f565b50505050565b6040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156102d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f69190610e9f565b50604080516001808252818301909252600091816020015b604080518082019091526000808252602082015281526020019060019003908161030e5790505090506040518060400160405280846001600160a01b03168152602001838152508160008151811061036857610368610ec1565b60200260200101819052506000610381868684846104d1565b505050505050565b610391610aa6565b60405147906000906001600160a01b0384169083908381818185875af1925050503d80600081146103de576040519150601f19603f3d011682016040523d82523d6000602084013e6103e3565b606091505b505090508061042257604051639d11f56360e01b81523360048201526001600160a01b0384166024820152604481018390526064015b60405180910390fd5b505050565b6001546001600160a01b0316331461047a5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b6044820152606401610419565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b815161ffff7f00000000000000000000000000000000000000000000000000000000000000001681111561056d5760405162461bcd60e51b815260206004820152603760248201527f4d6178696d756d203520646966666572656e7420746f6b656e732063616e206260448201527f652073656e74207065722043434950204d6573736167650000000000000000006064820152608401610419565b60005b818110156107275783818151811061058a5761058a610ec1565b6020026020010151600001516001600160a01b03166323b872dd33308785815181106105b8576105b8610ec1565b60209081029190910181015101516040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af115801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e9190610e9f565b5083818151811061065157610651610ec1565b6020026020010151600001516001600160a01b031663095ea7b37f000000000000000000000000000000000000000000000000000000000000000086848151811061069e5761069e610ec1565b6020026020010151602001516040518363ffffffff1660e01b81526004016106db9291906001600160a01b03929092168252602082015260400190565b6020604051808303816000875af11580156106fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071e9190610e9f565b50600101610570565b506040805160a081019091526001600160a01b03851660c08201526000908060e0810160408051601f19818403018152918152908252805160208181018352600082528301528101869052606001600185600181111561078957610789610ed7565b146107955760006107b7565b7f00000000000000000000000000000000000000000000000000000000000000005b6001600160a01b0316815260200160405180602001604052806000815250815250905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166320487ded88846040518363ffffffff1660e01b815260040161082a929190610f33565b602060405180830381865afa158015610847573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086b9190610e86565b90506000600185600181111561088357610883610ed7565b03610920576040516396f4e9f960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906396f4e9f9906108d6908b908790600401610f33565b6020604051808303816000875af11580156108f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109199190610e86565b90506109b6565b6040516396f4e9f960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906396f4e9f9908490610970908c908890600401610f33565b60206040518083038185885af115801561098e573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906109b39190610e86565b90505b6040518181527f54791b38f3859327992a1ca0590ad3c0f08feba98d1a4f56ab0dca74d203392a9060200160405180910390a15050505050505050565b6109fb610aa6565b610a0481610afb565b50565b604051633ef28edd60e21b815267ffffffffffffffff821660048201526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063fbca3b7490602401600060405180830381865afa158015610a78573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610aa0919081019061100d565b92915050565b6000546001600160a01b03163314610af95760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606401610419565b565b336001600160a01b03821603610b535760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610419565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6001600160a01b0381168114610a0457600080fd5b60008060408385031215610bcc57600080fd5b8235610bd781610ba4565b91506020830135610be781610ba4565b809150509250929050565b803567ffffffffffffffff81168114610c0a57600080fd5b919050565b60008060008060808587031215610c2557600080fd5b610c2e85610bf2565b93506020850135610c3e81610ba4565b92506040850135610c4e81610ba4565b9396929550929360600135925050565b600060208284031215610c7057600080fd5b8135610c7b81610ba4565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610cbb57610cbb610c82565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610cea57610cea610c82565b604052919050565b600067ffffffffffffffff821115610d0c57610d0c610c82565b5060051b60200190565b803560028110610c0a57600080fd5b60008060008060808587031215610d3b57600080fd5b610d4485610bf2565b9350602080860135610d5581610ba4565b935060408681013567ffffffffffffffff811115610d7257600080fd5b8701601f81018913610d8357600080fd5b8035610d96610d9182610cf2565b610cc1565b81815260069190911b8201840190848101908b831115610db557600080fd5b928501925b82841015610dfe5784848d031215610dd25760008081fd5b610dda610c98565b8435610de581610ba4565b8152848701358782015282529284019290850190610dba565b809750505050505050610e1360608601610d16565b905092959194509250565b600060208284031215610e3057600080fd5b610c7b82610bf2565b6020808252825182820181905260009190848201906040850190845b81811015610e7a5783516001600160a01b031683529284019291840191600101610e55565b50909695505050505050565b600060208284031215610e9857600080fd5b5051919050565b600060208284031215610eb157600080fd5b81518015158114610c7b57600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6000815180845260005b81811015610f1357602081850181015186830182015201610ef7565b506000602082860101526020601f19601f83011685010191505092915050565b6000604067ffffffffffffffff8516835260208181850152845160a083860152610f6060e0860182610eed565b905081860151603f1980878403016060880152610f7d8383610eed565b88860151888203830160808a01528051808352908601945060009350908501905b80841015610fd057845180516001600160a01b0316835286015186830152938501936001939093019290860190610f9e565b5060608901516001600160a01b031660a08901526080890151888203830160c08a01529550610fff8187610eed565b9a9950505050505050505050565b6000602080838503121561102057600080fd5b825167ffffffffffffffff81111561103757600080fd5b8301601f8101851361104857600080fd5b8051611056610d9182610cf2565b81815260059190911b8201830190838101908783111561107557600080fd5b928401925b8284101561109c57835161108d81610ba4565b8252928401929084019061107a565b97965050505050505056fea2646970667358221220b8d3a42ffc6865e1950fe146e45bd8f25e08149a61e9376292e87227df74605264736f6c63430008130033";