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
  const greeter = await Greeter.deploy(1719864000, 1738008000, [
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
      1720468800, 1721073600, 1721678400, 1722283200, 1722888000, 1723492800,
      1724097600, 1724702400, 1725307200, 1725912000, 1726516800, 1727121600,
      1727726400, 1728331200, 1728936000, 1729540800, 1730145600, 1730750400,
      1731355200, 1731960000, 1732564800, 1733169600, 1733774400, 1734379200,
      1734984000, 1735588800, 1736193600, 1736798400, 1737403200, 1738008000,
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
