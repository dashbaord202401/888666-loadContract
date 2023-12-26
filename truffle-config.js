require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

const { INFURA_ENDPOINT, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_ENDPOINT),
      network_id: '11155111',
      from: '0x2F506eaaFfe39edD456cA74F13c74D6d80768Eb0', 
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",
    }
  }
};
