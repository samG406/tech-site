import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">SYLVAN</div>
            <p className="footer-tagline">
              Standardized structured real estate income framework for RIAs.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-heading">Pages</div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/start">Start Here</Link></li>
              <li><Link href="/how-it-works">How Sylvan Works</Link></li>
              <li><Link href="/offerings">Offerings</Link></li>
              <li><Link href="/governance">Governance</Link></li>
              <li><Link href="/portfolio">Portfolio Role</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-disclosures">
            <div className="footer-heading">Disclosures</div>

            <div className="classification-banner">
              <strong>Classification:</strong> Sylvan is not an issuer, investment adviser, broker-dealer, or custodian. Sylvan provides standardized structure, workflow, and audit-ready documentation used by RIAs and their clients.
            </div>

            <div className="disclaimer">
              <p><strong>Important Disclosures:</strong></p>
              <p>Sylvan does not provide custody services. All assets are held by qualified custodians.</p>
              <p>No performance targets or yield projections are provided. Past performance is not indicative of future results.</p>
              <p>This information does not constitute tax advice. Consult your tax advisor regarding your specific situation.</p>
              <p>Real estate investments involve substantial risk including loss of principal. Investments are illiquid and subject to market, credit, and operational risks.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-row">
            <p className="footer-copyright">© 2024 Sylvan. All rights reserved.</p>
            <p className="footer-meta">Closed-end offerings. No redemption feature. Exit via sale or refinance under predefined terms.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

