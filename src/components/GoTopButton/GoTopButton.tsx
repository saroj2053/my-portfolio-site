import { useEffect, useRef } from "react";
import "./GoTopButton.css";

const GoTopButton = () => {
  const goTopBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const goTopBtn = goTopBtnRef.current;

    if (!goTopBtn) return;

    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        goTopBtn.classList.add("visible");
      } else {
        goTopBtn.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="goTopButton">
      <button
        className="gotoTop"
        type="button"
        ref={goTopBtnRef}
        onClick={handleBtnClick}
      ></button>
    </div>
  );
};

export default GoTopButton;
