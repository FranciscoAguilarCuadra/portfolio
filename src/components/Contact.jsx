import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import "./Contact.css";

const emptyForm = { name: "", email: "", message: "", company: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.company) return;

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error ?? "send_failed");
      }

      setStatus("success");
      setForm(emptyForm);
    } catch {
      const subject = encodeURIComponent(`Contacto desde el portfolio — ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      setFeedback("Abrí tu cliente de correo con el mensaje listo para enviar.");
    }
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">04 — Contacto</p>
          <h2 className="section-title">Hablemos</h2>
          <p className="section-lead">
            Estoy buscando mi primera oportunidad como desarrollador full stack. Si tienes un
            puesto, un proyecto o una pregunta, escríbeme.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info">
            <ul className="contact-list">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <Mail size={18} />
                </span>
                <div>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <div>
                  <span>Ubicación</span>
                  <p>{profile.location}</p>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <Send size={18} />
                </span>
                <div>
                  <span>Disponibilidad</span>
                  <p>{profile.modality}</p>
                </div>
              </li>
            </ul>

            <a href={profile.cvUrl} download className="btn btn-ghost contact-cv">
              <Download size={17} />
              Descargar CV
            </a>

            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Francisco Aguilar"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Francisco Aguilar"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal as="div" className="contact-card" delay={80}>
            {status === "success" ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={34} aria-hidden="true" />
                <h3>Mensaje enviado</h3>
                <p>Gracias por escribir. Te responderé lo antes posible.</p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setStatus("idle")}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={80}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={120}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Cuéntame sobre la oportunidad o el proyecto..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                    required
                  />
                </div>

                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="company">No completar este campo</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={17} className="spin" aria-hidden="true" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send size={17} aria-hidden="true" />
                      Enviar mensaje
                    </>
                  )}
                </button>

                {feedback && (
                  <p className="form-feedback" role="status">
                    <AlertCircle size={15} aria-hidden="true" />
                    {feedback}
                  </p>
                )}

                <p className="form-note">
                  Tus datos solo se usan para responder este mensaje. También puedes escribirme a{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
