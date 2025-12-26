import Layout from '../components/Layout'
import Reveal from '../components/Reveal'

export default function Portfolio() {
  return (
    <Layout title="Portfolio Role & Comparisons - Sylvan">
      <section>
        <div className="container">
          <Reveal as="div">
            <h2>Portfolio Role & Comparisons</h2>
          </Reveal>

          <Reveal as="div" delay={120}>
            <div className="offerings-grid" style={{ gridTemplateColumns: '1fr', marginTop: '1.75rem' }}>
              <div className="offering-card">
                <h3>Why Not REITs</h3>
                <p>REITs provide liquidity and diversification but lack asset-level transparency and control over leverage decisions. Sylvan offers fixed leverage, known assets, and no daily mark-to-market volatility.</p>
              </div>

              <div className="offering-card">
                <h3>How Sylvan Complements Bonds</h3>
                <p>Real estate income with fixed leverage provides different risk characteristics than corporate or government bonds. Sylvan offers real asset collateral, inflation sensitivity, and income not correlated to interest rate duration.</p>
              </div>

              <div className="offering-card">
                <h3>Rebalancing Through Flows</h3>
                <p>Portfolio adjustments occur through new allocations and natural exits, not secondary trading. This matches the liquidity profile of the underlying real estate assets.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

