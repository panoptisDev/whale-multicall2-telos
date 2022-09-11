const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = [
  "" //REPLACE with your deployment private key
];
 
module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "", //Replace with your etherscan key for verification
  },
  networks: {
    
development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

mainnet: {
      provider: () =>
        new HDWalletProvider(        "a",
          `https://smartbch.greyh.at` //Replace it with the network RPC provider
        ),
      network_id: 10000, // Update the Chain ID
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

kovan: {
      provider: () =>
        new HDWalletProvider("a",
          `https://kovan.infura.io/v3/55d06c96bc8e4d1b80b4099c6bd1819c` //Replace it with the network RPC provider
        ),
      network_id: 42, // Update the Chain ID
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

bsc: {
      provider: () =>
        new HDWalletProvider(        "a",
          `wss://bsc-ws-node.nariox.org:443` //Replace it with the network RPC provider
        ),
      network_id: 56, // Update the Chain ID
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

telostestnet: {
      provider: () =>
        new HDWalletProvider("",
          `https://testnet.telos.net/evm` //Replace it with the network RPC provider
        ),
      network_id: 41, // Update the Chain ID
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.16",  
       optimizer: {
        enabled: true,
        runs: 500,
      },
     },
  },
  db: {
    enabled: false,
  },
};
