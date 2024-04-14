import solarCalculite1 from "../../assets/project-images/solar-calculite/solarCalculite1.png";
import movixImage from "../../assets/project-images/movix_website.png";
import linkedInImage from "../../assets/project-images/linkedin-website.png";
import chatAppImage from "../../assets/project-images/chat-app.png";
import campusflowImage from "../../assets/project-images/campusflow-website.png";

const projects = [
  {
    id: 1,
    image: campusflowImage,
    name: "CampusFlow - for Across Universities",
    description: "A web application for ACROSS, facilitating seamless access to universities across nine different countries with features like compare modules, transfer of credits etc.",
    techUsed: ["Python", "Django", "React", "MySql", "Blazegraph", "SparQL","Bootstrap"],
    githubUrl: "",
    deployedUrl: "https://campusflow-frontend-navy.vercel.app/"
  },
  {
    id: 2,
    image: linkedInImage,
    name: "Linkedin Clone",
    description: "A web based application that provides basic features of the well known Linkedin application",
    techUsed: ["Styled Components", "API", "CSS", "HTML"],
    githubUrl: "",
    deployedUrl: ""
  },
  {
    id: 3,
    image: solarCalculite1,
    name: "Solar Calculite - a solar pv estimator",
    description: "A MERN stack application for estimating the amount of electricity produced by the photovoltaic products.",
    techUsed: ["HTML", "CSS", "React", "NodeJs", "MongoDB"],
    githubUrl: "https://github.com/saroj2053/solarcalculite-frontend",
    deployedUrl: "https://solar-calculite.netlify.app/"
  },
  {
    id: 4,
    image: chatAppImage,
    name: "MERN Chat App",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repudiandae voluptatibus laboriosam vitae. Omnis sint asperiores, unde eius animi repellendus!",
    techUsed: ["Nodejs", "MongoDB", "ReactJS", "Chakra UI", "Zustand"],
    githubUrl: "https://github.com/saroj2053/mern-chat-app",
    deployedUrl: "https://chatapp-t6jh.onrender.com/"
  },
  {
    id: 5,
    image: movixImage,
    name: "Movix - a platform to view tmdb movies",
    description: "Providing users with the platform to seek for tmdb movies",
    techUsed: ["HTML", "CSS", "React", "NodeJs", "MongoDB", "TMDB API"],
    githubUrl: "https://github.com/saroj2053/movix-frontend",
    deployedUrl: "https://movix2053.netlify.app/"
  },
  {
    id: 6,
    image: "http://source.unsplash.com/random/300x300?dormitory",
    name: "Rate My Uni",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repudiandae voluptatibus laboriosam vitae. Omnis sint asperiores, unde eius animi repellendus!",
    techUsed: ["Nodejs", "Express", "MongoDB", "React", "Redux", "Tailwind CSS"],
    githubUrl: "",
    deployedUrl: ""
  },
  {
    id: 7,
    image: "http://source.unsplash.com/random/300x300?glacier",
    name: "Ecommerce App",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repudiandae voluptatibus laboriosam vitae. Omnis sint asperiores, unde eius animi repellendus!",
    techUsed: ["Nodejs", "Express.js", "MongoDB", "React", "Redux", "Stripe Api"],
    githubUrl: "",
    deployedUrl: ""
  },
  

]

export default projects;