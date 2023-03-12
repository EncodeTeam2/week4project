import Button from "react-bootstrap/Button";

export function MintButton(props: any) {


  const wallet = props.wallet;
  if (wallet !== undefined && wallet.startsWith("0x")) {
    return (
    <div>
      <p>Now we can mint some tokens</p>
      <Button variant="primary" onClick={() => props.mintTokens(2)}>
        Mint Tokens
      </Button>
    </div>
  );
    } else {
      return (
        <div>
          <p>You need to have a Wallet to mint tokens</p>
          <Button variant="danger">Mint Tokens</Button>
        </div>
      );}
}
