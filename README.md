# Portfolio — Francisco Aguilar

Portfolio personal de **Francisco Aguilar**, Ingeniero Civil Informático y desarrollador web full stack. Construido con React y Vite, con contenido basado en experiencia real: prácticas profesionales, proyectos en producción y formación.

**Demo:** https://francisco-aguilar.vercel.app

## Stack

- React 18
- Vite 5
- CSS con variables y diseño responsive
- Lucide React para iconografía
- Vercel Functions + Resend para el formulario de contacto

## Ejecutar en local

```bash
npm install
npm run dev
```

Para probar la función del formulario en local hace falta Vercel CLI:

```bash
vercel dev
```

Con `npm run dev` el formulario no encuentra `/api/contact` y abre el cliente de correo como alternativa.

## Build

```bash
npm run build
npm run preview
```

## Estructura

```
api/
└── contact.js          # función serverless del formulario
public/
├── CV_Francisco_Aguilar.pdf
├── favicon.svg
├── og.png
├── robots.txt
├── sitemap.xml
└── assets/projects/    # capturas y portadas de los proyectos
src/
├── components/         # Header, Hero, About, Projects, Experience, Contact, Footer
├── data/               # perfil, proyectos, experiencia, educación y skills
├── styles/global.css   # tokens, base y utilidades
├── App.jsx
└── main.jsx
.github/workflows/ci.yml
```

## Editar contenido

Todo el contenido vive en `src/data/`:

- `profile.js`: nombre, rol, email, ubicación, disponibilidad, CV y redes.
- `projects.js`: proyectos, estados, stack, capturas y enlaces.
- `experience.js`: prácticas profesionales y formación.
- `skills.js`: habilidades reales y aprendizajes en curso.

Las capturas están en `public/assets/projects/`. Si actualizas una captura, mantén el mismo nombre o cambia la ruta en `projects.js`.

La portada de **App Móviles** es una portada generada. Si tienes una captura real de la app, reemplaza `public/assets/projects/app-moviles.png` por esa imagen (idealmente 1280×800).

## Formulario de contacto

El formulario hace `POST` a `/api/contact`. La función usa [Resend](https://resend.com) para enviar el correo.

1. Crear una cuenta gratuita en Resend.
2. Generar una API key.
3. En Vercel: **Project → Settings → Environment Variables**.
4. Agregar:

| Variable | Obligatoria | Descripción |
|---|---|---|
| `RESEND_API_KEY` | Sí | API key de Resend. |
| `CONTACT_TO` | No | Correo que recibe los mensajes. Por defecto, el del portfolio. |
| `CONTACT_FROM` | No | Remitente. Para pruebas: `Portfolio <onboarding@resend.dev>`. |

Sin `RESEND_API_KEY`, el endpoint responde `503` y el formulario abre el cliente de correo con el mensaje ya escrito. Así el contacto nunca queda roto.

> Para enviar desde un dominio propio hay que verificarlo en Resend y cambiar `CONTACT_FROM`.

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Importar el repo en Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Configurar las variables del formulario.
7. Deploy.

El proyecto ya está desplegado en producción en https://francisco-aguilar.vercel.app.

Para conectar el repositorio:

```bash
git remote add origin https://github.com/FranciscoAguilarCuadra/portfolio.git
git push -u origin main
```

Después, en Vercel: **Project → Settings → Git → Connect Git Repository**.

## Dominio

El sitio está preparado para `https://francisco-aguilar.vercel.app`. Si el dominio final cambia, actualizar:

- `src/data/profile.js` (`site`)
- `index.html` (canonical, Open Graph, Twitter y JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`
