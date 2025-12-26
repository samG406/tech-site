import Link from 'next/link'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'

export default function Home() {
  return (
    <Layout>
      <PageHero
        title="A Standardized Structured Real Estate Income Platform for RIAs"
        quote="How to allocate to private real estate income repeatedly, without increasing operational burden, client confusion, or long-term trust risk."
      />
      <section>
        <div className="container">
          <Reveal as="div" delay={140}>
            <div className="problem-solution">
              <h3>The Problem</h3>
              <p>Private real estate income is attractive in theory. In practice, it becomes difficult to use at scale because every investment behaves differently, requires new explanations, and introduces new governance questions.</p>

              <h3 style={{ marginTop: '2rem' }}>How Structure Solves It</h3>
              <p>Sylvan standardizes the structure and rules of private real estate income so that only the underlying properties change — not the investment framework.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={170}>
            <div className="offering-card" style={{ marginBottom: '2rem' }}>
              <h3>The Core Idea</h3>
              <p>Once an RIA approves the Sylvan structure, future offerings do not require re-approval of leverage, cash-flow rules, or governance.</p>
              <p style={{ marginTop: '1rem' }}><strong>The structure stays the same.</strong></p>
              <p><strong>The assets change.</strong></p>
              <p style={{ marginTop: '1rem' }}>This allows firms to allocate repeatedly without re-educating investment committees, compliance teams, or clients.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={190}>
            <h2>Who Sylvan Is Built For</h2>
          </Reveal>
          <Reveal as="div" delay={220}>
            <div className="offerings-grid">
              <div className="offering-card">
                <h3>Chief Investment Officers</h3>
                <ul className="bullets">
                  <li>One-time approval of structure</li>
                  <li>Asset-level review thereafter</li>
                  <li>Clear downside behavior and enforcement rules</li>
                </ul>
              </div>
              <div className="offering-card">
                <h3>Chief Compliance Officers</h3>
                <ul className="bullets">
                  <li>Consistent instrument classification</li>
                  <li>Version-controlled materials</li>
                  <li>Exam-ready documentation and records</li>
                </ul>
              </div>
              <div className="offering-card">
                <h3>Advisors</h3>
                <ul className="bullets">
                  <li>Explainable income allocations</li>
                  <li>No performance promises</li>
                  <li>Clear client communication</li>
                </ul>
              </div>
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

        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal as="div">
            <h2>Capital Discipline & Income Mechanics</h2>
          </Reveal>
          <Reveal as="div" delay={120}>
            <div className="offerings-grid" style={{ marginBottom: '2rem' }}>
              <div className="offering-card">
                <h3>Capital Discipline (At a Glance)</h3>
                <p>Sylvan investments occupy a fixed position in the capital structure:</p>
                <ul className="bullets">
                  <li>Below senior bank debt</li>
                  <li>Above sponsor equity</li>
                  <li>Sponsor equity in a first-loss position</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>Leverage limits, payment priority, and reserve rules are defined at issuance and cannot change after closing.</p>
              </div>

              <div className="offering-card">
                <h3>Income Mechanics (Summary)</h3>
                <p>All Sylvan offerings follow a non-discretionary waterfall:</p>
                <div className="waterfall" style={{ marginTop: '1rem' }}>
                  <div className="waterfall-step">
                    <div className="step-number">1</div>
                    <div>Gross rent collected</div>
                  </div>
                  <div className="waterfall-step">
                    <div className="step-number">2</div>
                    <div>Operating expenses</div>
                  </div>
                  <div className="waterfall-step">
                    <div className="step-number">3</div>
                    <div>Required operating and debt service reserves</div>
                  </div>
                  <div className="waterfall-step">
                    <div className="step-number">4</div>
                    <div>Senior debt service</div>
                  </div>
                  <div className="waterfall-step">
                    <div className="step-number">5</div>
                    <div>Net distributable cash to Sylvan investors</div>
                  </div>
                </div>
                <p><strong>Distributions adjust. Leverage does not.</strong></p>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={160}>
            <div className="offering-card">
              <h3>Portfolio Role</h3>
              <p>Sylvan is designed as a private real asset income allocation that complements bonds, REITs, and traditional private credit.</p>
              <p style={{ marginTop: '0.75rem' }}>It is not designed for trading, liquidity management, or opportunistic growth.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div">
            <h2>How Advisors Explain Sylvan to Clients</h2>
          </Reveal>
          <Reveal as="div" delay={120}>
            <div className="offering-card">
              <p className="quote-block">"We're investing in income-producing real estate through a consistent structure. Each investment is backed by specific properties, but the rules, leverage, and income mechanics stay the same. That makes the income easier to manage over time."</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={180}>
            <h2 style={{ marginTop: '3rem' }}>Next Steps</h2>
          </Reveal>
          <Reveal as="div" delay={220}>
            <div className="audience-routing">
              <div className="route-card">
                <h3>Start Here</h3>
                <p>Understand the structure.</p>
                <Link href="/start" className="btn">Start Here</Link>
              </div>
              <div className="route-card">
                <h3>Offerings</h3>
                <p>See how Core, Offset, and DST differ.</p>
                <Link href="/offerings" className="btn">View Offerings</Link>
              </div>
              <div className="route-card">
                <h3>Governance</h3>
                <p>Review CIO and CCO oversight.</p>
                <Link href="/governance" className="btn">View Governance</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

