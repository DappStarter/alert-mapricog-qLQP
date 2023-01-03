require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strategy radar scrub essay gloom kite slot gentle'; 
let testAccounts = [
"0x3a90b1b3451c7a5bc317913981e97d9d0422d50cb1cf922971fc5737762d5a34",
"0xac3b3345a0d9626fbc7018fa82178b600b674585688a21ac22443c6e12d0fcc6",
"0x3a5c118b18d5e7e211cd2185ecaa1e863ebec493a072603c26ee4e853f0ac292",
"0x1137466780b26ea7978085319cb9199f3b341104ac3c10532fa37d95928fe6c2",
"0x7ce418bf0899140261255d1bfde640f594dddff702f2fb90e1c9687f86c6c965",
"0x63da873a8fede4e591d149fb8db385b43a56119cbb10e6d8f0acf9f88b3677da",
"0xf21aadeab276e75af8a0ad8ec6def25cb0c3abac606073726aa03ec695dc714b",
"0x04274e64112b68edae372b47269068e2e26d7cd3a2104ee1659fcb0cf059f8b7",
"0xbd1daec34b722141e20865e0ae4fe0353301f6d9d98823e8d775fbfeec8a171d",
"0x4647eca6ab3efd1faa1826eec96f969efcbc5fb59b1bec12e54375f2415af9cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

