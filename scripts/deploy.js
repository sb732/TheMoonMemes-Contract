// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // NFT_Liquidity
  // const Greeter = await hre.ethers.getContractFactory("NFTLiquidity");
  // const greeter = await Greeter.deploy("0xb2F3fB37F8D78d8a5E2e968ea598B3cBf9B4aF75", 10, 50);

  // NFT_Mint
  const Greeter = await hre.ethers.getContractFactory("ETHTMMPreSale");
  const greeter = await Greeter.deploy(1718906400, 1732507200, [
    [
      250000000, 500000000, 750000000, 1000000000, 1250000000, 1500000000,
      1750000000, 2000000000, 2250000000, 2500000000, 2750000000, 3000000000,
      3250000000, 3500000000, 3750000000, 4000000000, 4250000000, 4500000000,
      4750000000, 5000000000, 5250000000, 5500000000, 5750000000, 6000000000,
      6250000000, 6500000000, 6750000000, 7000000000, 7250000000, 7500000000,
    ],
    [
      600000000000000, 620000000000000, 640000000000000, 660000000000000,
      680000000000000, 700000000000000, 720000000000000, 740000000000000,
      760000000000000, 780000000000000, 800000000000000, 820000000000000,
      840000000000000, 860000000000000, 880000000000000, 900000000000000,
      920000000000000, 940000000000000, 960000000000000, 980000000000000,
      1000000000000000, 1020000000000000, 1040000000000000, 1060000000000000,
      1080000000000000, 1100000000000000, 1120000000000000, 1140000000000000,
      1160000000000000, 1180000000000000,
    ],
    [
      1722484800, 1722830400, 1723176000, 1723521600, 1723867200, 1724212800,
      1724558400, 1724904000, 1725249600, 1725595200, 1725940800, 1726286400,
      1726632000, 1726977600, 1727323200, 1727668800, 1728014400, 1728360000,
      1728705600, 1729051200, 1729396800, 1729742400, 1730088000, 1730433600,
      1730779200, 1731124800, 1731470400, 1731816000, 1732161600, 1732507200,
    ],
  ]);

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
