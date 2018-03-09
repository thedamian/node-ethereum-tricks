var Web3 = require('web3');
var infuraAPIKey = process.env.infuraAPIKey; // get yours from infura.io for FREE
// set the provider you want from Web3.providers
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"+infuraAPIKey));
console.log("We are connected to infura.io");

var addr = ('0x84eb7f9510e8501721827c8f3b56e4fcdbefcba1'); // Random address found on etherscan.io

// Use Wb3 to get the balance of the address, convert it and then show it in the console.
web3.eth.getBalance(addr, function (error, result) {
    if (!error)
        console.log('Address: ' + addr + ' has a balance of Ether:', web3.utils.fromWei(result,'ether')); // Show the ether balance after converting it from Wei
    else
        console.log('Huston we have a promblem: ', error); // Should dump errors here
});

