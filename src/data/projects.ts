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

const projects = [
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
      "A web application for ACROSS, facilitating seamless access to universities across nine different countries with features like compare modules, transfer of credits etc.",
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
      "A web based application that provides basic features of the well known Linkedin application",
    techUsed: ["React", "NodeJs", "Raw CSS", "HTML", "MongoDB"],
    githubUrl: "",
    deployedUrl: "",
  },
  {
    id: 4,
    image: solarCalculite1,
    name: "Solar Calculite - a solar pv estimator",
    description:
      "A MERN stack application for estimating the amount of electricity produced by the photovoltaic products.",
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
      "Built using the MERN (MongoDB, Express.js, React, Node.js) stack, this intuitive application enables real-time messaging in the textual format.",
    techUsed: ["Nodejs", "MongoDB", "ReactJS", "Chakra UI", "Zustand"],
    githubUrl: "https://github.com/saroj2053/mern-chat-app",
    deployedUrl: "https://chatapp-t6jh.onrender.com/",
  },
  {
    id: 6,
    image: movixImage,
    name: "Movix - a platform to view tmdb movies",
    description: "Providing users with the platform to seek for tmdb movies",
    techUsed: ["HTML", "CSS", "React", "NodeJs", "MongoDB", "TMDB API"],
    githubUrl: "https://github.com/saroj2053/movix-frontend",
    deployedUrl: "https://movix2053.netlify.app/",
  },
  {
    id: 7,
    image: rateMyUni,
    name: "Rate My Uni",
    description:
      "Rate My Uni is a comprehensive platform that allows students to explore and review universities inside Nepal, providing valuable insights into campus life, academic programs, faculty quality, and more.",
    techUsed: ["Nodejs", "Express", "MongoDB", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/saroj2053/ratemyuni",
    deployedUrl: "https://ratemyuni-3vzl.onrender.com/",
  },
  {
    id: 8,
    image: stronicsImage,
    name: "Stronics - An electronics retail store",
    description:
      "A platform that delivers the ultimate experience for shopping all your electronic needs with convenience. This includes the latest in electronics with the highest standards of quality and service tailored for consumers. ",
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
    name: "Ezy Eats. - a mern food ordering app",
    description: "An ongoing mern food ordering platform ",
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
    name: "Web Wizards - a web development agency",
    description:
      "A web development agency that provides services for web development, web design, and digital marketing.",
    techUsed: [
      "React",
      "Raw CSS",
      "EmailJs",
    ],
    githubUrl: "https://github.com/saroj2053/web-wizards",
    deployedUrl: "https://web-wizards-team.vercel.app/",
  }
];

export default projects;
