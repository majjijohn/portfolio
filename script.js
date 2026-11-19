/**
 * Johan Majji - Full-Stack Developer Portfolio
 * Interactive Functionality & Recruiter CLI
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initThemeToggle();
  initNavbarScroll();
  initMobileMenu();
  initHeroTabs();
  initSkillsFilter();
  initArchitectureInteractive();
  initTerminalCLI();
  initResumeModal();
  initContactForm();
  initClipboardCopy();
  initStatsCounter();
  initLiveClock();
});

/* ==========================================================================
   1. Theme Switcher (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('jm_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('jm_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;
  if (theme === 'light') {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>`;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  } else {
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>`;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  }
}

/* ==========================================================================
   2. Navbar Scroll State & Active Links
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileBtn || !navLinks) return;

  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    mobileBtn.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  // Close when link clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/* ==========================================================================
   3.5 Hero Showcase Tab Switcher (Profile / Code)
   ========================================================================== */
function initHeroTabs() {
  const profileBtn = document.getElementById('tab-profile-btn');
  const codeBtn = document.getElementById('tab-code-btn');
  const profileView = document.getElementById('hero-profile-view');
  const codeView = document.getElementById('hero-code-view');

  if (!profileBtn || !codeBtn || !profileView || !codeView) return;

  profileBtn.addEventListener('click', () => {
    profileBtn.classList.add('active');
    codeBtn.classList.remove('active');
    profileView.classList.add('active');
    codeView.classList.remove('active');
  });

  codeBtn.addEventListener('click', () => {
    codeBtn.classList.add('active');
    profileBtn.classList.remove('active');
    codeView.classList.add('active');
    profileView.classList.remove('active');
  });
}

/* ==========================================================================
   4. Skills Matrix Filtering
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat.includes(category)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive System Architecture Visualizer
   ========================================================================== */
const ARCHITECTURE_INFO = {
  'cdn': {
    title: 'Edge Distribution & Next.js SSR / ISR',
    desc: 'Static assets and pre-rendered pages cached at 300+ edge locations worldwide. Dynamic routes utilize Incremental Static Regeneration (ISR) to deliver instantaneous TTFB while serving fresh data.'
  },
  'security': {
    title: 'Cloudflare WAF & Edge Rate Limiting',
    desc: 'DDoS mitigation, bot detection, SSL/TLS termination, and token-bucket algorithm rate limiting to prevent API abuse before requests hit core microservices.'
  },
  'gateway': {
    title: 'API Gateway & JWT Authentication',
    desc: 'Acts as the single entry point. Handles cryptographic JWT verification, role-based access control (RBAC), request validation, and intelligent traffic routing with circuit-breaking.'
  },
  'core-api': {
    title: 'Core Business Microservice (Node.js / Express)',
    desc: 'High-throughput stateless service handling domain logic. Built with clean architecture principles, strict TypeScript interfaces, and automated unit/integration tests.'
  },
  'auth-service': {
    title: 'Identity & Session Management (OAuth2 / MFA)',
    desc: 'Dedicated security boundary managing user identities, refresh token rotation, OAuth2 social integrations, and multi-factor authentication with argon2 password hashing.'
  },
  'event-queue': {
    title: 'Kafka / RabbitMQ Asynchronous Message Queue',
    desc: 'Decouples latency-sensitive write paths. Handles transactional email triggers, background video/image processing, and real-time webhook broadcasts with guaranteed at-least-once delivery.'
  },
  'postgres': {
    title: 'PostgreSQL Primary & Read-Replicas with Prisma',
    desc: 'ACID-compliant relational database. Configured with connection pooling via PgBouncer, optimized compound indexes, and read-replicas for query offloading.'
  },
  'redis': {
    title: 'Redis Distributed Cache & Atomic Mutex Locks',
    desc: 'In-memory data store for sub-millisecond query caching, session stores, live leaderboard tallies, and distributed locks to prevent race conditions during flash checkouts.'
  }
};

function initArchitectureInteractive() {
  const nodes = document.querySelectorAll('.node-card');
  const explainerTitle = document.getElementById('arch-title');
  const explainerText = document.getElementById('arch-text');

  if (!explainerTitle || !explainerText) return;

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const key = node.getAttribute('data-arch');
      const info = ARCHITECTURE_INFO[key];
      if (info) {
        explainerTitle.textContent = info.title;
        explainerText.textContent = info.desc;
      }
    });
  });
}

/* ==========================================================================
   6. Recruiter Terminal Modal (`>_ CLI`)
   ========================================================================== */
function initTerminalCLI() {
  const terminalModal = document.getElementById('terminal-modal');
  const openBtns = document.querySelectorAll('.open-terminal-btn');
  const closeBtn = document.getElementById('close-terminal-btn');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const quickBtns = document.querySelectorAll('.quick-cmd-btn');

  if (!terminalModal || !input || !output) return;

  function openTerminal() {
    terminalModal.classList.add('active');
    input.focus();
  }

  function closeTerminal() {
    terminalModal.classList.remove('active');
  }

  openBtns.forEach(btn => btn.addEventListener('click', openTerminal));
  if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

  terminalModal.addEventListener('click', (e) => {
    if (e.target === terminalModal) closeTerminal();
  });

  // Global hotkey: Ctrl + K or `~`
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '`' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      if (terminalModal.classList.contains('active')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    } else if (e.key === 'Escape' && terminalModal.classList.contains('active')) {
      closeTerminal();
    }
  });

  // Terminal Command Processing
  const COMMANDS = {
    'help': () => `
<span class="term-cyan">Available commands:</span>
  <span class="term-emerald">about</span>        - Executive summary of Johan Majji
  <span class="term-emerald">education</span>    - Degree, colleges, and CGPA
  <span class="term-emerald">experience</span>   - 3 Technical Internships
  <span class="term-emerald">publication</span>  - Published paper in IRJMETS
  <span class="term-emerald">projects</span>     - ALPR system & web apps
  <span class="term-emerald">skills</span>       - Technical stack & proficiencies
  <span class="term-emerald">contact</span>      - Direct contact channels
  <span class="term-emerald">hire</span>         - Why you should hire Johan!
  <span class="term-emerald">resume</span>       - Open printable resume modal
  <span class="term-emerald">clear</span>        - Clear terminal screen
`,
    'education': () => `
<span class="term-cyan">Education Background:</span>
  • <span class="term-emerald">B.Tech in Electronics & Communication Engineering (ECE)</span>
    - Institution: Simhadhri Educational Society Group of Institutions (2021–2025)
    - Cumulative GPA: <span class="term-gold">7.69 / 10.0</span>
    - Major Project: Automatic License Plate Recognition (ALPR) System using Image Processing & Neural Networks
  • <span class="term-emerald">Intermediate (MPC)</span>
    - Institution: A.P.T.W.R Junior College (2018–2020)
    - Cumulative GPA: <span class="term-gold">7.33</span>
  • <span class="term-emerald">Secondary School Certificate (SSC)</span>
    - Institution: G.T.W.A High School (2017–2018)
    - Cumulative GPA: <span class="term-gold">8.3</span>
`,
    'publication': () => `
<span class="term-cyan">Research Publication:</span>
  • <span class="term-gold">Published paper on HFSS tool in IRJMETS (Nov 2024)</span>
    - Journal: International Research Journal of Modernization in Engineering Technology and Science
    - Contribution: Improved simulation accuracy and automated engineering workflows
`,
    'about': () => `
<span class="term-cyan">Majji Johan | ECE Graduate & Full-Stack Developer Student</span>
--------------------------------------------------
B.Tech ECE graduate (Simhadhri Group of Institutions, 2021–2025, CGPA 7.69) from Andhra Pradesh, India.
Currently NOT employed — presently a dedicated student pursuing an intensive 6-Month Full-Stack
Developer (FSD) Course under Course Lead Dinesh. Completed 3 specialized internships (Deep Learning & NLP,
IoT, Embedded Systems), published a research paper in IRJMETS (Nov 2024), and built an ALPR vision system.
Actively seeking entry-level / junior full-stack developer opportunities upon course completion.
`,
    'skills': () => `
<span class="term-cyan">Technical Arsenal:</span>
  • <span class="term-emerald">Languages:</span> Python, C, JavaScript (ES6+), HTML5, CSS3/Tailwind
  • <span class="term-emerald">Web & Backend:</span> React, Node.js, Express, RESTful APIs, WebSockets, MQTT
  • <span class="term-emerald">AI & Vision:</span> Deep Learning, NLP, OpenCV (ALPR), Neural Networks, OCR
  • <span class="term-emerald">Hardware & IoT:</span> Sensors, Microcontrollers, Embedded Systems
  • <span class="term-emerald">Databases & Tools:</span> Database Management Systems (SQL), Git, GitHub, Postman
`,
    'projects': () => `
<span class="term-cyan">Featured Engineering Projects:</span>
  1. <span class="term-gold">Automatic License Plate Recognition (ALPR) System</span>
     Stack: Image Processing (Edge Detection, Morphology), Neural Networks, OCR, Python, SQL
     Objective: Automated detection and recognition of vehicle plates for traffic management and access control.
  2. <span class="term-gold">CloudScale APM</span> - Real-time distributed telemetry engine
     Stack: Next.js 14, Node.js, ClickHouse, Redis, Docker
  3. <span class="term-gold">Nexus Commerce</span> - Headless e-commerce platform
     Stack: React, TypeScript, Node.js, PostgreSQL, Stripe, Redis
  4. <span class="term-gold">DevSync AI</span> - Collaborative documentation system with vector search
     Stack: Next.js, FastAPI, Supabase (pgvector), CRDTs
`,
    'architecture': () => `
<span class="term-cyan">System Architecture Principles:</span>
  • 12-Factor App design with containerized microservices
  • Event-driven messaging for asynchronous job processing (Kafka/RabbitMQ)
  • Distributed caching and read/write splitting for DB scalability
  • Zero-trust security, strict input sanitization, and cryptographic token rotation
`,
    'experience': () => `
<span class="term-cyan">Timeline & Technical Experience:</span>
  • <span class="term-emerald">Full-Stack Developer Trainee</span> (Present • 6-Month FSD Course)
    - Full-time student undergoing intensive training mentored by Course Lead Dinesh in React, Node.js, Express, MongoDB, and Tailwind CSS.
  • <span class="term-emerald">Deep Learning, NLP & AI Intern</span> (Dec 2024 – Apr 2025)
    - Worked on ML, DL, and NLP concepts, tools, and hands-on AI projects.
  • <span class="term-emerald">IoT Intern</span> (May 2024 – Jul 2024)
    - Built IoT projects interfacing sensors, microcontrollers, and communication protocols.
  • <span class="term-emerald">Embedded Systems Intern</span> (Jun 2023 – Jul 2023)
    - Gained hardware and embedded C/Python programming experience with microcontrollers.
`,
    'contact': () => `
<span class="term-cyan">Direct Contact Channels:</span>
  • Email:    <a href="mailto:majjijohn958@gmail.com" class="term-emerald">majjijohn958@gmail.com</a>
  • Phone:    <span class="term-emerald">7670885894</span>
  • Location: <a href="https://maps.google.com/?q=Andhra+Pradesh,+India" target="_blank" class="term-emerald">Andhra Pradesh, India (View Google Maps ↗)</a>
  • LinkedIn: <span class="term-dim">linkedin.com/in/johan-majji</span>
  • GitHub:   <span class="term-dim">github.com/johan-majji</span>
  • Status:   <span class="term-emerald">Student @ 6-Month FSD Course (Lead: Dinesh) • Open to Junior Full-Stack Roles</span>
`,
    'hire': () => `
<span class="term-gold">★ Why Hire Majji Johan? ★</span>
  1. <strong>Strong Engineering Foundation:</strong> B.Tech in ECE from Simhadhri Group of Institutions with 7.69 CGPA.
  2. <strong>FSD Course Mentored by Lead Dinesh:</strong> Intensive daily hands-on practice building modern React/Node.js web apps.
  3. <strong>3 Practical Internships:</strong> Hands-on experience across Deep Learning & NLP, IoT, and Embedded Systems.
  4. <strong>Research & Capstone Proven:</strong> Published paper in IRJMETS and built an ALPR neural network vision system.
  5. <strong>Rapid Learner & Dedicated:</strong> Highly motivated to apply full-stack web skills and continuously grow with the team!
`,
    'resume': () => {
      openResumeModal();
      return `<span class="term-emerald">Opening printable resume modal...</span>`;
    },
    'clear': () => {
      output.innerHTML = '';
      return '';
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.value.trim();
      input.value = '';
      if (!rawCmd) return;

      const cmd = rawCmd.toLowerCase();
      output.innerHTML += `\n<div class="term-line"><span class="term-emerald">johan@dev:~$</span> ${escapeHTML(rawCmd)}</div>`;

      if (COMMANDS[cmd]) {
        const res = COMMANDS[cmd]();
        if (res) {
          output.innerHTML += `<div class="term-line">${res}</div>`;
        }
      } else {
        output.innerHTML += `<div class="term-line"><span class="term-dim">Command not found: "${escapeHTML(rawCmd)}". Type <span class="term-cyan">help</span> for a list of valid commands.</span></div>`;
      }

      output.scrollTop = output.scrollHeight;
    }
  });

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd && COMMANDS[cmd]) {
        output.innerHTML += `\n<div class="term-line"><span class="term-emerald">johan@dev:~$</span> ${cmd}</div>`;
        const res = COMMANDS[cmd]();
        if (res) output.innerHTML += `<div class="term-line">${res}</div>`;
        output.scrollTop = output.scrollHeight;
      }
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   7. Resume / CV Viewer Modal & Print
   ========================================================================== */
function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) modal.classList.add('active');
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  if (modal) modal.classList.remove('active');
}

function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('.open-resume-btn');
  const closeBtn = document.getElementById('close-resume-btn');
  const printBtn = document.getElementById('print-resume-btn');

  if (!resumeModal) return;

  openBtns.forEach(btn => btn.addEventListener('click', openResumeModal));
  if (closeBtn) closeBtn.addEventListener('click', closeResumeModal);
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResumeModal();
  });
}

/* ==========================================================================
   8. Working Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const statusEl = document.getElementById('form-status-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const roleType = document.getElementById('contact-role-type').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      if (statusEl) {
        statusEl.innerHTML = `<span style="color:#ef4444;">Please fill out all required fields.</span>`;
      }
      return;
    }

    // Button loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Message...</span>`;

    // Simulated instant send + mailto fallback
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Message Sent Successfully! ✓</span>`;
      submitBtn.style.background = 'var(--accent-emerald)';

      if (statusEl) {
        statusEl.innerHTML = `<span style="color:var(--accent-emerald);">Thanks ${escapeHTML(name)}! Your message has been prepared. You can also reach Johan directly at <a href="mailto:majjijohn958@gmail.com?subject=Job Inquiry for Johan Majji (${roleType})&body=Hi Johan,%0A%0A${encodeURIComponent(message)}%0A%0ABest,%0A${encodeURIComponent(name)}" style="text-decoration:underline;">majjijohn958@gmail.com</a>.</span>`;
      }

      // Open mail client for user convenience
      const mailtoUrl = `mailto:majjijohn958@gmail.com?subject=Job Inquiry for Johan Majji (${encodeURIComponent(roleType)})&body=From: ${encodeURIComponent(name)} (${encodeURIComponent(email)})%0A%0A${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;

      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 5000);
    }, 800);
  });
}

/* ==========================================================================
   9. Clipboard Copy for Email & Phone
   ========================================================================== */
function initClipboardCopy() {
  const copyItems = document.querySelectorAll('.copy-trigger');

  copyItems.forEach(item => {
    item.addEventListener('click', () => {
      const textToCopy = item.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const badge = item.querySelector('.copy-badge');
        if (badge) {
          const original = badge.textContent;
          badge.textContent = 'Copied! ✓';
          badge.style.color = '#10b981';
          badge.style.background = 'rgba(16, 185, 129, 0.2)';

          setTimeout(() => {
            badge.textContent = original;
            badge.style.color = '';
            badge.style.background = '';
          }, 2000);
        }
      });
    });
  });
}

/* ==========================================================================
   10. Animated Numerical Counters
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-big[data-target]');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(numEl => {
          const target = parseInt(numEl.getAttribute('data-target'), 10);
          const suffix = numEl.getAttribute('data-suffix') || '';
          let current = 0;
          const duration = 1500;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              numEl.textContent = target + suffix;
              clearInterval(timer);
            } else {
              numEl.textContent = Math.floor(current) + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   11. Live Clock & Availability Indicator
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockEl.textContent = `${timeStr} (UTC/Active)`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}
