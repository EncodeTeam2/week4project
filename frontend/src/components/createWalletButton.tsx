import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { getWallet_, createRandomWallet_ } from "../service/ethersService";

export function CreateWalletButton() {
  const [wallet, setWallet] = useState<any>("unknown");

  async function getWallet() {
    setWallet(await getWallet_());
  }

  function createWallet() {
    setWallet(createRandomWallet_());
  }

  return (
    <>
      <div>
        <p>The wallet is we will use is: {wallet}</p>
      </div>
      <div>
        <Button variant="success" size="lg" onClick={() => getWallet()}>
          Connect Wallet
        </Button>
        <Button variant="success" size="lg" onClick={() => createWallet()}>
          Create Wallet
        </Button>
      </div>
    </>
  );
}
