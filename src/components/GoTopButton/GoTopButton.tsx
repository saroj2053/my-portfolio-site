import { useEffect, useRef } from "react";
import "./GoTopButton.css";
import { FaArrowUp } from "react-icons/fa6";

const GoTopButton = () => {
  const goTopBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const goTopBtn = goTopBtnRef.current;

    if (!goTopBtn) return;

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

    
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

      const isScrollingUp = scrollTop < lastScrollTop;

      if (isAtBottom || isScrollingUp) {
        goTopBtn.classList.add("visible");
      } else {
        goTopBtn.classList.remove("visible");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
      >
        <FaArrowUp size={20} style={{ color: "#fff" }} />
      </button>
    </div>
  );
};

export default GoTopButton;
