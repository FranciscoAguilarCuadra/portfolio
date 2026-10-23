import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import "./Hero.css";

const stack = ["JavaScript", "React", "Node.js", "MySQL", "Docker"];

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <Reveal as="div" className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
            <span className="status-sep" aria-hidden="true" />
            <MapPin size={13} aria-hidden="true" />
            {profile.location}
          </Reveal>

          <Reveal as="p" className="hero-greeting" delay={60}>
            Hola, soy
          </Reveal>

          <Reveal as="h1" className="hero-name" delay={100}>
            Francisco Aguilar<span className="accent-dot" aria-hidden="true">.</span>
          </Reveal>

          <Reveal as="p" className="hero-role" delay={140}>
            Ingeniero Civil Informático <span aria-hidden="true">·</span> Desarrollador Web Full Stack
          </Reveal>

          <Reveal as="p" className="hero-copy" delay={180}>
            Construyo interfaces con <strong>React</strong> y JavaScript, y estoy profundizando el
            backend con <strong>Node.js</strong>. Tengo dos prácticas profesionales y un sitio en
            producción para una empresa de transporte de Ñuble. Busco mi primera oportunidad como
            desarrollador full stack.
          </Reveal>

          <Reveal as="div" className="hero-actions" delay={220}>
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
              <ArrowRight size={17} />
            </a>
            <a href={profile.cvUrl} download className="btn btn-ghost">
              <Download size={17} />
              Descargar CV
            </a>
          </Reveal>

          <Reveal as="div" className="hero-socials" delay={260}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="GitHub de Francisco Aguilar"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="LinkedIn de Francisco Aguilar"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hero-social"
              aria-label="Enviar un correo a Francisco Aguilar"
            >
              <Mail size={19} />
            </a>
            <span className="hero-social-note">{profile.modality}</span>
          </Reveal>
        </div>

        <Reveal as="aside" className="hero-panel" delay={200} aria-label="Resumen profesional">
          <div className="panel-head">
            <span className="panel-label">
              <span className="pulse" aria-hidden="true" />
              Foco actual
            </span>
            <span className="panel-year">2026</span>
          </div>

          <h2 className="panel-title">
            React +<br />
            backend
          </h2>
          <p className="panel-copy">
            Profundizando React y Node.js. El siguiente paso en mi ruta es Spring Boot.
          </p>

          <div className="panel-stack">
            {stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <dl className="panel-facts">
            <div>
              <dt>Formación</dt>
              <dd>Ing. Civil Informática, UBB</dd>
            </div>
            <div>
              <dt>Prácticas</dt>
              <dd>City Lab Biobío · UBB</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>Chillán, Ñuble</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
