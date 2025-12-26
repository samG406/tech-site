import Layout from '../components/Layout'
import Reveal from '../components/Reveal'

export default function Governance() {
  return (
    <Layout title="Governance & Exam Narrative - Sylvan">
      <section className="section-alt">
        <div className="container">
          <Reveal as="div">
            <h2>Governance & Exam Narrative</h2>
          </Reveal>

          <Reveal as="div" delay={120}>
            <h3>CIO Framework</h3>
            <div className="offering-card" style={{ marginBottom: '2rem' }}>
              <p><strong>One-time structure approval:</strong> Review and approve Sylvan structure, waterfall, and governance framework once.</p>
              <p style={{ marginTop: '1rem' }}><strong>Per-issuance review:</strong> Evaluate specific assets, capital stack, and coverage metrics for each new issuance.</p>
              <p style={{ marginTop: '1rem' }}><strong>Portfolio limits:</strong> Establish allocation boundaries and concentration limits appropriate to client profiles.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={180}>
            <h3>CCO Framework</h3>
            <div className="offering-card" style={{ marginBottom: '2rem' }}>
              <p><strong>Version-controlled materials:</strong> All offering documents, disclosures, and client communications maintain version control.</p>
              <p style={{ marginTop: '1rem' }}><strong>Material-change triggers:</strong> Clear definition of what constitutes a material change requiring disclosure update.</p>
              <p style={{ marginTop: '1rem' }}><strong>Audit-ready logs:</strong> Complete record of approvals, allocations, and client communications.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={240}>
            <div className="invariant-box">
              <h3>Fail-Fast Guardrail</h3>
              <p><strong>If a deal needs special rules, it does not belong on Sylvan.</strong></p>
              <p style={{ marginTop: '0.5rem' }}>This ensures structural consistency and prevents governance exceptions that undermine repeatability.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

