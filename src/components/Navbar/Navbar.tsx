import "./Navbar.css";
import navData from "./navData";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa6";

// import brandSvg from "../../assets/portfolio-brand.svg";
// import profileImg from "../../assets/profile_img.png";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeProvider";
import { BiMenu, BiX } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

const duration = 500;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "950px" });

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbarContentsContainer">
          <div className="nav">
            <div className="navbar__left">
              <Link to="/" className="nav__brand" aria-label="Go home">
                <h1 className="nav__brand-title">&lt;<span className="author__name">Saroj</span> /&gt;</h1>
                {/* <img src={profileImg} alt="" /> */}
              </Link>
            </div>
            <div className={`navbar__middle ${isNavOpen ? "open" : ""}`}>
              <ul className="nav-links">
                {navData.map((link, index) => (
                  <li key={index} className="nav-link">
                    <Link
                      activeClass="active"
                      to={link.href}
                      spy
                      smooth
                      duration={duration}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar__right">
              <div className="theme-toggler" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </div>
              <div className="nav__hamburgerMenuToggleIcons">
                {isNavOpen ? (
                  <div className="closeIcon" onClick={handleNavClick}>
                    {<BiX />}
                  </div>
                ) : (
                  <div className="menuIcon" onClick={handleNavClick}>
                    <BiMenu />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
