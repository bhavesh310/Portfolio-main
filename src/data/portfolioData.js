// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Bhavesh Ghatode",
  firstName: "Bhavesh Ghatode",
  brandName: "Bhavesh Ghatode",
  title: "Full Stack & Java Developer",
  location: "Nagpur, India",
  phone: "+91 8889639840",
  emails: {
    primary: "bhaveshghatode1@gmail.com",
    secondary: "bhaveshghatode1@gmail.com",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Information Technology student with solid skills in Java, Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/B_A1.pdf",
};

export const socialLinks = {
  github: "https://github.com/bhavesh310",
  linkedin: "https://www.linkedin.com/in/bhavesh-kumar-4466a3276/"
};

export const heroContent = {
  greeting: "Hi, I'm Bhavesh Ghatode",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build fast, scalable applications using React, Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:bhaveshghatode1@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Bhavesh Ghatode,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/B_A1.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is  <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Bhavesh Ghatode</span>, an aspiring software engineer based in Nagpur, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ["Java", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 95 },
        { name: "C", level: 75 },
        { name: "Python", level: 82 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "React", level: 86 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 86 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 82 },
        { name: "Antigravity", level: 90 },
        { name: "Replit", level: 86 },
        { name: "Emergent", level: 90 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Codec Technologies India",
    role: "Web Developer",
    type: "Internship",
    duration: "June 2026 - August 2026 · 3 mos",
    skills: ["Web Development", "Remote Collaboration", "Frontend Engineering"],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    organization: "micro1",
    role: "Frontend Developer",
    type: "Freelance",
    duration: "April 2026 - Present · 5 mos",
    skills: ["Freelance Development", "UI Engineering", "Component Architecture"],
    tech: ["React.js", "Tailwind CSS", "JavaScript"]
  },
  {
    organization: "Crystaltech Services Private Limited",
    role: "Web Development Intern",
    type: "Internship",
    duration: "December 2025 - May 2026 · 6 mos",
    skills: ["Frontend Development", "Backend Integration", "API Development"],
    tech: ["React.js", "Node.js", "MongoDB", "Express", "REST API"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

//Projects
export const projects = [
  {
    id: "nexiq",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "NEXIQ — Production AI Assistant Platform",
    description:
      "A scalable, production-grade AI assistant rivaling ChatGPT, powered by Meta's Llama 3.3 70B via Groq's LPU inference engine. Built end-to-end solo — featuring real-time AI response streaming via SSE, multi-conversation management with persistent history, a full JWT auth system, live token usage analytics, dark/light theming, and a fully responsive UI. Solved hard engineering problems including SSE chunk race conditions, FastAPI lifespan migration, and cross-origin cookie auth — architected to handle 14,400+ AI requests/day on free-tier infrastructure with async non-blocking I/O.",
    techTags: [
      "React.js",
      "Tailwind CSS",
      "Zustand",
      "FastAPI",
      "Python",
      "MongoDB",
      "Groq API",
      "Llama 3.3 70B",
      "JWT Auth",
    ],
    links: {
      github: "https://github.com/bhavesh310/NEXIQ.AI-2", // Update when available
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "neuronotes",
    number: "02",
    badge: null,
    title: "NeuroNotes — AI-Native Note-Taking Platform",
    description:
      "A note-taking app with a built-in ChatGPT-style AI assistant that acts as a true thinking partner rather than a bolt-on chatbot. Features token-by-token streaming AI chat, live markdown rendering, context-aware responses that read the active note, one-click AI actions (Summarize, Expand, Outline, Flashcards, Fix Grammar), voice dictation with auto-retry, and a distraction-free Focus Mode. Achieves ~0.6s time-to-first-token on AI responses using a fully serverless architecture on free-tier infrastructure.",
    techTags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Tiptap",
      "Gemini 2.5 Flash",
      "SSE Streaming",
    ],
    links: {
      github: "https://github.com/bhavesh310/Neuro_Notes", // Update when available
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "roamio",
    number: "03",
    badge: null,
    title: "ROAMIO — AI-Powered Luxury Hotel Booking Platform",
    description:
      "A production-grade hotel booking platform built with the modern React ecosystem, demonstrating end-to-end ownership from design system to deployment. Features an AI Concierge with SSE-style streaming responses, fuzzy-search hotel discovery with AI-ranked results, a full booking flow with GST calculation, a loyalty engine with tier progression and points redemption, and a digital room key with an SVG fingerprint scanner driven by a biometric state machine. Built solo across 12+ pages and 6 domains with a hand-composed Navy/Copper/Linen design system — no library defaults. Includes Framer Motion spring-physics animations, a custom 20+ token theming system, and Radix UI headless primitives for accessibility. Achieves a 90+ Lighthouse performance score and is deployed live on Netlify.",
    techTags: [
      "React.js 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "shadcn/ui",
      "Radix UI",
      "Vite",
      "React Router DOM v6",
    ],
    links: {
      github: "https://github.com/bhavesh310/Hotel_App", // Update when available
      demo: "https://roamiohotelapp.netlify.app/",
    },
    isFlagship: false,
  },
   {
    id: "quizmaster",
    number: "04",
    badge: null,
    title: "QuizMaster — Gamified Interactive Quiz Platform",
    description:
      "A production-grade, gamified learning platform engineered to make knowledge genuinely addictive. Features a live quiz engine with 3 categories and timed questions with auto-submit on timeout, an XP economy with streak multipliers, a 4-tier badge progression system unlocked by real behavior, and a live leaderboard with personal rank highlighting. Built as a state-machine SPA with zero React Router — all transitions driven by useState for predictable, zero-overhead renders. Secured with JWT session tokens and bcrypt hashing, backed by a normalized MySQL schema with indexed keys for sub-millisecond leaderboard reads. XP, levels, and badge conditions sync across components using React hooks alone, with zero external state libraries. Finished with custom typography, dot-grid texture, and keyframe animations — deployed via Vite on Netlify.",
    techTags: ["React.js", "MySQL", "JWT", "bcrypt", "Vite"],
    links: {
      github: "https://github.com/bhavesh310/QUIZ_APP", // Update when available
      demo: "https://quizmasterslevelupyourknowledge.netlify.app/",
    },
    isFlagship: false,
  },
  {
    id: "worthforge-ai",
    number: "05",
    badge: null,
    title: "WorthForge.ai — Compensation Intelligence Engine",
    description:
      "A full-stack ML compensation intelligence platform that predicts Indian market salaries with 98% model accuracy (R²=0.98, MAE ≈ ₹86K) — a live product, not a notebook. Delivers data-backed salary benchmarks in under 2 seconds, comparing candidate worth against industry average and top 10% earners to reduce offer-negotiation friction. Powered by a Random Forest Regressor (100 estimators) trained on a custom 5-feature pipeline (Age, Gender, Education, Job Title, Years of Experience) across 2,000 Indian salary records, with an 80/20 train-test split and joblib-serialized model artifacts. Backend built with Python, Flask REST API, and Gunicorn WSGI following an MVC architecture with input validation; frontend uses vanilla JS and Chart.js for an animated, production-grade UI. Includes a 10-year salary growth projection engine with 10% YoY compounding and a fully custom brand identity, designed and deployed solo.",
    techTags: [
      "Python",
      "Flask",
      "Machine Learning",
      "Random Forest",
      "Chart.js",
      "Gunicorn",
      "Render.com",
    ],
    links: {
      github: "https://github.com/bhavesh310/worthforge-ai", // Update when available
      demo: "https://worthforge-ai.onrender.com",
    },
    isFlagship: false,
  },
];

//Certifications
export const certificates = {
  featured: [
    {
      name: "Software Engineer Intern",
      issuer: "HackerRank",
      icon: "☁️",
    },
    {
      name: "HackVega 2.0",
      issuer: "MyCareernet",
      icon: "☕",
    },
    {
      name: "TECHgium 9th Edition",
      issuer: "L&T Technology Services",
      icon: "⚙️",
    },
    {
      name: "AI Fluency : Framework & Foundations",
      issuer: "Anthropic",
      icon: "💼",
    },
    {
      name: "Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      icon: "🎓",
    },
    {
      name: "Naukri Campus Young Turks 2025",
      issuer: "Naukri Campus",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/bhavesh-kumar-4466a3276/details/certifications/",
};

export const education = {
  degree: "B.Tech – Information Technology ",
  institution: "Madhav Institute of Technology & Science,Gwalior (RGPV)",
  cgpa: "8.04",
  graduation: "2026",
  twelfth: "12th Science – 86%",
  tenth: "10th CBSE – 92%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "C++ · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech IT · CGPA 8.04",
  copyright: `© ${new Date().getFullYear()} Bhavesh Ghatode | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
