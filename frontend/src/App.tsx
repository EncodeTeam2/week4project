import React, { useMemo } from "react";
import "./App.css";
import { CreateWalletButton } from "./components/createWalletButton";
import { MintButton } from "./components/mintButton";
import { SyncButton } from "./components/SyncButton";
import { VotingPowerButton } from "./components/votingPowerButton";
import { ethers } from "ethers";


function App() {

  return (
    <div className="App">
      <header className="App-header">Tokenized Voting Ballot</header>
      {/* Sync with network and get the latest block */}
      <div>
        <SyncButton/>
      </div>
      {/* Create a wallet */}
      <div>
        <CreateWalletButton />
      </div>
      {/* Mint Tokens from the contract */}
      <div>
        <MintButton />
      </div>
      {/* See the voting power for a wallet  */}
      <div>
        <VotingPowerButton />
      </div>
    </div>
  );
}

export default App;
