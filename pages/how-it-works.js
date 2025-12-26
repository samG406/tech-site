import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'

export default function HowItWorks() {
  return (
    <Layout title="How Sylvan Works - Sylvan">
      <PageHero
        title="How Sylvan Works"
        quote="Leverage is fixed at close. Distributions adjust to performance; leverage does not."
      />
      <section className="section-alt">
        <div className="container">
          <Reveal as="div" delay={120}>
            <h3>Structure / Series / Issuance Layers</h3>
            <div className="offering-card">
              <p><strong>Structure:</strong> Never changes. Rules, waterfall, and governance framework.</p>
              <p style={{ marginTop: '1rem' }}><strong>Series:</strong> Timing only. Tax year and distribution schedule.</p>
              <p style={{ marginTop: '1rem' }}><strong>Issuance:</strong> Assets and metrics. Specific properties, capital stack, and coverage ratios.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={170}>
            <div className="invariant-box">
              <h3>Global Invariants</h3>
              <p><strong>Leverage is fixed at close.</strong></p>
              <p style={{ marginTop: '0.5rem' }}><strong>No mezzanine debt, incremental borrowing, or leverage-increasing refinances are permitted.</strong></p>
              <p style={{ marginTop: '0.5rem' }}><strong>Assets do not change post-close; if assets change, a new issuance is created.</strong></p>
              <p style={{ marginTop: '0.5rem' }}><strong>Distributions adjust to performance; leverage does not.</strong></p>
            </div>
          </Reveal>

          <Reveal as="div" delay={210}>
            <h3 style={{ marginTop: '3rem' }}>Capital Position</h3>
            <p>Sylvan capital sits senior to sponsor equity and junior to bank debt. Sponsor equity absorbs first loss.</p>
          </Reveal>

          <Reveal as="div" delay={250}>
            <h3 style={{ marginTop: '3rem' }}>Income Waterfall</h3>
            <div className="waterfall">
              <div className="waterfall-step">
                <div className="step-number">1</div>
                <div>Rent collected</div>
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
          </Reveal>

          <Reveal as="div" delay={300}>
            <h3 style={{ marginTop: '3rem' }}>Income & Downside Behavior</h3>
            <p><strong>Reserves are utilized before distributions adjust and are replenished pursuant to defined priority rules before distributions normalize.</strong></p>
            <p style={{ marginTop: '1rem' }}>In stress scenarios, reserve usage precedes any distribution adjustment. Once performance stabilizes, reserves are restored before distributions return to target levels.</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

