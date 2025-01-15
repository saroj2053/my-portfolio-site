import "./About.css";

import portfolioImage from "../../assets/profile_img.png";

import { Element } from "react-scroll";

import Resume from "../Resume/Resume";
import GradientDivider from "../GradientDivider/GradientDivider";
import { technologies } from "../../data/technologies";
import Pill from "../Pill/Pill";
import { FaReact, FaNode, FaBullhorn, FaCss3Alt, } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const About = ({ title }: { title: string }) => {
  return (
    <Element className="about" name="about" id="about">
      <div className="container">
        <div className="about__title">
          <h2>{title}</h2>
        </div>
        <div className="about__contents">
          <div className="about__left">
            <p className="about__profileSummary">
              Greetings! My name is Saroj Sah. I am a full-stack web developer
              with 2 years of experience in building software solutions using
              the MERN Stack within a monolithic architecture. As a dedicated
              learner with a passion for coding and creating scalable software
              applications, I am looking for opportunities as a Full Stack
              Developer in the field of Web Engineering where I can continue to
              grow and contribute to innovative projects.
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
                    <small style={{ padding: "0 5px", alignSelf: "baseline" }}>
                      Seeking for Opportunities <FaBullhorn />
                    </small>
                  </cite>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="about__right">
            {/* <div className="about__currentStatus">
              <Pill text="Available for Work" />
            </div> */}
            <div className="portfolioImage">
              <img src={portfolioImage} alt="" />

            <div className="spinningIcons">
              <span>
                <FaReact size={60} />
              </span>
              <span>
                <FaNode size={80} />
              </span>
              <span>
                <RiNextjsFill size={80} />
              </span>
              <span>
                <  FaCss3Alt size={80} />{" "}
              </span>
            </div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.125 }}
                className="tech"
              >
                <span>{tech.icon({ size: 40 })}</span>
                <h4>{tech.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <GradientDivider />
    </Element>
  );
};

export default About;
