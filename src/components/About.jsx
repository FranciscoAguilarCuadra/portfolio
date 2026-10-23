import {
  Briefcase,
  Code2,
  Compass,
  Database,
  GraduationCap,
  LayoutTemplate,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react";
import { profile } from "../data/profile";
import { learning, skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import "./About.css";

const groupIcons = {
  languages: Code2,
  frontend: LayoutTemplate,
  backend: Database,
  tools: Wrench,
};

const About = () => {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">01 — Sobre mí</p>
          <h2 className="section-title">Bases técnicas, aprendizaje constante</h2>
          <p className="section-lead">
            Ingeniero Civil Informático con experiencia en proyectos reales, formación en datos y
            muchas ganas de crecer en un equipo de desarrollo.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-story">
            <p>
              Soy Ingeniero Civil Informático, titulado de la Universidad del Bío-Bío en 2025. Mi
              experiencia práctica viene de dos prácticas profesionales: en <strong>City Lab Biobío</strong>{" "}
              trabajé con MySQL, Docker y testing funcional; antes, en el laboratorio de la
              universidad, me encargué de soporte técnico, administración de sistemas e
              infraestructura de red.
            </p>
            <p>
              Fuera de la universidad he desarrollado proyectos propios: una app web para gestionar
              arriendos con <strong>React y Supabase</strong>, una app Android con Firebase y el sitio
              de una empresa familiar de transporte, que hoy está <strong>en producción</strong> e
              indexado en Google.
            </p>
            <p>
              Busco mi primera oportunidad como desarrollador full stack. Sé que la profundidad
              técnica se construye con práctica, así que estoy fortaleciendo mis bases de forma
              constante: hoy profundizo React y backend con Node.js.
            </p>

            <div className="about-learning">
              <span className="about-learning-label">
                <Sparkles size={15} aria-hidden="true" />
                Aprendiendo ahora
              </span>
              <div className="about-learning-tags">
                {learning.now.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              <p>
                Próximo paso en la ruta: <strong>{learning.next}</strong>.
              </p>
            </div>
          </Reveal>

          <Reveal as="aside" className="about-card" delay={90}>
            <h3>Ficha rápida</h3>
            <ul className="about-facts">
              <li>
                <GraduationCap size={18} aria-hidden="true" />
                <div>
                  <span>Formación</span>
                  <strong>Ingeniería Civil Informática, UBB · 2025</strong>
                </div>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <div>
                  <span>Ubicación</span>
                  <strong>{profile.location}</strong>
                </div>
              </li>
              <li>
                <Briefcase size={18} aria-hidden="true" />
                <div>
                  <span>Disponibilidad</span>
                  <strong>{profile.modality}</strong>
                </div>
              </li>
              <li>
                <Compass size={18} aria-hidden="true" />
                <div>
                  <span>Enfoque</span>
                  <strong>React + backend (Node.js / Spring Boot)</strong>
                </div>
              </li>
            </ul>
            <a href={profile.cvUrl} download className="btn btn-ghost about-cv">
              Ver mi CV
            </a>
          </Reveal>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.id] ?? Code2;
            return (
              <Reveal key={group.id} className="skill-card" delay={index * 70}>
                <div className="skill-card-head">
                  <Icon size={18} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
