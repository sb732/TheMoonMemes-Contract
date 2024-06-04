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
  const Greeter = await hre.ethers.getContractFactory("BSCTMMPreSale");
  const greeter = await Greeter.deploy(1718424000, 1723953600, [
    [
      468750000, 937500000, 1406250000, 1875000000, 2343750000, 2812500000,
      3281250000, 3750000000, 4218750000, 4687500000, 5156250000, 5625000000,
      6093750000, 6562500000, 7031250000, 7500000000, 7968750000, 8437500000,
      8906250000, 9375000000, 9843750000, 10312500000, 10781250000, 11250000000,
      11718750000, 12187500000, 12656250000, 13125000000, 13593750000,
      14062500000, 14531250000, 15000000000,
    ],
    [
      614000000000000, 630000000000000, 646000000000000, 662000000000000,
      678000000000000, 694000000000000, 710000000000000, 726000000000000,
      742000000000000, 758000000000000, 774000000000000, 790000000000000,
      806000000000000, 822000000000000, 838000000000000, 854000000000000,
      870000000000000, 886000000000000, 902000000000000, 918000000000000,
      934000000000000, 950000000000000, 966000000000000, 982000000000000,
      998000000000000, 1014000000000000, 1030000000000000, 1046000000000000,
      1062000000000000, 1078000000000000, 1094000000000000, 1110000000000000,
    ],
    [
      1718596800, 1718769600, 1718942400, 1719115200, 1719288000, 1719460800,
      1719633600, 1719806400, 1719979200, 1720152000, 1720324800, 1720497600,
      1720670400, 1720843200, 1721016000, 1721188800, 1721361600, 1721534400,
      1721707200, 1721880000, 1722052800, 1722225600, 1722398400, 1722571200,
      1722744000, 1722916800, 1723089600, 1723262400, 1723435200, 1723608000,
      1723780800, 1723953600,
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
