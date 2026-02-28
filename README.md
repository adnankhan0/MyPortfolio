# Adnan Ali — Personal Portfolio

**→ [Visit my portfolio](https://adnanali-dev.vercel.app)** *(live site)*

---

Premium personal portfolio for **Adnan Ali**: Software Engineer · BSCS Graduate (SZABIST) · Android · AI-Powered Applications.

Built with **React**, **Vite**, and **Tailwind CSS**. Dark theme, glassmorphism, smooth scroll, and scroll-reveal animations.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Ready to deploy to **Vercel** or **GitHub Pages**.

### Deploy to Vercel

- Push to GitHub, then import the repo in [Vercel](https://vercel.com). No extra config needed.

### Deploy to GitHub Pages

- In the repo: **Settings → Pages → Source**: deploy from branch, folder `dist` (or use a GitHub Action that runs `npm run build` and uploads `dist`).
- Ensure `vite.config.js` has `base: './'` (or set `base: '/your-repo-name/'` for project pages).

## Customize

- **Contact links**: Edit `src/components/Contact.jsx` (email, GitHub, LinkedIn URLs).
- **Project links**: Edit `src/components/Projects.jsx` (GitHub and live demo URLs).
- **Copy**: Update `src/components/About.jsx` and hero text in `src/components/Hero.jsx`.

## Project structure

```
src/
  components/   # Navbar, Hero, About, Skills, Projects, Contact, Footer
  pages/        # Home (main page)
  hooks/        # useScrollReveal
  App.jsx
  main.jsx
  index.css
```

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- No extra UI libraries; minimal and fast.
