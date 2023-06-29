module.exports = {
    networks: {
        "ethereum": {
            "rpcUrl":"https://eth-rpc.gateway.pokt.network",
            "contractAddress":"0x8a6D4C8735371EBAF8874fBd518b56Edd66024eB"
        },
        "gnosis": {
            "rpcUrl":"https://rpc.gnosischain.com/",
            "contractAddress":"0x4D6395328104c29b9a5a546ECbbCe2fc75D9b519"
        },
        "polygon": { 
            "rpcUrl":"https://poly-rpc.gateway.pokt.network",
            "contractAddress":"0x8a6D4C8735371EBAF8874fBd518b56Edd66024eB"
        },
        "goerli": {
            "rpcUrl":"https://eth-goerli-rpc.gateway.pokt.network",
            "contractAddress":"0x17f4A652Fa758002dC184529A75E00017da12048"
        }
    },
    blocksAbiSend: ['function send(address recipient, uint256 amount, bytes data)'],
    blocksReceiver: "0xf0e3ea754D038b979CD0124e2f1A4Bf44f32746a"
};