import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children, title = 'Sylvan - Structured Real Estate Income Framework for RIAs' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sylvan provides repeatable structure, workflow, and audit-ready documentation for institutional-grade real estate income investing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

