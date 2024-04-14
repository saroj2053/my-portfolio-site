import "./About.css";

import lazyCoderSvg from "../../assets/lazy-coder.svg";

import { Element } from "react-scroll";
import { FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoJavascript, BiLogoNetlify } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiChakraui } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

import { IconType } from "react-icons";
import Resume from "../Resume/Resume";
import GradientDivider from "../GradientDivider/GradientDivider";

const technologies = [
  {
    title: "HTML5",
    icon: FaHtml5 as IconType,
  },
  {
    title: "CSS3",
    icon: FaCss3Alt as IconType,
  },
  {
    title: "Javascript",
    icon: BiLogoJavascript as IconType,
  },
  {
    title: "Java",
    icon: FaJava as IconType,
  },
  {
    title: "NodeJs",
    icon: FaNodeJs as IconType,
  },
  {
    title: "React",
    icon: FaReact as IconType,
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
    title: "Netlify",
    icon: BiLogoNetlify as IconType,
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
const About = ({ title }: { title: string }) => {
  return (
    <Element className="about" name="about" id="about">
      <div className="container">
        <div className="about__title">
          <h2>{title}</h2>
        </div>
        <div className="about__contents">
          <div className="about__left">
            <p className="about__intro">
              Greetings! My name is Saroj Sah, and I specialize in developing
              web applications as a Full Stack Developer for both web and mobile
              platforms. I excel in the MERN (MongoDB, Express.js, React.js,
              Node.js) stack. With hands-on experience in each component of the
              stack, I am adept at developing full-fledged solutions from the
              frontend to the backend.
            </p>
            <p className="about__status">
              Currently, I am enrolled in the Master of Science program in Web
              Engineering at Technische Universität Chemnitz in Germany, where I
              am refining my skills and knowledge in cutting-edge web
              technologies.
            </p>

            <div className="info">
              <figure className="figure">
                I am a{" "}
                <span className="about__profile-designation">
                  Full Stack Web Developer
                </span>
                . I like to code and write relevant blogs related to coding
                stuffs.
                <figcaption className="captionText">
                  - Saroj Sah,
                  <cite>
                    <small style={{ paddingLeft: "5px" }}>
                      Seeking for Opportunities
                    </small>
                  </cite>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="about__right">
            <div className="lazyCoderImage">
              <img src={lazyCoderSvg} alt="" />
            </div>
          </div>
        </div>
        {/* resume here */}
        <div className="about__resume">
          <Resume />
        </div>
        <div className="tech-stacks">
          <h2 className="tech-header">Tools and Technologies_</h2>
          <div className="technologies">
            {technologies.map((tech, index) => (
              <div key={index} className="tech">
                <span>{tech.icon({ size: 80 })}</span>
                <h4>{tech.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GradientDivider />
    </Element>
  );
};

export default About;
