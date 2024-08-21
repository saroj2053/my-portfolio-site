import "./Footer.css";
import links from "./footerLinks";
// import brandSvg from "../../assets/portfolio-brand.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-items">
            <div className="footer-left">
              <small>
                Copyright &copy;{" "}
                <span id="copyright">
                  {new Date().getFullYear().toString()}
                </span>{" "}
                Saroj Sah. All rights reserved
              </small>
            </div>
            <div className="footer-right">
              <ul className="iconWrapper">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="icon"
                    id={link.name.toLocaleLowerCase()}
                  >
                    <a href={link.url} target="_blank">
                      <span className="tooltip">{link.name}</span>
                      <span className="svgIcon">{link.icon({ size: 20 })}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
