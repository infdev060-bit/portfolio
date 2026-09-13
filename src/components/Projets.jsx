import { ExternalLink, Github, ArrowUpRight, Calendar, Sparkles, Activity, Users, TrendingUp, Clock, Heart, ShoppingBag, Globe, Zap, Database, Shield, MessageSquare, Stethoscope, Workflow, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    id: 'sportbook',
    icon: Calendar,
    pattern: '🏟️',
    gradient: 'from-accent-cyan/35 via-accent-blue/20 to-transparent',
    stack: [
      { label: 'Laravel 10', icon: Shield },
      { label: 'React.js', icon: Zap },
      { label: 'MySQL', icon: Database },
      { label: 'Sanctum' },
      { label: 'Laratrust' },
      { label: 'API REST', icon: MessageSquare },
    ],
    metrics: [
      { labelKey: 'projects.metricsLabels.adminTime', value: '-85%', icon: Clock },
      { labelKey: 'projects.metricsLabels.duplicates', value: '0', icon: Sparkles },
      { labelKey: 'projects.metricsLabels.establishments', value: '+3', icon: Users },
      { labelKey: 'projects.metricsLabels.satisfaction', value: '4.8/5', icon: Heart },
    ],
    github: 'https://github.com/ElJOUNAIDI/fil_rouge',
    demo: null,
  },
  {
    id: 'mediaflow',
    icon: Activity,
    pattern: '🎬',
    gradient: 'from-accent-cyan/35 via-sky-500/15 to-transparent',
    stack: [
      { label: 'n8n Workflows', icon: Workflow },
      { label: 'Python' },
      { label: 'FFmpeg' },
      { label: 'ChatGPT API', icon: Sparkles },
      { label: 'Webhooks' },
      { label: 'Social APIs' },
    ],
    metrics: [
      { labelKey: 'projects.metricsLabels.timePerWeek', value: '15h → 30min', icon: Clock },
      { labelKey: 'projects.metricsLabels.timeSaved', value: '97%', icon: TrendingUp },
      { labelKey: 'projects.metricsLabels.publishFrequency', value: '+40%', icon: Activity },
      { labelKey: 'projects.metricsLabels.contentsPerSource', value: '×12', icon: Sparkles },
    ],
    github: null,
    demo: null,
  },
  {
    id: 'tantaoui',
    icon: Stethoscope,
    pattern: '⚕️',
    gradient: 'from-accent-cyan/35 via-teal-500/15 to-transparent',
    stack: [
      { label: 'React.js', icon: Zap },
      { label: 'Tailwind CSS' },
      { label: 'UI/UX Santé' },
      { label: 'Responsive' },
      { label: 'Formulaires' },
      { label: 'SEO Médical' },
    ],
    metrics: [
      { labelKey: 'projects.metricsLabels.phoneAppointments', value: '-60%', icon: Phone },
      { labelKey: 'projects.metricsLabels.newPatients', value: '+45%', icon: Users },
      { labelKey: 'projects.metricsLabels.availability', value: '24/7 en ligne', icon: Clock },
      { labelKey: 'projects.metricsLabels.lighthouse', value: '98', icon: TrendingUp },
    ],
    github: null,
    demo: 'https://projet-fr-1.vercel.app/',
  },
  {
    id: 'vasycom',
    icon: Globe,
    pattern: '🛒',
    gradient: 'from-accent-cyan/35 via-indigo-500/15 to-transparent',
    stack: [
      { label: 'WordPress', icon: Globe },
      { label: 'Elementor' },
      { label: 'WooCommerce', icon: ShoppingBag },
      { label: 'PHP' },
      { label: 'SEO' },
      { label: 'Performance' },
    ],
    metrics: [
      { labelKey: 'projects.metricsLabels.conversion', value: '×3', icon: TrendingUp },
      { labelKey: 'projects.metricsLabels.lighthouse', value: '95+', icon: Sparkles },
      { labelKey: 'projects.metricsLabels.cartAbandonment', value: '-28 pts', icon: Activity },
      { labelKey: 'projects.metricsLabels.google', value: '1ère page', icon: Globe },
    ],
    github: null,
    demo: 'https://vasycom.com/',
  },
]

export default function Projets() {
  const { t } = useTranslation()
  return (
    <section id="projets" className="py-20 sm:py-28 relative bg-base-900/30">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[40rem] -z-10 bg-gradient-glow opacity-60 pointer-events-none" />
      <div className="container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-eyebrow mb-3">{t('projects.eyebrow')}</p>
            <h2 className="section-title">
              {t('projects.title')}<span className="hero-gradient-text">{t('projects.titleAccent')}</span>
            </h2>
          </div>
          <p className="text-slate-400 md:max-w-sm">
            {t('projects.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-7">
          {projects.map((p, idx) => {
            const ProjectIcon = p.icon
            return (
              <article
                key={p.id}
                className="group relative card-base overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-cyan/40 hover:shadow-[0_30px_60px_-20px_rgba(56,189,248,0.25),0_0_0_1px_rgba(56,189,248,0.12)]"
              >
                <div
                  className={`relative h-48 sm:h-56 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden border-b border-slate-800/60`}
                >
                  <div
                    className="absolute inset-0 opacity-25 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 0, transparent 45%)',
                    }}
                  />
                  <div className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <div className="relative text-7xl sm:text-8xl drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500">
                    {p.pattern}
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="chip chip-accent bg-base-900/60 backdrop-blur-sm">
                      <ProjectIcon className="w-3.5 h-3.5 -ml-0.5" strokeWidth={2.2} />
                      {t(`projects.items.${p.id}.category`)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/3 border border-white/8 text-[10px] font-bold tracking-[0.16em] uppercase text-slate-400 backdrop-blur-sm">
                    <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan/80 group-hover:bg-accent-cyan group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all" />
                    #{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl sm:text-[22px] font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-text group-hover:bg-clip-text transition-all duration-300">
                      {t(`projects.items.${p.id}.title`)}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-accent-cyan opacity-60 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 group-hover:-translate-y-1 group-hover:translate-x-0 transition-all flex-shrink-0" />
                  </div>

                  <div className="space-y-3.5 mb-5">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        {t('projects.problemLabel')}
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{t(`projects.items.${p.id}.problem`)}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-accent-cyan mb-1.5">
                        {t('projects.solutionLabel')}
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{t(`projects.items.${p.id}.solution`)}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5.5">
                    {p.stack.map(({ label, icon: SIcon }) => (
                      <span
                        key={label}
                        className="chip chip-neutral text-[11px] py-0.5 transition-all duration-250 hover:border-accent-cyan/30 hover:bg-accent-cyan/[0.06] hover:text-white"
                      >
                        {SIcon && <SIcon className="w-3 h-3 -ml-0.5 opacity-80" strokeWidth={2} />}
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6 mt-auto">
                    {p.metrics.map(({ labelKey, value, icon: MIcon }) => (
                      <div
                        key={labelKey}
                        className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs flex flex-col gap-1 group-hover:bg-accent-cyan/[0.04] group-hover:border-accent-cyan/18 transition-all duration-300"
                      >
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MIcon className="w-3.5 h-3.5 text-accent-cyan/80" strokeWidth={2} />
                          <span className="font-semibold tracking-wide">{t(labelKey)}</span>
                        </div>
                        <div className="text-[15px] font-bold text-white leading-tight tracking-tight">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-5 border-t border-slate-800/70 group-hover:border-accent-cyan/18 transition-colors">
                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-accent-cyan/15 hover:shadow-glow-cyan-blue"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.viewDemo')}
                      </a>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-500 text-sm font-semibold cursor-not-allowed select-none">
                        <ExternalLink className="w-4 h-4 opacity-60" />
                        {t('projects.privateDemo')}
                      </div>
                    )}

                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-base-900/60 border border-slate-700/70 text-slate-200 text-sm font-semibold hover:border-accent-cyan/60 hover:text-accent-cyan hover:bg-base-800 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-500 text-sm font-semibold cursor-not-allowed select-none">
                        <Github className="w-4 h-4 opacity-60" />
                        {t('projects.privateCode')}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
