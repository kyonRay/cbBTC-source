# FiatTokenV1 Deployment

This repository contains the code for deploying the FiatTokenV1 contract, which is an ERC20 token backed by fiat reserves.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on the `.env.example` file and fill in your private key and RPC URLs:
```bash
cp .env.example .env
```

## Deployment

### Local Deployment

To deploy the FiatTokenV1 contract to a local Hardhat network:

1. Start a local Hardhat node:
```bash
npx hardhat node
```

2. In a new terminal, deploy the contract:
```bash
npx hardhat run scripts/deploy-fiat-token-v1.ts --network localhost
```

### Testnet/Mainnet Deployment

To deploy to a testnet or mainnet:

1. Make sure your `.env` file is properly configured with your private key and RPC URLs.

2. Deploy to the desired network:
```bash
# Deploy to Sepolia testnet
npx hardhat run scripts/deploy-fiat-token-v1.ts --network sepolia

# Deploy to Goerli testnet
npx hardhat run scripts/deploy-fiat-token-v1.ts --network goerli

# Deploy to Mainnet (be careful!)
npx hardhat run scripts/deploy-fiat-token-v1.ts --network mainnet
```

## Contract Verification

After deployment, you can verify the contract on Etherscan:

```bash
npx hardhat verify --network <network-name> <contract-address>
```

Note: FiatTokenV1 doesn't have constructor arguments, but it uses an initialize function after deployment.

## Contract Details

The FiatTokenV1 contract is an ERC20 token with the following features:
- Pausable: The contract can be paused by the pauser
- Blacklistable: Addresses can be blacklisted by the blacklister
- Ownable: The contract has an owner who can transfer ownership
- Mintable: New tokens can be minted by authorized minters

The contract is initialized with the following parameters:
- Token Name: The name of the token (e.g., "USD Coin")
- Token Symbol: The symbol of the token (e.g., "USDC")
- Token Currency: The currency the token represents (e.g., "USD")
- Token Decimals: The number of decimals for the token (e.g., 6)
- Master Minter: The address that can add and remove minters
- Pauser: The address that can pause and unpause the contract
- Blacklister: The address that can blacklist addresses
- Owner: The owner of the contract
