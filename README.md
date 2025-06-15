## Blovote – A Decentralized Voting App

Hey there!
This is Blovote, a simple decentralized voting system built using Ethereum blockchain.
I originally made this as my final year project for my CS degree, but now I’m trying to make it something more useful and real-world.

This app lets people vote securely and transparently using smart contracts and blockchain so no one can mess with the results. It’s all open and verifiable!


## How It Works (Basic WorkFlow)

Here’s a simple idea of how everything works:

1.Admin sets things up

--Deploys the smart contract to the blockchain.
--Creates an election by adding candidates and other details.

2.People register to vote

--Voters connect their wallet (like MetaMask) and register.
--Their details get sent to the admin for approval.

3.Admin approves voters

--Admin checks if the voter info is correct.
--If all good, approves them to vote.

4.Voting begins

--Verified users can log in and cast their vote.
--Votes are stored securely on the blockchain.

5.Election ends

--Admin ends the voting.
--Results are shown right away, and winner is announced.


## Setting up the development environment

### Requirements

- [Node.js](https://nodejs.org)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://github.com/trufflesuite/ganache-cli) (Cli)
- [Metamask](https://metamask.io/) (Browser Extension)

#### Getting the requirements

1. Download and install **NodeJS**

   Download and install NodeJS from [here](https://nodejs.org/en/download/ "Go to official NodeJS download page.").

1. Install **truffle** and **ganache-cli** using node packager manager (npm)

   ```shell
   npm install -g truffle
   npm install -g ganache-cli
   ```

1. Install **metamask** browser extension

   Download and install metamask from [here](https://metamask.io/download "Go to official metamask download page.").

### Configuring the project for development

1. Clone this repository

   ```shell
   git clone https://github.com/arlbibek/dVoting.git
   cd dVoting
   ```

2. Run local Ethereum blockchain

   ```shell
   ganache-cli
   ```

   > Note: Do not close `ganache-cli` (the blockchain network needs to be running all the time)

3. Configure metamask on the browser with the following details

   New RPC URL: `http://127.0.0.1:8545` *(use `port: 7545` for **ganache gui**, update it in the file:`truffle-config.js` as well)*

   Chain ID: `1337`

4. Import account(s) using private keys from ganache-cli to the metamask extension on the browser

5. Deploy smart contract to the (local) blockchain network (i.e ganache-cli)

   ```shell
   # on the dVoting directory
   truffle migrate
   ```

   > Note: Use `truffle migrate --reset` for re-deployments

6. Launch the development server (frontend)

   ```shell
   cd client
   npm install
   npm start
   ```

   > If you encounter **error** during `npm install`, please note that you might need to install Microsoft Visual C++ Redistributable packages from [learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) (here is the direct download link for X64: [aka.ms/vs/17/release/vc_redist.x64.exe](https://aka.ms/vs/17/release/vc_redist.x64.exe))

