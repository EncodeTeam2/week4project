import React from "react";
import Button from "react-bootstrap/Button";

export function VotingPowerButton(props: any) {
  function getVotingPower() {
    console.log("Getting voting power");
  }

  return (
    <div>
      <p>Your Voting Power is: </p>
      <Button variant="primary" onClick={getVotingPower}>
        Get Voting Power
      </Button>
    </div>
  );
}
