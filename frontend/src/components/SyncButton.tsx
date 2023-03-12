import React from "react";
import Button from "react-bootstrap/Button";

export function SyncButton(props: any) {

  return (
    <div>
      <p>The latest block in the network is: { props.blockNumber } </p>
      <Button variant="success" onClick={() => props.getBlockNumber()}>
        Get Latest Block
      </Button>
    </div>
  );
}
