import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import "./Footer.css";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#inicio" className="brand" aria-label="Volver al inicio">
            <span className="brand-mark" aria-hidden="true">
              FA
            </span>
            <span className="brand-text">
              Francisco Aguilar
              <small>Full Stack Developer</small>
            </span>
          </a>
          <p>
            Ingeniero Civil Informático · {profile.location}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-side">
          <div className="footer-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Francisco Aguilar"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Francisco Aguilar"
            >
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Enviar un correo a Francisco Aguilar">
              <Mail size={18} />
            </a>
          </div>

          <a href="#inicio" className="footer-top">
            Volver arriba
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Francisco Aguilar. Diseñado y desarrollado por mí.</p>
        <p>Hecho con React y Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
