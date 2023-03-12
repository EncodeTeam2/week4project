import { RequestContractAddressDTO, RequestHelloWorldDTO, RequestTotalSupplyDTO } from './../dtos/main';
import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import { RequestAllowanceDTO, RequestTokensDTO } from 'src/dtos/main';
import { AppService } from '../services/app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) { }

  @ApiTags('Test API')
  @Get('test')
  @ApiOperation({ summary: 'Check if API is up' })
  getHello(): RequestHelloWorldDTO {
    return this.appService.getHello();
  }

  @ApiTags('Read')
  @Get('contracts-address')
  @ApiOperation({ summary: 'Get contracts addresses' })
  getContractAddress(): RequestContractAddressDTO {
    return this.appService.getContractsAddress();
  }

  @ApiTags('Read')
  @Get('total-supply')
  @ApiOperation({ summary: 'Get token total supply' })
  getTotalSupply(): Promise<RequestTotalSupplyDTO> {
    return this.appService.getTotalSupply();
  }

  @ApiTags('Read')
  @Get('allowance')
  @ApiOperation({ summary: 'Get allowance' })
  getAllowance(
    @Query('from') from: string,
    @Query('to') to: string
  ): Promise<RequestAllowanceDTO> {
    return this.appService.getAllowance(from, to);
  }

  @ApiTags('Read')
  @Get('tx/:hash')
  @ApiOperation({ summary: 'Get transaction' })
  getTransaction(@Param('hash') hash: string): Promise<ethers.providers.TransactionResponse> {
    return this.appService.getTransaction(hash);
  }

  @ApiTags('Read')
  @ApiOperation({ summary: 'Get historical votes' })
  @Get('recent-votes')
  listRecentVotes(): any {
    return this.appService.listRecentVotes();
  }

  /*   @Get('payment-orders')
    listPaymentOrders() {
      return this.appService.listPaymentOrders()
    }
   */

  @ApiTags('Write')
  @ApiOperation({ summary: 'Request voting tokens' })
  @Post("request-tokens")
  claimPaymentOrder(
    @Body() body: RequestTokensDTO
  ) {
    return this.appService.requestVotingTokens(body.amount, body.address);
  }
}