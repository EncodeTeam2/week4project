import React from 'react';
import Button from "react-bootstrap/Button";


export function SyncButton(props: any) {
    function getBlockInformation() {
        console.log('Getting block information');
    }

  return (
    <div>
      <p>The latest block in the network is: x </p>
      <Button variant="success" onClick={getBlockInformation}>
        Get Latest Block
      </Button>
    </div>
  );
}
