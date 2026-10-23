import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import "./Projects.css";

const statusTones = {
  "En producción": "live",
  "Proyecto personal": "personal",
  Académico: "academic",
  "En pausa": "paused",
};

const ProjectLinks = ({ project }) => (
  <div className="project-links">
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        aria-label={`Ver demo de ${project.title}`}
      >
        <ExternalLink size={16} aria-hidden="true" />
        Ver demo
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    )}
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        aria-label={`Ver código de ${project.title} en GitHub`}
      >
        <Github size={16} aria-hidden="true" />
        Código
      </a>
    )}
  </div>
);

const Projects = () => {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.id !== featured.id);

  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">02 — Proyectos</p>
          <h2 className="section-title">Trabajo real, no maquetas</h2>
          <p className="section-lead">
            Proyectos en producción, aplicaciones propias y trabajos académicos. Cada uno tiene un
            enlace para verlo funcionando o revisar el código.
          </p>
        </Reveal>

        <Reveal as="article" className="featured-project">
          <div className="featured-media">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width="1280"
              height="800"
              loading="eager"
              style={{ objectPosition: featured.imagePosition }}
            />
            <span className={`status-badge ${statusTones[featured.status] ?? ""}`}>
              {featured.status}
            </span>
          </div>

          <div className="featured-body">
            <p className="project-category">{featured.category}</p>
            <h3 className="featured-title">{featured.title}</h3>
            <p className="project-description">{featured.description}</p>
            <p className="project-contribution">
              <span>Mi rol</span>
              {featured.contribution}
            </p>
            {featured.meta && <p className="project-meta">{featured.meta}</p>}
            <div className="project-tech">
              {featured.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <ProjectLinks project={featured} />
          </div>
        </Reveal>

        <div className="projects-grid">
          {rest.map((project, index) => (
            <Reveal as="article" key={project.id} className="project-card" delay={index * 80}>
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="1280"
                  height="800"
                  loading="lazy"
                  style={{ objectPosition: project.imagePosition }}
                />
                <span className={`status-badge ${statusTones[project.status] ?? ""}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution">
                  <span>Mi rol</span>
                  {project.contribution}
                </p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
