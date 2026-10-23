import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { education, experience } from "../data/experience";
import Reveal from "./Reveal";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">03 — Experiencia</p>
          <h2 className="section-title">Dónde he trabajado y qué aprendí</h2>
          <p className="section-lead">
            Dos prácticas profesionales en contextos distintos: datos y contenedores en un
            laboratorio de innovación urbana, y soporte técnico e infraestructura en la universidad.
          </p>
        </Reveal>

        <div className="experience-grid">
          <div className="experience-column">
            <Reveal as="h3" className="column-title">
              <Briefcase size={18} aria-hidden="true" />
              Experiencia
            </Reveal>

            <div className="timeline">
              {experience.map((item, index) => (
                <Reveal
                  as="article"
                  key={item.id}
                  className="timeline-item"
                  delay={index * 90}
                >
                  <span className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-card">
                    <div className="timeline-top">
                      <span className="timeline-period">
                        <Calendar size={14} aria-hidden="true" />
                        {item.period}
                      </span>
                      <span className="timeline-type">{item.role}</span>
                    </div>

                    <h4>{item.company}</h4>
                    <p className="timeline-desc">{item.description}</p>

                    <ul className="timeline-tasks">
                      {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>

                    <div className="timeline-tech">
                      {item.tech.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <Reveal as="h3" className="column-title" delay={60}>
              <GraduationCap size={18} aria-hidden="true" />
              Formación
            </Reveal>

            <div className="education-list">
              {education.map((item, index) => (
                <Reveal
                  as="article"
                  key={item.id}
                  className="education-card"
                  delay={index * 90}
                >
                  <span className="education-period">{item.period}</span>
                  <h4>{item.title}</h4>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-desc">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
