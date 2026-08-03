# Olayiwola Uthman — Portfolio

A dark-mode React portfolio with animated backgrounds, typed text effect, and smooth section transitions.

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          ← React entry point
    ├── App.jsx           ← Root component + layout
    ├── App.css           ← All styles
    └── components/
        ├── Nav.jsx       ← Top navigation bar
        ├── Home.jsx      ← Home section (typed effect + traits)
        ├── Projects.jsx  ← Projects grid
        └── Resume.jsx    ← Education, skills, contact
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```
Then open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

## Customisation Tips

- **Profile info** — edit the constants at the top of each component file (name, links, projects, skills, etc.)
- **Profile image** — add your image to `src/assets/` and import it in `Home.jsx`
- **Project screenshots** — replace the icon banners in `Projects.jsx` with `<img>` tags pointing to your screenshots
- **Colors** — all theme colours are CSS variables in `:root` inside `App.css`
