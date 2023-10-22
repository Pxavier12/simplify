import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import louertranquille from "@/public/louertranquille.png";
import idrive from "@/public/idrive.png";
import docexpress from "@/public/docexpresss.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Paris, France",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Entrepeneur",
    location: "Paris, France",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Engineering",
    location: "Paris, France",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Louer Tranquille",
    description:
      "I developped a full-stack app for this startup. The aim was to create an app for owners in search for a concierge, the app was able to give some estimations by taking in consideration the address, size, rooms and many more.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Ionos", "Vercel"],
    imageUrl: louertranquille,
  },
  {
    title: "iDrive",
    description:
      "iDrive is a backend solution that I came with to answer a need from a company. This app is a cloudstore solution.",
    tags: ["React", "TypeScript", "Next.js", ,"Google Cloud", "Firebase","Tailwind", "Redux"],
    imageUrl: idrive,
  },
  {
    title: "DocExpress",
    description:
      "DocExpress is a POC created for a company wishing to be a concurent of doctolib. The app is able to search for every doctor near you, book and manage appointments.",
    tags: ["PHP","Laravel","Livewire", "SQL", "AWS", "Tailwind"],
    imageUrl: docexpress,
  },
] as const;

export const skillsData = [
  "Java",
  "Go",
  "Kubernetes",
  "Docker",
  "Jenkins",
  "Ansible",
  "Apache Beam",
  "Apache Pig",
  "Bash",
  "Groovy",
  "C and C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
