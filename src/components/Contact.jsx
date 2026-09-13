import { Mail, Phone, MapPin, Github, CheckCircle2, ArrowUpRight, Linkedin, Clock, UserCheck, Briefcase } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const contactCards = [
  {
    id: 'email',
    icon: Mail,
    labelKey: 'contact.cards.emailLabel',
    value: 'oussama.eljounaidi@gmail.com',
    href: 'mailto:oussama.eljounaidi@gmail.com',
    actionKey: 'contact.cards.emailAction',
    target: null,
  },
  {
    id: 'phone',
    icon: Phone,
    labelKey: 'contact.cards.phoneLabel',
    value: '+212 6 21 40 00 31',
    href: 'tel:+212621400031',
    actionKey: 'contact.cards.phoneAction',
    target: null,
  },
  {
    id: 'location',
    icon: MapPin,
    labelKey: 'contact.cards.locationLabel',
    value: 'Casablanca, Maroc',
    href: 'https://www.google.com/maps/place/Casablanca/',
    actionKey: 'contact.cards.locationAction',
    target: '_blank',
  },
  {
    id: 'github',
    icon: Github,
    labelKey: 'contact.cards.githubLabel',
    value: 'github.com/ElJOUNAIDI',
    href: 'https://github.com/ElJOUNAIDI',
    actionKey: 'contact.cards.githubAction',
    target: '_blank',
  },
]

const missionTypes = [
  {
    titleKey: 'contact.missions.fullstack.title',
    descKey: 'contact.missions.fullstack.desc',
    icon: Briefcase,
  },
  {
    titleKey: 'contact.missions.automation.title',
    descKey: 'contact.missions.automation.desc',
    icon: Clock,
  },
  {
    titleKey: 'contact.missions.ai.title',
    descKey: 'contact.missions.ai.desc',
    icon: UserCheck,
  },
  {
    titleKey: 'contact.missions.wordpress.title',
    descKey: 'contact.missions.wordpress.desc',
    icon: CheckCircle2,
  },
]

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-base-900/30">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-px relative">
        {/* ===== EN-TÊTE ===== */}
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <p className="section-eyebrow mb-2 sm:mb-3">{t('contact.eyebrow')}</p>
          <h2 className="section-title mb-4 sm:mb-5 text-2xl sm:text-3xl lg:text-4xl">
            {t('contact.title')} <span className="hero-gradient-text">{t('contact.titleAccent').trim()}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-5 sm:mb-6 text-xs sm:text-sm lg:text-base">
            {t('contact.intro')} <span className="text-accent-cyan font-semibold">{t('contact.introHighlight')}</span> {t('contact.introEnd')}
          </p>

          {/* Badges statut */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="chip chip-accent inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs">
              <UserCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 -ml-0.5" strokeWidth={2.2} />
              {t('contact.badges.fullTime')}
            </span>
            <span className="chip chip-emerald inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs">
              <span className="relative inline-flex items-center justify-center -ml-0.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-emerald" />
                <span className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-emerald animate-pulse-ring" />
              </span>
              {t('contact.badges.available')}
            </span>
          </div>
        </div>

        {/* ===== GRILLE PRINCIPALE : Contact + Types missions ===== */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {/* ===== GRILLE CONTACT DIRECT ===== */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            <div className="mb-2.5 sm:mb-3 lg:mb-4 flex items-center gap-2 text-[10px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(56,189,248,0.8)] shrink-0" />
              {t('contact.directContact')}
            </div>

            {/* Grille 2×2 contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactCards.map(({ id, icon: Icon, labelKey, value, href, actionKey, target }) => (
                <a
                  key={id}
                  href={href}
                  target={target}
                  rel={target ? 'noopener noreferrer' : undefined}
                  className="group relative card-base card-hover-base p-3.5 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 overflow-hidden hover:border-accent-cyan/35 hover:shadow-[0_30px_60px_-20px_rgba(56,189,248,0.25)] transition-all duration-500"
                >
                  {/* Halo hover */}
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br from-accent-cyan/10 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex items-start justify-between gap-2.5 sm:gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5" strokeWidth={2} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-500 opacity-60 -translate-y-0.5 translate-x-0.5 group-hover:text-accent-cyan group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-0 transition-all flex-shrink-0" strokeWidth={2.2} />
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-end gap-1 sm:gap-1.5 min-w-0">
                    <div className="text-[10.5px] sm:text-xs lg:text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      {t(labelKey)}
                    </div>
                    <div className="text-[13.5px] sm:text-[15px] lg:text-base font-bold text-white leading-tight break-all min-w-0 group-hover:text-transparent group-hover:bg-gradient-text group-hover:bg-clip-text transition-all duration-300">
                      {value}
                    </div>
                    <div className="text-[11px] sm:text-xs lg:text-xs font-semibold text-accent-cyan/90 inline-flex items-center gap-1 mt-0.5 sm:mt-1 min-w-0 truncate">
                      <span className="truncate">{t(actionKey)}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" strokeWidth={2.4} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* LinkedIn pleine largeur */}
            <a
              href="https://www.linkedin.com/in/oussama-el-jounaidi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative card-base card-hover-base p-3.5 sm:p-5 lg:p-6 flex items-center gap-3.5 sm:gap-4 lg:gap-5 overflow-hidden hover:border-accent-cyan/35 hover:shadow-[0_30px_60px_-20px_rgba(56,189,248,0.25)] transition-all duration-500"
            >
              <div className="absolute -top-20 -left-20 w-52 h-52 bg-gradient-to-tr from-accent-blue/12 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-cyan/10 text-accent-blue ring-1 ring-accent-blue/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5" strokeWidth={2} />
              </div>

              <div className="relative z-10 flex-1 min-w-0">
                <div className="text-[10.5px] sm:text-xs lg:text-xs font-bold uppercase tracking-[0.16em] text-slate-500 mb-0.5 sm:mb-1">
                  {t('contact.linkedinLabel')}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-white leading-tight truncate break-all min-w-0 group-hover:text-transparent group-hover:bg-gradient-text group-hover:bg-clip-text transition-all duration-300">
                  linkedin.com/in/oussama-el-jounaidi
                </div>
                <div className="text-[11px] sm:text-xs lg:text-xs font-semibold text-accent-cyan/90 inline-flex items-center gap-1 mt-1 sm:mt-1.5 min-w-0 truncate">
                  <span className="truncate">{t('contact.linkedinAction')}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" strokeWidth={2.4} />
                </div>
              </div>

              <ArrowUpRight className="relative z-10 w-4.5 h-4.5 sm:w-5 sm:h-5 text-slate-500 opacity-60 -translate-y-0.5 translate-x-0.5 group-hover:text-accent-cyan group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-0 transition-all flex-shrink-0" strokeWidth={2.2} />
            </a>
          </div>

          {/* ===== BLOC TYPES DE MISSIONS ===== */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0" />
              {t('contact.missionTypesTitle')}
            </div>

            <div className="card-base p-4 sm:p-5 lg:p-6 lg:p-7 flex flex-col gap-3 sm:gap-3.5 lg:gap-4 bg-gradient-to-br from-accent-cyan/[0.04] via-base-800/40 to-accent-blue/[0.03] border-accent-cyan/15 overflow-hidden relative">
              <div className="absolute -top-24 right-0 w-64 h-64 bg-gradient-to-bl from-accent-cyan/10 via-transparent to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="relative z-10 flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm lg:text-sm font-bold text-white mb-0.5 sm:mb-1">
                <span className="relative inline-flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent-emerald" />
                  <span className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent-emerald animate-pulse-ring" />
                </span>
                {t('contact.missionsAccepted')}
              </div>

              <ul className="relative z-10 flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                {missionTypes.map(({ titleKey, descKey, icon: MIcon }) => (
                  <li
                    key={titleKey}
                    className="group/item flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 lg:p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:bg-accent-cyan/[0.05] hover:border-accent-cyan/20 transition-all duration-300 min-w-0"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2
                        className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent-cyan group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] transition-all duration-300"
                        strokeWidth={2.2}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                        <MIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-cyan/80 flex-shrink-0" strokeWidth={2.2} />
                        <span className="text-xs sm:text-sm lg:text-sm font-bold text-white leading-tight break-words min-w-0 group-hover/item:text-accent-cyan transition-colors">
                          {t(titleKey)}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs lg:text-[13px] text-slate-400 leading-relaxed break-words min-w-0">
                        {t(descKey)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-1 sm:mt-2 pt-3.5 sm:pt-4 border-t border-slate-800/70 flex items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-[11.5px] lg:text-[11.5px] text-slate-500 min-w-0">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-cyan/70 shrink-0" strokeWidth={2} />
                <span className="break-words min-w-0">
                  {t('contact.responseTime')} <span className="text-slate-300 font-semibold">{t('contact.responseTimeHighlight')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
