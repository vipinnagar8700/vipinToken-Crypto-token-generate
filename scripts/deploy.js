import hre from "hardhat";

async function main() {
    console.log("Starting deployment...");

    // Get the deployer's address
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);

    // Get the contract factory
    const CryptoToken = await hre.ethers.getContractFactory("VipinToken");

    // Deploy the contract
    console.log("Deploying CryptoToken...");
    const cryptoToken = await CryptoToken.deploy();

    // Wait for deployment to finish
    await cryptoToken.waitForDeployment();

    const contractAddress = await cryptoToken.getAddress();

    console.log("✅ CryptoToken deployed successfully!");
    console.log("Contract Address:", contractAddress);
    console.log("Deployer Address:", deployer.address);
    console.log("\n🔗 View on Sepolia Etherscan:");
    console.log(`https://sepolia.etherscan.io/address/${contractAddress}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("❌ Deployment failed:", error);
        process.exit(1);
    });