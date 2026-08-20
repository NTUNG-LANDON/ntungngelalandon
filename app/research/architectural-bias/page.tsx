export default function ArchitecturalBiasPage() {
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
            RESEARCH · 02
          </p>

          <h1>
            Architectural Bias in Face
            Presentation Attack Detection
          </h1>

          <p className="paper-subtitle">
            A Comparative Study of Vision Transformers
            and Convolutional Neural Networks
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
              Does model architecture influence
              demographic performance in biometric
              security?
            </h2>

            <p>
              This study examined whether different neural
              architectures produce different demographic
              behaviors when used for Face Presentation Attack
              Detection.
            </p>

          </div>


          <div className="paper-facts">

            <div>
              <span>Architectures</span>
              <strong>CNNs &amp; Vision Transformers</strong>
            </div>

            <div>
              <span>Domain</span>
              <strong>Face PAD</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Architectural bias</strong>
            </div>

          </div>


          <div>

            <p className="section-label">
              MY CONTRIBUTION
            </p>

            <p>
              As lead researcher, I contributed to the experimental
              design, model evaluation, demographic analysis,
              comparative experiments, statistical interpretation,
              visualization, and manuscript development.
            </p>

          </div>


          <div>

            <p className="section-label">
              RESEARCH SIGNIFICANCE
            </p>

            <p className="large-text">
              The work highlights the importance of considering
              architecture as part of the fairness and security
              evaluation of biometric AI systems.
            </p>

          </div>


          <a
            href="https://doi.org/10.48550/arXiv.2606.18510"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Read the Paper ↗
          </a>

        </div>

      </section>

    </main>
  );
}