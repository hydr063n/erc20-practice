//const yourAddress = '0x4d3218B23D4f383dA54df6dDFf4833a9d36F75c3'
//const value = '0xde0b6b3a7640000' // an ether has 18 decimals, here in hex.
//const desiredNetwork = '3' // '1' is the Ethereum main network ID.




//const MetaMaskConnector = require('node-metamask')

//
//const web3 = new Web3('wss://mainnet.infura.io/ws/v3/225a510e91ff4a5ca736aa438cc7f4d6')


//console.log(web3)

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/225a510e91ff4a5ca736aa438cc7f4d6"))
//const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

const Window = require('window')
const window = new Window()
var http = require('http')

const walletAddress = '0x4d3218B23D4f383dA54df6dDFf4833a9d36F75c3'


const index = (req, res) => {

    web3.eth.getBalance(walletAddress).then(balance => {
      console.log(balance)
    })


    res.write(`I love video games!`)
    res.end()
}

http.createServer(index).listen(8080)

/*
function sendEtherFrom (account, callback) {

  // We're going to use the lowest-level API here, with simpler example links below
  const method = 'eth_sendTransaction'
  const parameters = [{
    from: account,
    to: yourAddress,
    value: value,
  }]
  const from = account

  // Now putting it all together into an RPC request:
  const payload = {
    method: method,
    params: parameters,
    from: from,
  }

  // Methods that require user authorization like this one will prompt a user interaction.
  // Other methods (like reading from the blockchain) may not.
  ethereum.sendAsync(payload, function (err, response) {
    const rejected = 'User denied transaction signature.'
    if (response.error && response.error.message.includes(rejected)) {
      return console.log(`We can't take your money without your permission.`)
    }

    if (err) {
      return console.log('There was an issue, please try again.')
    }

    if (response.result) {
      // If there is a response.result, the call was successful.
      // In the case of this method, it is a transaction hash.
      const txHash = response.result
      console.log('Thank you for your generosity!')

      // You can poll the blockchain to see when this transaction has been mined:
      pollForCompletion(txHash, callback)
    }
  })
}*/

/*function pollForCompletion (txHash, callback) {
  let calledBack = false

  // Normal ethereum blocks are approximately every 15 seconds.
  // Here we'll poll every 2 seconds.
  const checkInterval = setInterval(function () {

    const notYet = 'response has no error or result'
    ethereum.sendAsync({
      method: 'eth_getTransactionByHash',
      params: [ txHash ],
    }, function (err, response) {
      if (calledBack) return
      if (err || response.error) {
        if (err.message.includes(notYet)) {
          return 'transaction is not yet mined'
        }

        callback(err || response.error)
      }

      // We have successfully verified the mined transaction.
      // Mind you, we should do this server side, with our own blockchain connection.
      // Client side we are trusting the user's connection to the blockchain.
      const transaction = response.result
      clearInterval(checkInterval)
      calledBack = true
      callback(null, transaction)
    })
  }, 2000)
}*/


































    /*if (typeof window.ethereum === 'undefined') {
        console.log('Looks like you need a Dapp browser to get started.')
        console.log('Consider installing MetaMask!')
    } else {
        ethereum.enable()
        
        .catch(function (reason) {
            if (reason === 'User rejected provider access') {
            } else {
                console.log('There was an issue signing you in.')
            }
        })
        
        // In the case they approve the log-in request, you'll receive their accounts:
        .then(function (accounts) {
            // You also should verify the user is on the correct network:
            if (ethereum.networkVersion !== desiredNetwork) {
                console.log('This application requires the main network, please switch it in your MetaMask UI.')
            }
        
            // Once you have a reference to user accounts,
            // you can suggest transactions and signatures:
            //console.log(accounts)
            const account = accounts[0]
        
        })
    }*/
