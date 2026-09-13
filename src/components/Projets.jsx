import { ExternalLink, Github, ArrowUpRight, Calendar, Sparkles, Activity, Users, TrendingUp, Clock, Heart, ShoppingBag, Globe, Zap, Database, Shield, MessageSquare, Stethoscope, Workflow, Phone } from 'lucide-react'

const projects = [
  {
    id: 'sportbook',
    title: 'SportBook — SaaS Réservation Terrains Sportifs',
    category: 'Full-Stack · SaaS B2B',
    icon: Calendar,
    pattern: '🏟️',
    gradient: 'from-accent-cyan/35 via-accent-blue/20 to-transparent',
    problem:
      'Gestion des réservations via 3 tableurs Excel + carnets papier : perte de données, doublons, conflits de créneaux et administration chronophage pour 3 complexes sportifs.',
    solution:
      'Plateforme SaaS multi-établissements (Laravel 10 + Sanctum + Laratrust pour rôles Admin/Gérant/Joueur) avec planning temps réel, paiements, API REST et dashboard analytique React.',
    stack: [
      { label: 'Laravel 10', icon: Shield },
      { label: 'React.js', icon: Zap },
      { label: 'MySQL', icon: Database },
      { label: 'Sanctum' },
      { label: 'Laratrust' },
      { label: 'API REST', icon: MessageSquare },
    ],
    metrics: [
      { label: 'Temps admin', value: '-85%', icon: Clock },
      { label: 'Doublons', value: '0', icon: Sparkles },
      { label: 'Établissements', value: '+3', icon: Users },
      { label: 'Satisfaction', value: '4.8/5', icon: Heart },
    ],
    github: 'https://github.com/ElJOUNAIDI/fil_rouge',
    demo: null,
  },
  {
    id: 'mediaflow',
    title: 'MediaFlow — Pipeline Automation Multimédia & IA',
    category: 'Automatisation · n8n · IA',
    icon: Activity,
    pattern: '🎬',
    gradient: 'from-accent-cyan/35 via-sky-500/15 to-transparent',
    problem:
      "Créateur de contenu : 15h/semaine à éditer manuellement, recadrer, sous-titrer et publier sur 5 plateformes sociales. Fréquence de publication bloquée, épuisement créatif.",
    solution:
      'Orchestration n8n + scripts Python (FFmpeg) + API ChatGPT : upload 1 vidéo source → génération automatique de clips multi-format, sous-titres IA, hashtags et publication programmée.',
    stack: [
      { label: 'n8n Workflows', icon: Workflow },
      { label: 'Python' },
      { label: 'FFmpeg' },
      { label: 'ChatGPT API', icon: Sparkles },
      { label: 'Webhooks' },
      { label: 'Social APIs' },
    ],
    metrics: [
      { label: 'Temps / semaine', value: '15h → 30min', icon: Clock },
      { label: 'Gain temps', value: '97%', icon: TrendingUp },
      { label: 'Fréquence pub', value: '+40%', icon: Activity },
      { label: 'Contenus / source', value: '×12', icon: Sparkles },
    ],
    github: null,
    demo: null,
  },
  {
    id: 'tantaoui',
    title: 'Cabinet Médical Dr. Tantaoui — Site & RDV',
    category: 'Web Santé · React · UI/UX',
    icon: Stethoscope,
    pattern: '⚕️',
    gradient: 'from-accent-cyan/35 via-teal-500/15 to-transparent',
    problem:
      "Cabinet médical sans présence digitale : prise de RDV par téléphone uniquement (4h/jour de standard), informations obsolètes, nouveaux patients difficilement convertis.",
    solution:
      "Site vitrine médical moderne (React + Tailwind) avec présentation des spécialités, horaires, zone géolocalisation, formulaire de contact sécurisé et interface de prise de rendez-vous.",
    stack: [
      { label: 'React.js', icon: Zap },
      { label: 'Tailwind CSS' },
      { label: 'UI/UX Santé' },
      { label: 'Responsive' },
      { label: 'Formulaires' },
      { label: 'SEO Médical' },
    ],
    metrics: [
      { label: 'RDV téléphone', value: '-60%', icon: Phone },
      { label: 'Nouveaux patients', value: '+45%', icon: Users },
      { label: 'Taux disponibilité', value: '24/7 en ligne', icon: Clock },
      { label: 'Score Lighthouse', value: '98', icon: TrendingUp },
    ],
    github: null,
    demo: 'https://projet-fr-1.vercel.app/',
  },
  {
    id: 'vasycom',
    title: 'VasyCom — Agence & Sites Vitrines / E-commerce',
    category: 'WordPress · Elementor · WooCommerce',
    icon: Globe,
    pattern: '🛒',
    gradient: 'from-accent-cyan/35 via-indigo-500/15 to-transparent',
    problem:
      "PME avec sites vitrines datés et boutique e-commerce non-convertissante : abandon panier à 82%, chargements lents, visibilité SEO inexistante sur Google.",
    solution:
      "Portefeuille de sites sur-mesure (WordPress + Elementor Pro + WooCommerce) : thèmes enfants optimisés, tunnel d'achat restructuré, SEO on-page et performances Lighthouse 95+.",
    stack: [
      { label: 'WordPress', icon: Globe },
      { label: 'Elementor' },
      { label: 'WooCommerce', icon: ShoppingBag },
      { label: 'PHP' },
      { label: 'SEO' },
      { label: 'Performance' },
    ],
    metrics: [
      { label: 'Conversion', value: '×3', icon: TrendingUp },
      { label: 'Lighthouse', value: '95+', icon: Sparkles },
      { label: 'Abandon panier', value: '-28 pts', icon: Activity },
      { label: 'Google', value: '1ère page', icon: Globe },
    ],
    github: null,
    demo: 'https://vasycom.com/',
  },
]

export default function Projets() {
  return (
    <section id="projets" className="py-20 sm:py-28 relative bg-base-900/30">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[40rem] -z-10 bg-gradient-glow opacity-60 pointer-events-none" />
      <div className="container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="section-eyebrow mb-3">Portfolio</p>
            <h2 className="section-title">
              Projets récents<span className="hero-gradient-text"> avec impact mesurable</span>
            </h2>
          </div>
          <p className="text-slate-400 md:max-w-sm">
            4 réalisations emblématiques — du SaaS Full-Stack aux workflows d'automatisation IA, en passant par le site médical et les boutiques e-commerce convertissantes.
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
                      {p.category}
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
                      {p.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-accent-cyan opacity-60 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 group-hover:-translate-y-1 group-hover:translate-x-0 transition-all flex-shrink-0" />
                  </div>

                  <div className="space-y-3.5 mb-5">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        📌 Problème
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-accent-cyan mb-1.5">
                        ✅ Solution
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{p.solution}</p>
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
                    {p.metrics.map(({ label, value, icon: MIcon }) => (
                      <div
                        key={label}
                        className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs flex flex-col gap-1 group-hover:bg-accent-cyan/[0.04] group-hover:border-accent-cyan/18 transition-all duration-300"
                      >
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MIcon className="w-3.5 h-3.5 text-accent-cyan/80" strokeWidth={2} />
                          <span className="font-semibold tracking-wide">{label}</span>
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
                        Voir la Démo
                      </a>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-500 text-sm font-semibold cursor-not-allowed select-none">
                        <ExternalLink className="w-4 h-4 opacity-60" />
                        Démo privée
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
                        Code privé
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
