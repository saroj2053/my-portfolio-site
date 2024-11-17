import "./Home.css";

import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import homeImage from "../../assets/personwithcomputer.svg";

import { SkinContext } from "../../contexts/SkinContext/SkinProvider";
import React, { useContext, useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { TypingEffect } from "../animations/typing-effect";
import { HiMiniArrowDownRight } from "react-icons/hi2";
import { Link } from "react-scroll";

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
    <Element id="home" name="home">
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
   
          <div className="home__myDetails">
            <div>
              <TypingEffect />
            </div>

            <div className="home__typoEffect">
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
            <div className="home__image">
              <img src={homeImage} alt="person with computer" />
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

            <p style={{marginBottom: "3rem", fontSize: "1.125rem", lineHeight: "1.75rem", color: "var(--text-black-700)", width: "80%", textAlign: "center"}}>
              Crafting beautiful and functional web experiences with modern
              technologies. Specialized in React, Node.js, and cloud
              architecture.
            </p>
            </div>

            <div className="swipe-down-btn-container">
              <Link
                className="swipe-down-btn"
                to="projects"
                spy
                smooth
                duration={duration}
                activeClass="active"
              >
                View My Work
                <span className="icon-wrapper">
                  <HiMiniArrowDownRight className="arrow-icon" />
                </span>
              </Link>
              <Link
                className="swipe-down-btn"
                to="contact"
                spy
                smooth
                duration={duration}
                activeClass="active"
              >
                Contact Me
              </Link>
            </div>
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
    </Element>
  );
};

export default Home;
