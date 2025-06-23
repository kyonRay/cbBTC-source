import {ethers} from "hardhat";

async function main() {
    console.log("Deploying FiatTokenV1 contract...");

    // Get the wallet client for deployment

    const [deployer] = await ethers.getSigners();

    // Deploy the contract
    // const fiatTokenV1 = await ethers.deployContract("FiatTokenV1");
    const FiatTokenV1 = await ethers.getContractFactory("FiatTokenV1");
    const token = FiatTokenV1.attach("0x2a5Fa5a4DC255B2025FdcfD55892E394698245bB");
    // await token.configureMinter(deployer.address, 1000000000n * 10n ** 8n, {gasLimit: 2_000_000});
    // await token.mint(deployer.address, 1000000000n * 10n ** 8n, {gasLimit: 2_000_000});
    // console.log("FiatTokenV1 deployed to:", await fiatTokenV1.getAddress());

    const balance = await token.balanceOf(deployer.address);
    console.log("Deployer address:", deployer.address);
    console.log("Deployer balance:", ethers.formatUnits(balance, 8), "cbBTC");
    // Get the contract instance

    // Initialize the contract
    // You should replace these parameters with your desired values
    const tokenName = "Coinbase Wrapped BTC";
    const tokenSymbol = "cbBTC";
    const tokenCurrency = "";
    const tokenDecimals = 8;

    console.log("Initializing FiatTokenV1...");

    // Call the initialize function
    // const tx = await fiatTokenV1.initialize(
    //     tokenName,
    //     tokenSymbol,
    //     tokenCurrency,
    //     tokenDecimals,
    //     deployer.address,
    //     deployer.address,
    //     deployer.address,
    //     deployer.address,
    //     { gasLimit: 2_000_000 }
    // );
    // const r = await tx.wait();
    // console.log(r);
    console.log("FiatTokenV1 initialized successfully!");
    console.log("Token Name:", tokenName);
    console.log("Token Symbol:", tokenSymbol);
    console.log("Token Currency:", tokenCurrency);
    console.log("Token Decimals:", tokenDecimals);
    console.log("Master Minter:", deployer.address);
    console.log("Pauser:", deployer.address);
    console.log("Blacklister:", deployer.address);
    console.log("Owner:", deployer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
