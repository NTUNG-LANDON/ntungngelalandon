export default function AboutPage() {
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
            ABOUT ME
          </p>

          <h1>
            Ntung Ngela Landon
            <br />
            <span>Cybersecurity Researcher.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container about-page">

          <div>

            <p className="section-label">
              PROFILE
            </p>

            <p className="large-text">
              I am a cybersecurity researcher interested in
              understanding and securing AI systems operating in
              real-world environments.
            </p>

            <p>
              My research journey began with biometric security,
              particularly Face Presentation Attack Detection.
              Through this work I became interested in a broader
              question: how reliable are the security and fairness
              claims we make about AI systems?
            </p>

            <p>
              This has led me to investigate demographic fairness,
              architectural bias, distribution shift,
              reproducibility, and AI security.
            </p>

          </div>


          <div>

            <p className="section-label">
              EDUCATION
            </p>

            <div className="education-item">

              <span>2024 — 2025</span>

              <h3>
                M.S. Information Technology
              </h3>

              <p>
                Carnegie Mellon University
              </p>

              <p>
                Cybersecurity specialization · GPA 3.64/4.0
              </p>

            </div>


            <div className="education-item">

              <span>2019 — 2023</span>

              <h3>
                B.Eng. Computer Engineering
              </h3>

              <p>
                University of Buea · Cameroon
              </p>

              <p>
                GPA 3.51/4.0
              </p>

            </div>

          </div>


          <div>

            <p className="section-label">
              EXPERIENCE
            </p>

            <div className="experience-item">

              <h3>
                Research Associate
              </h3>

              <p>
                Carnegie Mellon University · 2026 — Present
              </p>

            </div>


            <div className="experience-item">

              <h3>
                Research Assistant
              </h3>

              <p>
                Carnegie Mellon University · 2025
              </p>

            </div>


            <div className="experience-item">

              <h3>
                Research Intern
              </h3>

              <p>
                Carnegie Mellon University · 2025
              </p>

            </div>


            <div className="experience-item">

              <h3>
                Teaching Assistant
              </h3>

              <p>
                Carnegie Mellon University · 2025
              </p>

              <p>
                Supported students in the CMU Africa Bridge
                Program preparing for graduate-level study.
              </p>

            </div>


            <div className="experience-item">

              <h3>
                AI, Data Management &amp; Cybersecurity Intern
              </h3>

              <p>
                International Telecommunication Union · 2025
              </p>

            </div>

          </div>


          <div>

            <p className="section-label">
              RESEARCH SKILLS
            </p>

            <div className="skill-grid">

              <span>Experimental Design</span>
              <span>Fairness Evaluation</span>
              <span>Ablation Studies</span>
              <span>Statistical Analysis</span>
              <span>Cross-Dataset Evaluation</span>
              <span>Computer Vision</span>
              <span>Machine Learning</span>
              <span>Biometric Security</span>
              <span>Malware Analysis</span>
              <span>Penetration Testing</span>
              <span>Cybersecurity</span>
              <span>Python</span>
              <span>TensorFlow</span>
              <span>OpenCV</span>
              <span>Linux</span>
              <span>Git</span>

            </div>

          </div>


          <div>

            <p className="section-label">
              AWARDS
            </p>

            <div className="award-item">
              <strong>
                Future Africa Leaders Award
              </strong>

              <span>
                2024
              </span>
            </div>

            <div className="award-item">
              <strong>
                Leadership Initiative Award
              </strong>

              <span>
                2020
              </span>
            </div>

          </div>


          <div>

            <p className="section-label">
              LANGUAGES
            </p>

            <p>
              <strong>English</strong> — Fluent
            </p>

            <p>
              <strong>French</strong> — Intermediate
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}