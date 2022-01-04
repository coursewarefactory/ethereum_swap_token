require("babel-register");
require("babel-polyfill");
require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')


module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*", // Match any network id
		},
		goerli: {
			provider: () => {
			  return new HDWalletProvider(process.env.MNEMONIC, 'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY)
			},
			network_id: '5', // eslint-disable-line camelcase
			gas: 4465030,
			gasPrice: 10000000000,
			timeoutBlocks: 20000,
			networkCheckTimeout: 10000
		  },
	},
	contracts_directory: "./src/contracts/",
	contracts_build_directory: "./src/abis/",
	compilers: {
		solc: {
			version: "0.8.11",
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
