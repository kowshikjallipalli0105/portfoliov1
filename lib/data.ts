import HabitTracerImg from "@/public/HabitTracer.png";
import TrackmyissueImg from "@/public/Trackmyissue.jpg";
import PortfolioImg from "@/public/portfolio.png";
import CSAImg from "@/public/CSA.jpg";
import CADImg from "@/public/CAD.jpg";
import AWSImg from "@/public/AWS.jpg";
import GITImg from "@/public/GIT.jpg";
import DSAJImg from "@/public/DSAJ.jpg";
import ITJImg from "@/public/ITJ.jpg";
import ITPImg from "@/public/ITP.jpg";
import ITHImg from "@/public/ITH.jpg";
import RHCSAImg from "@/public/RHCSA.jpg";
import { CgCap, CgPen, CgWorkAlt } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavaFill,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiServerLine,
  RiServiceFill,
  RiServiceLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandCpp,
  TbBrandDocker,
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedhat,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2024;

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/119750794?v=4",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Jallipalli Kowshik",
  title: "Cloud & FullStack Developer",
  experience: `${experienceInYears} year`,
  likes: "building web and mobile apps",
  resumeLink: `https://drive.google.com/file/d/1R_3gutxjtzVhNAKfwP8VGTym8QZVO3aV/view?usp=sharing`,
  linkedInLink: "https://www.linkedin.com/in/kowshik-jallipalli",
  githubLink: "https://github.com/kowshikjallipalli0105",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
    title: "AWS Development",
    description:
      "Built serverless functions using AWS Lambda and integrated them with S3, SNS, and API Gateway.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
  {
    title: "Linux Intern",
    description:
      "Troubleshot common Linux system issues and performed routine maintenance tasks.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Java Intern",
    description:
      "Created and explained Java code examples to help juniors grasp real-time problem-solving.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },

  {
    title: "AWS Development",
    description:
      "Integrated AWS services into application workflows for storage, compute, and messaging.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website to showcase projects, skills, and resume with a clean, responsive design.",
    tags: ["Html", "Css", "Typescript", "JavaScript", "Vercel"],
    imageUrl: PortfolioImg,
    url: "https://kowshikjallipalli0105.github.io/habittracer/",
    githubUrl:"https://github.com/kowshikjallipalli0105/habittracer"
  },
  {
    title: "Habit Tracer",
    description:
      "Created a habit tracking web app with daily streaks and deployed it on AWS infrastructure for scalable access.",
    tags: ["Html", "Css", "DynamoDB", "JavaScript", "AWS"],
    imageUrl: HabitTracerImg,
    url: "https://kowshikjallipalli0105.github.io/habittracer/",
    githubUrl:"https://github.com/kowshikjallipalli0105/habittracer"
  },
  {
    title: "TrackMyIssue",
    description:
      "Simulated a real-time campus IT helpdesk using ServiceNow, showcasing core ITSM workflows, automation, and visual dashboards",
    tags: ["ITSM Modules", "Visual Task Boards", "Virtual Agent", "Flow Designer"],
    imageUrl: TrackmyissueImg,
    url: "",
    githubUrl:"hh"
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "Git", icon: RiGitBranchLine },
  { name:"MySQL", icon:TbBrandMysql },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Java", icon: RiJavaFill },
  { name: "Cpp", icon: TbBrandCpp },
  { name: "Docker", icon: TbBrandDocker },
  { name: "Python", icon: TbBrandPython },
  { name: "RedHat", icon: TbBrandRedhat },
  { name: "AWS", icon: FaAws },
  { name: "ServiceNow", icon: RiServerLine },
] as const;
export const educationData=[
{
  title: "B-Tech in Information Technology",
    description:
      "Aditya college of engineering and technology",
    icon: "🎓",
    CGPA:"CGPA : 8.26",
    date: "2022-2026",
},
{
  title: "12th",
    description:
      "Narayana junior college",
    icon: "🎓",
    CGPA:"percentage : 82.6%",
    date: "2020-2022",
},
{
  title: "10th",
    description:
      "Narayana School",
    icon: "🎓",
    CGPA:"percentage : 99.5%",
    date: "2019-2020",
},
]as const;
export const certificationsData=[
  {
    title: " ServiceNow Certified Application Developer",
    imageUrl: CADImg,
  },
  {
    title: "ServiceNow Certified System Administrator",
    imageUrl: CSAImg,
  },
  {
    title: "AWS Certified Developer Associate",
    imageUrl: AWSImg,
  },
  {
    title: "GitHub Certification",
    imageUrl: GITImg,
  },
  {
    title: "Data Structures Using Java",
    imageUrl: DSAJImg,
  },
  {
    title: "Red Hat Certified System Administrator",
    imageUrl: RHCSAImg,
  },
  {
    title: "IT Specialist Java",
    imageUrl: ITJImg,
  },
  {
    title: "IT Specialist Python",
    imageUrl: ITPImg,
  },
  {
    title: "IT Specialist HTML&CSS",
    imageUrl: ITHImg,
  },
  
] as const;