import { useEffect, useState } from "react";
import About from "../../components/About/About";
// import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import GoTopButton from "../../components/GoTopButton/GoTopButton";
import Home from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import Loader from "../../components/Loader/Loader";

const HomeLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="homeLayout">
      <Navbar />
      <Home />
      <About title="About Me" />
      <Project />
      {/* <Blog /> */}
      <Contact />
      <Footer />
      <GoTopButton />
    </div>
  );
};

export default HomeLayout;
