import Button from "react-bootstrap/Button";

export function MintButton(props: any) {

  function mintTokens() {
    console.log("Minting tokens");
    console.log(props.wallet);
  }

  const wallet = props.wallet;
  if (wallet !== undefined && wallet.startsWith("0x")) {
    return (
    <div>
      <p>Now we can mint some tokens</p>
      <Button variant="primary" onClick={mintTokens}>
        Mint Tokens
      </Button>
    </div>
  );
    } else {
      return (
    <div>
      <p>You need to have a Wallet to mint tokens</p>
      <Button variant="primary" onClick={mintTokens}>
        Mint Tokens
      </Button>
    </div>
      );}
}
