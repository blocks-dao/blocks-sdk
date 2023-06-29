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
/* Export a private key from a wallet such as Metamask. 
This wallet will need gas and BLOCKS tokens for any of the networks 
you wish to run transactions on. */

/* Initialize the SDK. Make sure to store your privateKey as an environment
variable. */

const blocks = new Blocks({ privateKey: 'yourPrivateKey'});

/* Create Data: Enter your data as a string or stringified JSON. The SDK
will hexadecimalize it for the blockchain */

const result = await blocks.createData('Hello again!','ethereum',undefined,undefined,1.3);

/* Fetch Data: Provide a transaction hash that contains data, and the 
SDK will return the data string from the blockchain. */

const result = await blocks.fetchData('0xb8115e9b4bd4881b87ad3af61e1099c762125de7c7db627b33f821f19b110156','ethereum');

```
## BLOCKS Tokens
You can easily swap ETH for BLOCKS tokens via Metamask or through [ChangeNOW]( https://changenow.app.link/referral?link_id=aded8404a0b448&from=eth&to=blocks&amount=1)


## Links
- [BLOCKS DAO](https://blocks.io).
- [BLOCKS Etherscan](https://etherscan.io/token/0x8a6d4c8735371ebaf8874fbd518b56edd66024eb)
- [BLOCKS Github](https://github.com/blocks-dao)

## Have Fun
Have fun exploring and building on BLOCKS with data transactions.

## License
The MIT License (MIT)
Copyright © 2023 BLOCKS DAO, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.