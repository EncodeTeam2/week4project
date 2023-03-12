import { ApiProperty } from "@nestjs/swagger"

export class RequestAllowanceDTO {
    allowance: string
}

export class RequestTotalSupplyDTO {
    totalSupply: string
}

export class RequestTokensDTO {
    @ApiProperty()
    address: string
    @ApiProperty()
    amount: number
}

export class RequestContractAddressDTO {
    token: string
    ballot: string
}

export class RequestHelloWorldDTO {
    message: string
}