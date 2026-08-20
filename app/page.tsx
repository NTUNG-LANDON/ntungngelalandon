"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="/" className="logo">
            NL<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/research">Research</a>
            <a href="/publications">Publications</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>

        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-grid">

          <div className="hero-content">

            <p className="eyebrow">
              CYBERSECURITY RESEARCHER · AI SECURITY · BIOMETRIC SECURITY
            </p>

            <h1>
              Securing AI.
              <br />
              <span>Understanding its limitations.</span>
              <br />
              Building trustworthy systems.
            </h1>

            <p className="hero-description">
              I am <strong>Ntung Ngela Landon</strong>, a cybersecurity
              researcher working at the intersection of artificial
              intelligence, biometric security, and cybersecurity.
            </p>

            <div className="hero-buttons">

              <a href="/research" className="primary-button">
                Explore My Research →
              </a>

              <a
                href="/Ntung_Ngela_Landon_CV.pdf"
                className="secondary-button"
                target="_blank"
              >
                View CV
              </a>

            </div>

          </div>


          {/* RESEARCH TERMINAL */}
          <div className="hero-card">

            <div className="terminal">

              <div className="terminal-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="terminal-body">

                <p>
                  <span className="green">researcher</span>
                  <span className="muted">@</span>
                  <span className="blue">landon</span>
                </p>

                <p className="command">
                  $ research --current
                </p>

                <p className="output">
                  AI Security
                  <br />
                  Biometric Security
                  <br />
                  Malware Analysis
                  <br />
                  Trustworthy AI
                </p>

                <p className="command">
                  $ status
                </p>

                <p className="output">
                  Research Associate
                  <br />
                  Carnegie Mellon University
                </p>

                <p className="cursor">▊</p>

              </div>

            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </div>

      </section>


      {/* RESEARCH OVERVIEW */}
      <section className="section dark-section">

        <div className="container">

          <div className="section-label">
            01 / RESEARCH
          </div>

          <h2>
            Understanding how AI behaves
            <br />
            <span>when conditions change.</span>
          </h2>

          <div className="intro-grid">

            <p className="large-text">
              My research focuses on security-critical AI systems
              and the question of whether their reported performance
              remains reliable outside ideal experimental conditions.
            </p>

            <p>
              My work has focused on Face Presentation Attack Detection,
              demographic fairness, architectural bias, distribution
              shift, reproducibility, and broader AI security problems.
            </p>

          </div>


          <div className="research-cards">

            <div className="research-card">
              <span>01</span>
              <h3>Biometric Security</h3>
              <p>
                Face Presentation Attack Detection and secure
                biometric authentication.
              </p>
            </div>

            <div className="research-card">
              <span>02</span>
              <h3>Trustworthy AI</h3>
              <p>
                Fairness, demographic disparities, reproducibility,
                and responsible evaluation.
              </p>
            </div>

            <div className="research-card">
              <span>03</span>
              <h3>AI Security</h3>
              <p>
                Security challenges emerging from AI-enabled systems.
              </p>
            </div>

            <div className="research-card">
              <span>04</span>
              <h3>Robustness</h3>
              <p>
                Studying whether AI systems generalize across
                datasets, environments, and experimental conditions.
              </p>
            </div>

          </div>

          <div className="section-action">
            <a href="/research" className="text-link">
              View research journey →
            </a>
          </div>

        </div>

      </section>


      {/* RESEARCH JOURNEY */}
      <section className="section">

        <div className="container">

          <div className="section-label">
            02 / RESEARCH JOURNEY
          </div>

          <h2>
            From first experiment
            <br />
            <span>to independent research.</span>
          </h2>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                2025
              </div>

              <div>
                <h3>Research Intern</h3>

                <p className="timeline-org">
                  Carnegie Mellon University
                </p>

                <p>
                  Began research on fairness-aware Face Presentation
                  Attack Detection, leading to my first peer-reviewed
                  publication.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2025
              </div>

              <div>
                <h3>Research Assistant</h3>

                <p className="timeline-org">
                  Carnegie Mellon University
                </p>

                <p>
                  Continued research into architectural bias in Face
                  Presentation Attack Detection, investigating the
                  behavior of convolutional and transformer-based
                  architectures.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2026
              </div>

              <div>
                <h3>Research Associate</h3>

                <p className="timeline-org">
                  Carnegie Mellon University
                </p>

                <p>
                  Continuing research in cybersecurity and AI security,
                  including Microsoft-funded malware analysis research.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PUBLICATIONS */}
      <section className="section dark-section">

        <div className="container">

          <div className="section-label">
            03 / PUBLICATIONS
          </div>

          <h2>
            Selected
            <br />
            <span>research contributions.</span>
          </h2>


          <div className="publication-list">

            <article className="publication">

              <div className="publication-number">
                01
              </div>

              <div className="publication-body">

                <p className="publication-type">
                  PEER-REVIEWED JOURNAL
                </p>

                <h3>
                  Fairness-Aware Face Presentation Attack Detection
                  Using Local Binary Patterns: Bridging Skin Tone Bias
                  in Biometric Systems
                </h3>

                <p className="authors">
                  Ntung Ngela Landon et al.
                </p>

                <p className="venue">
                  Journal of Cybersecurity and Privacy · 2026
                </p>

                <a
                  href="https://doi.org/10.3390/jcp6010012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-link"
                >
                  DOI ↗
                </a>

              </div>

            </article>


            <article className="publication">

              <div className="publication-number">
                02
              </div>

              <div className="publication-body">

                <p className="publication-type">
                  RESEARCH PAPER
                </p>

                <h3>
                  Architectural Bias in Face Presentation Attack
                  Detection: A Comparative Study of Vision Transformers
                  and Convolutional Neural Networks
                </h3>

                <p className="authors">
                  Ntung Ngela Landon et al.
                </p>

                <p className="venue">
                  2026
                </p>

                <a
                  href="https://doi.org/10.48550/arXiv.2606.18510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-link"
                >
                  DOI ↗
                </a>

              </div>

            </article>


            <article className="publication">

              <div className="publication-number">
                03
              </div>

              <div className="publication-body">

                <p className="publication-type">
                  UNDER REVIEW
                </p>

                <h3>
                  Fairness Under Distribution Shift in Face Presentation
                  Attack Detection: A Cross-Dataset and Ablation-Based
                  Analysis
                </h3>

                <p className="authors">
                  Ntung Ngela Landon, Floride Tuyisenge,
                  Remy Dukundane, Emmanuel Iduh, and
                  Jema David Ndibwile
                </p>

              </div>

            </article>


            <article className="publication">

              <div className="publication-number">
                04
              </div>

              <div className="publication-body">

                <p className="publication-type">
                  UNDER REVIEW
                </p>

                <h3>
                  Adversarial Artificial Intelligence Threats in Smart
                  Energy Grids: When Learning Systems Learn from the
                  Attacker
                </h3>

                <p className="authors">
                  Jema David Ndibwile, Ntung Ngela Landon,
                  and Lunodzo Mwinuka
                </p>

              </div>

            </article>

          </div>


          <div className="section-action">
            <a href="/publications" className="text-link">
              View all publications →
            </a>
          </div>

        </div>

      </section>


      {/* CONFERENCE */}
      <section className="section conference-section">

        <div className="container">

          <div className="conference-grid">

            <div>

              <p className="eyebrow">
                RESEARCH PRESENTATION
              </p>

              <h2>
                Research beyond
                <br />
                <span>the laboratory.</span>
              </h2>

            </div>

            <div>

              <p className="conference-date">
                APRIL 2026 · SAPPORO, JAPAN
              </p>

              <h3>
                IEEE Conference on Cryptography,
                Security and Privacy
              </h3>

              <p>
                Presented research on architectural bias in Face
                Presentation Attack Detection at an international
                cybersecurity conference in Sapporo, Japan.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT */}
      <section className="section dark-section">

        <div className="container">

          <div className="section-label">
            04 / SELECTED PROJECT
          </div>

          <h2>
            Engineering security
            <br />
            <span>into research systems.</span>
          </h2>

          <div className="project-feature">

            <p className="project-category">
              MASTER&apos;S FINAL PRACTICUM
            </p>

            <h3>
              Cross-Platform Automated Malware Analysis Pipeline
            </h3>

            <p>
              Designed and implemented an automated malware analysis
              pipeline capable of handling both Windows and Linux
              malware. The architecture integrated a honeypot network,
              CAPE Sandbox, virtualized Windows and Linux analysis
              environments, ingestion scripts, event hashes,
              database reporting, and SIEM integration for the
              CMU-Upanzi network.
            </p>

            <div className="tag-list">
              <span>CAPE Sandbox</span>
              <span>Malware Analysis</span>
              <span>Windows</span>
              <span>Linux</span>
              <span>Virtualization</span>
              <span>SIEM</span>
            </div>

          </div>

          <div className="section-action">
            <a href="/projects" className="text-link">
              Explore projects →
            </a>
          </div>

        </div>

      </section>


      {/* ABOUT PREVIEW */}
      <section className="section">

        <div className="container">

          <div className="section-label">
            05 / ABOUT
          </div>

          <h2>
            Computer engineering
            <br />
            <span>to cybersecurity research.</span>
          </h2>

          <div className="intro-grid">

            <p className="large-text">
              I am interested in difficult security problems
              where machine learning, cybersecurity, and real-world
              systems intersect.
            </p>

            <p>
              I hold an M.S. in Information Technology from
              Carnegie Mellon University and a B.Eng. in Computer
              Engineering from the University of Buea.
            </p>

          </div>

          <div className="section-action">
            <a href="/about" className="text-link">
              More about me →
            </a>
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="container contact-container">

          <p className="eyebrow">
            LET&apos;S CONNECT
          </p>

          <h2>
            Research.
            <br />
            <span>Collaboration.</span>
          </h2>

          <p>
            I am interested in connecting with researchers,
            faculty, PhD advisors, research laboratories, and
            organizations working on challenging problems in
            AI and cybersecurity.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:nngelala@andrew.cmu.edu"
              className="primary-button"
            >
              Email Me →
            </a>

            <a
              href="https://www.linkedin.com/in/ntung-landon"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/ntung-landon"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-container">

          <div>

            <strong>
              Ntung Ngela Landon
            </strong>

            <p>
              Cybersecurity Researcher · AI Security ·
              Biometric Security
            </p>

          </div>

          <div className="footer-links">

            <a href="/research">
              Research
            </a>

            <a href="/publications">
              Publications
            </a>

            <a href="/about">
              About
            </a>

            <a
              href="https://www.linkedin.com/in/ntung-landon"
              target="_blank"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="copyright">
          © 2026 Ntung Ngela Landon
        </div>

      </footer>

    </main>
  );
}