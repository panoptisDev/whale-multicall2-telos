const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {

networks: {

  development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    bscTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc-mainnet.matic.network`),
      network_id: 137,
      confirmations: 3,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    polygonTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc.ankr.com/polygon_mumbai`), //if fail change RPC
      network_id: 80001,
      confirmations: 4,
      timeoutBlocks: 9000,
      skipDryRun: true
    },
    telos: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.telos.net/evm`),
      network_id: 40,
      confirmations: 2,
      gasPrice: 5100000000000,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    telosTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://testnet.telos.net/evm`),
      network_id: 41,
      confirmations: 2,
      gasPrice: 504374890480,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc.ankr.com/eth_rinkeby`),
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    pulse: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc.v4.testnet.pulsechain.com`),
      network_id: 943,
      confirmations: 3,
      timeoutBlocks: 20000,
      skipDryRun: true
    },
    linea: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc.goerli.linea.build`),
      network_id: 59140,
      confirmations: 5,
      timeoutBlocks: 200000,
      skipDryRun: true
    },
    goerli: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc.ankr.com/eth_goerli`),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    zksynk: { //mainnet
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.era.zksync.io`),
      network_id: 324,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    scroll: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://alpha-rpc.scroll.io/l2`),
      network_id: 534353,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'IEZC4N53PVJD9TVHV2KZDSVVKRM5D46PJZ',
    bscscan: process.env.BSCSCAN_API_KEY,
    polygonscan: process.env.POLYGONSCAN_API_KEY,
    hecoinfo: '',
    ftmscan: '',
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      //https://forum.openzeppelin.com/t/how-to-deploy-uniswapv2-on-ganache/3885
      version: "0.8.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 999
      },
      //evmVersion: "istanbul", 
      outputSelection: {
        "*": {
          "": [
            "ast"
          ],
          "*": [
            "evm.bytecode.object",
            "evm.deployedBytecode.object",
            "abi",
            "evm.bytecode.sourceMap",
            "evm.deployedBytecode.sourceMap",
            "metadata"
          ]
        },
      }
    },
  }
},
}
