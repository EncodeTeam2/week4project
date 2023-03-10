import React from "react";
import Button from "react-bootstrap/Button";

export function CreateWalletButton(props: any) {
  function createWallet() {
    // TODO: get Wallet from user, if not wallet create one
    console.log("Creating wallet");
  }

  return (
    <>
      <p>Getting a wallet</p>
      <Button variant="success" size="lg" onClick={createWallet}>
        Create Wallet
      </Button>
    </>
  );
}
