import React from "react";
import "./ProjectCard.css";
import { FaGithubAlt } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { motion } from "framer-motion";

interface Project {
  id: number;
  image: string;
  name: string;
  description: string;
  techUsed: string[];
  githubUrl: string;
  deployedUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: project.id * 0.075 }}
      className="projectCard"
    >
      <div className="projectCard__image">
        <img src={project.image} alt={`${project.name} screenshot`} />
        <div className="imageOverlay">
          <div className="project__cta-buttons">
            <div className="showCode__btn">
              <a
                className="githubBtn"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubAlt size={20} />
              </a>
            </div>
            <div className="liveDemo__btn">
              <a
                className="liveDemoBtn"
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectCard__details">
        <h3 className="projectCard__title">{project.name}</h3>
        <p className="projectCard__description">{project.description}</p>

        <div className="projectCard__techUsed">
          {project.techUsed.map((tech, index) => (
            <ul key={index} className="appliedTechs">
              <li className="appliedTech">{tech}</li>
            </ul>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
