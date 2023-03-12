import React from "react";
import Button from "react-bootstrap/Button";
import { getProposals_} from "../service/ethersService";

export function VotingPowerButton(props: any) {
  function getVotingPower() {
    console.log("Getting voting power");
    getProposals_();
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
