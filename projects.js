const projectList = [
  {
    name: "Cardano DRep",
    description: "As a Cardano DRep it is my responsibility to research and vote on proposals. My platform is based on ensuring the long term viability of Cardano through financial conservatism, proactive preparedness, and careful development. Before the Chang hardfork I participated in the sanchonet testnet. Please consider delegating to my DRep campaign to help ensure the success of Cardano for generations to come.",
    tags: ["Cardano Governance", "Blockchain"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/drep/tree/master",
        displayText: "Off-Chain vote metadata"
      }
    ],
    interfaceLinks: [
      {
        url: "https://gov.tools/connected/drep_directory/drep1g2qjfxcxj6ewx3aw0nqh2lfcaq0at3a2wcusxgjmgrnuzph6ddt",
        displayText: "gov.tools - drep1g2qjfxcxj6ewx3aw0nqh2lfcaq0at3a2wcusxgjmgrnuzph6ddt"
      },
      {
        url: "https://www.1694.io/en/dreps/drep1g2qjfxcxj6ewx3aw0nqh2lfcaq0at3a2wcusxgjmgrnuzph6ddt",
        displayText: "1694.io - drep1g2qjfxcxj6ewx3aw0nqh2lfcaq0at3a2wcusxgjmgrnuzph6ddt"
      },
      {
        url: "https://cardanoscan.io/drep/drep1yfpgzfymq6tt9c684e7vzata8r5pl4w84fmrjqeztdqw0sgpzw3nt?tab=votes",
        displayText: "Cardano Scan - My Voting History"
      }
    ],
    buttons: [
      {
        text: "copy dRep id",
        copyText: "drep1g2qjfxcxj6ewx3aw0nqh2lfcaq0at3a2wcusxgjmgrnuzph6ddt"
      },
      {
        text: "copy dRep id (CIP-129)",
        copyText: "drep1yfpgzfymq6tt9c684e7vzata8r5pl4w84fmrjqeztdqw0sgpzw3nt"
      }
    ]
  },
  {
    name: "Delegate to the Constitutional Convention",
    description: "Elected as the Voting Delegate to represent the Toronto workshop at the constitutional convention in Buenos Aires, I experienced the opportunity of a lifetime. Not only did I apply my knowledge of Cardano to contribute positively to the constitution, but I also formed friendships with many incredible individuals from around the world.",
    tags: ["Cardano Governance", "Blockchain"],
    sourceLinks: [
      {
        url: "https://github.com/IntersectMBO/draft-constitution/blob/main/2024-12-05/cardano-constitution-1.txt",
        displayText: "Read The Constitution - unformatted"
      },
      {
        url: "https://github.com/IntersectMBO/draft-constitution/blob/main/2024-12-05/draft-constitution-converted.md",
        displayText: "Read The Constitution - formatted"
      },
      {
        url: "https://cardanoscan.io/transaction/e7b4da6c9dc46f8cacd5dbc11afd1a9e370c45fb61ad8131f3e2ccde9e851484?tab=metadata",
        displayText: "Transaction recording my vote"
      }
    ],
    interfaceLinks: [
      {
        url: "https://docs.intersectmbo.org/cardano/cardano-governance/cardano-constitution#what-is-the-cardano-constitution",
        displayText: "About the constitution"
      }
    ],
    buttons: []
  },
  {
    name: "Anchor Vault: Quantum Secure Smart Accounts on Ethereum via a Chrome Plugin",
    description: "Anchor Vault is the culmination of my efforts at Pauli Group to create a user friendly yet post-quantum secure account solution. The application is distributed as a chrome browser plugin. The smart contracts are erc-4337 (account abstraction) compatible meaning the user experience is very similar to a normal Ethereum account. A novel approach to signature verification was taken. Users commit to a set of initial keys. Each key can be used only once in either Lamport (quantum secure) or ECDSA mode but not both. This means using ECDSA keys does not compromise the account to a future attack from quantum computers, this also helps prevent reuse of Lamport keys which are unsafe to use twice. Additional keys can be added in a separate operation but by default the software automatically appends three key commitments to every operation, helping ensure the user cannot run out of keys. AES encrypted backups of separate “key rings” can be created to ensure the user always has a secure recovery mechanism.",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      {
        url: "https://etherscan.io/address/0xBbec2f0bd58EA433BB38ac8ed699DED914087D6f#code",
        displayText: "Factory On Etherscan"
      }
    ],
    interfaceLinks: [
      {
        url: "https://chromewebstore.google.com/detail/anchor-vault/omifklijimcjhfiojhodcnfihkljeali",
        displayText: "Anchor Vault Chrome Plugin"
      }
    ],
    buttons: []
  },
  {
    name: "Spearmint",
    description: "A tool for minting CIP-68 tokens with proper support for burning",
    tags: ["Blockchain"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/Spearmint",
        displayText: "GitHub"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },
  // {
  //   name: "TURN Classic",
  //   description: "A CoinJoin style mixer for Cardano with support for Ada and CNTs ",
  //   tags: ["Blockchain", "In Progress"],
  //   sourceLinks: [
  //     {
  //       url: "https://github.com/turn-privacy",
  //       displayText: "GitHub"
  //     }
  //   ],
  //   interfaceLinks: [
  //     {
  //       url: "https://medium.com/@networkturn/litepaper-n-1f903bda83d3",
  //       displayText: "Read The Litepaper"
  //     },
  //     {
  //       url: "https://x.com/turnprotocol",
  //       displayText: "Follow On X"
  //     },
  //     {
  //       url: "https://discord.com/invite/4BTgMb9BBB",
  //       displayText: "Join On Discord"
  //     }
  //   ],
  //   buttons: []
  // },
  {
    name: "LAMB Whitepaper",
    description: "A document I co-authored outlining Quantum Secure Smart Contract Accounts For EVM Blockchains",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [],
    interfaceLinks: [
      {
        url: "https://anchorwallet.ca/whitepaper/",
        displayText: "LAMB Whitepaper"
      }
    ],
    buttons: []
  },
  {
    name: "Lamport Signatures On Cardano", 
    description: "A simple proof of concept for using Lamport signatures on Cardano.",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      { 
        url: "https://github.com/willpiam/lamport-cardano/tree/master",
        displayText: "GitHub"
      }
    ],
    interfaceLinks: [
      {
        url: "https://preview.cardanoscan.io/transaction/eb5f4c1350987fc15d9fad530c659fee952f5d67dd6664796684ef96773bc84b",
        displayText: "demo: verification of a lamport signature on testnet"
      }
    ],
    buttons: [] 
  },
  {
    name: "Intersect Founding Member",
    description: "Intersect is where most of the off-chain work takes place for Cardano's governance. ",
    tags: ["Cardano Governance", "Blockchain"],
    sourceLinks: [],
    interfaceLinks: [
      {
        url: "https://intersectmbo.org/",
        displayText: "Intersect"
      }
    ],
    buttons: []
  },
  {
    name: "Mint A Token",
    description: "Token minting and sales platform built on Cardano. This product is still in preview and is not yet available on mainnet",
    tags: ["Blockchain"],
    sourceLinks: [],
    interfaceLinks: [
      {
        url: "https://preview.mintatoken.org/",
        displayText: "preview.mintatoken.org"
      }
    ],
    buttons: []
  },
  {
    name: "proof-of-quantum",
    description: "An NFT platform where NFTs are distributed when an elliptic curve key-pair is broken. The goal of this project was to measure the pace of progress in quantum computing and provide an estimate on when bitcoin accounts will be breakable by quantum computers.",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      {
        url: "https://polygonscan.com/address/0x34A86B3B9523d2d19Bbf199329983c802B3D4760",
        displayText: "Polygon Scan - Proof of Quantum"
      },
      {
        url: "https://github.com/Pauli-Group/Type_I_Challenges",
        displayText: "GitHub - Type I Challenges"
      }
    ],
    interfaceLinks: [
      {
        url: "https://proof-of-quantum.com/",
        displayText: "Proof of Quantum Official Site"
      }
    ],
    buttons: []
  },
  {
    name: "Quantum Secure Account Abstraction (v2)",
    description: "Easy to use, quantum secure EVM accounts. These accounts use ERC4337 to provide seamless user experience. Consider joining the beta to try out our mobile app ",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      {
        url: "https://github.com/Pauli-Group/walletV2",
        displayText: "GitHub - Quantum Secure Account Abstraction"
      },
      {
        url: "https://sepolia.etherscan.io/address/0xF698E6E1cE4757fC7ffEB5458a9e92EfdC98D943#code",
        displayText: "Etherscan - Quantum Secure Account Abstraction"
      }
    ],
    interfaceLinks: [
      {
        url: "https://anchorwallet.ca/waitlist/",
        displayText: "Anchor Wallet Waitlist"
      }
    ],
    buttons: []
  },
 
  {
    name: "🔨 Tools",
    description: "A collection of tools I've written",
    tags: ["Utility"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/tools",
        displayText: "GitHub - Tools"
      }
    ],
    interfaceLinks: [
      {
        url: "https://williamdoyle.ca/tools",
        displayText: "Tools"
      }
    ],
    buttons: []
  },
  {
    name: "Delegate To Me Button",
    description: "Buttons to let you delegate to me easily on Cardano. I also provide buttons to delegate to the AlwaysAbstain and AlwaysNoConfidence auto-dreps",
    tags: ["Cardano Governance", "Blockchain", "Utility"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/cardano-tools",
        displayText: "GitHub - Cardano Governance Tools"
      }
    ],
    interfaceLinks: [
      {
        url: "https://cardano-tools-delta.vercel.app/",
        displayText: "Delegate To Me"
      }
    ],
  },
   {
    name: "Thin Air Coin",
    description: "A meme coin with an almost unlimited supply. 1 token can be minted for every atom of nitrogen in the atmosphere and there are no minting fees. Celebrating the SECs weird comments about our industry. Plus, a unique graffiti feature. This project is not intended to be taken seriously, but you can get some $THINAIR for free.",
    tags: ["Blockchain", "Fun"],
    sourceLinks: [
      {
        url: "https://polygonscan.com/token/0x77f7A39f5C5E297A0E9dDd5BAcba44b12cc851b1#code",
        displayText: "Polygon Scan - Thin Air Coin"
      },
      {
        url: "https://github.com/Pauli-Group/thinair",
        displayText: "GitHub - Thin Air Coin"
      }
    ],
    interfaceLinks: [
      {
        url: "https://thinaircoin.com/",
        displayText: "Thin Air Coin Official Site"
      }
    ],
    buttons: []
  },
  // {
  //   name: "Cardano Broadcaster Script",
  //   description: "An NFT pointing to a datum which is an ever growing list of messages",
  //   tags: ["Blockchain", "Simple Experiment"],
  //   sourceLinks: [
  //     {
  //       url: "https://gist.github.com/willpiam/45e806f1a2a37e0e687060ac0711272a",
  //       displayText: "GitHub - Cardano Broadcaster Script"
  //     }
  //   ],
  //   interfaceLinks: [
  //     {
  //       url: "https://preview.cardanoscan.io/token/e54af502158e500bff5162180f893e3ab8953482b4fb205d4ef812f76d61676e61206c61626f72756d20636f696e",
  //       displayText: "Pointer Token On Preview (magna laborum coin)"
  //     }
  //   ],
  //   buttons: []
  // },
  {
    name: "Anchor Wallet (v1)",
    description: "A prototype for quantum secure accounts on EVM blockchains. These use lamport signatures to achieve quantum security.",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      {
        url: "https://mumbai.polygonscan.com/address/0xF505469Bf06fC1C8221d1Fab089ACF5BE8E8a487#code",
        displayText: "Polygon Mumbai - Anchor Wallet"
      },
      {
        url: "https://github.com/Pauli-Group/anchor-contracts-public",
        displayText: "GitHub - Anchor Contracts"
      }
    ],
    interfaceLinks: [
      {
        url: "https://app.anchorwallet.ca/",
        displayText: "Anchor Wallet Web Application"
      }
    ],
    buttons: []
  },
  {
    name: "Midnight Pioneer",
    tags: ["Blockchain"],
    description: "Midnight is a privacy focused blockchain being developed by IOG. I have the privilege of being a part of the early testnet. Since late November 2023 I've been experimenting with Compact, the smart contract language for Midnight. I cannot yet publicly share any of the code I've written, but I can tell you about it in person. ",
    sourceLinks: [],
    interfaceLinks: [],
    buttons: []
  },
  {
    name: "LAMB Quantum Secure Message Authentication",
    description: "A smart contract based message authentication system using quantum secure accounts. This has a more refined key management solution than what is used in the Anchor Wallet prototype.",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      {
        url: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com/address/0x5D9F25405384841e27A1440751930Ecc4BF90DBe/contracts#address-tabs",
        displayText: "Milkomeda Explorer - LAMB Authentication"
      },
      {
        url: "https://github.com/Pauli-Group/LambBedrockAuthentication",
        displayText: "GitHub - Lamb Bedrock Authentication"
      },
      {
        url: "https://github.com/Pauli-Group/LambBedrockAuthenticationCLI",
        displayText: "GitHub - Lamb Bedrock CLI"
      },
      {
        url: "https://github.com/Pauli-Group/walletV2/blob/master/contracts/Authenticator/Authenticator.sol",
        displayText: "GitHub - Bedrock Authentication Contracts"
      },
      {
        url: "https://twitter.com/william00000010/status/1668998715078475777",
        displayText: "Twitter Post About LAMB Authentication"
      }
    ],
    interfaceLinks: [
      {
        url: "https://app.anchorwallet.ca/verify",
        displayText: "LAMB Authentication App"
      }
    ],
    buttons: []
  },
  {
    name: "λ Calculus Language",
    description: "A simple programming language based on the λ calculus",
    tags: ["Fun"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/lambda-calculus-language",
        displayText: "GitHub - λ Calculus Language"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },
  {
    name: "Lambda Calculus",
    description: "An experiment in the foundations of computation. I've implemented the lambda calculus in JavaScript. Church numerals, the Z combinator, even a function to tell if a number is prime.",
    tags: ["Fun"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/lambda-calculus/tree/master",
        displayText: "GitHub - Lambda Calculus"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },
  {
    name: "Phases Of The Moon",
    description: "A work in progress, this project involves NFTs which display the current phase of the moon. The phase is calculated from the current block timestamp. Currently the contracts are only available on the Sepolia testnet.",
    tags: ["Blockchain", "Fun"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/MoonContracts",
        displayText: "GitHub - Moon Contracts"
      }
    ],
    interfaceLinks: [
      {
        url: "http://moon.williamdoyle.ca/",
        displayText: "Moon Project Official Site"
      }
    ],
    buttons: []
  },
  {
    name: "Elementary Cellular Automaton",
    description: "Elementary Cellular Automaton in a bunch of different languages",
    tags: ["Fun"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/elementary-cellular-automaton/",
        displayText: "Github - Elementary Cellular Automaton"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },
  {
    name: "Bitcoin Coinbase Spend Analysis",
    description: "A script to gather and plot data about when early bitcoin coinbases are spent. The data is stored in an sqlite database and plotted using matplotlib.",
    tags: ["Blockchain", "Analysis"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/bitcoin-coinbase-spend-analysis",
        displayText: "GitHub - Bitcoin Coinbase Spend Analysis"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },
  {
    name: "Lamport Wallet Manager",
    description: "An off-chain library for interacting with Lamport Authenticated EVM smart contracts",
    tags: ["Quantum Security", "Blockchain"],
    sourceLinks: [
      {
        url: "https://github.com/Pauli-Group/LamportWalletManager",
        displayText: "GitHub - Lamport Wallet Manager"
      }
    ],
    interfaceLinks: [
      {
        url: "https://www.npmjs.com/package/lamportwalletmanager",
        displayText: "NPM - Lamport Wallet Manager"
      }
    ],
    buttons: []
  },
  {
    name: "Aggregate Humanity",
    description: "AI generated images based on AI generated prompts. The idea being that has GPT and DALL-E have given us a view into the aggregate of our culture.",
    tags: ["Blockchain", "Fun"],
    sourceLinks: [
      {
        url: "https://snowtrace.io/token/0x48bcac480f22a2dfe42026dde212585e917b7142#code",
        displayText: "Snow Trace - Aggregate Humanity"
      }
    ],
    interfaceLinks: [
      {
        url: "https://opensea.io/collection/aggregate-humanity",
        displayText: "OpenSea - Aggregate Humanity Collection"
      }
    ],
    buttons: []
  },
  {
    name: "Elementary Cellular Automaton Solidity Contract",
    description: "Wolfram's Elementary Cellular Automaton implemented as a solidity contract. Admittedly, this is sort of a \"just for fun\" project. None the less I think it's interesting.",
    tags: ["Blockchain", "Fun"],
    sourceLinks: [
      {
        url: "https://github.com/willpiam/ElementaryCellularAutomatonSolidity/blob/master/contracts/ElementaryCellularAutomaton.sol",
        displayText: "GitHub - Elementary Cellular Automaton"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },

  {
    name: "Spy Game",
    description: "Spy Game is a party game I recreated with ChatGPT. It took about 40 minutes from scratch to a working prototype. This demonstrates how LLMs like ChatGPT can be used to supercharge an experienced developer.",
    tags: ["Web - Experimental"],
    sourceLinks: [
      // No source links provided
    ],
    interfaceLinks: [
      {
        url: "https://williamdoyle.ca/spygame/",
        displayText: "Spy Game Official Site"
      }
    ],
    buttons: []
  },
  {
    name: "RipeMD160 vs Keccak256 for use in Lamport Signatures",
    description: "An experiment to compare the performance of RipeMD160 and Keccak256 for use in Lamport Signatures on EVM blockchains. The results were that despite RipeMD160 being a precompile, while Keccak256 an opcode, RipeMD160 based lamport signatures were cheaper to verify because they require smaller message hashes and thus smaller keys and signatures.",
    tags: ["Quantum Security", "Blockchain", "Analysis"],
    sourceLinks: [
      {
        url: "https://sepolia.etherscan.io/address/0x030Af67f0432731e9D627584a4fc707d9feBfD57#code",
        displayText: "Etherscan - Comparison Contract"
      },
      {
        url: "https://github.com/Pauli-Group/walletV2/blob/master/contracts/Test/HashComparison.sol",
        displayText: "GitHub - Comparison Contract"
      },
      {
        url: "https://github.com/Pauli-Group/walletV2/blob/master/scripts/HashComparison.ts",
        displayText: "GitHub - Comparison Script"
      },
      {
        url: "https://twitter.com/william00000010/status/1682832652104089600",
        displayText: "Twitter - Summery Of Findings"
      }
    ],
    interfaceLinks: [],
    buttons: []
  },
  {
    name: "Twitter Account",
    description: "Mostly tweet'n bout Cardano",
    tags: ["Social Media"],
    sourceLinks: [],
    interfaceLinks: [
      {
        url: "https://twitter.com/william00000010",
        displayText: "@william00000010"
      },
      {
        url: "https://xcancel.com/william00000010",
        displayText: "XCancel - @william00000010"
      }
    ],
    buttons: [
      {
        text: "copy twitter handle",
        copyText: "@william00000010"
      }
    ]
  },
  {
    name: "Payment Addresses And Public Key Collection",
    description: "Here I keep an extensive list of addresses and public keys. You can use these to send me money, encrypt messages for me, or verify my signatures.",
    tags: ["identity"],
    sourceLinks: [],
    interfaceLinks: [
      {
        url: "https://pay.williamdoyle.ca",
        displayText: "pay.williamdoyle.ca"
      }
    ],
    buttons: []
  },
  {
    name: "williamdoyle.eth",
    description: "My ENS domain. Includes a list of addresses on various blockchains.",
    tags: ["identity"],
    sourceLinks: [],
    interfaceLinks: [
      {
        url: "https://app.ens.domains/williamdoyle.eth",
        displayText: "williamdoyle.eth"
      }
    ],
    buttons: [
      {
        text: "copy ENS",
        copyText: "williamdoyle.eth"
      }
    ]
  }
];


const tags = {
  "Cardano Governance": "#afeb3b",
  "Quantum Security": "yellow",
  "Blockchain - Fun": "#2196f3",
  "Blockchain": "#9e9e9e",
  "In Progress": "#ff9800",
  "Fun": "#E31C79",
  "Web - Experimental": "pink",
  "Social Media": "lightblue",
  "identity": "lightgreen",
  "Simple Experiment": "hotpink",
  "Utility": "#E1BEE7",
  "In Progress": "orange",
  "Analysis": "#B695C0"
};
