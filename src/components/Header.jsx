import { useEffect, useState } from 'react'
import { Menu, X, MessageSquare, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const closeMobile = () => setMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? 'glass-header shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-px flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={closeMobile}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1 group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.55)]">
            <img
              src="/oej-logo-icon.svg"
              alt="OEJ Logo — Oussama El Jounaidi"
              className="w-10 h-10 rounded-xl select-none"
              draggable={false}
            />
          </div>
          <span className="text-[1.05rem] font-extrabold tracking-tight select-none">
            OUSSAMA<span className="text-accent-cyan group-hover:text-gradient transition-all duration-300"> EL JOUNAIDI</span>
          </span>
        </a>

        {/* Nav Desktop Centrée */}
        <nav className="hidden lg:flex items-center justify-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link group"
            >
              <span className="relative inline-flex items-center gap-1">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* CTA Desktop + Bouton Mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="nav-cta-pill hidden sm:inline-flex group"
          >
            <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            Me Contacter
          </a>

          <button
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden relative inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-base-800/70 text-slate-200 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-base-800 transition-all duration-200 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-blue/0 hover:from-accent-cyan/5 hover:to-accent-blue/5 transition-all duration-300" />
            <div className="relative transition-transform duration-300">
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={2.3} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2.3} />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileMenuOpen
            ? 'max-h-[600px] opacity-100 mt-2'
            : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="glass-header mx-4 sm:mx-6 rounded-2xl border border-white/5 shadow-2xl shadow-black/40">
          <div className="px-4 py-5 sm:px-6 sm:py-6 flex flex-col gap-1.5">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                style={{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : '0ms' }}
                className={`mobile-menu-link group items-center justify-between opacity-0 translate-x-[-8px] ${
                  mobileMenuOpen ? 'opacity-100 translate-x-0' : ''
                } transition-all duration-300`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 group-hover:bg-accent-cyan group-hover:scale-150 transition-all duration-300" />
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />

            <a
              href="#contact"
              onClick={closeMobile}
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 40}ms` : '0ms' }}
              className={`relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue text-white font-semibold shadow-lg shadow-accent-cyan/30 hover:shadow-accent-cyan/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 opacity-0 translate-y-2 ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : ''
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              Me Contacter
            </a>
          </div>
        </div>

        <div className="h-4" aria-hidden="true" />
      </div>

      {/* Overlay backdrop mobile */}
      <div
        onClick={closeMobile}
        className={`lg:hidden fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm z-[-1] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
    </header>
  )
}
