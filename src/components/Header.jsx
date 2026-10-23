import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import "./Header.css";

const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-container">
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            FA
          </span>
          <span className="brand-text">
            Francisco Aguilar
            <small>Full Stack Developer</small>
          </span>
        </a>

        <nav
          id="main-nav"
          className={`nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? "is-active" : ""}`}
              aria-current={active === link.id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href={profile.cvUrl}
            download
            className="btn btn-primary nav-cv"
            onClick={() => setMenuOpen(false)}
          >
            <Download size={16} />
            Descargar CV
          </a>
        </nav>

        <div className="header-actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="header-social"
            aria-label="GitHub de Francisco Aguilar"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="header-social"
            aria-label="LinkedIn de Francisco Aguilar"
          >
            <Linkedin size={18} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
