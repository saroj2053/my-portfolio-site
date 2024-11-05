import "./About.css";

import portfolioImage from "../../assets/profile_img.png";

import { Element } from "react-scroll";

import Resume from "../Resume/Resume";
import GradientDivider from "../GradientDivider/GradientDivider";
import { technologies } from "../../data/technologies";
import Pill from "../Pill/Pill";
import { FaReact, FaNode, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

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
            <p className="about__profileSummary">
              I am a full-stack web developer with 2 years of experience in
              building software solutions using the MERN Stack within a
              monolithic architecture. As a dedicated learner with a passion for
              coding and creating scalable software applications, I am looking
              for opportunities as a Full Stack Developer in the field of Web
              Engineering where I can continue to grow and contribute to
              innovative projects.
            </p>
            <p className="about__status">
              Currently, I am enrolled in the Master of Science program in Web
              Engineering at Technische Universität Chemnitz in Germany, where I
              am refining my skills and knowledge in cutting-edge web
              technologies.
            </p>

            <div className="about__ctaButtons">
              <span className="about__pill">
                <Pill text="Developer" />
                <Pill text="Student" />
                <Pill text="Download CV" isFilled />
              </span>
            </div>
            <div className="info">
              <figure className="figure">
                I am a{" "}
                <span className="about__profile-designation">
                  Full Stack Web Developer.
                </span>
                {/* . I like to code and write relevant blogs related to coding
                stuffs. */}
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
            <div className="about__currentStatus">
              <Pill text="Available for Work" />
            </div>
            <div className="portfolioImage">
              <span>
                <FaReact size={60} />
              </span>
              <span>
                <FaNode size={80} />
              </span>
              <span>
                <RiNextjsFill size={80} />
              </span>
              <span><FaVuejs size={80} /> </span>
              <img src={portfolioImage} alt="" />
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
