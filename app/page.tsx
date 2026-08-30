"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Bug,
  Fingerprint,
  Mail,
  Moon,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  UsersRound,
  X,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

type Page = "home" | "research" | "publications" | "experience" | "education" | "contact";
type Theme = "graphite" | "burgundy" | "forest" | "cobalt" | "violet" | "mono";
type Font = "space" | "manrope" | "sora" | "dm";
type Hero = "split" | "center" | "compact";
type Portrait = "right" | "left" | "hidden";
type Width = "compact" | "sixty" | "wide";
type Density = "compact" | "balanced" | "airy";
type PublicationLayout = "list" | "grid";
type Corners = "square" | "soft" | "round";
type ContentKey =
  | "focus"
  | "overview"
  | "research"
  | "publications"
  | "experience"
  | "projects"
  | "education"
  | "scholarly"
  | "contact";

type SiteConfig = {
  theme: Theme;
  font: Font;
  hero: Hero;
  portrait: Portrait;
  width: Width;
  density: Density;
  publicationLayout: PublicationLayout;
  corners: Corners;
  content: Record<ContentKey, boolean>;
};

const defaultConfig: SiteConfig = {
  theme: "graphite",
  font: "dm",
  hero: "split",
  portrait: "right",
  width: "sixty",
  density: "compact",
  publicationLayout: "list",
  corners: "soft",
  content: {
    focus: true,
    overview: true,
    research: true,
    publications: true,
    experience: true,
    projects: true,
    education: true,
    scholarly: true,
    contact: true,
  },
};

const themes: { id: Theme; label: string; color: string }[] = [
  { id: "graphite", label: "Graphite", color: "#25282c" },
  { id: "burgundy", label: "Burgundy", color: "#7a1f2b" },
  { id: "forest", label: "Forest", color: "#2d6850" },
  { id: "cobalt", label: "Cobalt", color: "#315bea" },
  { id: "violet", label: "Violet", color: "#6554c0" },
  { id: "mono", label: "Monochrome", color: "#111111" },
];

const fonts: { id: Font; label: string; detail: string }[] = [
  { id: "space", label: "Space Grotesk", detail: "Structured grotesk" },
  { id: "manrope", label: "Manrope", detail: "Quiet humanist sans" },
  { id: "sora", label: "Sora", detail: "Geometric and precise" },
  { id: "dm", label: "DM Sans", detail: "Neutral and compact" },
];

const pageLabels: Record<Page, string> = {
  home: "Home",
  research: "Research",
  publications: "Publications",
  experience: "Experience",
  education: "Education",
  contact: "Contact",
};

const researchContributions = [
  {
    title: "Fairness-aware biometric security",
    summary: "Lightweight face PAD methods for measuring and reducing demographic disparities.",
    detail: "Combined Local Binary Patterns, ethnicity-aware preprocessing, group-specific threshold optimization, and statistical fairness analysis for African and East Asian populations.",
  },
  {
    title: "Architecture and demographic bias",
    summary: "Comparative evaluation of convolutional and Vision Transformer architectures.",
    detail: "Evaluated ViT-Tiny, ResNet18, and pretrained DeiT-S across African, East Asian, and zero-shot Central Asian groups using APCER, BPCER, ACER, accuracy, and EER.",
  },
  {
    title: "Robustness and reproducibility",
    summary: "Fairness evaluation under dataset shift, ablations, and random-seed variation.",
    detail: "Applied cross-dataset SSG and LODO protocols, five-seed replication, controlled ablations, and statistical analysis to separate stable model behavior from experimental variability.",
  },
  {
    title: "Security research methodology",
    summary: "Empirical evaluation designed to survive real-world variation.",
    detail: "Research combines controlled experimentation, cross-dataset testing, multi-seed replication, threat-aware evaluation, and transparent reporting of uncertainty and limitations.",
  },
];

const publications = [
  {
    year: "2026",
    type: "Journal article",
    title: "Fairness-Aware Face Presentation Attack Detection Using Local Binary Patterns: Bridging Skin Tone Bias in Biometric Systems",
    meta: "J. D. Ndibwile, N. N. Landon, F. Tuyisenge · Journal of Cybersecurity and Privacy, 6(1)",
    href: "https://doi.org/10.3390/jcp6010012",
  },
  {
    year: "2026",
    type: "Conference paper · Preprint",
    title: "Architectural Bias in Face Presentation Attack Detection: A Comparative Study of Vision Transformers and Convolutional Neural Networks",
    meta: "N. N. Landon, F. Tuyisenge, J. D. Ndibwile · CSP 2026 · arXiv:2606.18510",
    href: "https://doi.org/10.48550/arXiv.2606.18510",
  },
  {
    year: "2026",
    type: "Under review",
    title: "Fairness Under Distribution Shift in Face Presentation Attack Detection: A Cross-Dataset and Ablation-Based Analysis",
    meta: "N. N. Landon, F. Tuyisenge, R. Dukundane, E. Iduh, J. D. Ndibwile · IEEE Access",
  },
  {
    year: "2026",
    type: "Under review",
    title: "Adversarial Artificial Intelligence Threats in Smart Energy Grids: When Learning Systems Learn from the Attacker",
    meta: "J. D. Ndibwile, N. N. Landon, L. Mwinuka · Energy Reports",
  },
];

const experience = [
  {
    date: "Mar 2026 — Mar 2027",
    role: "Research Associate",
    place: "Carnegie Mellon University · Pittsburgh",
    detail: "Leads fairness robustness research in face PAD under distribution shift and contributes to a Microsoft-funded malware analysis project.",
  },
  {
    date: "Aug — Dec 2025",
    role: "Research Assistant",
    place: "Carnegie Mellon University · Pittsburgh",
    detail: "Led comparative ViT, ResNet, and DeiT experiments on architecture, demographic performance, and cross-demographic generalization.",
  },
  {
    date: "Jul — Nov 2025",
    role: "AI, Data Management & Cybersecurity Intern",
    place: "International Telecommunication Union · Geneva",
    detail: "Investigated platform vulnerabilities and the relationship between AI, data management, and security in AI-enabled information systems.",
  },
  {
    date: "Jun — Aug 2025",
    role: "Research Intern",
    place: "Carnegie Mellon University · Pittsburgh",
    detail: "Initiated demographic fairness research for underrepresented African populations and developed a lightweight face PAD pipeline.",
  },
  {
    date: "Jan — Apr 2025",
    role: "Teaching Assistant · CMU Africa Bridge Program",
    place: "Carnegie Mellon University Africa · Kigali",
    detail: "Supported undergraduate students preparing for graduate-level study in computing and technology.",
  },
  {
    date: "Sep 2022 — Feb 2023",
    role: "Networks & Telecommunications Intern",
    place: "Resotel · Douala",
    detail: "Supported surveillance systems, optical-fiber maintenance, secure NAS deployment, and organizational communications infrastructure.",
  },
];

const projects = [
  {
    title: "Cross-Platform Automated Malware Analysis Pipeline",
    context: "MSc final practicum · CMU",
    tags: ["CAPE Sandbox", "Python", "Virtual machines", "SIEM"],
    detail: "Automated Windows and Linux malware routing, isolated analysis, structured reporting, and SOC/SIEM ingestion for the CMU-Upanzi network.",
  },
  {
    title: "Ethical Hacking & Penetration Testing",
    context: "Applied cybersecurity",
    tags: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
    detail: "Network vulnerability discovery, Wi-Fi security assessment, traffic analysis, and automated vulnerability scanning.",
  },
  {
    title: "IoT-Based Fetal Health Monitoring System",
    context: "BEng final project",
    tags: ["IoT", "Signal processing", "Arduino"],
    detail: "Embedded monitoring system for fetal movement with signal filtering and wireless transmission to remote monitoring stations.",
  },
];

const navPages: Page[] = ["home", "research", "publications", "experience", "education", "contact"];
const studioEnabled = process.env.NODE_ENV === "development";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Page>("home");
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [darkMode, setDarkMode] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const studioScrollRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const visiblePages = useMemo(() => navPages.filter((item) => {
    if (item === "home") return true;
    if (item === "research") return config.content.research || config.content.projects;
    if (item === "publications") return config.content.publications;
    if (item === "experience") return config.content.experience;
    if (item === "education") return config.content.education;
    return config.content.contact;
  }), [config.content]);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const stored = studioEnabled ? window.localStorage.getItem("ntung-site-studio-v6") : null;
        if (stored) {
          const parsed = JSON.parse(stored) as Partial<SiteConfig>;
          setConfig({ ...defaultConfig, ...parsed, content: { ...defaultConfig.content, ...parsed.content } });
        }
        setDarkMode(window.localStorage.getItem("ntung-color-mode-v1") === "dark");
      } catch {
        // Storage is optional; the public site works without it.
      }
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready || !studioEnabled) return;
    window.localStorage.setItem("ntung-site-studio-v6", JSON.stringify(config));
  }, [config, ready]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem("ntung-color-mode-v1", darkMode ? "dark" : "light");
  }, [darkMode, ready]);

  useEffect(() => {
    document.body.style.overflow = studioOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [studioOpen]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setStudioOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const sections = navPages
      .map((item) => document.getElementById(item))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id as Page);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ready, config.content]);

  const navigate = (next: Page) => {
    setActiveSection(next);
    document.getElementById(next)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const update = <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => {
    setConfig((current) => ({ ...current, [key]: value }));
  };

  const toggleContent = (key: ContentKey) => {
    setConfig((current) => ({ ...current, content: { ...current.content, [key]: !current.content[key] } }));
  };

  const openStudio = () => {
    setStudioOpen(true);
    requestAnimationFrame(() => studioScrollRef.current?.scrollTo({ top: 0 }));
  };

  const reset = () => {
    setConfig(defaultConfig);
    setActiveSection("home");
    requestAnimationFrame(() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <div
      className={`research-site dossier-site ${ready ? "is-ready" : ""} ${studioOpen ? "has-studio-open" : ""}`}
      data-theme={config.theme}
      data-font={config.font}
      data-hero={config.hero}
      data-portrait={config.portrait}
      data-width={config.width}
      data-density={config.density}
      data-publications={config.publicationLayout}
      data-corners={config.corners}
      data-mode={darkMode ? "dark" : "light"}
    >
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-canvas">
        <header className="site-header">
          <button className="brand" type="button" onClick={() => navigate("home")} aria-label="Go to home">NNL</button>
          <nav className="primary-nav" aria-label="Primary navigation">
            {visiblePages.map((item) => (
              <a key={item} href={`#${item}`} className={activeSection === item ? "is-active" : ""} aria-current={activeSection === item ? "location" : undefined} onClick={() => setActiveSection(item)}>{pageLabels[item]}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="mode-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? "Use light mode" : "Use dark mode"}>{darkMode ? <Sun /> : <Moon />}</button>
            {studioEnabled && <button type="button" onClick={openStudio} aria-label="Open Site Studio" aria-expanded={studioOpen}><SlidersHorizontal /></button>}
          </div>
        </header>

        <main id="main-content">
          <div id="home" className="scroll-section"><HomeView config={config} basePath={basePath} navigate={navigate} /></div>
          {(config.content.research || config.content.projects) && <div id="research" className="scroll-section"><ResearchView config={config} /></div>}
          {config.content.publications && <div id="publications" className="scroll-section"><PublicationsView layout={config.publicationLayout} /></div>}
          {config.content.experience && <div id="experience" className="scroll-section"><ExperienceView /></div>}
          {config.content.education && <div id="education" className="scroll-section"><EducationView /></div>}
          {config.content.contact && <div id="contact" className="scroll-section"><ContactView /></div>}
        </main>
      </div>

      {studioEnabled && studioOpen && <button className="studio-backdrop" type="button" aria-label="Close Site Studio" onClick={() => setStudioOpen(false)} />}
      {studioEnabled && <SiteStudio
        open={studioOpen}
        config={config}
        scrollRef={studioScrollRef}
        update={update}
        toggleContent={toggleContent}
        reset={reset}
        close={() => setStudioOpen(false)}
      />}
    </div>
  );
}

function HomeView({ config, basePath, navigate }: { config: SiteConfig; basePath: string; navigate: (page: Page) => void }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <h1>Ntung Ngela Landon</h1>
          <p className="hero-statement">I study fairness, robustness, and security in machine-learning systems, with a focus on biometric evaluation and real-world reliability.</p>
          <p className="affiliation">Research Associate · Carnegie Mellon University</p>
          <a className="hero-action" href={`${basePath}/Ntung_Ngela_Landon_CV.pdf`} download>Download CV <ArrowDown /></a>
        </div>
        {config.portrait !== "hidden" && (
          <div className="hero-portrait"><Image src={`${basePath}/Landon.jpg`} alt="Ntung Ngela Landon" width={392} height={596} priority /></div>
        )}
      </section>

      {config.content.focus && (
        <section className="focus-strip">
          <FocusItem icon={<ShieldCheck />} title="AI / ML Security" text="Threats and vulnerabilities in learning systems." />
          <FocusItem icon={<Fingerprint />} title="Biometric Security" text="Face PAD and authentication reliability." />
          <FocusItem icon={<Scale />} title="Fairness & Robustness" text="Evaluation across populations and shifts." />
          <FocusItem icon={<Bug />} title="Malware Analysis" text="Automated analysis and detection systems." />
        </section>
      )}

      {config.content.overview && (
        <section className="overview-grid">
          <OverviewCard title="Research statement" action="Research profile" onClick={() => navigate("research")}>
            <p>My work examines how evaluation choices, model architecture, datasets, and random variation shape the security and fairness conclusions we draw from AI systems.</p>
          </OverviewCard>
          <OverviewCard title="Selected research" action="Current work" onClick={() => navigate("research")}>
            <strong>Fairness under distribution shift in face PAD</strong>
            <p>Cross-dataset evaluation, ablations, and multi-seed replication.</p>
          </OverviewCard>
          <OverviewCard title="Publications" action="Browse publications" onClick={() => navigate("publications")}>
            <strong>4 research works</strong>
            <p>Journal article, conference paper, and manuscripts under review.</p>
          </OverviewCard>
        </section>
      )}

      {config.content.scholarly && <ScholarlyLinks />}
    </>
  );
}

function FocusItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article><span>{icon}</span><div><h2>{title}</h2><p>{text}</p></div></article>;
}

function OverviewCard({ title, action, onClick, children }: { title: string; action: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <article>
      <h2>{title}</h2><div className="overview-copy">{children}</div>
      <button type="button" onClick={onClick}>{action} <ArrowRight /></button>
    </article>
  );
}

function ScholarlyLinks() {
  return (
    <section className="scholarly-row">
      <h2>Scholarly links</h2>
      <div>
        <a href="https://github.com/NTUNG-LANDON" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub <ArrowUpRight /></a>
        <a href="https://www.linkedin.com/in/ntung-landon" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn <ArrowUpRight /></a>
        <a href="https://doi.org/10.3390/jcp6010012" target="_blank" rel="noreferrer"><BookOpenText /> Latest paper <ArrowUpRight /></a>
      </div>
    </section>
  );
}

function ViewHeader({ title, text }: { title: string; text: string }) {
  return <header className="view-header"><h2>{title}</h2><p>{text}</p></header>;
}

function ResearchView({ config }: { config: SiteConfig }) {
  return (
    <section className="page-view">
      <ViewHeader title="Research" text="Security, fairness, robustness, and evaluation of AI-enabled systems." />
      {config.content.research && (
        <div className="contribution-grid">
          {researchContributions.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <p className="contribution-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      )}
      {config.content.projects && (
        <div className="subsection">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title}>
                <div className="project-heading"><span>{project.context}</span><h3>{project.title}</h3></div>
                <p>{project.detail}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function PublicationsView({ layout }: { layout: PublicationLayout }) {
  return (
    <section className="page-view">
      <ViewHeader title="Publications" text="Published work, preprints, and current manuscripts." />
      <div className={`publication-list publication-${layout}`}>
        {publications.map((item) => (
          <article key={item.title}>
            <div className="publication-meta"><span>{item.year}</span><small>{item.type}</small></div>
            <div><h3>{item.title}</h3><p>{item.meta}</p></div>
            {item.href ? <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}><ArrowUpRight /></a> : <span className="review-status">In review</span>}
          </article>
        ))}
      </div>
      <div className="presentation-note"><UsersRound /><div><strong>Research presentation</strong><p>Architectural Bias in Face PAD · CSP 2026 · Sapporo, Japan</p></div></div>
    </section>
  );
}

function ExperienceView() {
  return (
    <section className="page-view">
      <ViewHeader title="Experience" text="Research, applied cybersecurity, teaching, and technical systems work." />
      <div className="experience-list">
        {experience.map((item) => (
          <article key={`${item.role}-${item.date}`}>
            <span>{item.date}</span>
            <div><h3>{item.role}</h3><p>{item.place}</p><p className="experience-detail">{item.detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationView() {
  return (
    <section className="page-view">
      <ViewHeader title="Education" text="Academic preparation in cybersecurity and computer engineering." />
      <div className="education-grid">
        <article><h3>MSc, Information Technology — Cybersecurity</h3><p>Carnegie Mellon University · 2024–2025</p></article>
        <article><h3>BEng, Computer Engineering</h3><p>University of Buea · 2019–2023</p></article>
      </div>
    </section>
  );
}

function ContactView() {
  return (
    <section className="contact-view page-view">
      <ViewHeader title="Contact" text="For research conversations, collaboration, or speaking opportunities." />
      <a className="email-card" href="mailto:nngelala@andrew.cmu.edu"><Mail /><span><small>Email</small>nngelala@andrew.cmu.edu</span><ArrowRight /></a>
      <div className="contact-links">
        <a href="https://github.com/NTUNG-LANDON" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub <ArrowUpRight /></a>
        <a href="https://www.linkedin.com/in/ntung-landon" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn <ArrowUpRight /></a>
      </div>
    </section>
  );
}

function SiteStudio({ open, config, scrollRef, update, toggleContent, reset, close }: {
  open: boolean;
  config: SiteConfig;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  update: <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => void;
  toggleContent: (key: ContentKey) => void;
  reset: () => void;
  close: () => void;
}) {
  return (
    <aside className={`site-studio ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open} aria-label="Site Studio">
      <header><div><h2>Site Studio</h2><p>Change the look and structure.</p></div><button type="button" onClick={close} aria-label="Close Site Studio"><X /></button></header>
      <div className="studio-scroll" ref={scrollRef}>
        <ControlGroup label="Visual system">
          <div className="theme-grid">{themes.map((theme) => <button key={theme.id} type="button" className={config.theme === theme.id ? "is-selected" : ""} onClick={() => update("theme", theme.id)}><i style={{ "--swatch": theme.color } as React.CSSProperties} /><span>{theme.label}</span></button>)}</div>
        </ControlGroup>
        <ControlGroup label="Typography">
          <div className="font-grid">{fonts.map((font) => <button key={font.id} type="button" className={config.font === font.id ? "is-selected" : ""} onClick={() => update("font", font.id)}><span><strong>{font.label}</strong><small>{font.detail}</small></span><i /></button>)}</div>
        </ControlGroup>
        <Segmented label="Hero layout" value={config.hero} options={[["split", "Split"], ["center", "Center"], ["compact", "Compact"]]} onChange={(value) => update("hero", value)} />
        <Segmented label="Portrait placement" value={config.portrait} options={[["right", "Right"], ["left", "Left"], ["hidden", "Hidden"]]} onChange={(value) => update("portrait", value)} />
        <Segmented label="Content width" value={config.width} options={[["compact", "64%"], ["sixty", "72%"], ["wide", "80%"]]} onChange={(value) => update("width", value)} />
        <Segmented label="Density" value={config.density} options={[["compact", "Compact"], ["balanced", "Balanced"], ["airy", "Airy"]]} onChange={(value) => update("density", value)} />
        <Segmented label="Publication style" value={config.publicationLayout} options={[["list", "List"], ["grid", "Grid"]]} onChange={(value) => update("publicationLayout", value)} />
        <Segmented label="Corner style" value={config.corners} options={[["square", "Square"], ["soft", "Soft"], ["round", "Round"]]} onChange={(value) => update("corners", value)} />
        <ControlGroup label="Section visibility">
          <div className="toggle-list">{(Object.keys(config.content) as ContentKey[]).map((key) => <label key={key}><span>{key}</span><input type="checkbox" checked={config.content[key]} onChange={() => toggleContent(key)} /><i /></label>)}</div>
        </ControlGroup>
      </div>
      <footer><button type="button" onClick={reset}>Reset</button><button type="button" onClick={close}>Done</button></footer>
    </aside>
  );
}

function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return <fieldset className="control-group"><legend>{label}</legend>{children}</fieldset>;
}

function Segmented<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: [T, string][]; onChange: (value: T) => void }) {
  return <ControlGroup label={label}><div className={`segmented segmented-${options.length}`}>{options.map(([id, text]) => <button key={id} type="button" className={value === id ? "is-selected" : ""} onClick={() => onChange(id)}>{text}</button>)}</div></ControlGroup>;
}
