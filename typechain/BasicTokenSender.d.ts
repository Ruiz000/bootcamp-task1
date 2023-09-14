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

interface BasicTokenSenderInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "getNativeFee(uint64,address,address,uint256)": FunctionFragment;
    "getSupportedTokens(uint64)": FunctionFragment;
    "owner()": FunctionFragment;
    "send(uint64,address,tuple[])": FunctionFragment;
    "sendToken(uint64,address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawToken(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeFee",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [BigNumberish, string, { token: string; amount: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "sendToken",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes32)": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class BasicTokenSender extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BasicTokenSenderInterface;

  functions: {
    acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    getNativeFee(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getNativeFee(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getSupportedTokens(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokens: string[];
      0: string[];
    }>;

    "getSupportedTokens(uint64)"(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokens: string[];
      0: string[];
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    send(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "send(uint64,address,tuple[])"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendToken(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sendToken(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      beneficiary: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address)"(
      beneficiary: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawToken(
      beneficiary: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawToken(address,address)"(
      beneficiary: string,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  getNativeFee(
    destinationChainSelector: BigNumberish,
    receiver: string,
    token: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getNativeFee(uint64,address,address,uint256)"(
    destinationChainSelector: BigNumberish,
    receiver: string,
    token: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupportedTokens(
    chainSelector: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "getSupportedTokens(uint64)"(
    chainSelector: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  send(
    destinationChainSelector: BigNumberish,
    receiver: string,
    tokensToSendDetails: { token: string; amount: BigNumberish }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "send(uint64,address,tuple[])"(
    destinationChainSelector: BigNumberish,
    receiver: string,
    tokensToSendDetails: { token: string; amount: BigNumberish }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendToken(
    destinationChainSelector: BigNumberish,
    receiver: string,
    token: string,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sendToken(uint64,address,address,uint256)"(
    destinationChainSelector: BigNumberish,
    receiver: string,
    token: string,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    beneficiary: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address)"(
    beneficiary: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawToken(
    beneficiary: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawToken(address,address)"(
    beneficiary: string,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    getNativeFee(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNativeFee(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupportedTokens(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "getSupportedTokens(uint64)"(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    send(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: BigNumber;
    }>;

    "send(uint64,address,tuple[])"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<{
      0: string;
      1: BigNumber;
    }>;

    sendToken(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendToken(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(to: string, overrides?: CallOverrides): Promise<void>;

    "transferOwnership(address)"(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    "withdraw(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      beneficiary: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawToken(address,address)"(
      beneficiary: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    MessageSent(messageId: null): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides): Promise<BigNumber>;

    "acceptOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    getNativeFee(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNativeFee(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupportedTokens(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSupportedTokens(uint64)"(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    send(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "send(uint64,address,tuple[])"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendToken(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sendToken(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    transferOwnership(to: string, overrides?: Overrides): Promise<BigNumber>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(beneficiary: string, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(address)"(
      beneficiary: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawToken(
      beneficiary: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawToken(address,address)"(
      beneficiary: string,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getNativeFee(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNativeFee(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupportedTokens(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSupportedTokens(uint64)"(
      chainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    send(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "send(uint64,address,tuple[])"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      tokensToSendDetails: { token: string; amount: BigNumberish }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendToken(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sendToken(uint64,address,address,uint256)"(
      destinationChainSelector: BigNumberish,
      receiver: string,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      beneficiary: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address)"(
      beneficiary: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      beneficiary: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawToken(address,address)"(
      beneficiary: string,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
