/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const {
  PRIVATE_KEY,
  INFURA_ID,
  ETHERSCAN_API_KEY,
  BSCSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
module.exports = {
  defaultNetwork: "binanceTest",
  networks: {
    hardhat: {},
    ethereum: {
      url: "https://mainnet.infura.io/v3/" + INFURA_ID,
      chainId: 1,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    binance: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: "https://ethereum-sepolia.rpc.subquery.network/public/",
      chainId: 11155111,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    binanceTest: {
      url: "https://bsc-testnet-rpc.publicnode.com/",
      chainId: 97,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + INFURA_ID,
      chainId: 3,
      gasPrice: 20000000000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + INFURA_ID,
      chainId: 4,
      gasPrice: 20000000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    matic: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      chainId: 80001,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // apiKey: BSCSCAN_API_KEY,
    // apiKey: POLYGONSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
