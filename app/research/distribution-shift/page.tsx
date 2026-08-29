import Link from "next/link";

export default function DistributionShiftPage() {
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


      <section className="paper-hero dark-section">

        <div className="container">

          <p className="eyebrow">
            RESEARCH · 03 · UNDER REVIEW
          </p>

          <h1>
            Fairness Under Distribution Shift
            in Face Presentation Attack Detection
          </h1>

          <p className="paper-subtitle">
            A Cross-Dataset and Ablation-Based Analysis
          </p>

          <p className="authors">
            Ntung Ngela Landon, Floride Tuyisenge,
            Remy Dukundane, Emmanuel Iduh, and
            Jema David Ndibwile
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container paper-content">

          <div>

            <p className="section-label">
              THE QUESTION
            </p>

            <h2>
              Is a fairness result actually
              reliable if it comes from one
              dataset and one training run?
            </h2>

            <p>
              This research examines whether demographic fairness
              measurements in Face Presentation Attack Detection
              remain stable under distribution shift and across
              repeated random seeds.
            </p>

          </div>


          <div className="paper-facts">

            <div>
              <span>Datasets</span>
              <strong>
                CeFA · OULU-NPU · SiW-M
              </strong>
            </div>

            <div>
              <span>Protocols</span>
              <strong>
                SSG · LODO
              </strong>
            </div>

            <div>
              <span>Replication</span>
              <strong>
                Five random seeds
              </strong>
            </div>

          </div>


          <div>

            <p className="section-label">
              KEY FINDINGS
            </p>

            <ul className="research-list">

              <li>
                Mean AUC remained around 76.8% under
                Single-Source Generalization and 76.7% under
                Leave-One-Dataset-Out evaluation.
              </li>

              <li>
                Demographic fairness gaps were substantially
                larger and less stable than aggregate discrimination
                performance.
              </li>

              <li>
                On the ethnicity-labelled CeFA test set, the
                primary configuration produced an average
                best-to-worst group gap of 30.6 percentage points
                across five seeds.
              </li>

              <li>
                Controlled ablation experiments showed that
                apparent fairness improvements could change
                substantially when seed variance was considered.
              </li>

            </ul>

          </div>


          <div>

            <p className="section-label">
              CONTRIBUTION
            </p>

            <p className="large-text">
              The work argues that seed-replicated,
              cross-dataset fairness reporting should become
              a minimum standard for evaluating inclusive
              biometric systems.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
