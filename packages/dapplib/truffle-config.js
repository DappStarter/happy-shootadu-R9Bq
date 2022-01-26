require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong reflect sad update gesture casual equal gate'; 
let testAccounts = [
"0xf0485eb6a0d69d31bb05802e4cfb3f3b92946d852172aec7d8278bd4d64dfed9",
"0x8c23bfd16b196e0e731f74a5b1adb302fba56ba3dcb221cbc386e69a1e00d794",
"0x6aa052b78917934d34343df871525ff8a09a432f469d709650b1b82b84ce552c",
"0xc6ff2e97768313409f88fbd53c31795c568b871e9e2c4135ae4642428d52b960",
"0x5c61db59efa08285e323e67a1454f97eae841fdb947af02698dd8e816c46c272",
"0xb8eaf25f72e30ee04ccafc481ca8fa227571ca1aa13b829dab0b8182e09d9028",
"0x6603d577a7e00152288bbed7605689b1a282603d6e86b67bd038bc7ee1d5a2ec",
"0x3f92b7aea58ca85e5c3f9a15bfd1ba4517f2d34555aa0eae758594c2e590de27",
"0x2c379ce3f20a435595e86bae371b20a6507b8b5a09b3ec1db4409ef5a43d4891",
"0xf51bdeda3908036854bc6acf05082ae75229f676b7f80b801b24c64632da078b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


