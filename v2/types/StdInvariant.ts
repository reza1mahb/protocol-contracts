/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace StdInvariant {
  export type FuzzSelectorStruct = {
    addr: AddressLike;
    selectors: BytesLike[];
  };

  export type FuzzSelectorStructOutput = [addr: string, selectors: string[]] & {
    addr: string;
    selectors: string[];
  };

  export type FuzzArtifactSelectorStruct = {
    artifact: string;
    selectors: BytesLike[];
  };

  export type FuzzArtifactSelectorStructOutput = [
    artifact: string,
    selectors: string[]
  ] & { artifact: string; selectors: string[] };

  export type FuzzInterfaceStruct = { addr: AddressLike; artifacts: string[] };

  export type FuzzInterfaceStructOutput = [
    addr: string,
    artifacts: string[]
  ] & { addr: string; artifacts: string[] };
}

export interface StdInvariantInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "excludeArtifacts"
      | "excludeContracts"
      | "excludeSelectors"
      | "excludeSenders"
      | "targetArtifactSelectors"
      | "targetArtifacts"
      | "targetContracts"
      | "targetInterfaces"
      | "targetSelectors"
      | "targetSenders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "excludeArtifacts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "excludeSenders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetArtifactSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetArtifacts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetInterfaces",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetSelectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetSenders",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "excludeArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "excludeSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetArtifactSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetArtifacts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetSenders",
    data: BytesLike
  ): Result;
}

export interface StdInvariant extends BaseContract {
  connect(runner?: ContractRunner | null): StdInvariant;
  waitForDeployment(): Promise<this>;

  interface: StdInvariantInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  excludeArtifacts: TypedContractMethod<[], [string[]], "view">;

  excludeContracts: TypedContractMethod<[], [string[]], "view">;

  excludeSelectors: TypedContractMethod<
    [],
    [StdInvariant.FuzzSelectorStructOutput[]],
    "view"
  >;

  excludeSenders: TypedContractMethod<[], [string[]], "view">;

  targetArtifactSelectors: TypedContractMethod<
    [],
    [StdInvariant.FuzzArtifactSelectorStructOutput[]],
    "view"
  >;

  targetArtifacts: TypedContractMethod<[], [string[]], "view">;

  targetContracts: TypedContractMethod<[], [string[]], "view">;

  targetInterfaces: TypedContractMethod<
    [],
    [StdInvariant.FuzzInterfaceStructOutput[]],
    "view"
  >;

  targetSelectors: TypedContractMethod<
    [],
    [StdInvariant.FuzzSelectorStructOutput[]],
    "view"
  >;

  targetSenders: TypedContractMethod<[], [string[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "excludeArtifacts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "excludeContracts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "excludeSelectors"
  ): TypedContractMethod<[], [StdInvariant.FuzzSelectorStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "excludeSenders"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "targetArtifactSelectors"
  ): TypedContractMethod<
    [],
    [StdInvariant.FuzzArtifactSelectorStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "targetArtifacts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "targetContracts"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "targetInterfaces"
  ): TypedContractMethod<
    [],
    [StdInvariant.FuzzInterfaceStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "targetSelectors"
  ): TypedContractMethod<[], [StdInvariant.FuzzSelectorStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "targetSenders"
  ): TypedContractMethod<[], [string[]], "view">;

  filters: {};
}