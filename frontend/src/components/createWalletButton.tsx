import React from "react";
import Button from "react-bootstrap/Button";

export function CreateWalletButton(props: any) {
  return (
    <>
      <div>
        <p>The wallet is we will use is: { props.wallet }</p>
      </div>
      <div>
        <Button variant="success" size="lg" onClick={() => props.getWallet()}>
          Connect Wallet
        </Button>
        <Button variant="success" size="lg" onClick={() => props.createWallet()}>
          Create Wallet
        </Button>
      </div>
    </>
  );
}
