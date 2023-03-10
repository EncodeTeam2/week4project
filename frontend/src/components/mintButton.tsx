import Button from "react-bootstrap/Button";

export function MintButton(props: any) {
  function mintTokens() {
    console.log("Minting tokens");
  }
  return (
    <div>
      <p>Here we will mint some tokens</p>
      <Button variant="primary" onClick={mintTokens}>
        Mint Tokens
      </Button>
    </div>
  );
}
