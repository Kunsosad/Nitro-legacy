export const NITRO_CONTRACT_ADDRESS = (import.meta.env.VITE_NITRO_CONTRACT_ADDRESS ?? '').trim();

export const SUPPORTED_NETWORKS: Record<number, string> = {
  1: 'Ethereum Mainnet',
  5: 'Goerli Testnet',
  11155111: 'Sepolia Testnet',
  8453: 'Base Mainnet',
  84532: 'Base Sepolia'
};