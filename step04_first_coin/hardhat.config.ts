import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import * as dotenv from "dotenv";
dotenv.config();



// Go to https://infura.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const INFURA_API_KEY = `https://rinkeby.infura.io/v3/${process.env.INFURA_API}`;



// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = `0x${process.env.PRIVATE_KEY}`;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url:INFURA_API_KEY,
      accounts:[RINKEBY_PRIVATE_KEY],
    },
  },
};
