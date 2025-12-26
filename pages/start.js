import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'

export default function Start() {
  return (
    <Layout title="Start Here - Sylvan">
      <PageHero title="Start Here" quote="Remove confusion before detail." />
      <section>
        <div className="container">
          <Reveal as="div" delay={140}>
            <div className="offering-card">
              <div className="stack-24">
                <div>
                  <h3>Who This Is For</h3>
                  <p>RIAs seeking structured real estate income with repeatable governance, institutional-quality documentation, and custodian-held assets.</p>
                </div>

                <div>
                  <h3>Who This Is Not For</h3>
                  <p>Investors seeking liquidity, daily pricing, or discretionary management. Sylvan is closed-end with no redemption feature.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={200}>
            <div className="invariant-box" style={{ marginTop: '2rem' }}>
              <h3>Plain-English Explanation</h3>
              <p style={{ fontSize: '1.1rem' }}>Sylvan fixes the rules first, then lets properties change.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={240}>
            <h3 style={{ marginTop: '3rem' }}>Three-Step Process</h3>
            <div className="waterfall">
              <div className="waterfall-step">
                <div className="step-number">1</div>
                <div>Approve structure once</div>
              </div>
              <div className="waterfall-step">
                <div className="step-number">2</div>
                <div>Review assets only</div>
              </div>
              <div className="waterfall-step">
                <div className="step-number">3</div>
                <div>Allocate repeatedly</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

