import type {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get private key from environment variables or use a default one for development
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x2f707bf1e5c5fa6b66238754697f1ed46e1b2ce4c870119bf0e9900dc99f8dea";

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.26",
        settings: {
            //evmVersion: "cancun",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        hardhat: {
            chainId: 1337, // Default Hardhat network chain ID
            accounts: [
                {
                    privateKey: PRIVATE_KEY,
                    balance: "1000000000000000000000" // 1000 ETH in wei
                }
            ]
        },
        // Local development network
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        potos_testnet: {
            url: "https://rpc-testnet.potos.hk",
            chainId: 60600, // Potos Testnet chain ID
            accounts: [PRIVATE_KEY], // Use the private key for this network
        },
        sepolia: {
            url: "https://sepolia.infura.io/v3/c053595c07684da89696032c15f56b3b", // Replace with your Infura project ID
            chainId: 11155111, // Sepolia chain ID
            accounts: [PRIVATE_KEY], // Use the private key for this network
            gas: 30000000, // Set a higher gas limit for Sepolia
        }
    },
};

export default config;
