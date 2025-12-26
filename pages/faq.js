import Layout from '../components/Layout'
import Reveal from '../components/Reveal'

export default function FAQ() {
  return (
    <Layout title="Frequently Asked Questions - Sylvan">
      <section className="section-alt">
        <div className="container">
          <Reveal as="div">
            <h2>Frequently Asked Questions</h2>
          </Reveal>

          <Reveal as="div" delay={120}>
            <div className="offering-card" style={{ marginBottom: '1.5rem' }}>
              <h3>Is this a fund?</h3>
              <p>No. Sylvan is an issuance-based structure. Each issuance has defined assets that do not change post-close.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={160}>
            <div className="offering-card" style={{ marginBottom: '1.5rem' }}>
              <h3>Who makes decisions?</h3>
              <p>RIAs make allocation decisions for their clients. Sylvan provides the structure and documentation framework. Property-level decisions are made by the property manager within defined operating parameters.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={200}>
            <div className="offering-card" style={{ marginBottom: '1.5rem' }}>
              <h3>Can leverage change?</h3>
              <p>No. Leverage is fixed at close. No mezzanine debt, incremental borrowing, or leverage-increasing refinances are permitted.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={240}>
            <div className="offering-card" style={{ marginBottom: '1.5rem' }}>
              <h3>What happens in stress?</h3>
              <p>Reserves are utilized before distributions adjust and are replenished pursuant to defined priority rules before distributions normalize. Sponsor equity absorbs first loss.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={280}>
            <div className="offering-card" style={{ marginBottom: '1.5rem' }}>
              <h3>Taxable vs tax-advantaged accounts?</h3>
              <p>Core Income and Offset can be held in either account type. Offset provides depreciation timing benefits most relevant in taxable accounts. DST Access is designed for 1031 exchange transactions.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={320}>
            <div className="offering-card" style={{ marginBottom: '1.5rem' }}>
              <h3>Who is this not for?</h3>
              <p>Sylvan is not appropriate for investors requiring liquidity, daily pricing, or the ability to redeem. This is a closed-end structure with exit via property sale or refinance.</p>
            </div>
          </Reveal>

          <Reveal as="div" delay={360}>
            <div className="offering-card">
              <h3>How do I explain this to clients?</h3>
              <p style={{ fontStyle: 'italic' }}>"This is structured real estate income with fixed rules and changing properties. The leverage, waterfall, and governance stay the same across opportunities. You approve the structure once, then review individual real estate assets as they become available. It's custodian-held, closed-end, and designed to complement your existing fixed income allocation."</p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

