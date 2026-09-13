import { Github, Linkedin, Heart } from 'lucide-react'

const socials = [
  {
    icon: Github,
    href: 'https://github.com/ElJOUNAIDI',
    label: 'GitHub',
    desc: 'Voir mes projets & contributions',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/oussama-el-jounaidi/',
    label: 'LinkedIn',
    desc: 'Mon parcours professionnel',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-base-900/70 backdrop-blur-md relative overflow-hidden">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-[40rem] h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-950/60 to-transparent pointer-events-none" aria-hidden />

      <div className="container-px py-11 sm:py-12 relative">
        {/* ===== LIGNE SUPÉRIEURE ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-7 mb-8">
          {/* ===== LOGO + NOM COMPLET ===== */}
          <div className="flex items-center gap-3.5 group/logo">
            <div className="relative transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:-rotate-1 group-hover/logo:drop-shadow-[0_0_14px_rgba(56,189,248,0.55)]">
              <img
                src="/oej-logo-icon.svg"
                alt="OEJ Logo — Oussama El Jounaidi"
                className="w-10 h-10 rounded-xl select-none"
                draggable={false}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] sm:text-[17px] font-extrabold tracking-[0.01em] leading-none text-white group-hover/logo:drop-shadow-[0_0_18px_rgba(56,189,248,0.25)] transition-all">
                OUSSAMA{' '}
                <span className="text-accent-cyan group-hover/logo:drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] transition-all">
                  EL JOUNAIDI
                </span>
              </span>
              <div className="text-xs sm:text-[12.5px] text-slate-500 font-medium tracking-wide">
                Développeur Full-Stack & Automation Specialist
              </div>
            </div>
          </div>

          {/* ===== RÉSEAUX SOCIAUX : GITHUB + LINKEDIN SEULEMENT ===== */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label, desc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — ${desc}`}
                title={`${label} — ${desc}`}
                className="group/social relative w-[42px] h-[42px] rounded-xl flex items-center justify-center text-slate-400 border border-slate-700/70 bg-base-800/60 transition-all duration-300 overflow-hidden"
              >
                {/* Halo hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-cyan/0 to-accent-cyan/0 group-hover/social:from-accent-cyan/12 group-hover/social:to-accent-blue/8 transition-all duration-300" aria-hidden />
                <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-accent-cyan/15 blur-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-500" aria-hidden />

                <Icon className="relative z-10 w-[18px] h-[18px] group-hover/social:text-accent-cyan group-hover/social:scale-110 group-hover/social:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300" strokeWidth={2} />

                {/* Bordure highlight */}
                <div className="absolute inset-0 rounded-xl border border-accent-cyan/0 group-hover/social:border-accent-cyan/45 transition-all duration-300 pointer-events-none" aria-hidden />
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-tr-sm border-t border-l border-accent-cyan/0 group-hover/social:border-accent-cyan/60 transition-all duration-300" aria-hidden />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-bl-sm border-b border-r border-accent-cyan/0 group-hover/social:border-accent-cyan/60 transition-all duration-300" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        {/* ===== LIGNE INFÉRIEURE ===== */}
        <div className="pt-6 mt-2 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[12.5px] text-slate-500">
          <p className="font-medium tracking-wide">
            © 2026 <span className="text-slate-400 font-semibold">Oussama El Jounaidi</span>. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href="#"
              className="hover:text-accent-cyan/90 hover:underline hover:underline-offset-2 transition-colors font-medium"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="hover:text-accent-cyan/90 hover:underline hover:underline-offset-2 transition-colors font-medium"
            >
              Confidentialité
            </a>
            <span className="inline-flex items-center gap-1.5 font-medium">
              Conçu & développé avec
              <span className="relative inline-flex items-center justify-center">
                <Heart
                  className="w-3.5 h-3.5 text-accent-emerald fill-accent-emerald/40 animate-pulse-slow"
                  strokeWidth={2.2}
                />
              </span>
              <span className="hidden sm:inline text-slate-400">
                <span className="text-accent-emerald font-semibold">à Casablanca</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
