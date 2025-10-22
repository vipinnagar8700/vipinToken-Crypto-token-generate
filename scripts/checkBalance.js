import hre from "hardhat";

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const balance = await hre.ethers.provider.getBalance(deployer.address);

    console.log("==================================");
    console.log("Wallet Address:", deployer.address);
    console.log("Balance:", hre.ethers.formatEther(balance), "ETH");
    console.log("Balance (wei):", balance.toString());
    console.log("==================================");

    const requiredGas = 984532015752512n;
    const requiredEth = hre.ethers.formatEther(requiredGas);
    console.log("Required for deployment:", requiredEth, "ETH");

    if (balance >= requiredGas) {
        console.log("✅ Sufficient balance for deployment");
    } else {
        console.log("❌ Insufficient balance");
        console.log("Need at least:", requiredEth, "ETH");
        console.log("\n💡 Get Sepolia ETH from:");
        console.log("   https://www.alchemy.com/faucets/ethereum-sepolia");
        console.log("   https://faucet.quicknode.com/ethereum/sepolia");
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });