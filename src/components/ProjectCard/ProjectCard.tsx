import React, { useRef, useEffect } from "react";
import "./ProjectCard.css";
import { MdArrowOutward } from "react-icons/md";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const entryProjectRef = useRef<HTMLDivElement | null>(null);
  const entryProjectMetaRef = useRef<HTMLDivElement | null>(null);
  const entryProjectMediaRef = useRef<HTMLDivElement | null>(null);

  const lenis = useLenis();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: entryProjectRef.current,
        start: "top 60%",
        end: "bottom 90%",
        scrub: true,
        markers: true,
      },
    });


    tl.fromTo(
      entryProjectMetaRef.current,
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1}
    );

    tl.fromTo(
      entryProjectMediaRef.current,
      { xPercent: 100, opacity: 0 },
      { xPercent: 0, opacity: 1},
      "<"
    );

    const updateScroll = () => {
      ScrollTrigger.update();
    };

    lenis?.on("scroll", updateScroll);


    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });

    
    return () => {
      lenis?.off("scroll", updateScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lenis]); 

  return (
    <div key={project.id} className="projectCard" ref={entryProjectRef}>
      <div className="projectCard__contents">
        <div className="projectCard__left" ref={entryProjectMetaRef}>
          <div className="projectCard__details">
            <h3 className="projectCard__title">{project.name}</h3>
            <p className="projectCard__description">{project.description}</p>
          </div>
          <div className="projectCard__techUsed">
            {project.techUsed.map((tech, index) => (
              <ul key={index} className="appliedTechs">
                <li className="appliedTech">{tech}</li>
              </ul>
            ))}
          </div>
          <div className="project__cta-buttons">
            <div className="showCode__btn">
              <a
                className="githubBtn"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
            <div className="liveDemo__btn">
              <a
                className="liveDemoBtn"
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now <MdArrowOutward style={{ fontWeight: "700" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="projectCard__right" ref={entryProjectMediaRef}>
          <img
            src={project.image}
            className="projectCard__image"
            alt={`${project.name} screenshot`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
