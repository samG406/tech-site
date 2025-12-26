import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'

export default function Offerings() {
  return (
    <Layout title="Offerings - Sylvan">
      <PageHero
        title="Offerings"
        quote="All Sylvan offerings are closed-end with no redemption feature. Exit occurs via property sale or refinance. Assets are custodian-held."
      />
      <section>
        <div className="container">
          <Reveal as="div" delay={120}>
            <div className="offering-card" style={{ marginBottom: '2rem' }}>
              <h3>Shared Characteristics</h3>
              <p>All Sylvan offerings are closed-end with no redemption feature. Exit occurs via property sale or refinance. Assets are custodian-held.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={180}>
            <div className="offerings-grid">
              <div className="offering-card">
                <h3>Core Income</h3>
                <p><strong>Higher current income</strong></p>
                <p style={{ marginTop: '1rem' }}>Stabilized, income-producing assets in core and core-plus markets. Designed for current income generation with institutional-quality property management.</p>
                <p style={{ marginTop: '1rem' }}><strong>Portfolio Role:</strong> Core / core-plus real estate allocation</p>
              </div>

              <div className="offering-card">
                <h3>Offset (Tax Timing)</h3>
                <p><strong>Lower cash, higher depreciation relative to cash</strong></p>
                <p style={{ marginTop: '1rem' }}>Same assets, same risk, same collateral. Different depreciation schedule creates timing benefit.</p>
                <div className="disclaimer">
                  <strong>Important:</strong> Offset does not change leverage, collateral, or risk. This is timing, not tranching.
                </div>
              </div>

              <div className="offering-card">
                <h3>DST Access (1031)</h3>
                <p><strong>Wrapper only</strong></p>
                <p style={{ marginTop: '1rem' }}>Delaware Statutory Trust structure for 1031 exchange eligibility. Same underlying structure, same rules, same assets.</p>
                <p style={{ marginTop: '1rem' }}><strong>Entry point, not parallel track.</strong></p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

