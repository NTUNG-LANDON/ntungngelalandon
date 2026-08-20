export default function FairnessPADPage() {
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


      <section className="paper-hero dark-section">

        <div className="container">

          <p className="eyebrow">
            RESEARCH · 01
          </p>

          <h1>
            Fairness-Aware Face Presentation
            Attack Detection Using Local
            Binary Patterns
          </h1>

          <p className="paper-subtitle">
            Bridging Skin Tone Bias in Biometric Systems
          </p>

          <p className="authors">
            Ntung Ngela Landon et al.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container paper-content">

          <div>

            <p className="section-label">
              RESEARCH QUESTION
            </p>

            <h2>
              Can biometric security systems be
              accurate without systematically
              disadvantaging demographic groups?
            </h2>

            <p>
              This work investigated demographic disparities in
              face Presentation Attack Detection and explored
              fairness-aware approaches for improving the
              consistency of biometric security systems across
              demographic groups.
            </p>

          </div>


          <div className="paper-facts">

            <div>
              <span>Dataset</span>
              <strong>CASIA-SURF CeFA</strong>
            </div>

            <div>
              <span>Approach</span>
              <strong>LBP + Machine Learning</strong>
            </div>

            <div>
              <span>Evaluation</span>
              <strong>Fairness &amp; PAD metrics</strong>
            </div>

          </div>


          <div>

            <p className="section-label">
              MY CONTRIBUTION
            </p>

            <p>
              As the lead researcher, I contributed to the
              experimental design, data preprocessing, feature
              extraction, model development, fairness-aware
              evaluation, statistical analysis, interpretation
              of results, and manuscript preparation.
            </p>

          </div>


          <div>

            <p className="section-label">
              KEY RESULT
            </p>

            <p className="large-text">
              The study demonstrated that fairness-aware
              preprocessing and group-specific evaluation can
              substantially reduce demographic performance gaps
              while maintaining strong overall PAD performance.
            </p>

          </div>


          <a
            href="https://doi.org/10.3390/jcp6010012"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Read the Published Paper ↗
          </a>

        </div>

      </section>

    </main>
  );
}