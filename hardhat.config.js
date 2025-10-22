import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
// console.log("SEPOLIA_URL:", process.env.SEPOLIA_URL);
// console.log("ETHERSCAN_API_KEY:", process.env.ETHERSCAN_API_KEY);
// console.log("PRIVATE_KEY:", process.env.PRIVATE_KEY);

export default {
    solidity: "0.8.20",
    networks: {
        sepolia: {
            url: process.env.SEPOLIA_URL || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY || "",
    },
};
