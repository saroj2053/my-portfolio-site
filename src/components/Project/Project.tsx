import { Element } from "react-scroll";
import "./Project.css";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import GradientDivider from "../GradientDivider/GradientDivider";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <Element className="project" name="projects">
      <div className="container">
        <div className="project__title">
          <h2>Featured Projects</h2>
        </div>
        <div className="projects">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
      <GradientDivider />
    </Element>
  );
};

export default Project;