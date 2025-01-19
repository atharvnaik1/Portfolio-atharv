import { OneSkillObjectType, allSkills } from '@/hooks/useSkills';

export enum ProjectType {
  Personal = 'Personal',
  AIWeb3 = 'AIWeb3',
  OpenSource = 'OpenSource'
}

export type ProjectDataType = {
  name: string;
  des: string;
  demo: string;
  github: string;
  image: string;
  skills: OneSkillObjectType[];
  type: ProjectType;
};

export type ProjectsObjectType = {
  [index: string]: ProjectDataType;
};
export const personalProjects: ProjectsObjectType = {
  authCertificate: {
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

  datavault: {
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

  chainintract: {
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
  chesschain: {
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

export const web3Projects: ProjectsObjectType = {
  Velosol: {
    name: 'Velosol- Solana Trading bot ',
    des: 'Velosol is a trading bot that helps users to trade cryptocurrencies on the Solana blockchain. The bot uses AI to analyze market trends and make predictions about the future price of cryptocurrencies. It also has a user-friendly interface that makes it easy to use for everyone.',
    demo: '',
    github: '',
    image: '/images/projects/velosol.png',
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
  jetpackcat: {
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
//   donpepe: {;
//     name: 'DonPepe: New crypto token',
//     des: 'Don Pepe is a new crypto token that is based on the famous meme coin Pepe. The project aims to create the first meme coin with an AI-powered exchange system. This exchange system will make it easier and more secure for people to buy, sell, and trade cryptocurrencies. The Don Pepe token will be used to power the exchange system and will also be used to reward users for participating in the community.',
//     demo: 'https://www.donpepe-ai.com/',
//     github: 'https://github.com/abhithory/pepe-coin',
//     image: '/images/projects/donpepe.png',
//     skills: [
//       allSkills.nextjs,
//       allSkills.typescript,
//       allSkills.nodejs,
//       allSkills.tailwindcss,
//       allSkills.etherjs,
//       allSkills.solidity,
//     ],
//     type: ProjectType.Freelance,
//   },
// };
