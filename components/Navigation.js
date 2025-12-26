import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/start', label: 'Start Here' },
  { href: '/how-it-works', label: 'How Sylvan Works' },
  { href: '/offerings', label: 'Offerings' },
  { href: '/governance', label: 'Governance' },
  { href: '/portfolio', label: 'Portfolio Role' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navigation() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const activePath = useMemo(() => {
    // normalize potential trailing slash
    const p = (router.asPath || '/').split('?')[0].replace(/\/$/, '') || '/'
    return p
  }, [router.asPath])

  useEffect(() => {
    // close the menu on route change
    setIsOpen(false)
  }, [activePath])

  return (
    <>
      <nav aria-label="Primary">
        <Link href="/" className="logo" style={{ textDecoration: 'none' }} aria-label="Sylvan home">
          SYLVAN
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="nav-mobile"
          onClick={() => setIsOpen((v) => !v)}
        >
          {/* simple hamburger / close icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path
                fill="currentColor"
                d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
              />
            )}
          </svg>
        </button>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={activePath === item.href ? 'page' : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div id="nav-mobile" className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={activePath === item.href ? 'page' : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

