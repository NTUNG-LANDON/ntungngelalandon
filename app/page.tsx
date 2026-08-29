"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ThemeName = "graphite" | "burgundy" | "forest" | "cobalt" | "violet" | "mono";
type FontName = "cv" | "editorial" | "modern" | "humanist";
type HeroLayout = "split" | "center" | "compact";
type PortraitPlacement = "right" | "left" | "hidden";
type ContentWidth = "compact" | "balanced" | "wide";
type Density = "compact" | "comfortable" | "airy";
type PublicationLayout = "list" | "grid";
type CornerStyle = "sharp" | "soft" | "round";
type SectionKey = "research" | "publications" | "experience" | "projects" | "education" | "skills" | "about" | "contact";

type SiteConfig = {
  theme: ThemeName;
  font: FontName;
  hero: HeroLayout;
  portrait: PortraitPlacement;
  width: ContentWidth;
  density: Density;
  publications: PublicationLayout;
  corners: CornerStyle;
  sections: Record<SectionKey, boolean>;
};

const defaultConfig: SiteConfig = {
  theme: "graphite",
  font: "cv",
  hero: "split",
  portrait: "right",
  width: "balanced",
  density: "comfortable",
  publications: "list",
  corners: "soft",
  sections: {
    research: true,
    publications: true,
    experience: true,
    projects: true,
    education: true,
    skills: true,
    about: true,
    contact: true,
  },
};

const themes: { id: ThemeName; label: string; color: string }[] = [
  { id: "graphite", label: "Graphite Blue", color: "#2563eb" },
  { id: "burgundy", label: "Burgundy Ink", color: "#7a1f2b" },
  { id: "forest", label: "Forest Lab", color: "#2d6a4f" },
  { id: "cobalt", label: "Cobalt Research", color: "#4869e8" },
  { id: "violet", label: "Violet Signal", color: "#7950f2" },
  { id: "mono", label: "Monochrome", color: "#111111" },
];

const fontOptions: { id: FontName; label: string; detail: string }[] = [
  { id: "cv", label: "CV Original", detail: "Fraunces · DM Sans" },
  { id: "editorial", label: "Editorial", detail: "Newsreader · Manrope" },
  { id: "modern", label: "Modern Sans", detail: "Space Grotesk · DM Sans" },
  { id: "humanist", label: "Humanist", detail: "Sora · Manrope" },
];

const researchQuestions = [
  {
    number: "01",
    title: "Fairness under distribution shift",
    text: "When datasets, training seeds, and evaluation protocols change, which fairness conclusions remain reliable?",
    tags: ["Robustness", "Reproducibility"],
  },
  {
    number: "02",
    title: "Architecture and demographic bias",
    text: "How do convolutional and transformer-based vision systems differ across demographic groups and unseen populations?",
    tags: ["Computer vision", "Biometrics"],
  },
  {
    number: "03",
    title: "Security of AI-enabled systems",
    text: "How can we evaluate model vulnerabilities and build security evidence that survives real-world constraints?",
    tags: ["AI/ML security", "Evaluation"],
  },
];

const publications = [
  {
    year: "2026",
    status: "Peer-reviewed journal",
    title: "Fairness-Aware Face Presentation Attack Detection Using Local Binary Patterns: Bridging Skin Tone Bias in Biometric Systems",
    authors: "Jema David Ndibwile, Ntung Ngela Landon, Floride Tuyisenge",
    venue: "Journal of Cybersecurity and Privacy, 6(1)",
    href: "https://doi.org/10.3390/jcp6010012",
    action: "Paper",
  },
  {
    year: "2026",
    status: "Conference paper · Preprint",
    title: "Architectural Bias in Face Presentation Attack Detection: A Comparative Study of Vision Transformers and Convolutional Neural Networks",
    authors: "Ntung Ngela Landon, Floride Tuyisenge, Jema David Ndibwile",
    venue: "CSP 2026 · arXiv:2606.18510",
    href: "https://doi.org/10.48550/arXiv.2606.18510",
    action: "Preprint",
  },
  {
    year: "2026",
    status: "Manuscript under review",
    title: "Fairness Under Distribution Shift in Face Presentation Attack Detection: A Cross-Dataset and Ablation-Based Analysis",
    authors: "Ntung Ngela Landon, Floride Tuyisenge, Remy Dukundane, Emmanuel Iduh, Jema David Ndibwile",
    venue: "Under review at IEEE Access",
  },
  {
    year: "2026",
    status: "Manuscript under review",
    title: "Adversarial Artificial Intelligence Threats in Smart Energy Grids: When Learning Systems Learn from the Attacker",
    authors: "Jema David Ndibwile, Ntung Ngela Landon, Lunodzo Mwinuka",
    venue: "Under review at Energy Reports",
  },
];

const experience = [
  {
    date: "Mar 2026 — Mar 2027",
    role: "Research Associate",
    place: "Carnegie Mellon University · Pittsburgh",
    text: "Leading research on the robustness and reproducibility of demographic fairness in face PAD under distribution shift, while contributing to a Microsoft-funded malware analysis project.",
  },
  {
    date: "Aug — Dec 2025",
    role: "Research Assistant",
    place: "Carnegie Mellon University · Pittsburgh",
    text: "Led comparative experiments across ViT-Tiny, ResNet18, and DeiT-S to study architecture, demographic performance, and cross-demographic generalization.",
  },
  {
    date: "Jul — Nov 2025",
    role: "AI, Data Management & Cybersecurity Intern",
    place: "International Telecommunication Union · Geneva",
    text: "Investigated platform vulnerabilities and the relationship between AI, data management, and security in AI-enabled information systems.",
  },
  {
    date: "Jun — Aug 2025",
    role: "Research Intern",
    place: "Carnegie Mellon University · Pittsburgh",
    text: "Initiated fairness research for underrepresented African populations and developed a lightweight face PAD pipeline with statistical fairness evaluation.",
  },
];

const projects = [
  {
    label: "MSc practicum",
    title: "Cross-Platform Automated Malware Analysis Pipeline",
    text: "An automated Windows and Linux malware-analysis workflow integrating CAPE Sandbox, isolated virtual machines, structured reporting, and SOC/SIEM ingestion.",
    tags: ["CAPE Sandbox", "Python", "SIEM"],
  },
  {
    label: "Applied security",
    title: "Ethical Hacking & Penetration Testing",
    text: "Security assessments spanning vulnerability discovery, wireless security, traffic analysis, and automated network scanning.",
    tags: ["Kali Linux", "Burp Suite", "Wireshark"],
  },
  {
    label: "BEng final project",
    title: "IoT-Based Fetal Health Monitoring System",
    text: "A remote monitoring system combining embedded sensors, signal processing, and wireless transmission of fetal movement indicators.",
    tags: ["IoT", "Signal processing", "Arduino"],
  },
];

const skills = [
  ["Research methods", "Controlled experiments, ablations, cross-dataset evaluation, multi-seed replication"],
  ["AI / ML", "Computer vision, CNNs, Vision Transformers, transfer learning, model evaluation"],
  ["Security", "Malware analysis, penetration testing, biometric security, vulnerability assessment"],
  ["Tools", "Python, TensorFlow, OpenCV, scikit-learn, CAPE Sandbox, Wireshark"],
];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;
}

function ExternalIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8 5H5v10h10v-3M11 4h5v5M10 10l6-6" /></svg>;
}

function TuneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6" /></svg>;
}

export default function Home() {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [studioOpen, setStudioOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const saved = window.localStorage.getItem("ntung-site-studio-v1");
        if (saved) {
          const parsed = JSON.parse(saved) as Partial<SiteConfig>;
          setConfig({ ...defaultConfig, ...parsed, sections: { ...defaultConfig.sections, ...parsed.sections } });
        }
      } catch {
        // A blocked storage API should not affect the public site.
      }
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem("ntung-site-studio-v1", JSON.stringify(config));
  }, [config, ready]);

  useEffect(() => {
    document.body.style.overflow = studioOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [studioOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStudioOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const update = <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => {
    setConfig((current) => ({ ...current, [key]: value }));
  };

  const toggleSection = (key: SectionKey) => {
    setConfig((current) => ({ ...current, sections: { ...current.sections, [key]: !current.sections[key] } }));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`research-site ${ready ? "is-ready" : ""}`}
      data-theme={config.theme}
      data-font={config.font}
      data-hero={config.hero}
      data-portrait={config.portrait}
      data-width={config.width}
      data-density={config.density}
      data-publications={config.publications}
      data-corners={config.corners}
    >
      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">NL</span>
            <span className="brand-copy"><strong>Ntung N. Landon</strong><small>AI / ML Security Researcher</small></span>
          </a>
          <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {config.sections.research && <a href="#research" onClick={closeMenu}>Research</a>}
            {config.sections.publications && <a href="#publications" onClick={closeMenu}>Publications</a>}
            {config.sections.experience && <a href="#experience" onClick={closeMenu}>Experience</a>}
            {config.sections.about && <a href="#about" onClick={closeMenu}>About</a>}
          </nav>
          <div className="header-actions">
            <a className="cv-link" href={`${basePath}/Ntung_Ngela_Landon_CV.pdf`} target="_blank" rel="noreferrer">CV <ExternalIcon /></a>
            <button className="studio-trigger" type="button" onClick={() => setStudioOpen(true)} aria-label="Open site studio" aria-expanded={studioOpen}>
              <TuneIcon /><span>Customize</span>
            </button>
            <button className="menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="kicker"><span /> AI / ML security · Trustworthy AI</p>
              <h1>Securing machine learning for the conditions that matter.</h1>
              <p className="hero-lede">I study how AI systems behave when fairness, robustness, and security are tested beyond controlled settings.</p>
              <p className="hero-note">Research Associate at Carnegie Mellon University, working across biometric security, distribution shift, reproducibility, and malware analysis.</p>
              <div className="hero-actions">
                {config.sections.research && <a className="text-link text-link-primary" href="#research">Explore my research <ArrowIcon /></a>}
                {config.sections.contact && <a className="text-link" href="mailto:nngelala@andrew.cmu.edu">Get in touch <ArrowIcon /></a>}
              </div>
            </div>
            {config.portrait !== "hidden" && (
              <div className="portrait-wrap">
                <span className="portrait-outline" aria-hidden="true" />
                <Image src={`${basePath}/Landon.jpg`} alt="Ntung Ngela Landon" className="portrait" width={392} height={596} priority />
                <p className="portrait-caption"><span>Currently</span> Pittsburgh, USA</p>
              </div>
            )}
          </div>
          <div className="site-shell scholar-strip" aria-label="Scholarly links">
            <span>Research profiles</span>
            <a href="https://github.com/NTUNG-LANDON" target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
            <a href="https://www.linkedin.com/in/ntung-landon" target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
            <a href="https://doi.org/10.3390/jcp6010012" target="_blank" rel="noreferrer">Latest paper <ExternalIcon /></a>
          </div>
        </section>

        {config.sections.research && (
          <section className="content-section research-section" id="research">
            <div className="site-shell">
              <div className="section-heading">
                <div><p className="section-index">01 · Research</p><h2>Questions shaping my work</h2></div>
                <p>My research connects rigorous empirical evaluation with practical cybersecurity—especially where aggregate performance can hide unequal or unstable behavior.</p>
              </div>
              <div className="question-grid">
                {researchQuestions.map((item) => (
                  <article className="question-card" key={item.number}>
                    <span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
                    <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </article>
                ))}
              </div>
              <div className="research-statement">
                <p className="statement-label">Research direction</p>
                <p className="statement-copy">I am interested in the security, reliability, and trustworthy deployment of machine-learning systems: how vulnerabilities emerge, how evaluation choices shape our conclusions, and how evidence can remain useful across populations and environments.</p>
                <a className="text-link" href={`${basePath}/research/`}>Read the full research profile <ArrowIcon /></a>
              </div>
            </div>
          </section>
        )}

        {config.sections.publications && (
          <section className="content-section publications-section" id="publications">
            <div className="site-shell">
              <div className="section-heading section-heading-compact">
                <div><p className="section-index">02 · Publications</p><h2>Selected writing</h2></div>
                <a className="text-link" href={`${basePath}/publications/`}>View all <ArrowIcon /></a>
              </div>
              <div className="publication-list">
                {publications.map((publication) => (
                  <article className="publication-row" key={publication.title}>
                    <div className="publication-meta"><span>{publication.year}</span><small>{publication.status}</small></div>
                    <div className="publication-body"><h3>{publication.title}</h3><p>{publication.authors}</p><small>{publication.venue}</small></div>
                    <div className="publication-action">
                      {publication.href ? <a href={publication.href} target="_blank" rel="noreferrer" aria-label={`${publication.action}: ${publication.title}`}>{publication.action} <ExternalIcon /></a> : <span>In review</span>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {config.sections.experience && (
          <section className="content-section experience-section" id="experience">
            <div className="site-shell split-section">
              <div className="split-intro"><p className="section-index">03 · Experience</p><h2>Research across models, systems, and settings.</h2><p>From biometric model evaluation to platform security and malware analysis, my work bridges research questions with deployable systems.</p></div>
              <div className="timeline">
                {experience.map((item, index) => (
                  <article className="timeline-item" key={`${item.role}-${item.date}`}>
                    <span className="timeline-dot">{String(index + 1).padStart(2, "0")}</span>
                    <div><p className="timeline-date">{item.date}</p><h3>{item.role}</h3><p className="timeline-place">{item.place}</p><p>{item.text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {config.sections.projects && (
          <section className="content-section projects-section" id="projects">
            <div className="site-shell">
              <div className="section-heading section-heading-compact">
                <div><p className="section-index">04 · Projects</p><h2>Systems I have built</h2></div>
                <a className="text-link" href={`${basePath}/projects/`}>Project details <ArrowIcon /></a>
              </div>
              <div className="project-grid">
                {projects.map((project, index) => (
                  <article className={`project-card project-card-${index + 1}`} key={project.title}>
                    <p className="project-label">{project.label}</p><h3>{project.title}</h3><p>{project.text}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {(config.sections.about || config.sections.education || config.sections.skills) && (
          <section className="content-section profile-section" id="about">
            <div className="site-shell profile-grid">
              {config.sections.about && (
                <div className="about-block">
                  <p className="section-index">05 · Profile</p><h2>Research grounded in careful evaluation.</h2>
                  <p>My path began with demographic fairness in face Presentation Attack Detection and expanded into the broader security, robustness, and reliability of AI-enabled systems.</p>
                  <p>I value reproducible experiments, transparent limitations, and research that can inform more secure real-world systems.</p>
                  <a className="text-link" href={`${basePath}/about/`}>More about me <ArrowIcon /></a>
                </div>
              )}
              <div className="profile-details">
                {config.sections.education && (
                  <div className="detail-block">
                    <h3>Education</h3>
                    <div className="education-item"><p><strong>MSc, Information Technology — Cybersecurity</strong><span>2024 — 2025</span></p><small>Carnegie Mellon University · GPA 3.64 / 4.00</small></div>
                    <div className="education-item"><p><strong>BEng, Computer Engineering</strong><span>2019 — 2023</span></p><small>University of Buea · GPA 3.51 / 4.00</small></div>
                  </div>
                )}
                {config.sections.skills && (
                  <div className="detail-block skills-block">
                    <h3>Methods & tools</h3>
                    {skills.map(([label, value]) => <div className="skill-row" key={label}><strong>{label}</strong><span>{value}</span></div>)}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {config.sections.contact && (
          <section className="contact-section" id="contact">
            <div className="site-shell contact-grid"><p className="section-index">Let&apos;s connect</p><h2>Open to thoughtful conversations about AI security and trustworthy evaluation.</h2><a className="contact-email" href="mailto:nngelala@andrew.cmu.edu">nngelala@andrew.cmu.edu <ArrowIcon /></a></div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner"><p>© {new Date().getFullYear()} Ntung Ngela Landon</p><div><a href="https://www.linkedin.com/in/ntung-landon" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/NTUNG-LANDON" target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top ↑</a></div></div>
      </footer>

      {studioOpen && <button className="studio-backdrop" aria-label="Close site studio" onClick={() => setStudioOpen(false)} />}
      <aside className={`site-studio ${studioOpen ? "is-open" : ""}`} aria-hidden={!studioOpen} aria-label="Site customization studio">
        <div className="studio-header">
          <div><p className="studio-kicker">Live configurator</p><h2>Site Studio</h2><p>Change the visual system and structure. Your choices stay on this device.</p></div>
          <button type="button" className="studio-close" onClick={() => setStudioOpen(false)} aria-label="Close site studio">×</button>
        </div>
        <div className="studio-scroll">
          <fieldset className="control-group">
            <legend>Visual system</legend>
            <div className="theme-grid">
              {themes.map((theme) => (
                <button key={theme.id} type="button" className={config.theme === theme.id ? "is-selected" : ""} onClick={() => update("theme", theme.id)}>
                  <span className="theme-swatch" style={{ "--swatch": theme.color } as React.CSSProperties} /><span>{theme.label}</span><i aria-hidden="true">✓</i>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="control-group">
            <legend>Typography</legend>
            <div className="font-list">
              {fontOptions.map((font) => (
                <button key={font.id} type="button" className={config.font === font.id ? "is-selected" : ""} onClick={() => update("font", font.id)}>
                  <span><strong>{font.label}</strong><small>{font.detail}</small></span><i aria-hidden="true" />
                </button>
              ))}
            </div>
          </fieldset>

          <SegmentedControl label="Hero layout" value={config.hero} onChange={(value) => update("hero", value)} options={[["split", "Split"], ["center", "Center"], ["compact", "Compact"]]} />
          <SegmentedControl label="Portrait placement" value={config.portrait} onChange={(value) => update("portrait", value)} options={[["right", "Right"], ["left", "Left"], ["hidden", "Hidden"]]} />
          <SegmentedControl label="Content width" value={config.width} onChange={(value) => update("width", value)} options={[["compact", "Compact"], ["balanced", "Balanced"], ["wide", "Wide"]]} />
          <SegmentedControl label="Section density" value={config.density} onChange={(value) => update("density", value)} options={[["compact", "Compact"], ["comfortable", "Comfort"], ["airy", "Airy"]]} />
          <SegmentedControl label="Publication style" value={config.publications} onChange={(value) => update("publications", value)} options={[["list", "List"], ["grid", "Grid"]]} />
          <SegmentedControl label="Corner style" value={config.corners} onChange={(value) => update("corners", value)} options={[["sharp", "Sharp"], ["soft", "Soft"], ["round", "Round"]]} />

          <fieldset className="control-group">
            <legend>Visible sections</legend>
            <div className="toggle-list">
              {(Object.keys(config.sections) as SectionKey[]).map((key) => (
                <label key={key}><span>{key}</span><input type="checkbox" checked={config.sections[key]} onChange={() => toggleSection(key)} /><i aria-hidden="true" /></label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="studio-footer"><button type="button" className="studio-reset" onClick={() => setConfig(defaultConfig)}>Reset</button><button type="button" className="studio-done" onClick={() => setStudioOpen(false)}>Done</button></div>
      </aside>
    </div>
  );
}

function SegmentedControl<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: [T, string][]; onChange: (value: T) => void }) {
  return (
    <fieldset className="control-group">
      <legend>{label}</legend>
      <div className={`segmented segmented-${options.length}`}>
        {options.map(([id, text]) => <button key={id} type="button" className={value === id ? "is-selected" : ""} onClick={() => onChange(id)}>{text}</button>)}
      </div>
    </fieldset>
  );
}
