/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ProjectsInterface extends utils.Interface {
  functions: {
    "createProject(uint256,string,uint256,uint256,uint256,address)": FunctionFragment;
    "fundProject(uint256)": FunctionFragment;
    "getFunderAmount(address,uint256)": FunctionFragment;
    "getOwnFundingAmount(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "projects(uint256)": FunctionFragment;
    "updateFundingEnd(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createProject"
      | "fundProject"
      | "getFunderAmount"
      | "getOwnFundingAmount"
      | "owner"
      | "projects"
      | "updateFundingEnd"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProject",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fundProject",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFunderAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnFundingAmount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "projects",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFundingEnd",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFunderAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnFundingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFundingEnd",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Projects extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProjectsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createProject(
      _projectID: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      _minTotalFunding: PromiseOrValue<BigNumberish>,
      _maxTotalFunding: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundProject(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOwnFundingAmount(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ] & {
        projectID: BigNumber;
        name: string;
        projectOwner: string;
        targetBlock: BigNumber;
        minTotalFunding: BigNumber;
        maxTotalFunding: BigNumber;
        totalFunded: BigNumber;
        rewardToken: string;
      }
    >;

    updateFundingEnd(
      _projectID: PromiseOrValue<BigNumberish>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createProject(
    _projectID: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _targetBlock: PromiseOrValue<BigNumberish>,
    _minTotalFunding: PromiseOrValue<BigNumberish>,
    _maxTotalFunding: PromiseOrValue<BigNumberish>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundProject(
    _projectID: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFunderAmount(
    funder: PromiseOrValue<string>,
    _projectID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOwnFundingAmount(
    _projectID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  projects(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string
    ] & {
      projectID: BigNumber;
      name: string;
      projectOwner: string;
      targetBlock: BigNumber;
      minTotalFunding: BigNumber;
      maxTotalFunding: BigNumber;
      totalFunded: BigNumber;
      rewardToken: string;
    }
  >;

  updateFundingEnd(
    _projectID: PromiseOrValue<BigNumberish>,
    _targetBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProject(
      _projectID: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      _minTotalFunding: PromiseOrValue<BigNumberish>,
      _maxTotalFunding: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fundProject(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnFundingAmount(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ] & {
        projectID: BigNumber;
        name: string;
        projectOwner: string;
        targetBlock: BigNumber;
        minTotalFunding: BigNumber;
        maxTotalFunding: BigNumber;
        totalFunded: BigNumber;
        rewardToken: string;
      }
    >;

    updateFundingEnd(
      _projectID: PromiseOrValue<BigNumberish>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createProject(
      _projectID: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      _minTotalFunding: PromiseOrValue<BigNumberish>,
      _maxTotalFunding: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundProject(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnFundingAmount(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateFundingEnd(
      _projectID: PromiseOrValue<BigNumberish>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProject(
      _projectID: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      _minTotalFunding: PromiseOrValue<BigNumberish>,
      _maxTotalFunding: PromiseOrValue<BigNumberish>,
      _rewardToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundProject(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFunderAmount(
      funder: PromiseOrValue<string>,
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnFundingAmount(
      _projectID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projects(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateFundingEnd(
      _projectID: PromiseOrValue<BigNumberish>,
      _targetBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}