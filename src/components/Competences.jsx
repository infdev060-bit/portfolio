import { Code2, Workflow, Brain, Database, ArrowRight, ShoppingCart, Terminal, PenTool, Film, Box, GitBranch, Code } from 'lucide-react'

const expertises = [
  {
    id: 'web',
    icon: Code2,
    title: 'Développement Web Full-Stack & CMS',
    description:
      "Conception d'applications web scalables, APIs REST robustes et sites e-commerce sur-mesure.",
    badges: [
      { label: 'React.js' },
      { label: 'Laravel 10' },
      { label: 'JavaScript (ES6+)' },
      { label: 'PHP' },
      { label: 'WordPress' },
      { label: 'Elementor' },
      { label: 'WooCommerce', icon: ShoppingCart },
      { label: 'REST API' },
    ],
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Automatisation & Workflows',
    description:
      'Orchestration de processus métiers complexes avec n8n. Scripts Python & FFmpeg pour traitements multimédias et API webhooks.',
    badges: [
      { label: 'n8n Workflows' },
      { label: 'Python', icon: Terminal },
      { label: 'FFmpeg' },
      { label: 'API Webhooks' },
      { label: 'Intégrations API' },
      { label: 'Process Digital' },
    ],
  },
  {
    id: 'ia-media',
    icon: Brain,
    title: 'IA Générative & Création Média',
    description:
      "Intégration des LLMs (ChatGPT, Gemini, Claude) dans vos process et création de contenus visuels/vidéo automatisés.",
    badges: [
      { label: 'Prompt Engineering' },
      { label: 'ChatGPT / Gemini' },
      { label: 'Claude API' },
      { label: 'CapCut', icon: Film },
      { label: 'Canva', icon: PenTool },
      { label: 'Montage Vidéo' },
    ],
  },
  {
    id: 'data-devops',
    icon: Database,
    title: 'Databases & DevOps',
    description:
      "Modélisation de bases de données relationnelles, conteneurisation Docker et gestion de code source avec Git.",
    badges: [
      { label: 'MySQL' },
      { label: 'SQL Server' },
      { label: 'Docker', icon: Box },
      { label: 'Git / GitHub', icon: GitBranch },
      { label: 'VS Code', icon: Code },
      { label: 'Windsurf' },
    ],
  },
]

export default function Competences() {
  return (
    <section id="competences" className="py-20 sm:py-28 relative bg-base-900/30">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="section-eyebrow mb-3">Ce que je fais</p>
          <h2 className="section-title mb-4">
            Mon expertise<span className="hero-gradient-text"> Dev & Automation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            4 domaines complémentaires, inspirés directement de mon CV, pour construire
            vos produits de A à Z — du développement à l'automatisation, de l'IA aux
            bases de données.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {expertises.map(({ id, icon: Icon, title, description, badges }, i) => (
            <article
              key={id}
              className="group relative rounded-2xl bg-base-900/70 border border-slate-800 p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow-cyan hover:border-accent-cyan/35"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-accent-cyan/10 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              />

              <div className="relative z-10 flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan ring-accent-cyan/20 ring-1 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/3 border border-white/6 text-[10px] font-bold tracking-[0.16em] uppercase text-slate-400">
                  <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan/80 group-hover:bg-accent-cyan transition-colors" />
                  #{String(i + 1).padStart(2, '0')}
                </div>
              </div>

              <h3 className="relative z-10 text-xl sm:text-[22px] font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-gradient-text group-hover:bg-clip-text transition-all duration-300">
                {title}
              </h3>
              <p className="relative z-10 text-slate-400 text-sm leading-relaxed mb-6">
                {description}
              </p>

              <div className="relative z-10 flex flex-wrap gap-2 mb-7">
                {badges.map(({ label, icon: ChipIcon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-medium border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-250 hover:border-accent-cyan/30 hover:bg-accent-cyan/[0.06] hover:text-white"
                  >
                    {ChipIcon && <ChipIcon className="w-[13px] h-[13px] opacity-75 group-hover:opacity-100 transition-opacity" strokeWidth={2} />}
                    {label}
                  </span>
                ))}
              </div>

              <div className="relative z-10 flex items-center justify-between pt-5 border-t border-slate-800/80 group-hover:border-accent-cyan/20 transition-colors">
                <span className="text-sm font-semibold text-slate-500 group-hover:text-accent-cyan transition-colors duration-300">
                  En savoir plus
                </span>
                <button
                  type="button"
                  aria-label={`Voir détails : ${title}`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/3 border border-white/8 ring-accent-cyan/20 ring-1 text-slate-400 group-hover:text-accent-cyan group-hover:ring-accent-cyan/40 transition-all duration-300 group-hover:translate-x-0.5"
                >
                  <ArrowRight
                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    strokeWidth={2.2}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
