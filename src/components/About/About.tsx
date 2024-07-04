import "./About.css";

import lazyCoderSvg from "../../assets/lazy-coder.svg";

import { Element } from "react-scroll";

import Resume from "../Resume/Resume";
import GradientDivider from "../GradientDivider/GradientDivider";
import { technologies } from "../../data/technologies";

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
