import React from "react";
import "./ProjectCard.css";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleProjectClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ) => {
    event.preventDefault();
    navigate(`/projects/${id}`, {
      state: { project: project },
    });
  };

  return (
    <div key={project.id} className="projectCard">
      <div className="projectCard__contents">
        <img src={project.image} className="projectCard__image" />
        <div className="projectCard__details">
          <h3 className="projectCard__title">{project.name}</h3>
          <p className="projectCard__description">{project.description}</p>
        </div>
        <div className="projectCard__techUsed">
          {project.techUsed.map((tech, index) => {
            return (
              <ul key={index} className="appliedTechs">
                <li className="appliedTech">{tech}</li>
              </ul>
            );
          })}
        </div>
        <div className="project__cta-buttons">
          <div className="showCode__btn">
            <a className="githubBtn" href={project.githubUrl} target="_blank">
              View Code
            </a>
          </div>

          <div className="liveDemo__btn">
            <a
              className="liveDemoBtn"
              href={project.deployedUrl}
              target="_blank"
            >
              Try Now{" "}
              <span>
                <MdArrowOutward style={{ fontWeight: "700" }} />
              </span>
            </a>
          </div>
        </div>
        <div className="project__moreInfo-btn">
          <a
            className="moreInfoBtn"
            href=""
            onClick={(e) => handleProjectClick(e, project.id)}
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
