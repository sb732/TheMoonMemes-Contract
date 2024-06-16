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
  const greeter = await Greeter.deploy(1718568000, 1723953600, [
    [
      234375, 468750, 703125, 937500, 1171875, 1406250, 1640625, 1875000,
      2109375, 2343750, 2578125, 2812500, 3046875, 3281250, 3515625, 3750000,
      3984375, 4218750, 4453125, 4687500, 4921875, 5156250, 5390625, 5625000,
      5859375, 6093750, 6328125, 6562500, 6796875, 7031250, 7265625, 7500000,
    ],
    [
      61400000000000, 63000000000000, 64600000000000, 66200000000000,
      67800000000000, 69400000000000, 71000000000000, 72600000000000,
      74200000000000, 75800000000000, 77400000000000, 79000000000000,
      80600000000000, 82200000000000, 83800000000000, 85400000000000,
      87000000000000, 88600000000000, 90200000000000, 91800000000000,
      93400000000000, 95000000000000, 96600000000000, 98200000000000,
      99800000000000, 101400000000000, 103000000000000, 104600000000000,
      106200000000000, 107800000000000, 109400000000000, 111000000000000,
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
