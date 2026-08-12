import { OneSkillObjectType, allSkills } from '@/hooks/useSkills';

export enum ProjectType {
  Personal = 'Personal',
  AIWeb3 = 'AIWeb3',
  OpenSource = 'OpenSource',
  Client = 'Client'
}

export type ProjectTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ProjectDataType = {
  name: string;
  des: string;
  demo?: string;
  github?: string;
  image: string;
  /** Extra screens for stacked / flip galleries (client apps). */
  images?: string[];
  skills: OneSkillObjectType[];
  type: ProjectType;
  industry?: string;
  client?: string;
  testimonials?: ProjectTestimonial[];
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
    des: 'Polished ERC-1155 marketplace to mint, list, and trade multi-edition NFTs — wallet connect, live listings, quantity-aware buys, and a modern dark Web3 UI.',
    demo: 'https://nft-marketplace-seven-lovat.vercel.app/',
    github: 'https://github.com/atharvnaik1/NFT-MARKETPLACE',
    image: '/images/projects/nft-card.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.tailwindcss,
      allSkills.etherjs,
      allSkills.solidity
    ],
    type: ProjectType.Personal
  },

  JIRAClone: {
    name: 'JIRA Clone',
    des: 'Refined Kanban workspace inspired by Jira — backlog to done boards, priority badges, checklists, due dates, and realtime-style task movement in a clean SaaS UI.',
    demo: ' https://jirax-clonex.vercel.app',
    github: 'https://github.com/atharvnaik1',
    image: '/images/projects/jira-card.webp',
    skills: [
      allSkills.reactjs,
      allSkills.javascript,
      allSkills.nodejs,
      allSkills.sass
    ],
    type: ProjectType.Personal
  },

  // Forgerepo: {
  //   name: 'Forgerepo',
  //   des: 'Forgerepo is github clone where users can create, update, delete repositories and also can add, delete, update files in the repository. Users can also star repositories and follow other users.',
  //   demo: 'https://github-clone-98qw.onrender.com/',
  //   github: 'https://github.com/atharvnaik1/github-clone',
  //   image: '/images/projects/image.gif',
  //   skills: [
  //     allSkills.nodejs,
  //     allSkills.javascript,
  //     allSkills.reactjs,
  //     allSkills.tailwindcss
  //   ],
  //   type: ProjectType.Personal
  // },

  // TAXAICHATBOT: {
  //   name: 'TAX AI CHATBOT ',
  //   des: 'A chatbot that helps users to calculate their tax and also provides information about tax laws and regulations. It is built using React, Node.js, and MongoDB. The chatbot uses AI to understand user queries and provide accurate responses. It also has a user-friendly interface that makes it easy to use for everyone.',
  //   demo: 'https://taxsavvy.vercel.app/',
  //   github: 'https://github.com/atharvnaik1/AI-CHATBOT',
  //   image: '/images/projects/image(2).webp',
  //   skills: [
  //     allSkills.nextjs,
  //     allSkills.typescript,
  //     allSkills.nodejs,
  //     allSkills.tailwindcss
  //   ],
  //   type: ProjectType.Personal
  // },

  // ChatBox: {
  //   name: 'ChatBox',
  //   des: ' Chatting application with real-time messaging and user authentication. Users can create chat rooms, join existing rooms, and send messages to other users in the room.',
  //   demo: 'https://mern-chat-app-v9tm.onrender.com/login',
  //   github: 'https://github.com/atharvnaik1/mern-chat-app',
  //   image: '/images/projects/image(1).gif',
  //   skills: [
  //     allSkills.nodejs,
  //     allSkills.javascript,
  //     allSkills.reactjs,
  //     allSkills.tailwindcss
  //   ],
  //   type: ProjectType.Personal
  // },

  CosmeticEcommerce: {
    name: 'Lumère Beauty — Cosmetic Ecommerce',
    des: 'Premium cosmetics ecommerce experience with elegant product storytelling, curated collections, smooth checkout flows, and conversion-focused UI for beauty & skincare brands.',
    demo: '',
    github: '',
    image: '/images/projects/cosmetic-ecommerce.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.reactjs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Personal
  },

  portfolio: {
    name: "Atharv's Portfolio",
    des: 'This is my personal portfolio website. It showcases my skills, projects, and experiences as a Full Stack Developer.',
    demo: 'https://atharvnaiks.vercel.app/',
    github: 'https://github.com/atharvnaik1/Portfolio-atharv',
    image: '/images/projects/portfolio-card.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.etherjs
    ],
    type: ProjectType.Personal
  }

  // Dozenmalls moved to Live Client Apps (Founder)
};

export const opensourceProjects: ProjectsObjectType = {
  twenty: {
    name: 'Tooljet',
    des: 'Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀 ',
    demo: 'https://github.com/Tooljet/',
    github: 'https://github.com/Tooljet/',
    image: '/images/projects/tooljet-card.webp',
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
    image: '/images/projects/illa-card.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.OpenSource
  }
};

/** Live client apps — Dozenmalls (Founder) first, Founders Bridge last. */
export const clientProjects: ProjectsObjectType = {
  Dozenmalls: {
    name: 'Dozenmalls (Founder)',
    des: 'Founded quick-commerce iOS app for groceries & essentials — 500+ customers during COVID, doorstep delivery, realtime inventory, and high-frequency reorder flows.',
    industry: 'Quick Commerce',
    client: 'IPASHIP (Founder-led)',
    image: '/images/projects/clients/dozenmalls-1.webp',
    images: [
      '/images/projects/clients/dozenmalls-1.webp',
      '/images/projects/clients/dozenmalls-2.webp',
      '/images/projects/clients/dozenmalls-3.webp'
    ],
    skills: [
      allSkills.reactjs,
      allSkills.javascript,
      allSkills.nodejs,
      allSkills.sass
    ],
    type: ProjectType.Client,
    featured: true,
    testimonials: [
      {
        quote:
          'As a founder building during COVID, I needed someone who could move like a CTO on steroids — not just code, but own the entire product. He shipped our quick-commerce iOS app fast enough to serve 500+ customers when it mattered most, with delivery flows that actually worked under real pressure.',
        author: 'Atharv Naik',
        role: 'Founder · Dozenmalls · IPASHIP'
      }
    ]
  },
  OrgOrbit: {
    name: 'OrgOrbit',
    des: 'AI-native community super-app to mobilize orgs — custom AI modules & insights, fundraising, multi-format posts, and engagement analytics for leaders.',
    industry: 'Community & AI',
    client: 'Purpus Technologies',
    image: '/images/projects/clients/orgorbit-1.webp',
    images: [
      '/images/projects/clients/orgorbit-1.webp',
      '/images/projects/clients/orgorbit-2.webp',
      '/images/projects/clients/orgorbit-3.webp',
      '/images/projects/clients/orgorbit-4.webp',
      '/images/projects/clients/orgorbit-5.webp'
    ],
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.nextjs
    ],
    type: ProjectType.Client,
    appStore: 'https://apps.apple.com/in/app/orgorbit/id6479863473',
    playStore:
      'https://play.google.com/store/apps/details?id=com.purpus&pcampaignid=web_share',
    testimonials: [
      {
        quote:
          'Atharv is like a CTO on steroids — he ships with the speed of a founder and the depth of a seasoned engineering leader. He transformed our product with experience you can feel in every release, and we now see 40% higher user retention.',
        author: 'Founder',
        role: 'Purpus Technologies · OrgOrbit'
      }
    ]
  },
  JapaRuchi: {
    name: 'MahaMantra Japa Ruchi',
    des: 'AI-assisted spiritual practice app — chant detection, progress analytics, leaderboards, and community engagement built for daily devotion.',
    industry: 'Spiritual & Wellness',
    client: 'OrgOrbit',
    image: '/images/projects/clients/japa-ruchi-1.webp',
    images: [
      '/images/projects/clients/japa-ruchi-1.webp',
      '/images/projects/clients/japa-ruchi-2.webp',
      '/images/projects/clients/japa-ruchi-3.webp',
      '/images/projects/clients/japa-ruchi-4.webp'
    ],
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
      'https://play.google.com/store/apps/details?id=com.orgorbit.japa&pcampaignid=web_share',
    testimonials: [
      {
        quote:
          'He designed a product strategy that gave my spiritual journey a whole new way to earn passive income. The app still feels devotional at its core — but now it also sustains the mission with revenue paths I never imagined were possible.',
        author: 'Founder',
        role: 'MahaMantra Japa Ruchi'
      }
    ]
  },
  BetweenBreaks: {
    name: 'BetweenBreaks',
    des: 'Campus socializing & career network — instant messaging, AI resume editing with role-based suggestions, and Handshake-style connections.',
    industry: 'Education & Social',
    client: 'BetweenBreaks',
    image: '/images/projects/clients/between-breaks-1.webp',
    images: [
      '/images/projects/clients/between-breaks-1.webp',
      '/images/projects/clients/between-breaks-2.webp',
      '/images/projects/clients/between-breaks-3.webp'
    ],
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Client,
    testimonials: [
      {
        quote:
          'He transformed our campus product with the kind of experience you only get from someone who has shipped real mobile apps before. Engagement went up across messaging and career flows — we are now seeing roughly 40% better retention among active students on the platform.',
        author: 'Founder',
        role: 'BetweenBreaks'
      }
    ]
  },
  WhyNew: {
    name: 'Why New',
    des: '2nd-hand mobile marketplace — verified listings, doorstep pickup flows, instant payments, and a high-conversion sell/exchange experience.',
    industry: 'Mobile Marketplace',
    client: 'Why New',
    image: '/images/projects/clients/why-new-1.webp',
    images: [
      '/images/projects/clients/why-new-1.webp',
      '/images/projects/clients/why-new-2.webp',
      '/images/projects/clients/why-new-3.webp'
    ],
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Client,
    appStore: 'https://apps.apple.com/in/app/why-new/id6760283075',
    testimonials: [
      {
        quote:
          'I had doubts about whether a marketplace app could feel premium and convert on mobile. He broke those myths completely. His expertise in mobile product design showed up in our listing flows, pickup experience, and payments — and the results finally matched the vision.',
        author: 'Founder',
        role: 'Why New'
      }
    ]
  },
  KavachQR: {
    name: 'Kavach QR',
    des: 'Smart vehicle safety ecosystem — QR identity, AI-powered ambulance/towing dispatch, live tracking, and partner analytics (Uber for ambulances).',
    industry: 'Safety & Logistics',
    client: 'Kavach Solutions',
    image: '/images/projects/clients/kavach-qr-1.webp',
    images: [
      '/images/projects/clients/kavach-qr-1.webp',
      '/images/projects/clients/kavach-qr-2.webp',
      '/images/projects/clients/kavach-qr-3.webp',
      '/images/projects/clients/kavach-qr-4.webp',
      '/images/projects/clients/kavach-qr-5.webp'
    ],
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.python
    ],
    type: ProjectType.Client,
    appStore: 'https://apps.apple.com/in/app/kavach-qr/id6479373315',
    playStore:
      'https://play.google.com/store/apps/details?id=com.kavach.qr&pcampaignid=web_share',
    testimonials: [
      {
        quote:
          'He broke every myth I had about building a serious mobile product on a startup budget. I did not believe the pace or the polish was possible until users started showing up and staying. His mobile expertise gave us real traction — and directly helped us close our seed funding round.',
        author: 'Founder',
        role: 'Kavach Solutions · Kavach QR'
      }
    ]
  },
  FoundersBridge: {
    name: 'Founders Bridge',
    des: 'Legal & compliance portal for firms — marketplace services, billing ops, task workflows, and admin tooling for GST, ROC, tax, and startup filings.',
    industry: 'Legal & Compliance',
    client: 'Founders Bridge',
    image: '/images/projects/clients/founders-bridge-1.webp',
    images: [
      '/images/projects/clients/founders-bridge-1.webp',
      '/images/projects/clients/founders-bridge-2.webp',
      '/images/projects/clients/founders-bridge-3.webp'
    ],
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss
    ],
    type: ProjectType.Client,
    testimonials: [
      {
        quote:
          'We needed more than a compliance portal — we needed a product founders would trust with their company filings. He redesigned our workflows, billing ops, and marketplace experience with sharp product thinking. Our startup clients feel the difference, and it has become a real growth lever for the firm.',
        author: 'Founder',
        role: 'Founders Bridge'
      }
    ]
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
    image: '/images/projects/nft-card.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.tailwindcss,
      allSkills.etherjs,
      allSkills.solidity
    ],
    type: ProjectType.AIWeb3
  },
  bot: {
    name: 'Bep-20 Trading bot ',
    des: 'Velosol is a trading bot that helps users to trade cryptocurrencies on the Solana blockchain. The bot uses AI to analyze market trends and make predictions about the future price of cryptocurrencies. It also has a user-friendly interface that makes it easy to use for everyone.',
    demo: '',
    github: 'https://github.com/atharvnaik1/Crypto-bep-20-Algo-Trader',
    image: '/images/projects/tradingbot-card.webp',
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
    image: '/images/projects/defiai-card.webp',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.etherjs,
      allSkills.solidity
    ],
    type: ProjectType.AIWeb3
  },
  Aiquestor: {
    name: 'Aiquestor',
    des: 'Aiquestor uses spacy to generate questions and mcqs from pdfs. ',
    demo: 'https://aiquestor.streamlit.app/',
    github: 'https://github.com/atharvnaik1/PDF-TO-MCQ-USING-NLP-',
    image: '/images/projects/aiquestor-card.webp',
    skills: [
      allSkills.reactjs,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.python
    ],
    type: ProjectType.AIWeb3
  }
};
