import { NetworkName } from "../types/networks";
import { InnerPage } from "../types/inner-page";

const networks: { [key in NetworkName]: InnerPage } = {
  [NetworkName.ethereum]: {
    path: NetworkName.ethereum,
    name: "Ethereum",
    title: "Enkrypt: Your portal to Ethereum",
    pageTitle: "Enkrypt: Ethereum Wallet",
    pageDescription:
      "Enkrypt is an Ethereum wallet that supports all EVM compatible chains. Explore everything Ethereum has to offer using Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is an Ethereum wallet that supports all EVM compatible chains. Explore everything Ethereum has to offer using Enkrypt.",
        ],
      },
      {
        title: "What is Ethereum?",
        paragraps: [
          "In 2012, at age 17, Vitalik Buterin was introduced to Bitcoin. By the time he was 20, he had created Ethereum, which quickly became a flourishing ecosystem of cryptocurrency enthusiasts. Ethereum is a censorship resistant and programmable blockchain-based smart contract platform, allowing users to build and deploy decentralized applications (dApps) on its network. Ethereum continues to evolve and is the home of NFTs, DeFi, and ERC 20 tokens.",
          "Ethereum aims to be the world's first decentralized super computer, introducing a more private internet, and banking for everyone on a peer to peer network. $ETH is Ethereum's native token.",
          '<a href="https://ethereum.org/" target="_blank" rel="nofollow">https://ethereum.org</a>',
        ],
      },
    ],
  },
  [NetworkName.polkadot]: {
    path: NetworkName.polkadot,
    name: "Polkadot",
    title: "Enkrypt is your entryway into Polkadot",
    pageTitle: "Enkrypt: Polkadot Wallet",
    pageDescription:
      "Enkrypt is a Polkadot wallet built from the ground-up as an alternative to Polkadot js. Focused on the multi-chain future, Enkrypt has native wallet support for Polkadot, the Dotsama ecosystem, and much more.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a Polkadot wallet built from the ground-up as an alternative to Polkadot js. Focused on the multi-chain future, Enkrypt has native wallet support for Polkadot, the Dotsama ecosystem, and much more.",
        ],
      },
      {
        title: "What is Polkadot?",
        paragraps: [
          "Polkadot is a multi-chain network of blockchains, called parachains, offering unprecedented security and scalability in crypto. Polkadot allows previously disconnected blockchains, like Bitcoin or Ethereum, to communicate cross-chain via XCM. Using the Substrate framework, Polkadot allows for the creation of custom blockchains in a matter of minutes.",
          "Polkadot was founded by Gavin Wood and Robert Habermeir in 2016. $DOT is the native token to the Polkadot ecosystem and is used for staking and crowdloans.",
          '<a href="https://polkadot.network/" target="_blank" rel="nofollow">https://polkadot.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.kusama]: {
    path: NetworkName.kusama,
    name: "Kusama",
    title: "Control the chaos with Kusama on Enkrypt",
    pageTitle: "Enkrypt: Kusama Wallet",
    pageDescription:
      "Enkrypt is a multi-chain browser extension with native wallet support for Kusama. Enkrypt makes it possible to go anywhere in Dotsama with a few clicks. Expect chaos.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain browser extension with native wallet support for Kusama. Enkrypt makes it possible to go anywhere in Dotsama with a few clicks. Expect chaos.",
        ],
      },
      {
        title: "What is Kusama?",
        paragraps: [
          'Kusama is the canary or "sister network" to Polkadot. Although Kusama Network acts as the Dotsama testnet, the term doesn\'t quite cover the level of testing projects conducted before launching as a parachain. It\'s built using nominated proof-of-stake (NPoS) consensus mechanism, which is similar to regular proof-of-stake (PoS), but considered a more democratic method. Kusama\'s motto is, "Expect Chaos", and tells you basically everything you need to know about the Kusama community.',
          "The Kusama community is developing the future of web3 fast. $KSM is Kusama Network's native token.",
          '<a href="https://kusama.network/" target="_blank" rel="nofollow">https://kusama.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.bnb]: {
    path: NetworkName.bnb,
    name: "BNB Smart Chain",
    title: "Enkrypt: Your one-stop shop for the BNB Smartchain",
    pageTitle: "Enkrypt: BNB Wallet",
    pageDescription:
      "Enkrypt is a BNB Smartchain wallet with native support for the BNB ecosystem. Get started on the BNB Smartchain with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a BNB Smartchain wallet with native support for the BNB ecosystem. Get started on the BNB Smartchain with Enkrypt.",
        ],
      },
      {
        title: "What is BNB?",
        paragraps: [
          "The BNB Smartchain, previously known as Binance Smart Chain (BSC), is a blockchain that runs parallel with Binance Chain. Originally a fork of Ethereum, the BNB Smartchain allows native cross-chain communication between EVM-compatible blockchains and the Binance Chain. To achieve this, Binance uses Proof-of-Staked-Authourity (PoSA). BNB Smartchain takes advantage of Ethereum developer tools and the vast Binance ecosystem to attract decentralized finance (DeFi) developers looking for a cheaper platform. $BNB is Binance's native token.",
          '<a href="https://www.binance.com/en/bnb" target="_blank" rel="nofollow">https://www.binance.com/en/bnb</a>',
        ],
      },
    ],
  },
  [NetworkName.polygon]: {
    path: NetworkName.polygon,
    name: "Polygon",
    title: "Explore Polygon with Enkrypt",
    pageTitle: "Enkrypt: Polygon Wallet",
    pageDescription:
      "Enkrypt is a Polygon wallet with native Polygon support. Utilize any Polygon dApp with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a Polygon wallet with native Polygon support. Utilize any Polygon dApp with Enkrypt.",
        ],
      },
      {
        title: "What is Polygon?",
        paragraps: [
          "Polygon Network is a blockchain scalability platform that addresses the challenges (high fees, low transactions per second, etc) faced by Ethereum. Using Polygon, other decentralized networks or apps (dApps) that are EVM compatible can make use of the Ethereum ecosystem without dealing with high gas (transactional fees). The Polygon network aims to scale the Ethereum blockchain, making it usable for all. $MATIC is Polygon Network's native token.",
          '<a href="https://polygon.technology/" target="_blank" rel="nofollow">https://polygon.technology/</a>',
        ],
      },
    ],
  },
  [NetworkName.moonbeam]: {
    path: NetworkName.moonbeam,
    name: "Moonbeam",
    title: "Go cross-chain with Moonbeam on Enkrypt",
    pageTitle: "Enkrypt: Moonbeam Wallet",
    pageDescription:
      "Enkrypt is a Moonbeam wallet with native Moonbeam support and full EVM compatibility. Go anywhere on Moonbeam you want with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a Moonbeam wallet with native Moonbeam support and full EVM compatibility. Go anywhere on Moonbeam you want with Enkrypt.",
        ],
      },
      {
        title: "What is Moonbeam?",
        paragraps: [
          "Moonbeam is an Ethereum-compatible (EVM) smart contract platform built on Polkadot. This Ethereum/Polkadot compatibility makes it easy for developers to migrate existing Solidity smart contracts over to Dotsama, introducing natively interoperable dApps to the ecosystem. Upon launching in January of 2022, Moonbeam became the first fully operational parachain on Polkadot. Moonbeam's mission is to make it easy for multi-chain projects to enter into the Polkadot ecosystem.",
          "The Moonbeam Foundation hosted a crowdloan for the Moonbeam network in November 2021.  $GLMR is Moonbeam's native token.",
          '<a href="https://moonbeam.network/" target="_blank" rel="nofollow">https://moonbeam.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.moonriver]: {
    path: NetworkName.moonriver,
    name: "Moonriver",
    title: "Enkrypt: an EVM-compatible Moonriver wallet",
    pageTitle: "Enkrypt: Moonriver Wallet",
    pageDescription:
      "Enkrypt is a multi-chain web3 wallet with native Moonriver support. Compatible with all EVM chains, you can now browse the Moonriver ecosystem easier than ever before with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain web3 wallet with native Moonriver support. Compatible with all EVM chains, you can now browse the Moonriver ecosystem easier than ever before with Enkrypt.",
        ],
      },
      {
        title: "What is Moonriver?",
        paragraps: [
          'Moonriver is the community-led canary or "cousin network" to Moonbeam, built on Kusama. Similar to Moonbeam, Moonriver is an Ethereum-compatible smart contract platform. This compatibility allows Ethereum developers to easily deploy existing Solidity smart contracts to Kusama, helping create an ecosystem of interoperable dApps. $MOVR is Moonriver\'s native token and a majority of this token is held by the Moonbeam community.',
          '<a href="https://moonbeam.network/networks/moonriver/" target="_blank" rel="nofollow">https://moonbeam.network/networks/moonriver/</a>',
        ],
      },
    ],
  },
  [NetworkName.acala]: {
    path: NetworkName.acala,
    name: "Acala",
    title: "Acala: the DeFi Hub of Polkadot on Enkrypt",
    pageTitle: "Enkrypt: Acala Wallet",
    pageDescription:
      "Enkrypt is a multi-chain wallet solution designed as an alternative to Polkadot js. It currently has native wallet support for Acala and it's DeFi ecosystem. Stake AUSD and earn using Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain wallet solution designed as an alternative to Polkadot js. It currently has native wallet support for Acala and it's DeFi ecosystem. Stake AUSD and earn using Enkrypt.",
        ],
      },
      {
        title: "What is Acala?",
        paragraps: [
          "Acala is a decentralized finance (DeFi) platform built on the Polkadot network. Acala allows users to mint and stake liquidity using aUSD, the parachain's stablecoin, via smart contracts that power Acala's decentralized applications (dApps). It functions as a building block for DeFi in Dotsama.",
          "Acala received its parachain slot via Polkadot crowdloan. Acala's goal is to allow developers to leverage the aUSD ecosystem while enjoying the best of Ethereum and the full power of Substrate. $ACA is Acala's native token.",
          '<a href="https://acala.network/" target="_blank" rel="nofollow">https://acala.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.karura]: {
    path: NetworkName.karura,
    name: "Karura",
    title: "Karura: the Kusama DeFi hub on Enkrypt",
    pageTitle: "Enkrypt: Karura Wallet",
    pageDescription:
      "Enkrypt is a web3 wallet with native Karura support. Created as an alternative to Polkadot js, use Enkrypt for all of your Karura Network errands.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a web3 wallet with native Karura support. Created as an alternative to Polkadot js, use Enkrypt for all of your Karura Network errands.",
        ],
      },
      {
        title: "What is Karura?",
        paragraps: [
          "Karura is the canary or \"sister network\" to Acala. Similar to Acala, Karura aims to be the all-in-one decentralized finance (DeFi) hub of Kusama. Karura allows users to mint and swap aUSD, the parachain's stablecoin that powers Karura's decentralized applications (dApps). Created by the Acala Network, Karura has won four Web3 Foundation grants and founded the Substrate Developer Academy. $KAR is Karura's native token.",
          '<a href="https://apps.karura.network/" target="_blank" rel="nofollow">https://apps.karura.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.astar]: {
    path: NetworkName.astar,
    name: "Astar",
    title: "Build-To-Earn with Astar using Enkrypt",
    pageTitle: "Enkrypt: Astar Wallet",
    pageDescription:
      "Built as an alternative to Polkadot js, Enkrypt is an Astar wallet. Enkrypt has complete native wallet support for Astar and it's build-to-earn ecosystem. Start building on Astar using Enkrypt!",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Built as an alternative to Polkadot js, Enkrypt is an Astar wallet. Enkrypt has complete native wallet support for Astar and it's build-to-earn ecosystem. Start building on Astar using Enkrypt!",
        ],
      },
      {
        title: "What is Astar?",
        paragraps: [
          "Astar - previously known as Plasm Network - is a multi-chain smart contract dApp hub on Polkadot that supports multiple blockchains and virtual machines including Ethereum, WebAssembly, and layer 2 solutions like ZK Rollups. Astar is the first web3 build-to-earn protocol, allowing crypto developers to earn basic income while building decentralized applications (dApps).",
          '<a href="https://astar.network/" target="_blank" rel="nofollow">https://astar.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.shiden]: {
    path: NetworkName.shiden,
    name: "Shiden",
    title: "Shiden Network on Enkrypt, the multi-chain dApps hub",
    pageTitle: "Enkrypt: Shiden Wallet",
    pageDescription:
      "Enkrypt is a multi-chain wallet with native wallet support for Shiden. Traverse through the vast Shiden ecosystem with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain wallet with native wallet support for Shiden. Traverse through the vast Shiden ecosystem with Enkrypt.",
        ],
      },
      {
        title: "What is Shiden?",
        paragraps: [
          'Shiden is the canary or "sister network" to Astar, built on the Kusama Network. A multi-chain smart contract dApp hub supporting multiple blockchains and virtual machines, new features always go to Shiden first and are thoroughly tested before being implemented onto the Astar mainnet. $SDN is Shiden\'s native token.',
          '<a href="https://shiden.astar.network/" target="_blank" rel="nofollow">https://shiden.astar.network/</a>',
        ],
      },
    ],
  },
  [NetworkName.okc]: {
    path: NetworkName.okc,
    name: "OKX Chain",
    title: "Enkrypt: the open-source OKC wallet",
    pageTitle: "Enkrypt: OKC Wallet",
    pageDescription:
      "Enkrypt is a multi-chain wallet with native support for OKC. Trade until your hearts content with Enkrypt on OKC.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain wallet with native support for OKC. Trade until your hearts content with Enkrypt on OKC.",
        ],
      },
      {
        title: "What is OKC?",
        paragraps: [
          "OKC, previously known as OKExChain, is an EVM-compatible blockchain built on Cosmos with a focus on interoperability (IBC). It is open-source, decentralized, and smart contract-enabled. Built for the next generation of decentralized apps (dApps), decentralized finance (DeFi) protocols, NFTs, and metaverse applications. Backed by OKX, one of the largest crypto exchanges, OKC is optimized for trading crypto currencies. $OKT is the network's native token.",
          '<a href="https://www.okx.com/" target="_blank" rel="nofollow">https://www.okx.com/</a>',
        ],
      },
    ],
  },
  [NetworkName.canto]: {
    path: NetworkName.canto,
    name: "Canto",
    title: "Discover DeFi with Canto on Enkrypt",
    pageTitle: "Enkrypt: Canto Wallet",
    pageDescription:
      "Enkrypt is your all-in-one Canto wallet. Delve directly into DeFi with Canto on Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is your all-in-one Canto wallet. Delve directly into DeFi with Canto on Enkrypt.",
        ],
      },
      {
        title: "What is Canto?",
        paragraps: [
          "Canto is more than just a Layer-1 (L1) blockchain protocol. Focused on delivering the promise of decentralized finance (DeFi), Canto is also a post-traditional financial movement maintained by a collective of chain-native developers. Canto offers staking, lending, token governance, liquidity pools (LPs), bridges, swaps, and more - enabling accessibility, transparency, and freedom for new systems. ",
          '<a href="https://canto.io/" target="_blank" rel="nofollow">https://canto.io/</a>',
        ],
      },
    ],
  },
  [NetworkName.bifrost]: {
    path: NetworkName.bifrost,
    name: "Bifrost",
    title: "Manage staked assets with Bifrost on Enkrypt",
    pageTitle: "Enkrypt: Bifrost Wallet",
    pageDescription:
      "Enkrypt is a multi-chain browser extension wallet with native Bifrost support. Access cross-chain liquidity for staking with Bifrost on Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain browser extension wallet with native Bifrost support. Access cross-chain liquidity for staking with Bifrost on Enkrypt.",
        ],
      },
      {
        title: "What is Bifrost?",
        paragraps: [
          "Bifrost is a web3 derivatives protocol that provides decentralized cross-chain liquidity for staking your crypto assets. Built on the modular Polkadot ecosystem, Bifrost allows you to unlock and manage staked liquidity in order to earn yield.  Bifrost's vTokens are fully liquid, moving freely across parachains and EVM/WASM compatible environments thanks to the XCM portal. Lend, borrow, or get creative with your previously illiquid staked tokens. Based on Substrate. ",
          '<a href="https://bifrost.finance/" target="_blank" rel="nofollow">https://bifrost.finance/</a>',
        ],
      },
    ],
  },
  [NetworkName.optimism]: {
    path: NetworkName.optimism,
    name: "Optimism",
    title: "Optimism: an L2 solution on Enkrypt",
    pageTitle: "Enkrypt: Optimism Wallet",
    pageDescription:
      "Enkrypt is a multi-chain wallet with native support for the Optimism ecosystem. Enjoy the Ethereum experience at a fraction of the cost with Optimism on Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain wallet with native support for the Optimism ecosystem. Enjoy the Ethereum experience at a fraction of the cost with Optimism on Enkrypt.",
        ],
      },
      {
        title: "What is Optimism?",
        paragraps: [
          "Formerly known as the non-profit Plasma Group, Optimism is a low-cost and lightning-fast L2 (Layer-2) blockchain scaling solution built on Ethereum. Optimism processes transactions on Layer-2, then posts them back to Ethereum in batches. This process is has been coined “Optimistic Rollup”, and it works 10x faster than the Ethereum blockchain, at a fraction of the cost. Built by developers, for developers - Optimism's EVM-equivalent architecture helps to scale your Ethereum dApps (decentralized apps). $OP is Optimism's native token.",
          '<a href="https://www.optimism.io/" target="_blank" rel="nofollow">https://www.optimism.io/</a>',
        ],
      },
    ],
  },
  [NetworkName.bitcoin]: {
    path: NetworkName.bitcoin,
    name: "Bitcoin",
    title: "Bitcoin made easy with Enkrypt",
    pageTitle: "Enkrypt: Bitcoin Wallet",
    pageDescription:
      "Enkrypt is a multi-chain browser extension with native wallet support for Bitcoin. Start stacking those satoshis with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain browser extension with native wallet support for Bitcoin. Start stacking those satoshis with Enkrypt.",
        ],
      },
      {
        title: "What is Bitcoin?",
        paragraps: [
          "Created by the mysterious developer(s) known as Satoshi Nakamoto, Bitcoin is a decentralized digital currency and store-of-value. Also known as a digital ledger, Bitcoin was originally intended as an electronic payment system based on cryptographic proof instead of trust. Bitcoin was the first successful cryptocurrency to flourish - being money and a form of payment outside the control of any one person, entity, bank or government. Simply put, Bitcoin is permissionless, trustless, digital gold. Bitcoin’s native token is $BTC.",
          '<a href="https://bitcoin.org/en/" target="_blank" rel="nofollow">https://bitcoin.org/en/</a>',
        ],
      },
    ],
  },
  [NetworkName.edgeware]: {
    path: NetworkName.edgeware,
    name: "Edgeware",
    title: "Deploy DAOs with Edgeware on Enkrypt",
    pageTitle: "Enkrypt: Edgeware Wallet",
    pageDescription:
      "Enkrypt is a multi-chain browser extension wallet with native Edgeware support. Fund, manage, and build decentralized communities with Edgeware on Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain browser extension wallet with native Edgeware support. Fund, manage, and build decentralized communities with Edgeware on Enkrypt.",
        ],
      },
      {
        title: "What is Edgeware?",
        paragraps: [
          "Edgeware is a smart-contract blockchain platform for building high-performance decentralized applications (DApps) and autonomous organizations (DAOs) using the Substrate framework and Polkadot ($DOT) network, with community governance and token holder voting. It offers scalability and interoperability features to developers and entrepreneurs for building and launching decentralized businesses and communities efficiently.",
          '<a href="https://bifrost.finance/" target="_blank" rel="nofollow">https://www.edgeware.io/</a>',
        ],
      },
    ],
  },
  [NetworkName.rootstock]: {
    path: NetworkName.rootstock,
    name: "Rootstock",
    title: "Rootstock: connecting Bitcoin to smart contracts",
    pageTitle: "Enkrypt: Rootstock Wallet",
    pageDescription:
      "Enkrypt is a multi-chain browser extension wallet with native support for Rootstock. Seamlessly transfer BTC on or off the RSK network in order to utilize smart contract capability with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain browser extension wallet with native support for Rootstock. Seamlessly transfer BTC on or off the RSK network in order to utilize smart contract capability with Enkrypt.",
        ],
      },
      {
        title: "What is Rootstock?",
        paragraps: [
          "Rootstock (RSK) connects the Bitcoin (BTC) blockchain to smart contracts. With RSK's sidechain technology platform, users can move BTC onto the RSK blockchain and convert it into smart Bitcoin (RBTC). Featuring a secure 2-way peg, RSK allows for easy transfer of bitcoins in and out of the RSK network. There is no currency issuance - all RBTCs are derived from the BTC on the Bitcoin blockchain. Experience the power of smart contracts on the Bitcoin network with Rootstock (RSK).",
          '<a href="https://rootstock.io/" target="_blank" rel="nofollow">https://rootstock.io/</a>',
        ],
      },
    ],
  },
  [NetworkName.zksync]: {
    path: NetworkName.zksync,
    name: "zkSync",
    title: "Scale Ethereum with zkSync zk rollups",
    pageTitle: "Enkrypt: zkSync Wallet",
    pageDescription:
      "Enkrypt is a multi-chain browser extension wallet with native support for zkSync. Build and deploy on zkSync with Enkrypt.",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Enkrypt is a multi-chain browser extension wallet with native support for zkSync. Build and deploy on zkSync with Enkrypt.",
        ],
      },
      {
        title: "What is zkSync?",
        paragraps: [
          "The Virtual Machine for EVM-Friendly ZK Rollup Development. Build EVM-Friendly ZK Rollups with Ease. Port existing projects or come up with new concepts with zkSync.",
          '<a href="https://zksync.io/" target="_blank" rel="nofollow">https://zksync.io/</a>',
        ],
      },
    ],
  },
};

export default networks;
