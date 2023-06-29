const ethers = require('ethers');
const BigNumber = require('bignumber.js');
const Web3 = require('web3');
const web3Utils = require('web3-utils');
const { networks, blocksAbiSend, blocksReceiver } = require('./constants');

class Blocks {
  constructor({ privateKey }) {
    this.privateKey = privateKey;
  }

  // data and network are required, pass undefined on optional params for defaults
  async createData(data, network, receiver, rpcURL, gasBoostFactor = 1.5) {
    const selectedRpcURL = rpcURL || networks[network].rpcUrl;
    const receiverAddress = receiver || blocksReceiver
    const provider = new ethers.providers.JsonRpcProvider(selectedRpcURL);
    const contract = new ethers.Contract(networks[network].contractAddress, blocksAbiSend, provider);
    const contractSigner = contract.connect(new ethers.Wallet(this.privateKey, provider));
    const dataConverted = web3Utils.toHex(data);
    let options = await this._getGasOptions(provider, gasBoostFactor);

    let feeAmt = ethers.utils.parseUnits("100", "ether");
    let tx = await contractSigner.send(receiverAddress, feeAmt, dataConverted, options)
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });

    return {"tx_hash":tx.hash};
  }

  // tx_hash and network are required. Use undefined on optional params for defaults.
  async fetchData(tx_hash, network, rpcURL) {
    const selectedRpcURL = rpcURL || networks[network].rpcUrl;
    let web3 = new Web3(selectedRpcURL);
    let receipt = await web3.eth.getTransactionReceipt(tx_hash)
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });

    if(receipt){
      let data_dump = await this._getLogData(receipt, web3);
      let message = web3Utils.hexToAscii(data_dump.data);
      return { "blocks_data":message };
    } else {
      throw new Error('Error fetching transaction data');
    }
  }

  async _getLogData(decode, web3) {
    try{
        let result = web3.eth.abi.decodeLog([{
            'type':'address',
            'name':'operator',
            'indexed': true
          }, {
            'type':'address',
            'name':'from',
            'indexed': true
          },{
            'type':'address',
            'name': 'to',
            'indexed': true
          },{
            'type': 'uint256',
            'name':'amount'
          },{
            'type': 'bytes',
            'name':'data'
          },{
            'type': 'bytes',
            'name':'operatorData'
          }],decode.logs[0].data, decode.logs[0].topics.slice(1));
      
          return result;
    }catch(e){
        throw new Error(`Error fetching transaction data: ${e}`);
    }
  }

  async _getGasOptions(provider, gasBoostFactor) {
    let gas = await provider.getFeeData();
    let gasBoost = Number(gas.gasPrice.toString());
    let gasBoostBig = new BigNumber(gasBoost).times(gasBoostFactor).toFixed(0);
    let options = {
      gasLimit: ethers.utils.hexlify(1000000),
      gasPrice: ethers.BigNumber.from(gasBoostBig)
    };

    return options;
  }
}

module.exports = Blocks;