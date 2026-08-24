"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            NNL
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#research" onClick={() => setMenuOpen(false)}>
              Research
            </a>
            <a href="#publications" onClick={() => setMenuOpen(false)}>
              Publications
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-text">
            <p className="eyebrow">CYBERSECURITY RESEARCHER</p>

            <h1>
              Securing AI.
              <br />
              Understanding how
              <br />
              <span>machine learning systems fail.</span>
            </h1>

            <p className="hero-description">
              I am a cybersecurity researcher working at the intersection of
              AI/ML security, trustworthy machine learning, and applied
              cybersecurity.
            </p>

            <p className="hero-description">
              My research explores the security, robustness, and reliability
              of learning-based systems under distribution shifts, adversarial
              conditions, architectural changes, and real-world constraints.
            </p>

            <div className="hero-buttons">
              <a href="#research" className="button primary">
                Explore My Research
              </a>


              <a
                href="/Ntung_Ngela_Landon_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                View CV
              </a>
            </div>
          </div>

<div className="hero-card">
  <img
    src="/Landon.jpg"
    alt="Ntung Ngela Landon"
    className="profile-photo"
  />

  <h2>Ntung Ngela Landon</h2>

  <p>
    AI/ML Security · Cybersecurity · Trustworthy AI
  </p>

  <div className="hero-links">
    <a
      href="https://www.linkedin.com/in/ntung-landon"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/NTUNG-LANDON"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>
</div>
        </div>
      </section>

      {/* RESEARCH PROFILE */}
      <section className="section" id="research">
        <div className="container">
          <p className="section-label">01 / RESEARCH PROFILE</p>

          <h2 className="section-title">
            From biometric security toward broader AI/ML security.
          </h2>

          <div className="research-profile">
            <div>
              <p>
                My research journey began with the security of machine
                learning-based biometric systems, particularly face
                Presentation Attack Detection (PAD). Through this work, I
                became increasingly interested in a broader question:
                <strong> how can we understand, evaluate, and improve the
                security and reliability of machine-learning systems?</strong>
              </p>

              <p>
                My published and ongoing research examines fairness,
                architectural behavior, distribution shift, generalization,
                reproducibility, and robustness in ML-based security systems.
                These experiences have motivated me to expand toward broader
                questions in AI/ML security, including adversarial machine
                learning, model vulnerabilities, threat modeling, and the
                security of emerging AI systems.
              </p>

              <p>
                I am particularly interested in research that combines
                rigorous empirical evaluation with practical cybersecurity
                applications.
              </p>
            </div>

            <div className="research-focus-card">
              <h3>Research Focus</h3>

              <ul>
                <li>AI / ML Security</li>
                <li>Adversarial Machine Learning</li>
                <li>ML Model Vulnerabilities</li>
                <li>Trustworthy & Reliable AI</li>
                <li>Distribution Shift & Robustness</li>
                <li>Security of Emerging AI Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label">02 / RESEARCH INTERESTS</p>

          <h2 className="section-title">
            Questions I want to explore.
          </h2>

          <div className="interest-grid">
            <div className="interest-card">
              <span>01</span>
              <h3>AI / ML Security</h3>
              <p>
                Understanding threats, vulnerabilities, and failure modes in
                machine-learning systems.
              </p>
            </div>

            <div className="interest-card">
              <span>02</span>
              <h3>Adversarial ML</h3>
              <p>
                Investigating how adversarial inputs and attacks can influence
                model behavior and system security.
              </p>
            </div>

            <div className="interest-card">
              <span>03</span>
              <h3>Model Robustness</h3>
              <p>
                Studying model behavior under distribution shifts,
                architectural changes, and changing evaluation conditions.
              </p>
            </div>

            <div className="interest-card">
              <span>04</span>
              <h3>Trustworthy AI</h3>
              <p>
                Developing reliable and reproducible approaches for evaluating
                learning-based systems.
              </p>
            </div>

            <div className="interest-card">
              <span>05</span>
              <h3>Model Vulnerabilities</h3>
              <p>
                Exploring systematic approaches for identifying weaknesses in
                ML models and AI-enabled systems.
              </p>
            </div>

            <div className="interest-card">
              <span>06</span>
              <h3>Emerging AI Security</h3>
              <p>
                Expanding toward security challenges involving modern AI
                systems, including large language models.
              </p>
            </div>
          </div>

          <div className="application-areas">
            <h3>Application Areas</h3>

            <div className="tag-list">
              <span>Biometric Security</span>
              <span>Face Presentation Attack Detection</span>
              <span>Cybersecurity</span>
              <span>Malware Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH JOURNEY */}
      <section className="section">
        <div className="container">
          <p className="section-label">03 / RESEARCH JOURNEY</p>

          <h2 className="section-title">
            From applied biometric security to AI/ML security.
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">01</div>

              <div className="timeline-content">
                <p className="timeline-label">FOUNDATION</p>

                <h3>Secure & Fair ML-Based Biometric Systems</h3>

                <p>
                  My initial research investigated demographic fairness in
                  face Presentation Attack Detection. I developed and
                  evaluated fairness-aware approaches involving
                  ethnicity-aware preprocessing and group-specific decision
                  thresholds.
                </p>

                <p>
                  This work introduced me to a broader challenge: understanding
                  how machine-learning systems behave differently across
                  populations and operating conditions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">02</div>

              <div className="timeline-content">
                <p className="timeline-label">MODEL BEHAVIOR</p>

                <h3>Understanding Architectural Effects</h3>

                <p>
                  My second research project examined architectural bias in
                  face presentation attack detection, comparing convolutional
                  neural networks and vision transformers.
                </p>

                <p>
                  I investigated how architectural choices influence model
                  performance and demographic behavior, strengthening my
                  interest in the relationship between model design, behavior,
                  and security.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">03</div>

              <div className="timeline-content">
                <p className="timeline-label">ROBUSTNESS & GENERALIZATION</p>

                <h3>Fairness Under Distribution Shift</h3>

                <p>
                  My ongoing research examines whether fairness measurements
                  remain reliable when ML systems are evaluated across
                  datasets and random seeds.
                </p>

                <p>
                  The work uses cross-dataset protocols and controlled
                  multi-seed ablations to study generalization, instability,
                  and reproducibility in fairness evaluation.
                </p>

                <div className="research-highlight">
                  <strong>Key question:</strong> Can we trust conclusions about
                  an ML system when its behavior changes across datasets,
                  evaluation conditions, and random seeds?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH DIRECTION */}
      <section className="section section-dark">
        <div className="container">
          <p className="section-label light">04 / FUTURE DIRECTION</p>

          <h2 className="section-title light">
            Where I want to take the research next.
          </h2>

          <div className="future-direction">
            <p>
              My previous research has primarily used biometric security as a
              testbed for studying the behavior and reliability of
              machine-learning systems. Through this work, I became
              increasingly interested in broader AI/ML security questions.
            </p>

            <p>
              Going forward, I am interested in extending this foundation
              toward <strong>adversarial machine learning, ML model
              vulnerabilities, AI security, trustworthy AI, and the security
              of emerging AI systems including large language models.</strong>
            </p>

            <p>
              I am particularly interested in research that investigates how
              AI systems can fail or be manipulated, how these weaknesses can
              be systematically evaluated, and how more robust and secure
              learning-based systems can be designed.
            </p>
          </div>

          <div className="research-path">
            <div>AI / ML SECURITY</div>
            <span>→</span>
            <div>ROBUSTNESS</div>
            <span>→</span>
            <div>MODEL VULNERABILITIES</div>
            <span>→</span>
            <div>TRUSTWORTHY AI</div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="section" id="publications">
        <div className="container">
          <p className="section-label">05 / PUBLICATIONS</p>

          <h2 className="section-title">
            Research contributions.
          </h2>

          <div className="publication-list">
            <article className="publication">
              <div className="publication-status published">
                PUBLISHED · 2026
              </div>

              <h3>
                Architectural Bias in Face Presentation Attack Detection: A
                Comparative Study of Vision Transformers and Convolutional
                Neural Networks
              </h3>

              <p className="authors">
                <strong>Ngela Landon Ntung</strong>, Floride Tuyisenge, Remy Dukundane,
                Emmanuel Iduh, Jema David Ndibwile
              </p>

              <p>
                A comparative investigation of CNN and Vision Transformer
                architectures for face presentation attack detection,
                examining the relationship between architectural choices,
                model performance, and demographic behavior.
              </p>

              <a
                href="https://doi.org/10.48550/arXiv.2606.18510"
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                View paper →
              </a>
            </article>

            <article className="publication">
              <div className="publication-status published">
                PUBLISHED · PEER-REVIEWED JOURNAL
              </div>

              <h3>
                Fairness-Aware Face Presentation Attack Detection Using Local
                Binary Patterns: Bridging Skin Tone Bias in Biometric Systems
              </h3>

              <p className="authors">
                Jema David Ndibwile, <strong>Ntung Ngela Landon</strong> and Floride Tuyisenge
              </p>

              <p>
                Introduced a fairness-aware PAD approach combining
                ethnicity-aware preprocessing, LBP-based classification, and
                group-specific decision thresholds to investigate demographic
                disparities in biometric security.
              </p>

              <h5>Journal of Security and Privacy . 2026</h5>

              <a
                href="https://doi.org/10.3390/jcp6010012"
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                View paper →
              </a>
            </article>

            <article className="publication">
              <div className="publication-status review">
                UNDER REVIEW - IEEE ACCESS
              </div>

              <h3>
                Fairness Under Distribution Shift in Face Presentation Attack
                Detection: A Cross-Dataset and Ablation-Based Analysis
              </h3>

              <p className="authors">
                <strong>Ntung Ngela Landon</strong>, Floride Tuyisenge, Remy Dukundane, Emmanuel
                Iduh, Jema David Ndibwile
              </p>

              <p>
                Investigates the stability of demographic fairness under
                cross-dataset distribution shift and random-seed variation
                using multi-dataset evaluation and controlled ablations.
              </p>
            </article>

            <article className="publication">
              <div className="publication-status review">
                UNDER REVIEW - ENERGY REPORTS
              </div>

              <h3>
                Adversarial Artificial Intelligence Threats in Smart Energy
                Grids: When Learning Systems Learn from the Attacker
              </h3>

              <p className="authors">
                Jema David Ndibwile, <strong>Ngela Landon Ntung</strong>, Lunodzo Mwinuka
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONFERENCE */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label">06 / RESEARCH COMMUNICATION</p>

          <div className="conference-card">
            <div>
              <p className="timeline-label">APRIL 2026 · SAPPORO, JAPAN</p>

              <h2>
                IEEE Conference on Cryptography, Security and Privacy
              </h2>

              <p>
                Presented my research on architectural bias in face
                presentation attack detection, communicating findings on the
                behavior of different deep-learning architectures in biometric
                security.
              </p>
            </div>

            <div className="conference-badge">PRESENTED</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <p className="section-label">07 / EXPERIENCE</p>

          <h2 className="section-title">
            Research and cybersecurity experience.
          </h2>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-date">
                MAR 2026 — PRESENT
              </div>

              <div>
                <h3>Research Associate</h3>
                <p className="organization">Carnegie Mellon University</p>

                <p>
                  Conducting research within a Microsoft-funded cybersecurity
                  research initiative, currently focused on malware analysis
                  and security evaluation.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                AUG 2025 — DEC 2025
              </div>

              <div>
                <h3>Research Assistant</h3>
                <p className="organization">Carnegie Mellon University</p>

                <p>
                  Conducted research on architectural bias in face
                  presentation attack detection, contributing to comparative
                  evaluation of CNN and Vision Transformer architectures.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                JUN 2025 — AUG 2025
              </div>

              <div>
                <h3>Research Intern</h3>
                <p className="organization">Carnegie Mellon University</p>

                <p>
                  Led research investigating fairness-aware face presentation
                  attack detection, including preprocessing strategies,
                  classification, group-specific thresholds, and statistical
                  fairness evaluation.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                JAN 2025 — APR 2025
              </div>

              <div>
                <h3>Teaching Assistant - CMU Africa Bridge Program</h3>
                <p className="organization">Carnegie Mellon University (CMU-Africa Campus), Kigali, Rwanda.</p>

                <p>
                  Supported undergraduate students preparing for graduate
                  studies through the CMU Africa Bridge Program. Assisted
                  students with technical learning, academic preparation, and
                  transition into graduate-level study.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                JUL 2025 — NOV 2025
              </div>

              <div>
                <h3>AI, Data Management & Cybersecurity Intern</h3>
                <p className="organization">
                  International Telecommunication Union (ITU), Geneva, Switzerland.
                </p>

                <p>
                  Conducted security assessment activities and explored
                  vulnerabilities in an organizational platform. Also worked
                  on Digital Object Architecture, the Advanced Information
                  Management System, and the relationship between AI and data
                  security.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-date">
                SEP 2022 — FEB 2023
              </div>

              <div>
                <h3>Networks & Telecommunications Intern</h3>
                <p className="organization">Reseaux et Telecommunications (Resotel) Doula, Cameroon.</p>

                <p>
                  Supported installation and configuration of surveillance
                  camera systems, maintained optical-fibre infrastructure,
                  deployed a Synology NAS server, and implemented the 3CX
                  communication platform.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MASTER'S PRACTICUM */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label">08 / SELECTED PROJECT</p>

          <h2 className="section-title">
            Cross-Platform Automated Malware Analysis Pipeline.
          </h2>

          <div className="project-feature">
            <div className="project-description">
              <p>
                My Master's final practicum project developed for a client
                environment at Carnegie Mellon University.
              </p>

              <p>
                Designed and implemented an automated malware analysis
                pipeline capable of handling both Windows and Linux malware.
                The system automatically identified the target platform and
                routed samples through the appropriate analysis environment.
              </p>

              <p>
                The architecture integrated a honeypot network, CAPE Sandbox,
                Windows and Linux virtual machines, event-hash collection,
                ingestion scripts, and database reporting. The resulting
                analysis pipeline was integrated with the CMU-Upanzi SOC/SIEM
                environment.
              </p>
            </div>

            <div className="tech-box">
              <h3>Technology Stack</h3>

              <div className="tag-list">
                <span>CAPE Sandbox</span>
                <span>Ubuntu</span>
                <span>Windows</span>
                <span>Malware Analysis</span>
                <span>Python</span>
                <span>Virtual Machines</span>
                <span>SIEM</span>
                <span>Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="section" id="projects">
        <div className="container">
          <p className="section-label">09 / PROJECTS</p>

          <h2 className="section-title">
            Selected technical work.
          </h2>

          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">01</span>

              <h3>Ethical Hacking & Penetration Testing</h3>

              <p>
                Conducted penetration testing activities across network
                environments, including vulnerability discovery, Wi-Fi
                security assessment, traffic analysis, and automated
                vulnerability scanning.
              </p>

              <div className="tag-list">
                <span>Kali Linux</span>
                <span>Nmap</span>
                <span>Burp Suite</span>
                <span>Metasploit</span>
                <span>Wireshark</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">02</span>

              <h3>Fetal Heart Rate Monitoring System</h3>

              <p>
                Designed an IoT-based fetal movement and heart-rate monitoring
                system involving signal processing, wireless communication,
                and real-time health-data visualization.
              </p>

              <div className="tag-list">
                <span>IoT</span>
                <span>Signal Processing</span>
                <span>Arduino</span>
                <span>Embedded Systems</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">03</span>

              <h3>Cybersecurity Research</h3>

              <p>
                Research and engineering work spanning biometric security,
                malware analysis, penetration testing, machine learning, and
                security evaluation.
              </p>

              <div className="tag-list">
                <span>Python</span>
                <span>OpenCV</span>
                <span>TensorFlow</span>
                <span>Cybersecurity</span>
                <span>CAPE Sandbox</span>

              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label">10 / EDUCATION</p>

          <div className="education-list">
            <article className="education-item">
              <p className="education-date">2024 — 2025</p>

              <div>
                <h3>Master of Science in Information Technology</h3>

                <p className="organization">
                  Carnegie Mellon University
                </p>

                <p>
                  Cybersecurity specialization · GPA: 3.64 / 4.00
                </p>

                <p>
                  Final practicum: Cross-Platform Automated Malware Analysis
                  Pipeline.
                </p>
              </div>
            </article>

            <article className="education-item">
              <p className="education-date">2019 — 2023</p>

              <div>
                <h3>Bachelor of Engineering in Computer Engineering</h3>

                <p className="organization">
                  University of Buea · Cameroon
                </p>

                <p>GPA: 3.51 / 4.00</p>

                <p>
                  Final project: Design and Implementation of a Cognitive-Based
                  IoT Fetal Movement Monitoring System.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="container">
          <p className="section-label">11 / TECHNICAL SKILLS</p>

          <div className="skills-grid">
            <div>
              <h3>AI / ML</h3>

              <p>
                Machine Learning · Deep Learning · Computer Vision ·
                Presentation Attack Detection · Model Evaluation · Statistical
                Analysis · Distribution Shift · Fairness Evaluation
              </p>
            </div>

            <div>
              <h3>Security</h3>

              <p>
                Cybersecurity · Penetration Testing · Malware Analysis ·
                Adversarial Security · Network Security · Security Assessment
              </p>
            </div>

            <div>
              <h3>Tools & Technologies</h3>

              <p>
                Python · TensorFlow · OpenCV · Kali Linux · Wireshark ·
                Burp Suite · Metasploit · Nmap · CAPE Sandbox · Git · Linux ·
                Windows
              </p>
            </div>

            <div>
              <h3>Research</h3>

              <p>
                Experimental Design · Ablation Studies · Cross-Dataset
                Evaluation · Statistical Testing · Bootstrap Confidence
                Intervals · Reproducibility · Technical Writing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label">12 / LEADERSHIP & RECOGNITION</p>

          <div className="leadership-grid">
            <div className="recognition-card">
              <span>2024</span>
              <h3>Future Africa Leaders Award</h3>
              <p>
                Recipient of the Future Africa Leaders Award 2024.
              </p>
            </div>

            <div className="recognition-card">
              <span>2020</span>
              <h3>Leadership Initiative Award</h3>
              <p>
                Recipient of the 2020 Leadership Initiative Award.
              </p>
            </div>

            <div className="recognition-card">
              <span>2025</span>
              <h3>Women in Tech Club</h3>
              <p>
                Served as Events Manager, supporting technical and community
                events and initiatives.
              </p>
            </div>

            <div className="recognition-card">
              <span>2026</span>
              <h3>Partnership & Sponsorship Lead</h3>
              <p>
                Served on the organizing committee for Africa Forge Challenge
                2.0.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container narrow">
          <p className="section-label">13 / ABOUT</p>

          <h2 className="section-title">
            Building secure and trustworthy intelligent systems.
          </h2>

          <p className="large-text">
            I am interested in research at the boundary between artificial
            intelligence and cybersecurity: understanding how learning systems
            behave, where they fail, how they can be attacked, and how their
            reliability can be evaluated.
          </p>

          <p className="large-text">
            My background combines computer engineering, cybersecurity
            training, machine-learning research, biometric security,
            malware analysis, and practical security assessment. I am
            currently seeking opportunities to pursue doctoral research and
            collaborate with researchers working on AI/ML security,
            adversarial machine learning, trustworthy AI, and related areas.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-dark" id="contact">
        <div className="container contact-section">
          <p className="section-label light">14 / CONTACT</p>

          <h2 className="section-title light">
            Interested in research collaboration?
          </h2>

          <p>
            I am open to PhD research opportunities, research collaborations,
            and discussions around AI/ML security and cybersecurity.
          </p>

          <div className="contact-links">
            <a href="mailto:nngelala@andrew.cmu.edu">
              nngelala@andrew.cmu.edu
            </a>

 <a href="mailto:landonntung71@gmail.com">
              landonntung71@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/ntung-landon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/NTUNG-LANDON"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Ntung Ngela Landon</p>

          <p>AI/ML Security · Cybersecurity · Trustworthy AI</p>
        </div>
      </footer>
    </main>
  );
}