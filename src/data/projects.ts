import solarCalculite1 from "../assets/project-images/solarCalculite2.png";
import rateMyUni from "../assets/project-images/ratemyuni.png";
import movixImage from "../assets/project-images/movix_website.png";
import linkedInImage from "../assets/project-images/linkedin-website.png";
import chatAppImage from "../assets/project-images/chat-app.png";
import campusflowImage from "../assets/project-images/campusflow-website.png";
import sarlahiMarktImage from "../assets/project-images/sarlahimarkt-image.png";
import stronicsImage from "../assets/project-images/stronics-image.png";
import ezyEatsImage from "../assets/project-images/EzyEats.png";
import webWizardsImage from "../assets/project-images/webwizards.png";
import getFlixGPTImage from "../assets/project-images/getflixgpt.png";
import nepalUniReviewsImage from "../assets/project-images/nepal-uni-reviews-image.png";
import brightFutureAcademyImage from "../assets/project-images/bright-future-academy-image.png";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    image: sarlahiMarktImage,
    name: "SarlahiMarkt - Local Online Marketplace",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    techUsed: [
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "React",
      "Redux",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/saroj2053/sarlahimarkt-frontend",
    deployedUrl: "https://sarlahimarkt.vercel.app/",
  },
  {
    id: 2,
    image: campusflowImage,
    name: "CampusFlow - for Across Universities",
    description:
      "A platform to facilitate cross-border universities operations.",
    techUsed: [
      "Python",
      "Django",
      "React",
      "MySql",
      "Blazegraph",
      "SparQL",
      "Bootstrap",
    ],
    githubUrl: "",
    deployedUrl: "https://campusflow-frontend-navy.vercel.app/",
  },
  {
    id: 3,
    image: linkedInImage,
    name: "Linkedin Clone",
    description:
      "A clone op the Linkedin website with features like user authentication, post creation, and more.",
    techUsed: ["React", "NodeJs", "Raw CSS", "HTML", "MongoDB"],
    githubUrl: "https://github.com/saroj2053/linkedin-clone-client",
    deployedUrl: "https://connectin-clone.netlify.app/",
  },
  {
    id: 4,
    image: solarCalculite1,
    name: "Solar Calculite - a solar pv estimator",
    description: "Estimation of power produced by the photovoltaic products.",
    techUsed: [
      "HTML",
      "CSS",
      "React",
      "NodeJs",
      "MongoDB",
      "Express",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/saroj2053/solarcalculite-frontend",
    deployedUrl: "https://solar-calculite.netlify.app/",
  },
  {
    id: 5,
    image: chatAppImage,
    name: "MERN Chat App",
    description:
      "A real-time-chat application in textual format with features like user authentication, online status, and more.",
    techUsed: ["Nodejs", "MongoDB", "ReactJS", "Chakra UI", "Zustand"],
    githubUrl: "https://github.com/saroj2053/mern-chat-app",
    deployedUrl: "https://chatapp-t6jh.onrender.com/",
  },
  {
    id: 6,
    image: movixImage,
    name: "Movix",
    description: "A platform that uses the TMDB API to showcase movie data.",
    techUsed: ["HTML", "CSS", "React", "NodeJs", "MongoDB", "TMDB API"],
    githubUrl: "https://github.com/saroj2053/movix-frontend",
    deployedUrl: "https://movix2053.netlify.app/",
  },
  {
    id: 7,
    image: rateMyUni,
    name: "Rate My Uni",
    description: "Review and rating platform for universities in Nepal",
    techUsed: ["Nodejs", "Express", "MongoDB", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/saroj2053/ratemyuni",
    deployedUrl: "https://ratemyuni-3vzl.onrender.com/",
  },
  {
    id: 8,
    image: stronicsImage,
    name: "Stronics - An electronics retail store",
    description: "A basic e-commerce platform for electronics products",
    techUsed: [
      "Nodejs",
      "Express",
      "MongoDB",
      "ejs template engine",
      "Express Validator",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/saroj2053/Stronics",
    deployedUrl: "https://stronics.onrender.com/",
  },
  {
    id: 9,
    image: ezyEatsImage,
    name: "Ezy Eats.",
    description: "A food ordering app built using the MERN stack",
    techUsed: [
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Reactjs",
      "Express Validator",
      "TailwindCSS",
      "ShadCn",
      "Zustand",
      "Cloudinary",
      "Stripe",
    ],
    githubUrl:
      "https://github.com/saroj2053/ezyeats-food-ordering-app-frontend",
    deployedUrl: "https://ezyeats-food-ordering-app-frontend.onrender.com/",
  },
  {
    id: 10,
    image: webWizardsImage,
    name: "Web Wizards",
    description:
      "An agency that provides services for web development, web design, and digital marketing.",
    techUsed: ["React", "Raw CSS", "EmailJs"],
    githubUrl: "https://github.com/saroj2053/web-wizards",
    deployedUrl: "https://web-wizards-team.vercel.app/",
  },

  {
    id: 11,
    image: getFlixGPTImage,
    name: "GetFlixGPT",
    description:
      "A movie recommendation system that uses MistralAI to provide personalized movie suggestions.",
    techUsed: [
      "React",
      "TMDB API",
      "MistralAI",
      "TailwindCSS",
      "React Redux",
      "Firebase",
    ],
    githubUrl: "https://github.com/saroj2053/gateflix-GPT",
    deployedUrl: "https://getflixgpt-18c35.web.app/",
  },
  {
    id: 12,
    image: nepalUniReviewsImage,
    name: "Nepal Uni Reviews",
    description:
      "A second version of Rate My Uni, a review and rating platform for universities in Nepal.",
    techUsed: [
      "Spring Boot",
      "Java",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Chakra UI",
    ],
    githubUrl: "https://github.com/saroj2053/ratemyuni-v2",
    deployedUrl: "https://ratemyuni-v2-cuq4.vercel.app/",
  },
  {
    id: 13,
    image: brightFutureAcademyImage,
    name: "Bright Future Academy",
    description:
      "A platform for students to learn and grow with various courses and resources.",
    techUsed: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Thymeleaf",
      "Bootstrap UI",
      "MySQL",
    ],
    githubUrl: "https://github.com/saroj2053/school-management-system",
    deployedUrl: "https://bright-future-academy-ut5s.onrender.com/",
  },
];

export default projects;
