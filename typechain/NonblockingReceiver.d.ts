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

interface NonblockingReceiverInterface extends ethers.utils.Interface {
  functions: {
    "failedMessages(uint16,bytes,uint256)": FunctionFragment;
    "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
    "onLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
    "setTrustedRemote(uint16,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustedRemoteLookup(uint16)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "failedMessages",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onLzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retryMessage",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedRemote",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedRemoteLookup",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "failedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onLzReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedRemoteLookup",
    data: BytesLike
  ): Result;

  events: {
    "MessageFailed(uint16,bytes,uint64,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class NonblockingReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NonblockingReceiverInterface;

  functions: {
    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      payloadLength: BigNumber;
      payloadHash: string;
      0: BigNumber;
      1: string;
    }>;

    "failedMessages(uint16,bytes,uint256)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      payloadLength: BigNumber;
      payloadHash: string;
      0: BigNumber;
      1: string;
    }>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onLzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "retryMessage(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    setTrustedRemote(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTrustedRemote(uint16,bytes)"(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "trustedRemoteLookup(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  failedMessages(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    payloadLength: BigNumber;
    payloadHash: string;
    0: BigNumber;
    1: string;
  }>;

  "failedMessages(uint16,bytes,uint256)"(
    arg0: BigNumberish,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    payloadLength: BigNumber;
    payloadHash: string;
    0: BigNumber;
    1: string;
  }>;

  lzReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lzReceive(uint16,bytes,uint64,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onLzReceive(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onLzReceive(uint16,bytes,uint64,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  retryMessage(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "retryMessage(uint16,bytes,uint64,bytes)"(
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  setTrustedRemote(
    _chainId: BigNumberish,
    _trustedRemote: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTrustedRemote(uint16,bytes)"(
    _chainId: BigNumberish,
    _trustedRemote: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  trustedRemoteLookup(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "trustedRemoteLookup(uint16)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      payloadLength: BigNumber;
      payloadHash: string;
      0: BigNumber;
      1: string;
    }>;

    "failedMessages(uint16,bytes,uint256)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      payloadLength: BigNumber;
      payloadHash: string;
      0: BigNumber;
      1: string;
    }>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "lzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    onLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "onLzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "retryMessage(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedRemote(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTrustedRemote(uint16,bytes)"(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "trustedRemoteLookup(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    MessageFailed(
      _srcChainId: null,
      _srcAddress: null,
      _nonce: null,
      _payload: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "failedMessages(uint16,bytes,uint256)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onLzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "retryMessage(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    setTrustedRemote(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTrustedRemote(uint16,bytes)"(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "trustedRemoteLookup(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    failedMessages(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "failedMessages(uint16,bytes,uint256)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onLzReceive(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onLzReceive(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    retryMessage(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "retryMessage(uint16,bytes,uint64,bytes)"(
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    setTrustedRemote(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTrustedRemote(uint16,bytes)"(
      _chainId: BigNumberish,
      _trustedRemote: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    trustedRemoteLookup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "trustedRemoteLookup(uint16)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
