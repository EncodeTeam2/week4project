import { VoteEvent } from './../models/main';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Injectable, Get, HttpException, HttpStatus } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import * as tokenJson from '../assets/VotingERC20Token.json';
import * as ballotJson from '../assets/TokenizedBallot.json';
import { ConfigureProvider, ConfigureWallet } from '../helpers/utils';
import { RequestAllowanceDTO, RequestContractAddressDTO, RequestHelloWorldDTO, RequestTotalSupplyDTO } from 'src/dtos/main';

@Injectable()
export class AppService {

  provider: ethers.providers.BaseProvider;
  tokenContract: ethers.Contract;
  network: string;
  privateKey: string;
  tokenAddress: string;
  ballotAddress: string;
  ballotContract: ethers.Contract;

  constructor(private configService: ConfigService) {
    // Put general things inside here to access from the diffrent funcs.
    this.tokenAddress = this.configService.getOrThrow('CONTRACT_TOKEN')
    this.ballotAddress = this.configService.getOrThrow('CONTRACT_BALLOT')
    this.network = this.configService.getOrThrow('NETWORK')
    this.privateKey = this.configService.getOrThrow('PRIVATE_KEY');
    this.provider = ConfigureProvider(this.network)
    this.tokenContract = new ethers.Contract(this.tokenAddress, tokenJson.abi, this.provider);
    this.ballotContract = new ethers.Contract(this.ballotAddress, ballotJson.abi, this.provider);
  }

  getHello(): RequestHelloWorldDTO {
    return { message: 'Hello World!!' };
  }

  async listRecentVotes(): Promise<VoteEvent[]> {
    const blockSnap: BigNumber = await this.ballotContract.blockId();
    const events = await this.ballotContract.queryFilter("*", blockSnap.toNumber(), "latest");
    let eventsArr: VoteEvent[] = [];

    events.forEach((event) => {
      const voter: string = event.args?.at(0)
      const proposal: BigNumber = event.args?.at(1)
      const amount: BigNumber = event.args?.at(2)

      const formattedProposal: string = "Proposal #".concat(proposal.add(1).toString())

      eventsArr.push(new VoteEvent(event.transactionHash, voter, formattedProposal, amount.toString()));
    })

    return eventsArr
  }

  getContractsAddress(): RequestContractAddressDTO {
    return {
      token: this.configService.getOrThrow('CONTRACT_TOKEN'),
      ballot: this.configService.getOrThrow('CONTRACT_BALLOT')
    }
  }

  async getTotalSupply(): Promise<RequestTotalSupplyDTO> {
    const totalSupplyBN = await this.tokenContract.totalSupply();
    // Return string formatted as ether.
    return { totalSupply: ethers.utils.formatEther(totalSupplyBN) }
  }

  async getAllowance(from: string, to: string): Promise<RequestAllowanceDTO> {
    const allowanceBn = await this.tokenContract.allowance(from, to);
    return { allowance: ethers.utils.formatEther(allowanceBn) };
  }

  getTransaction(hash: string): Promise<ethers.providers.TransactionResponse> {
    return this.provider.getTransaction(hash);
  }

  async requestVotingTokens(value: number, address: string) {
    //create signer
    const signer = ConfigureWallet(this.network, this.privateKey)

    // connect signer to contract
    const contract = new ethers.Contract(this.tokenAddress, tokenJson.abi, signer);

    // Parse number to eth.
    const numberToBN = ethers.utils.parseEther(value.toString())

    // mint value to address
    const allowanceBnTx = await contract.mint(address, numberToBN);
    const txReceipt = await allowanceBnTx.wait()

    return txReceipt
  }

}
