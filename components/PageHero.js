import Reveal from './Reveal'

export default function PageHero({ title, quote }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner">
          <Reveal as="div">
            <h1 className="page-hero-title">{title}</h1>
          </Reveal>
          {quote ? (
            <Reveal as="div" delay={80}>
              <p className="page-hero-quote">“{quote}”</p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}


