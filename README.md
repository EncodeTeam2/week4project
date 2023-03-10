# Fullstack Voting dApp

Creating a Fullstack Voting dApp application that has three layers:

## 1. Smart contract

- 🪙 [ERC20 Voting Token](https://goerli.etherscan.io/address/0x6B2fD61e9e6fb99fB7B5Ca7683BBd13ABa313AB5): Represents the voting power and its movements.
- 🗳️ [Ballot](https://goerli.etherscan.io/address/0x903E37a10aC136Ad12fb527067389ddD0e614Bd4): Represents a Ballot where you can use your voting power up to certain block.

## 2. Backend

Provides multiple endpoints:

- Request contract address
- Request total supply
- Request allowance
- Request transaction by hash
- Request voting tokens
- List recent votes

Go to [Backend README](https://github.com/EncodeTeam2/week4project/blob/main/backend/README.md) for more information

## 3. Frontend

Currently, the frontend is a simple web page that allows you to:

- See the current block number
- Create a random wallet
- Mint Tokens for a hardcoded wallet based on the amount in the field
  - Also self delegates the tokens after the minting
- Vote for a hardcoded proposal
- And get the winning proposal name

This will be updated in the future to make use of different browser wallets and not have hardcoded values.

Go to [Frontend README](https://github.com/EncodeTeam2/week4project/blob/main/frontend/README.md) for more information
