const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider('multiply sudden toast dumb border direct follow marriage egg myself idea trash', 'https://ropsten.infura.io/v3/12e8d8b53cee48ef91b8ddaeb116ede3');
const web3 = new Web3(provider);
// web3.setProvider(provider); // <=======================

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode, arguments: ['hi! there']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('contract deployed at', result.options.address);
};
deploy();