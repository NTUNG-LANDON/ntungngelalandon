export default function ResearchPage() {
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
            RESEARCH
          </p>

          <h1>
            Research at the intersection
            <br />
            <span>of AI and cybersecurity.</span>
          </h1>

          <p className="page-intro">
            My research examines the security, reliability,
            fairness, and robustness of AI systems, with a
            particular focus on biometric security and
            machine-learning-enabled cybersecurity.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="research-detail">

            <span>01</span>

            <div>

              <h2>
                Fairness-Aware Face Presentation
                Attack Detection
              </h2>

              <p>
                My initial research investigated demographic
                disparities in Face Presentation Attack Detection
                systems and explored methods for reducing
                performance differences between demographic groups.
              </p>

              <a
                href="/research/fairness-pad"
                className="text-link"
              >
                Explore this research →
              </a>

            </div>

          </div>


          <div className="research-detail">

            <span>02</span>

            <div>

              <h2>
                Architectural Bias in Face PAD
              </h2>

              <p>
                The second phase examined whether the choice of
                neural architecture itself can contribute to
                demographic differences in Face Presentation Attack
                Detection.
              </p>

              <a
                href="/research/architectural-bias"
                className="text-link"
              >
                Explore this research →
              </a>

            </div>

          </div>


          <div className="research-detail">

            <span>03</span>

            <div>

              <h2>
                Fairness Under Distribution Shift
              </h2>

              <p>
                The third phase asks whether fairness observations
                remain reliable when models are evaluated across
                datasets and repeated across random seeds.
              </p>

              <a
                href="/research/distribution-shift"
                className="text-link"
              >
                Explore this research →
              </a>

            </div>

          </div>


          <div className="research-detail">

            <span>04</span>

            <div>

              <h2>
                Current AI Security Research
              </h2>

              <p>
                My current research includes Microsoft-funded work
                involving malware analysis and the evaluation of
                security systems against evolving threats.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}