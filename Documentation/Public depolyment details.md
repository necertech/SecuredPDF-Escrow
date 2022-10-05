

		PUBLIC TEST network Deployment Details
    
		
```Change truffle config file 

const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectId}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
   },
   
****<cmd>npx truffle console --network ropsten
truffle(ropsten)> await web3.eth.getAccounts()
</cmd>
<cmd> npx truffle migrate --network ropsten</cmd>
<cmd>npm start</cmd>
****



   network : ropsten
   network_id: 3
   
   Deployment details
   
    transaction hash:    0xe90bd5fac94aaec72d785729e20e7fa65d59242f62e3b77f4dca1391e0b31164
    Blocks: 4            Seconds: 53
    contract address:    0x7c25db3702a45ed5e859ae8c800846be87a31383
    block number:        13087515 
