import "./Footer.css";
// import links from "./footerLinks";
// import brandSvg from "../../assets/portfolio-brand.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wavy-background">
          <svg
            id="wavySvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              id="wavy-svg"
              fill="#0099ff"
              fillOpacity="0.35"
              d="M0,64L60,58.7C120,53,240,43,360,80C480,117,600,203,720,208C840,213,960,139,1080,101.3C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <p className="footer__desc">
            Copyright &copy;{" "}
            <span id="copyright">{new Date().getFullYear().toString()}</span>{" "}
            Saroj Sah. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
