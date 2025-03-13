import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  SquareArrowOutUpRight,
  BriefcaseBusiness,
} from "lucide-react";

export const DATA = {
  name: "Shankar Rao Mata",
  initials: "SM",
  url: "https://shankarrao.xyz",
  location: "Albuquerque, NM",
  locationLink: "https://www.google.com/maps/place/Albuquerque",
  description:
    "Dynamic and highly skilled Full Stack Cloud Engineer with 12 years of experience in designing, developing, and deploying scalable, secure, and efficient cloud-based applications.",
  summary:
    "Expertise in full-stack development, CI/CD pipelines, and cloud infrastructure automation using tools like AWS, Docker, ECS, Cloud Run, Cloud Function, Kafka, Pub Sub and Terraform.",
  avatarUrl: "/me.png",
  skills: {
    programmingLanguages: [
      "Java",
      "Typescript",
      "Rust",
      "GO",
      "JavaScript",
      "Solidity",
      "Python",
      "NodeJS",
    ],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Cosmos DB"],
    Cloud: ["AWS", "Azure", "GCP", "Docker", "ECS", "Terraform", "Kafka"],
    frameworks: ["Spring","Substrate", "Angular", "NextJS", "Bootstrap"],
    technologies: ["Hardhat", "Truffle", "Ganache", "Foundry", "CI/CD"],
  },
  navbar: [
    { href: "/#hero", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: BriefcaseBusiness, label: "Work" },
    {
      href: "https://drive.google.com/file/d/1MQoFSTE08YViOOelkf1bqRKm5PoTNwXY/view?usp=sharing",
      icon: SquareArrowOutUpRight,
      label: "Resume",
    },
  ],
  contact: {
    email: "mshankarrao1970@gmail.com",
    tel: "+917981277683",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mshankarrao",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mshankarrao/",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/shankarlive",
        icon: Icons.x,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "AI Blockchain Club",
      href: "",
      badges: [],
      location: "GMRIT College",
      title: "Trainer/Coach",
      logoUrl: "",
      start: "AUG 2024",
      end: "Present",
      description:
        "Trainer and coach delivering and organizing the latest technology training. Organized AI and Blockchain-based training at GMRIT College. Designed practical-oriented training syllabus focusing on hands-on learning experiences. Delivered courses with the intent to impart effective, practical knowledge to students through in-person training and workshops.",
    },
    {
      company: "Ford Motor Company",
      href: "",
      badges: [],
      location: "",
      title: "Technical Lead",
      logoUrl: "",
      start: "MAY 2021",
      end: "AUG 2024",
      description:
        "Decision maker and delivery lead for multiple services and products. Mentored and coached team members on emerging technologies. Designed and implemented CI/CD pipelines for the organization. Established Infrastructure as Code using Terraform. Played a key role in developing the blockchain department by creating Smart Contracts using Solidity. Built a React-based dashboard tool for reviewing service metrics.",
    },
    {
      company: "Imbue Network (Polkadot)",
      href: "",
      badges: [],
      location: "",
      title: "Open-Source Contributor",
      logoUrl: "",
      start: "JAN 2021",
      end: "Present",
      description:
        "Contributed as a core team member to the Imbue Network. Designed and developed modular pallets using FRAME from Substrate. Built the frontend using React and Polkadot API. Automated builds and testing pipelines using GitHub Actions. Integrated GitHub commits with Telegram for notifications via Telegraf. Configured end-to-end unit and integration tests for pallets. Conducted benchmarking to determine pallet weights.",
    },
    {
      company: "Kylin (Polkadot)",
      href: "",
      badges: [],
      location: "",
      title: "Open-Source Contributor",
      logoUrl: "",
      start: "JUN 2019",
      end: "JAN 2021",
      description:
        "Contributed to modular pallet design using FRAME from Substrate. Developed APIs for a data warehouse and implemented off-chain worker functionality for the oracle system. Created unit and integration tests for pallets. Integrated GitHub with Discord for deployment notifications. Conducted benchmarking for pallet weights.",
    },
    {
      company: "Advaita Corp",
      href: "",
      badges: [],
      location: "",
      title: "Senior Software Engineer",
      logoUrl: "",
      start: "JUN 2020",
      end: "MAY 2021",
      description:
        "Cloud architect responsible for designing and implementing applications.\n\n Built decentralized applications (dApps) using ReactJS, Web3.js, and Ether.js. Developed Smart Contracts with Solidity. Created several proofs of concept (POCs) using Rust. Also worked as a Full Stack Engineer with Angular and Spring Boot technologies.",
    },
    {
      company: "Altimetrik Corp",
      href: "",
      badges: [],
      location: "",
      title: "Senior Software Engineer",
      logoUrl: "",
      start: "JUN 2017",
      end: "JUN 2020",
      description:
        "Redesigned and modernized applications to follow the twelve-factor app methodology. Built and owned several cloud-native applications using ReactJS and NodeJS. Led the insourcing of multiple microservices, saving millions in costs. Upgraded application architectures with the latest technologies, enhancing performance and efficiency.",
    },
    {
      company: "Answers Corp",
      href: "",
      badges: [],
      location: "",
      title: "Software Engineer II",
      logoUrl: "",
      start: "JUN 2016",
      end: "MAY 2017",
      description:
        "Migrated monolith applications to lightweight, decoupled microservices. Owned and managed several microservices post-migration. Designed and developed a front-end UI testing tool to simplify survey application testing for QA teams. Containerized Spring Boot apps for deployment. Collaborated closely with customers during requirement refinement workshops.",
    },
    {
      company: "Tata Consultancy Services",
      href: "",
      badges: [],
      location: "",
      title: "Software Engineer",
      logoUrl: "",
      start: "JUN 2012",
      end: "JAN 2015",
      description:
        "Served as a module lead for core applications throughout the SDLC. Introduced innovative techniques to improve legacy methodologies. Created the first CI/CD pipeline for the team using Jenkins. Received the Best Employee Award for exceptional work and a Leadership Award for efficient project management.",
    },
  ],
  education: [
    {
      school: "University of New Mexico",
      href: "https://www.unm.edu/",
      degree: "M.S. in Computer Science",
      logoUrl: "",
      start: "2015",
      end: "2016",
    },
    {
      school: "GITAM University",
      href: "https://www.gitam.edu/",
      degree: "Bachelors in Information Technology",
      logoUrl: "",
      start: "2008",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "BetStash",
      href: "",
      dates: "Jan 2024 – Present",
      active: true,
      description:
        "Developed a live betting platform using blockchain technology to ensure transparency and security. Build on Aptos blockchain. Developed smart contracts using Move and integrated with the frontend using Web3.js.",
      technologies: ["React.js", "Typescript", "Hardhat", "Ethers.js", "Solidity"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Kylin Network Contribution",
      href: "",
      dates: "Jun 2019 – Jan 2021",
      active: false,
      description:
        "Developed data warehouse ecosystem using APIs, created pallets for oracle system off-chain worker, and implemented integration between GitHub and discord for deployment notifications.",
      technologies: ["Substrate", "FRAME", "Rust", "GitHub Actions"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "NFT Marketplace",
      href: "",
      dates: "",
      active: true,
      description: "Built smart contracts for NFT marketplace using Solidity.",
      technologies: ["Solidity", "Smart Contracts", "Web3"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "VerifEd",
      href: "https://tal3i-kyaaa-aaaag-alfrq-cai.icp0.io/",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Built a decentralized educational and certification platform with AI-powered proctoring to ensure tamper-proof certification issuance stored on the blockchain.",
      technologies: [
        "React.js",
        "Typescript",
        "ICP Network",
        "Motoko",
        "TailwindCSS",
        "Shadcn UI",
        "Socket Io",
      ],
      links: [
        {
          type: "Website",
          href: "https://tal3i-kyaaa-aaaag-alfrq-cai.icp0.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/verifed.gif",
      video: "",
    },
    {
      title: "LunaCred",
      href: "https://lunacred.vercel.app/",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "Developed a Referral-Based Credibility Staking Protocol aimed at incentivizing honest referrals with dynamic rewards or penalties.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Solidity",
        "Moonbeam Network",
      ],
      links: [
        {
          type: "Website",
          href: "https://lunacred.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lunacred.png",
      video: "",
    },
  ],
  // Keeping original hackathon entries as requested
  hackathons: [
    {
      title: "Bitcoin Bankathon",
      dates: "November 19rd - December 8th, 2021",
      winner: "1st Place",
      location: "online",
      description:
        "Developed grow protocol, a decentralized lending platform using blockchain technology. where user can lend and borrow money by staking their crypto assets as collateral.",
      links: ["https://youtu.be/nCyvFkaslRU"],
    },
    {
      title: "EasyA Hackathon",
      dates: "May 2024",
      winner: "1st Place",
      location: "San Francisco, CA",
      description:
        "Built a decentralized food waste management system using blockchain technology. The system allows users to donate food to the needy and earn rewards.",
      links: ["https://youtu.be/nCyvFkaslRU"],
    },
    {
      title: "OneBlock+ Polkadot Hackathon",
      dates: "November 23rd - 25th, 2024",
      location: "Bangkok, thailand",
      description:
        "Developed a Referral-Based Credibility Staking Protocol aimed at incentivizing honest referrals with dynamic rewards or penalties..",
      image:
        "https://miro.medium.com/v2/resize:fit:2400/1*YKY5yPoVDZgpzaO--kCt3w.jpeg",
      links: [],
    },
    {
      title: "Dymension Rollapp Draft Hackathon",
      dates: "November 23rd - 25th, 2024",
      winner: "2nd Place",
      location: "online",
      description: "Developed a decentralised 3d gaming platform .",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoM2wFiK14OaMiPsC2ygxxDSTB4R6ZgB2FA&s",
      links: [],
    },
  ],
} as const;
