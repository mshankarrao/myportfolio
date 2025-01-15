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
    "Dynamic and highly skilled Full Stack Cloud DevOps Engineer with 12 years of experience in designing, developing, and deploying scalable, secure, and efficient cloud-based applications.",
  summary:
    "Expertise in full-stack development, CI/CD pipelines, and cloud infrastructure automation using tools like AWS, Docker, ECS, Cloud Run, Cloud Function, Kafka, Pub Sub and Terraform.",
  avatarUrl: "/me.png",
  skills: {
    programmingLanguages: [
      "Java",
      "Typescript",
      "Rust",
      "JavaScript",
      "Solidity",
      "Python",
      "NodeJS",
    ],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Cosmos DB"],
    Cloud: ["AWS", "Azure", "GCP", "Docker", "ECS", "Terraform", "Kafka"],
    frameworks: ["Substrate", "Angular", "ReactJS", "Bootstrap"],
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
        "Trainer and coach delivering the latest AI and Blockchain technology training. Organized practical, hands-on training with an emphasis on effective knowledge transfer. Designed a practical-oriented syllabus focusing on in-person and hands-on learning experiences.",
    },
    {
      company: "Ford Motor Company",
      href: "",
      badges: [],
      location: "",
      title: "Open-Source Contributor",
      logoUrl: "",
      start: "MAY 2021",
      end: "AUG 2024",
      description:
        "Decision maker and delivery lead for multiple services and products. Mentored team members on new technologies, designed CI/CD pipelines, established Infrastructure as Code using Terraform, developed Smart Contracts with Solidity, and built React-based tools for service metrics dashboard reviews.",
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
        "Main contributor to the Imbue Network. Designed and developed modular pallets using FRAME from Substrate. Created a frontend with React and Polkadot API. Automated builds and testing with GitHub Actions, added Telegram integration for commits, and implemented benchmarking for pallet weights.",
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
        "Contributed to modular pallet design using FRAME from Substrate. Developed APIs for a data warehouse and off-chain worker functionality for the oracle system. Configured unit and integration testing for pallets, integrated GitHub with Discord for deployment notifications, and performed benchmarking.",
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
        "Cloud architect responsible for designing and implementing applications. Built dApps using ReactJS, Web3.js, Ether.js, and Solidity for Smart Contracts. Worked on multiple POCs with Rust and developed full-stack applications with Angular and Spring Boot.",
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
        "Redesigned applications to follow the twelve-factor methodology. Built cloud-native applications with ReactJS and NodeJS. Led the insourcing of multiple microservices, saving costs, and modernized architecture with improved technologies to enhance performance.",
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
        "Module lead throughout the SDLC. Introduced innovative methodologies, created the first CI/CD pipeline for the team using Jenkins, and received awards for exceptional performance and leadership.",
    },
  ],
  education: [
    {
      school: "University of New Mexico",
      href: "",
      degree: "M.S. in Computer Science",
      logoUrl: "",
      start: "2015",
      end: "2016",
    },
    {
      school: "GITAM University",
      href: "",
      degree: "Bachelors in Information Technology",
      logoUrl: "",
      start: "2008",
      end: "2012",
    },
  ],
  projects: [
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
  ],
  // Keeping original hackathon entries as requested
  hackathons: [
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
      location: "online",
      description: "Developed a decentralised 3d gaming platform .",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoM2wFiK14OaMiPsC2ygxxDSTB4R6ZgB2FA&s",
      links: [],
    },
  ],
} as const;
