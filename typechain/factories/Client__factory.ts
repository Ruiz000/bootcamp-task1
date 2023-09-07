/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Client } from "../Client";

export class Client__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Client> {
    return super.deploy(overrides || {}) as Promise<Client>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Client {
    return super.attach(address) as Client;
  }
  connect(signer: Signer): Client__factory {
    return super.connect(signer) as Client__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Client {
    return new Contract(address, _abi, signerOrProvider) as Client;
  }
}

const _abi = [
  {
    inputs: [],
    name: "EVM_EXTRA_ARGS_V1_TAG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6098610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633ab8c0d0146038575b600080fd5b60456397a657c960e01b81565b6040516001600160e01b0319909116815260200160405180910390f3fea264697066735822122057a4b7f20a23a0b1ae823cd9de3ffaf190312e9dc5b6316f82e6373a559c25e964736f6c63430008130033";
