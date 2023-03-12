import React, { useState } from "react";
import "./App.css";
import { CreateWalletButton } from "./components/createWalletButton";
import { MintButton } from "./components/mintButton";
import { SyncButton } from "./components/SyncButton";
import { VotingPowerButton } from "./components/votingPowerButton";
import { getBlockNumber_, createRandomWallet_, getWallet_, mintTokens_ } from "./service/ethersService";

function App() {

  const [blockNumber, setBlockNumber] = useState<number | string>("unknown");

  async function getBlockNumber() {
    try {
      setBlockNumber(await getBlockNumber_());
    } catch (error) {
      console.log(error);
    }
  }

  const [wallet, setWallet] = useState<any>("unknown");

  async function getWallet() {
    setWallet(await getWallet_());
  }

  function createWallet() {
    setWallet(createRandomWallet_());
  }

  async function mintTokens(amount: number, address = wallet) {
    mintTokens_(amount, address)    
  }

  return (
    <div className="App">
      <header className="App-header">
        Tokenized Voting Ballot
      </header>
      {/* Sync with network and get the latest block */}
      <div>
        <SyncButton blockNumber={blockNumber} getBlockNumber={getBlockNumber} />
      </div>
      {/* Create a wallet */}
      <div>
        <CreateWalletButton wallet={wallet} getWallet={getWallet} createWallet={createWallet} />
      </div>
      {/* Mint Tokens from the contract */}
      <div>
        <MintButton wallet={wallet} mintTokens={mintTokens}/>
      </div>
      {/* See the voting power for a wallet  */}
      <div>
        <VotingPowerButton wallet={wallet}/>
      </div>
      {/* Getting a list of proposals  */}
      <div>
        <VotingPowerButton/>
      </div>
    </div>
  );
}

export default App;
