import { TbBrandVite, TbBrandVscode } from "react-icons/tb";

import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";

import { SiChakraui, SiShadcnui, SiSpringboot } from "react-icons/si";

import {
  FaPython,
  FaSass,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaJava,
  FaCss3Alt,
  FaDocker,
} from "react-icons/fa6";

import { IconType } from "react-icons";

export const technologies = [
  {
    title: "HTML5",
    icon: FaHtml5 as IconType,
  },
  {
    title: "CSS3",
    icon: FaCss3Alt as IconType,
  },
  {
    title: "SASS",
    icon: FaSass as IconType,
  },
  { title: "shadcn/ui", icon: SiShadcnui as IconType },
  {
    title: "Javascript",
    icon: BiLogoJavascript as IconType,
  },
  {
    title: "Java",
    icon: FaJava as IconType,
  },
  {
    title: "Nodejs",
    icon: FaNodeJs as IconType,
  },
  {
    title: "React",
    icon: FaReact as IconType,
  },
  {
    title: "Spring Boot",
    icon: SiSpringboot as IconType,
  },
  {
    title: "Python",
    icon: FaPython as IconType,
  },
  {
    title: "Postgresql",
    icon: BiLogoPostgresql as IconType,
  },
  {
    title: "MongoDB",
    icon: BiLogoMongodb as IconType,
  },
  {
    title: "Vite",
    icon: TbBrandVite as IconType,
  },
  {
    title: "Docker",
    icon: FaDocker as IconType,
  },
  {
    title: "Chakra UI",
    icon: SiChakraui as IconType,
  },
  {
    title: "Tailwind CSS",
    icon: BiLogoTailwindCss as IconType,
  },
  {
    title: "Git",
    icon: FaGitAlt as IconType,
  },
  {
    title: "VS Code",
    icon: TbBrandVscode as IconType,
  },
];
