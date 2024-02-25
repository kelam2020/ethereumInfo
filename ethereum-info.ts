import { ethers } from 'ethers';

// Function to get the last block number of the Ethereum mainnet
async function getLastBlockNumber(): Promise<number> {
  const provider = ethers.getDefaultProvider();
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}

// Function to get the USDT balance of a provided address
async function getUSDTBalance(address: string): Promise<number> {
  const provider = ethers.getDefaultProvider();
  const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  const usdtContractABI = ['function balanceOf(address) view returns (uint256)'];
  const usdtContract = new ethers.Contract(usdtContractAddress, usdtContractABI, provider);
  const balance = await usdtContract.balanceOf(address);
  return balance;
}

// Command-line app logic
async function main() {
  // Get the last block number
  const lastBlockNumber = await getLastBlockNumber();
  console.log('Last block number:', lastBlockNumber);

  // Get the USDT balance of a provided address
  const address = '0x123456789...'; // Replace with the actual address
  const usdtBalance = await getUSDTBalance(address);
  console.log('USDT balance:', usdtBalance);
}

// Run the main function
main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});