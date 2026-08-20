export default function ProjectsPage() {
  return (
    <main>

      <nav className="navbar">

        <div className="nav-container">

          <a href="/" className="logo">
            NL<span>.</span>
          </a>

          <div className="nav-links">
            <a href="/research">Research</a>
            <a href="/publications">Publications</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>

        </div>

      </nav>


      <section className="page-hero dark-section">

        <div className="container">

          <p className="eyebrow">
            PROJECTS
          </p>

          <h1>
            Research translated
            <br />
            <span>into working systems.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="project-page-card">

            <p className="project-category">
              MASTER&apos;S FINAL PRACTICUM
            </p>

            <h2>
              Cross-Platform Automated Malware
              Analysis Pipeline
            </h2>

            <p>
              Designed and implemented an automated malware analysis
              platform for a client environment. The system was
              designed to distinguish Windows and Linux malware and
              route samples through the appropriate analysis
              environment.
            </p>

            <h3>Architecture</h3>

            <ul className="research-list">

              <li>
                Honeypot network containing malware samples.
              </li>

              <li>
                Ingestion scripts for collecting and forwarding
                malware samples.
              </li>

              <li>
                CAPE Sandbox for dynamic malware analysis.
              </li>

              <li>
                Dedicated Windows and Linux virtual machines.
              </li>

              <li>
                Event hashes and automated analysis outputs.
              </li>

              <li>
                Database-backed reporting.
              </li>

              <li>
                Integration with the CMU-Upanzi SOC SIEM.
              </li>

            </ul>


            <div className="tag-list">

              <span>CAPE Sandbox</span>
              <span>Malware Analysis</span>
              <span>Ubuntu</span>
              <span>Windows</span>
              <span>Virtualization</span>
              <span>SIEM</span>

            </div>

          </div>


          <div className="project-page-card">

            <p className="project-category">
              CYBERSECURITY PROJECT
            </p>

            <h2>
              Ethical Hacking &amp; Penetration Testing
            </h2>

            <p>
              Conducted controlled penetration testing exercises
              using industry-standard security tools and frameworks
              to identify vulnerabilities across networked systems.
            </p>

            <div className="tag-list">

              <span>Kali Linux</span>
              <span>Nmap</span>
              <span>Burp Suite</span>
              <span>Metasploit</span>
              <span>Wireshark</span>

            </div>

          </div>


          <div className="project-page-card">

            <p className="project-category">
              ENGINEERING PROJECT
            </p>

            <h2>
              Cognitive IoT-Based Fetal Movement
              Monitoring System
            </h2>

            <p>
              Designed and implemented an IoT-based system for
              monitoring fetal movement and physiological signals,
              incorporating signal processing, wireless
              communication, and real-time visualization.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}