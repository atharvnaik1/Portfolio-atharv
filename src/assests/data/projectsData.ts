import { OneSkillObjectType, allSkills } from '@/hooks/useSkills';

export enum ProjectType {
  Personal = 'Personal',
  AIWeb3 = 'AIWeb3',
  OpenSource = 'OpenSource',
  Client = 'Client'
}

export type ProjectDataType = {
  name: string;
  des: string;
  demo?: string;
  github?: string;
  image: string;
  skills: OneSkillObjectType[];
  type: ProjectType;
  appStore?: string;
  playStore?: string;
  featured?: boolean;
};

export type ProjectsObjectType = {
  [index: string]: ProjectDataType;
};
export const personalProjects: ProjectsObjectType = {
  NFTMARKET: {
    name: ' ERC-1155 NFT Market',
    des: 'NFT Market is a platform where users can create nfts, buy, sell, and trade NFTs. The platform has a user-friendly interface that makes it easy to use for everyone.',
    demo: 'https://nft-marketplace-seven-lovat.vercel.app/',
    github: 'https://github.com/atharvnaik1/NFT-MARKETPLACE',
    image: '/images/projects/nft.png',
    skills: [ allSkills.nextjs, allSkills.typescript, 
      allSkills.tailwindcss, allSkills.etherjs, allSkills.solidity
    
    ],
    type: ProjectType.Personal
  },

  JIRAClone: {
    name: 'JIRA Clone',
    des: 'Designed a responsive and intuitive UI to track progress, manage workflows, and assign tasks dynamically in realtime.',
    demo: ' https://jirax-clonex.vercel.app',
    github: 'https://github.com/atharvnaik1',
    image: '/images/projects/asaca.png',
    skills: [
      allSkills.reactjs,
      allSkills.javascript,
      allSkills.nodejs,
      allSkills.sass
    ],
    type: ProjectType.Personal
  },

  Forgerepo: {
    name: 'Forgerepo',
    des: 'Forgerepo is github clone where users can create, update, delete repositories and also can add, delete, update files in the repository. Users can also star repositories and follow other users.',
    demo: 'https://github-clone-98qw.onrender.com/',
    github: 'https://github.com/atharvnaik1/github-clone',
    image: '/images/projects/image.gif',
    skills: [
      allSkills.nodejs,
      allSkills.javascript,
      allSkills.reactjs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Personal
  },

  TAXAICHATBOT: {
    name: 'TAX AI CHATBOT ',
    des: 'A chatbot that helps users to calculate their tax and also provides information about tax laws and regulations. It is built using React, Node.js, and MongoDB. The chatbot uses AI to understand user queries and provide accurate responses. It also has a user-friendly interface that makes it easy to use for everyone.',
    demo: 'https://taxsavvy.vercel.app/',
    github: 'https://github.com/atharvnaik1/AI-CHATBOT',
    image: '/images/projects/image(2).webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Personal
  },
  ChatBox: {
    name: 'ChatBox',
    des: ' Chatting application with real-time messaging and user authentication. Users can create chat rooms, join existing rooms, and send messages to other users in the room.',
    demo: 'https://mern-chat-app-v9tm.onrender.com/login',
    github: 'https://github.com/atharvnaik1/mern-chat-app',
    image: '/images/projects/image(1).gif',
    skills: [
      allSkills.nodejs,
      allSkills.javascript,
      allSkills.reactjs,
      allSkills.tailwindcss
      // allSkills.Zustand,
      // allSkills.socketio,
    ],
    type: ProjectType.Personal
  },
  portfolio: {
    name: "Atharv's Portfolio",
    des: 'This is my personal portfolio website. It showcases my skills, projects, and experiences as a Full Stack Developer.',
    demo: 'https://atharvnaiks.vercel.app/',
    github: 'https://github.com/atharvnaik1/Portfolio-atharv',
    image: '/images/projects/porfolio.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.etherjs
    ],
    type: ProjectType.Personal
  },
  Dozenmalls: {
    name: 'Dozenmalls',
    des: ' Dozenmalls was quick commerce platform with traction of more than 500 customers that delivers groceries, essentials during Covid Period. ',
    demo: '',
    github: '',
    image: '/images/projects/screen-6.webp',
    skills: [
      allSkills.reactjs,
      allSkills.javascript,
      allSkills.nodejs,
      allSkills.sass
    ],
    type: ProjectType.Personal
  }

};

export const opensourceProjects: ProjectsObjectType = {
  twenty: {
    name: 'Tooljet',
    des: 'Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀 ',
    demo: 'https://github.com/Tooljet/',
    github: 'https://github.com/Tooljet/',
    image: '/images/projects/tooljet.png',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.nestjs
    ],
    type: ProjectType.OpenSource
  },
  agentgpt: {
    name: 'Illacloud',
    des: 'illacloud is a cloud-based platform that provides a wide range of services to help businesses grow and succeed. It offers services such as cloud storage, data analytics, machine learning, and more. The platform is built using JavaScript/TypeScript, React, Next.js, Node.js, and Tailwind CSS.',
    demo: 'https://github.com/illacloud/',
    github: '',
    image: '/images/projects/illa.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.OpenSource
  }
};

/** Successful client apps — display order: 7 → 1 (Founders Bridge last). */
export const clientProjects: ProjectsObjectType = {
  OrgOrbit: {
    name: 'OrgOrbit',
    des: 'AI-native community super-app to mobilize orgs — custom AI modules & insights, fundraising, multi-format posts, and engagement analytics for leaders.',
    image: '/images/projects/clients/orgorbit.webp',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.nextjs
    ],
    type: ProjectType.Client,
    appStore: 'https://apps.apple.com/in/app/orgorbit/id6479863473',
    playStore:
      'https://play.google.com/store/apps/details?id=com.purpus&pcampaignid=web_share'
  },
  JapaRuchi: {
    name: 'MahaMantra Japa Ruchi',
    des: 'AI-assisted spiritual practice app — chant detection, progress analytics, leaderboards, and community engagement built for daily devotion.',
    image: '/images/projects/clients/japa-ruchi.webp',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.python
    ],
    type: ProjectType.Client,
    appStore:
      'https://apps.apple.com/in/app/mahamantra-japa-ruchi/id6754645747',
    playStore:
      'https://play.google.com/store/apps/details?id=com.orgorbit.japa&pcampaignid=web_share'
  },
  BetweenBreaks: {
    name: 'BetweenBreaks',
    des: 'Campus socializing & career network — instant messaging, AI resume editing with role-based suggestions, and Handshake-style connections.',
    image: '/images/projects/clients/between-breaks.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Client
  },
  WhyNew: {
    name: 'Why New',
    des: '2nd-hand mobile marketplace — verified listings, doorstep pickup flows, instant payments, and a high-conversion sell/exchange experience.',
    image: '/images/projects/clients/why-new.webp',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Client,
    appStore: 'https://apps.apple.com/in/app/why-new/id6760283075'
  },
  KavachQR: {
    name: 'Kavach QR',
    des: 'Smart vehicle safety ecosystem — QR identity, AI-powered ambulance/towing dispatch, live tracking, and partner analytics (Uber for ambulances).',
    image: '/images/projects/clients/kavach-qr.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.python
    ],
    type: ProjectType.Client,
    appStore: 'https://apps.apple.com/in/app/kavach-qr/id6479373315',
    playStore:
      'https://play.google.com/store/apps/details?id=com.kavach.qr&pcampaignid=web_share'
  },
  FoundersBridge: {
    name: 'Founders Bridge',
    des: 'Legal & compliance portal for firms — marketplace services, billing ops, task workflows, and admin tooling for GST, ROC, tax, and startup filings.',
    image: '/images/projects/clients/founders-bridge.webp',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Client
  }
};

export const agencyShowcase = {
  image: '/images/projects/clients/agency-showcase.webp',
  title: 'Not just screens. Real product depth.',
  subtitle:
    'AI-native product studio — shipping production apps with analytics, engagement, and community features built to be used.'
};

export const web3Projects: ProjectsObjectType = {
  NFTMARKET: {
    name: 'ERC-1155 NFT Market',
    des: 'NFT Market is a platform where users can  create, buy, sell, and trade NFTs. The platform has a user-friendly interface that makes it easy to use for everyone.',
    demo: 'https://nft-marketplace-seven-lovat.vercel.app/',
    github: 'https://github.com/atharvnaik1/NFT-MARKETPLACE',
    image: '/images/projects/nft.png',
    skills: [ allSkills.nextjs, allSkills.typescript, 
      allSkills.tailwindcss, allSkills.etherjs, allSkills.solidity
    
    ],
    type: ProjectType.AIWeb3
  },
  bot: {
    name: 'Bep-20 Trading bot ',
    des: 'Velosol is a trading bot that helps users to trade cryptocurrencies on the Solana blockchain. The bot uses AI to analyze market trends and make predictions about the future price of cryptocurrencies. It also has a user-friendly interface that makes it easy to use for everyone.',
    demo: '',
    github: 'https://github.com/atharvnaik1/Crypto-bep-20-Algo-Trader',
    image: '/images/projects/Tradingbot1.png',
    skills: [
      allSkills.reactjs,
      allSkills.javascript,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.etherjs,
      allSkills.solidity,
      allSkills.rust
    ],
    type: ProjectType.AIWeb3
  },
  DefiAI: {
    name: 'Defi AI',
    des: 'Defi AI is a decentralized finance platform that uses AI to analyze market trends and make predictions about the future price of cryptocurrencies. The platform offers a wide range of services such as lending, borrowing, staking, and more. It is built using JavaScript/TypeScript, React, Next.js, Node.js, and Tailwind CSS.',
    demo: '',
    github: '',
    image: '/images/projects/chaingpt.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.etherjs,
      allSkills.solidity
      // allSkills.hardhat,
    ],
    type: ProjectType.AIWeb3
  },
  Aiquestor: {
    name: 'Aiquestor',
    des: 'Aiquestor uses spacy to generate questions and mcqs from pdfs. ',
    demo: 'https://aiquestor.streamlit.app/',
    github: 'https://github.com/atharvnaik1/PDF-TO-MCQ-USING-NLP-',
    image: '/images/projects/ai.png',
    skills: [
      allSkills.reactjs,
      // allSkills.typescript,
      allSkills.nodejs,
      allSkills.sass,
      // allSkills.etherjs,
      allSkills.python
      // allSkills.hardhat,
    ],
    type: ProjectType.AIWeb3
  }
};

