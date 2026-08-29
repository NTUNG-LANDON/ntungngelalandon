import Link from "next/link";

export default function PublicationsPage() {
  return (
    <main>

      <nav className="navbar">

        <div className="nav-container">

          <Link href="/" className="logo">
            NL<span>.</span>
          </Link>

          <div className="nav-links">
            <Link href="/research">Research</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </div>

        </div>

      </nav>


      <section className="page-hero dark-section">

        <div className="container">

          <p className="eyebrow">
            PUBLICATIONS
          </p>

          <h1>
            Research contributions
            <br />
            <span>and ongoing work.</span>
          </h1>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <article className="publication-full">

            <span>2026 · PUBLISHED</span>

            <h2>
              Fairness-Aware Face Presentation Attack Detection
              Using Local Binary Patterns: Bridging Skin Tone
              Bias in Biometric Systems
            </h2>

            <p>
              Ntung Ngela Landon et al.
            </p>

            <a
              href="https://doi.org/10.3390/jcp6010012"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View publication ↗
            </a>

          </article>


          <article className="publication-full">

            <span>2026 · PUBLISHED / ARCHIVED</span>

            <h2>
              Architectural Bias in Face Presentation Attack
              Detection: A Comparative Study of Vision Transformers
              and Convolutional Neural Networks
            </h2>

            <p>
              Ntung Ngela Landon et al.
            </p>

            <a
              href="https://doi.org/10.48550/arXiv.2606.18510"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View publication ↗
            </a>

          </article>


          <article className="publication-full">

            <span>UNDER REVIEW</span>

            <h2>
              Fairness Under Distribution Shift in Face Presentation
              Attack Detection: A Cross-Dataset and Ablation-Based
              Analysis
            </h2>

            <p>
              Ntung Ngela Landon, Floride Tuyisenge,
              Remy Dukundane, Emmanuel Iduh, and
              Jema David Ndibwile
            </p>

          </article>


          <article className="publication-full">

            <span>UNDER REVIEW</span>

            <h2>
              Adversarial Artificial Intelligence Threats in Smart
              Energy Grids: When Learning Systems Learn from the
              Attacker
            </h2>

            <p>
              Jema David Ndibwile, Ntung Ngela Landon,
              and Lunodzo Mwinuka
            </p>

          </article>

        </div>

      </section>

    </main>
  );
}
