# Johan Majji - Full-Stack Developer Portfolio

A modern, high-performance personal portfolio website built for **Johan Majji**, designed specifically to attract hiring managers, recruiters, and engineering teams for **Junior / Entry-Level Full-Stack Developer** roles and internships.

---

## 🌟 Key Features

1. **Cyber-Clean & Modern Dark Aesthetic**:
   - Ambient gradient orb backgrounds with subtle grid overlays.
   - Glassmorphic card styling, responsive layouts, and smooth animations.
   - Light / Dark theme switcher with `localStorage` memory.

2. **Executive Recruiter Impact**:
   - **Quantified Stats Bar**: B.Tech ECE (Simhadhri Group of Institutions, CGPA 7.69), 3 Internships (Deep Learning/NLP, IoT, Embedded Systems), 1 Research Publication (IRJMETS).
   - **Live "Available for Hire" Badge**: Shows active job-seeking status immediately.
   - **Infinite Tech Ticker**: Modern marquee scrolling key technologies.

3. **Featured Production Projects with Metrics**:
   - **ALPR (Automatic License Plate Recognition)**: Computer Vision & Neural Networks pipeline using Image Processing (Edge Detection, Morphology), OCR, and Python with live vehicle logging dashboard.
   - **CloudScale APM**: Real-time distributed telemetry engine (Next.js, Node.js, ClickHouse, Redis, Docker).
   - **Nexus Commerce**: High-concurrency headless store with zero-drift checkout (React, PostgreSQL, Stripe, Redis).
   - **DevSync AI**: Real-time collaborative engineering knowledge base (Next.js, FastAPI, Supabase, pgvector, CRDTs).

4. **Interactive Architectural Blueprint**:
   - Multi-tier system design diagram (Edge/CDN, Gateway, Microservices, Event Queues, Distributed Databases).
   - Clickable nodes with technical rationale explaining high-availability design decisions.

5. **Interactive Recruiter CLI (`>_ Terminal`)**:
   - Accessible via navbar button or `Ctrl + K` / `~`.
   - Supports real commands: `help`, `skills`, `projects`, `architecture`, `experience`, `hire`, `resume`, `contact`, `clear`.

6. **Interactive Printable Resume (CV) Modal**:
   - One-page ATS-friendly clean layout.
   - One-click **"Print / Save as PDF"** button with dedicated `@media print` CSS rules.

7. **Working Contact Form, Google Maps & Quick Copy**:
   - **Google Maps Location**: Interactive embedded Google Map centered on Andhra Pradesh, India with open-in-maps link.
   - **Current Status & Lead Mentorship**: Clearly highlights status as a student in an intensive 6-Month Full-Stack Developer Course mentored by Course Lead Mr. Dinesh (presently not employed).
   - **Quick Copy**: Click-to-copy email and phone number with instant feedback toast badges.

---

## 🚀 How to Run Locally

You have multiple zero-friction options to preview and test the portfolio:

### Option 1: Using the Built-in Node.js Server (Recommended)
From the project folder, open PowerShell / Terminal and run:
```bash
node server.js
```
Then open your browser at:
```
http://localhost:3000
```

### Option 2: Direct Browser Open
Double-click `index.html` or drag it into any web browser (Google Chrome, Edge, Safari, Firefox). All styling and interactions run out of the box with zero build steps or external dependencies!

---

## 🛠️ Project Structure

```text
john/
├── assets/
│   └── johan-majji.jpg # High-resolution professional profile portrait
├── index.html          # Semantic HTML5 markup, meta tags, project cards, modals
├── style.css           # Cyber-clean CSS3 design system, animations, dark/light themes, print styles
├── script.js          # Interactive CLI terminal, hero tabs, architecture visualizer, filters
├── server.js           # Zero-dependency local preview server
├── package.json        # Node.js project configuration and scripts
└── README.md           # Documentation and deployment guide
```

---

## 🌐 Deploying to the Web (Free & Instant)

### Deploy to Vercel
1. Install Vercel CLI or link with GitHub: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Your portfolio is live with a custom domain and SSL in under 60 seconds!

### Deploy to Netlify
1. Drag and drop the `john` folder directly into the Netlify Drop dashboard: [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Or use GitHub integration.

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository named `johan-majji.github.io` or `portfolio`.
2. Go to **Settings > Pages** and select the `main` branch.

---

## ✏️ Customization Tips

- **Update Contact Info**: Change `majjijohn958@gmail.com` and phone numbers in `index.html` and `script.js`.
- **Add Social Links**: Update the GitHub and LinkedIn URLs in the `<div class="hero-socials">` section of `index.html`.
- **Add Your Own Projects**: Copy any `<article class="project-card">` block in `index.html` to showcase your personal work.
