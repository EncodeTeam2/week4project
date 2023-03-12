import { ethers, Wallet } from "ethers";
import { json } from "stream/consumers";
import tokenBallotJson from "../assets/TokenizedBallot.json";

const NETWORK = "goerli";
const TOKENIZED_BALLOT_ADDRESS = "0x19dC6F5817243233fcdD10F39049a391EEbbBb7d";
const TOKENIZED_BALLOT_ABI = tokenBallotJson.abi;
declare let window: any;

const handleError = (error: any) => {
  console.error(error.message);
};

// Set the provider for the given network
const _getNetwork = (): any => {
  try {
    return ethers.providers.getDefaultProvider(NETWORK);
  } catch (error) {
    return handleError(error);
  }
};

/**
 * Get latest block number from network
 * @returns block number
*/
export const getBlockNumber_ = async (): Promise<any> => {
  // TODO: make api call to server to get block number
  try {
    return await _getNetwork().getBlockNumber();
  } catch (error) {
    return handleError(error);
  }
};


const getClientProvider = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  console.log(provider);
  return provider;
}
/**
 * Get wallet from window
 * if no wallet from window then
 * create a random wallet and show public key
 * if no wallet from a window for now just log no please connect to wallet
 * @returns address of connected wallet
*/
export const getWallet_ = async () => {
  try { 
    const provider = getClientProvider();
    

    // Check for phantom wallet
    const isPhantomInstalled = window?.ethereum?.isPhantom;
    if (!isPhantomInstalled) {
      console.log("Please install Phantom wallet. Its just better");
      return;
    }

    // Get the accounts from the wallet which should only be 1 but depends on wallet
    // get the address from the account and return it
    await provider.send("eth_requestAccounts", []);
    const address = await provider.getSigner().getAddress()
    console.log(address);
    return address;
  } catch (error: any) { 
      console.log("Please connect to Wallet.");
  }
}

/**
 * Creates a random wallet for user
 * @returns random wallet address
 */
export const createRandomWallet_ = () => {
    const wallet = Wallet.createRandom();
    return wallet.address;
}

const ballotFactory = () => {
  const tokenizedBallotContact = new ethers.Contract(TOKENIZED_BALLOT_ADDRESS, TOKENIZED_BALLOT_ABI , getClientProvider());
  return tokenizedBallotContact;
}

export const mintTokens_ = async (amount: number, wallet: string) => {
  fetch("http://localhost:3000/request-tokens", {
    method: "POST",
    body: JSON.stringify({
      amount: amount,
      address: wallet
  }),
}).then((res) => {
  console.log(res);
});


}


export { Wallet };
