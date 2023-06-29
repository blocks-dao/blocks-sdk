# BLOCKS SDK
This application leverages the multi-chain BLOCKS data feature to store and fetch data on the blockchain. It includes hot-wallet functionality to facilitate transactions across the various BLOCKS supported chains.

# Use Cases for the BLOCKS SDK

- Add blockchain data utility to your application 
- Leverage immutable data for records, verification, origin tracking etc.

## Project Notes:
- Project is set up for Ethereum, Polygon, Gnosis, Goerli.
- Internal hot-wallet is used as the provider to sign transactions.

## Examples
```
// Export a private key from a wallet such as Metamask. This wallet will need gas and BLOCKS tokens for any of the networks you wish to run transactions on.

//Initialize the SDK
const blocks = new Blocks({ privateKey: 'yourPrivateKey'});

// Create Data
const result = await blocks.createData('Hello again!','ethereum',undefined,undefined,1.3);

//Fetch Data
const result = await blocks.fetchData('0xb8115e9b4bd4881b87ad3af61e1099c762125de7c7db627b33f821f19b110156','ethereum');

```
## BLOCKS Tokens
You can easily swap ETH for BLOCKS tokens via Metamask or through ChangeNOW.

## Have Fun
Have fun exploring and building on BLOCKS with data transactions.