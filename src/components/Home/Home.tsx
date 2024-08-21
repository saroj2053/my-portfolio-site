import "./Home.css";

import { Element } from "react-scroll";
import { FaDiamond, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiMiniArrowDownRight } from "react-icons/hi2";
import { Link } from "react-scroll";
import portfolioImage from "../../assets/profile_img.jpg";

import Pill from "../Pill/Pill";

import { SkinContext } from "../../contexts/SkinContext/SkinProvider";
import React, { useContext, useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import GradientDivider from "../GradientDivider/GradientDivider";
import Typewriter from "typewriter-effect";

const duration = 500;
const Home = () => {
  const { currentSkin, setCurrentSkin } = useContext(SkinContext);
  const [skinVisibility, setSkinVisibility] = useState(false);

  React.useEffect(() => {
    document.body.classList.add(currentSkin); // Apply initial skin class
    return () => {
      document.body.classList.remove(currentSkin); // Cleanup on component unmount
    };
  }, [currentSkin]);

  const toggleSkinVisibility = () => {
    setSkinVisibility(!skinVisibility);
  };

  window.addEventListener("scroll", () => {
    if (skinVisibility === true) {
      setSkinVisibility(false);
    }
  });
  return (
    <Element className="home" name="home">
      <div className="home__social-icons">
        <div className="github__icon">
          <a href="https://github.com/saroj2053" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="linkedin__icon">
          <a
            href="https://www.linkedin.com/in/saroj-sah-139922124/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="x__icon">
          <FaXTwitter />
        </div>
      </div>

      <div className="home__contents">
        <div className="home__left">
          <div className="home__myDetails">
            <h1 className="home__profileHeading">
              Hi, I am <span className="home__profileName">Saroj Sah</span>
            </h1>
            <div className="home__typoEffect">
              <span>a</span>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "UI Developer",
                    "Content Writer",
                    "Student",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <h4 className="home__profileSubHeading">
              Web Engineering Student - Technical University of Chemnitz
            </h4>
            <div className="home__profileSummary">
              A passionate web engineer with expertise in web development,
              focusing on the MERN stack. I possess a strong foundation in web
              deployment tools and version control with Git. I am dedicated to
              developing full-fledged software solutions that prioritize
              optimization for high performance and productivity. My goal is to
              deliver seamless and efficient web experiences that meet the needs
              of both users and businesses.
            </div>
            {/* <div className="home__profileStatus">
              <span>
                <FaDiamond color="var(--skin-color)" size={20} />
              </span>
              Pursuing master's in web engineering at Technical University of
              Chemnitz
            </div>
            <div className="home__profileStatus">
              <span>
                <FaDiamond color="var(--skin-color)" size={20} />
              </span>
              Having hands on experience with git, github and web deployments
            </div> */}
            <div className="home__ctaButtons">
              <span className="home__pill">
                <Pill text="Developer" />
                <Pill text="Student" />
                <Pill text="Download CV" isFilled />
              </span>
            </div>
          </div>
        </div>
        <div className="home__right">
          <div className="home__myImage">
            <div className="home__profileImage">
              <img
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  filter: "grayscale(40%)",
                }}
                src={portfolioImage}
                alt=""
              />
            </div>
            <div className="home__currentStatus">
              <Pill text="Available for Work" />
            </div>
          </div>
        </div>
      </div>
      <div className="wavy-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            id="wavy-svg"
            fill="#0099ff"
            fillOpacity="0.35"
            d="M0,64L60,58.7C120,53,240,43,360,80C480,117,600,203,720,208C840,213,960,139,1080,101.3C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="swipe-down-btn-container">
          <Link
            className="swipe-down-btn"
            to="about"
            spy
            smooth
            duration={duration}
            activeClass="active"
          >
            Get Started
            <span className="icon-wrapper">
              <HiMiniArrowDownRight className="arrow-icon" />
            </span>
          </Link>
        </div>
      </div>
      <div
        className={`skin__visibility-toggler ${skinVisibility ? "open" : ""}`}
        onClick={toggleSkinVisibility}
      >
        <MdOutlineSettings />
      </div>

      <div className={`skins-switcher ${skinVisibility ? "visible" : ""}`}>
        <h4 className="skin-title">Skin Colors</h4>
        <div className="skins">
          <span
            className="skin-1"
            onClick={() => setCurrentSkin("skin1")}
          ></span>
          <span
            className="skin-2"
            onClick={() => setCurrentSkin("skin2")}
          ></span>
          <span
            className="skin-3"
            onClick={() => setCurrentSkin("skin3")}
          ></span>
          <span
            className="skin-4"
            onClick={() => setCurrentSkin("skin4")}
          ></span>
          <span
            className="skin-5"
            onClick={() => setCurrentSkin("skin5")}
          ></span>
          <span
            className="skin-6"
            onClick={() => setCurrentSkin("skin6")}
          ></span>
          <span
            className="skin-7"
            onClick={() => setCurrentSkin("skin7")}
          ></span>
          <span
            className="skin-8"
            onClick={() => setCurrentSkin("skin8")}
          ></span>
        </div>
      </div>
      <GradientDivider />
    </Element>
  );
};

export default Home;
