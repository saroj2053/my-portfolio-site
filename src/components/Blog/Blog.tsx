import { Element } from "react-scroll";
import "./Blog.css";
import GradientDivider from "../GradientDivider/GradientDivider";
const Blog = () => {
  return (
    <Element className="blog" name="blogs">
      <div className="container">
        <div className="blog__title">
          <h2>My Blogs</h2>
        </div>
        <div className="blog__subtitle">
          <h2>Here Lies My Articles....</h2>
        </div>
      </div>
      <GradientDivider />
    </Element>
  );
};

export default Blog;
