import Link from 'next/link'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <Reveal as="div">
            <h1>A standardized structured real estate income framework for RIAs.</h1>
          </Reveal>
          <Reveal as="div" delay={80}>
            <p className="hero-statement">Sylvan provides repeatable structure, workflow, and audit-ready documentation for institutional-grade real estate income investing.</p>
          </Reveal>

          <Reveal as="div" delay={140}>
            <div className="problem-solution">
              <h3>The Repeatability Problem</h3>
              <p>Private real estate deals typically require full underwriting for every opportunity, creating operational burden and inconsistent governance frameworks.</p>

              <h3 style={{ marginTop: '2rem' }}>How Structure Solves It</h3>
              <p>Sylvan fixes the rules first, then lets properties change. One-time structure approval, asset-level review only.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={180}>
            <h2>Three Offerings</h2>
          </Reveal>
          <Reveal as="div" delay={220}>
            <div className="offerings-grid">
              <div className="offering-card">
                <h3>Core Income</h3>
                <p>Higher current income from stabilized assets. Core and core-plus portfolio role.</p>
              </div>
              <div className="offering-card">
                <h3>Offset (Tax Timing)</h3>
                <p>Lower cash, higher depreciation relative to cash. Tax timing, not tranching.</p>
              </div>
              <div className="offering-card">
                <h3>DST Access (1031)</h3>
                <p>Same structure, same rules. Entry point via 1031 exchange wrapper.</p>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={260}>
            <div className="checklist">
              <h3>What Sylvan Is / Is Not</h3>
              <div className="checklist-item">
                <span className="cross-icon">✗</span>
                <span>Not a fund</span>
              </div>
              <div className="checklist-item">
                <span className="cross-icon">✗</span>
                <span>Not a marketplace</span>
              </div>
              <div className="checklist-item">
                <span className="cross-icon">✗</span>
                <span>Not discretionary</span>
              </div>
              <div className="checklist-item">
                <span className="check-icon">✓</span>
                <span>Issuance-based structure</span>
              </div>
              <div className="checklist-item">
                <span className="check-icon">✓</span>
                <span>Custodian-held assets</span>
              </div>
              <div className="checklist-item">
                <span className="check-icon">✓</span>
                <span>Fixed structure, variable assets</span>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={300}>
            <div className="audience-routing">
              <div className="route-card">
                <h3>For CIOs</h3>
                <p>Review governance framework and approval workflow</p>
                <Link href="/governance" className="btn">View Governance</Link>
              </div>
              <div className="route-card">
                <h3>For CCOs</h3>
                <p>Exam narrative and audit-ready documentation</p>
                <Link href="/governance" className="btn">View Exam Narrative</Link>
              </div>
              <div className="route-card">
                <h3>For Advisors</h3>
                <p>Offering details and client explanation</p>
                <Link href="/offerings" className="btn">View Offerings</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

