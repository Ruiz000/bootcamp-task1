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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ILayerZeroReceiverInterface extends ethers.utils.Interface {
  functions: {
    "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;

  events: {};
}

export class ILayerZeroReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILayerZeroReceiverInterface;

  functions: {
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
  };

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

  callStatic: {
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
  };

  filters: {};

  estimateGas: {
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
  };

  populateTransaction: {
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
  };
}
