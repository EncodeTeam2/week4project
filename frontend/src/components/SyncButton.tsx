import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { getBlockNumber_ } from "../service/ethersService";

export function SyncButton() {

  const [blockNumber, setBlockNumber] = useState<number | string>('unknown');

  async function getBlockNumber() {
    try {
      setBlockNumber(await getBlockNumber_());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>The latest block in the network is: { blockNumber } </p>
      <Button variant="success" onClick={() => getBlockNumber()}>
        Get Latest Block
      </Button>
    </div>
  );
}
