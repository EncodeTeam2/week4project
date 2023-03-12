export class VoteEvent {
    txHash: string
    voter: string
    proposal: string
    amount: string

    constructor(txHash: string, voter: string, proposal: string, amount: string) {
        this.txHash = txHash
        this.voter = voter
        this.proposal = proposal
        this.amount = amount
    }
}
