import { useState } from 'react'
import { GraduationCap, Award, Briefcase, Calendar, ChevronRight, Filter, CheckCircle2, Code2, Workflow, Database, Shield, Globe, PenTool, FileCode } from 'lucide-react'

const timeline = [
  // ===== EXPERIENCES PROFESSIONNELLES =====
  {
    id: 'xp-auto-2026',
    year: '2026',
    dateOrder: 202600,
    type: 'experience',
    icon: Workflow,
    title: 'Automatisation & IA — Projet Personnel',
    org: 'Freelance — Casablanca',
    location: 'Casablanca',
    desc: "Conception et orchestration de workflows n8n, intégrations d'APIs IA (ChatGPT, Gemini, Claude) et pipeline de création de contenu multimédia automatisé.",
    tags: ['n8n Workflows', 'API IA', 'ChatGPT / Gemini', 'Python', 'FFmpeg'],
    tagIcons: { 'n8n Workflows': Workflow, 'API IA': Shield, Python: Code2, FFmpeg: PenTool },
  },
  {
    id: 'xp-vasycom-2024',
    year: '06/2024 — 08/2024',
    dateOrder: 202408,
    type: 'experience',
    icon: Briefcase,
    title: 'Développeur Web — Stage',
    org: 'VASYCOM',
    location: 'Casablanca',
    desc: 'Développement et personnalisation de sites WordPress, thèmes Elementor sur-mesure et configuration de boutiques WooCommerce performantes.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'HTML/CSS', 'JavaScript'],
    tagIcons: { WordPress: Globe, Elementor: FileCode, WooCommerce: Shield, JavaScript: Code2 },
  },
  {
    id: 'xp-ocode-2024',
    year: '01/2024 — 06/2024',
    dateOrder: 202406,
    type: 'experience',
    icon: Briefcase,
    title: 'Développeur Web — Stage',
    org: 'OCODE',
    location: 'Casablanca',
    desc: "Développement front-end & back-end sur WordPress, PHP natif et JavaScript. Réalisation de tests QA et validation de livrables qualité.",
    tags: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'Tests & QA'],
    tagIcons: { WordPress: Globe, PHP: Code2, JavaScript: Code2, 'Tests & QA': CheckCircle2 },
  },

  // ===== FORMATIONS =====
  {
    id: 'form-simplon-2025',
    year: '06/2025 — 11/2025',
    dateOrder: 202511,
    type: 'education',
    icon: GraduationCap,
    title: 'Développement Front-End & Back-End',
    org: 'Simplon Maghreb',
    location: 'Casablanca',
    desc: 'Formation intensive full-stack : React.js moderne, Laravel 10, Node.js, modélisation de bases de données et architecture de projets web scalables.',
    tags: ['React.js', 'Laravel 10', 'Node.js', 'Bases de Données', 'Full Stack'],
    tagIcons: { 'React.js': Code2, 'Laravel 10': Shield, 'Node.js': Code2, 'Bases de Données': Database },
  },
  {
    id: 'form-ista-2022',
    year: '2020 — 2022',
    dateOrder: 202200,
    type: 'education',
    icon: GraduationCap,
    title: 'Diplôme de Technicien Spécialisé en Développement Informatique',
    org: 'ISTA / OFPPT',
    location: 'Casablanca',
    desc: 'Formation complète en algorithmique, programmation web front-end & back-end, gestion de bases de données et méthodologie de génie logiciel.',
    tags: ['Algorithmique', 'Programmation Web', 'PHP', 'SQL', 'Génie Logiciel'],
    tagIcons: { 'Algorithmique': Code2, PHP: Code2, SQL: Database, 'Génie Logiciel': FileCode },
  },
  {
    id: 'form-bac-2020',
    year: '2020',
    dateOrder: 202000,
    type: 'education',
    icon: GraduationCap,
    title: 'Baccalauréat Sciences Physiques',
    org: 'Lycée El Moatamid Bnou Abbad',
    location: 'Casablanca',
    desc: "Baccalauréat option Sciences Physiques — base solide en mathématiques, logique et raisonnement scientifique pour l'informatique.",
    tags: ['Mathématiques', 'Physique-Chimie', 'Logique'],
    tagIcons: {},
  },

  // ===== CERTIFICATIONS =====
  {
    id: 'cert-laravel-2024',
    year: '2024',
    dateOrder: 202499,
    type: 'certification',
    icon: Award,
    title: 'Développement Web avec Laravel',
    org: 'Certification Laravel',
    location: 'En ligne',
    desc: "Maîtrise de Laravel 10 : MVC, Eloquent ORM, Blade, migrations, APIs REST, authentification et bonnes pratiques framework.",
    tags: ['Laravel 10', 'HTML/CSS', 'JavaScript', 'Bootstrap 5', 'REST API'],
    tagIcons: { 'Laravel 10': Shield, Bootstrap: Globe, 'REST API': Workflow },
  },
  {
    id: 'cert-git-2023',
    year: '2023',
    dateOrder: 202305,
    type: 'certification',
    icon: Award,
    title: 'Gérez du code avec Git et GitHub',
    org: 'OpenClassrooms',
    location: 'En ligne',
    desc: 'Workflow Git professionnel : branches, merge, rebase, pull requests, collaboration en équipe, résolution de conflits et bonnes pratiques.',
    tags: ['Git', 'GitHub', 'Versioning', 'Collaboration', 'Branches'],
    tagIcons: {},
  },
  {
    id: 'cert-js-2023',
    year: '2023',
    dateOrder: 202304,
    type: 'certification',
    icon: Award,
    title: 'Apprenez à programmer avec JavaScript',
    org: 'OpenClassrooms',
    location: 'En ligne',
    desc: 'JavaScript moderne ES6+ : variables, fonctions, tableaux, objets, DOM, événements, promesses, async/await et programmation orientée objet.',
    tags: ['JavaScript ES6+', 'DOM', 'Async/Await', 'POO', 'Fonctions'],
    tagIcons: { 'JavaScript ES6+': Code2, DOM: Globe, POO: FileCode },
  },
  {
    id: 'cert-bootstrap-2023',
    year: '2023',
    dateOrder: 202303,
    type: 'certification',
    icon: Award,
    title: 'Créez des sites web responsives avec Bootstrap 5',
    org: 'OpenClassrooms',
    location: 'En ligne',
    desc: 'Conception de layouts responsives avec le système de grille Bootstrap 5, composants UI, utilities, formulaires et design mobile-first.',
    tags: ['Bootstrap 5', 'Responsive Design', 'Grille Flex', 'Composants UI', 'Mobile-First'],
    tagIcons: { 'Bootstrap 5': Globe, 'Responsive Design': FileCode },
  },
  {
    id: 'cert-html-2023',
    year: '2023',
    dateOrder: 202302,
    type: 'certification',
    icon: Award,
    title: 'Créez votre site web avec HTML5 et CSS3',
    org: 'OpenClassrooms',
    location: 'En ligne',
    desc: 'Fondamentaux web : sémantique HTML5, Flexbox, CSS Grid, animations CSS, accessibilité, responsive media queries et SEO on-page basique.',
    tags: ['HTML5', 'CSS3', 'Flexbox / Grid', 'Animations CSS', 'SEO'],
    tagIcons: { HTML5: Globe, CSS3: PenTool, 'Flexbox / Grid': FileCode, SEO: Shield },
  },
]

const typeMeta = {
  experience: { label: 'Expériences', shortLabel: 'Expérience', emptyLabel: 'Aucune expérience affichée', color: 'cyan', icon: Briefcase },
  education: { label: 'Formations', shortLabel: 'Formation', emptyLabel: 'Aucune formation affichée', color: 'blue', icon: GraduationCap },
  certification: { label: 'Certifications', shortLabel: 'Certification', emptyLabel: 'Aucune certification affichée', color: 'emerald', icon: Award },
}

const filters = [
  { id: 'all', label: 'Tout', icon: Filter, count: timeline.length },
  { id: 'experience', label: typeMeta.experience.label, icon: typeMeta.experience.icon, count: timeline.filter((t) => t.type === 'experience').length },
  { id: 'education', label: typeMeta.education.label, icon: typeMeta.education.icon, count: timeline.filter((t) => t.type === 'education').length },
  { id: 'certification', label: typeMeta.certification.label, icon: typeMeta.certification.icon, count: timeline.filter((t) => t.type === 'certification').length },
]

export default function Parcours() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = timeline
    .filter((item) => activeFilter === 'all' || item.type === activeFilter)
    .sort((a, b) => b.dateOrder - a.dateOrder)

  return (
    <section id="parcours" className="py-20 sm:py-28 relative bg-base-900/30">
      <div className="container-px">
        {/* ===== TITRE & INTRO ===== */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="section-eyebrow mb-3">Trajectoire</p>
          <h2 className="section-title mb-4">
            Parcours &<span className="hero-gradient-text"> Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Expériences terrain, formations full-stack et certifications reconnues : un parcours structuré pour des livrables de qualité.
          </p>
        </div>

        {/* ===== FILTRES PAR CATEGORIE ===== */}
        <div className="relative z-10 mb-12 sm:mb-14 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {filters.map(({ id, label, icon: FIcon, count }) => {
            const active = activeFilter === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                className={`group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
                  active
                    ? 'bg-gradient-primary text-white border-transparent shadow-lg shadow-accent-cyan/20 hover:shadow-glow-cyan-blue'
                    : 'bg-base-800/60 text-slate-300 border-slate-700/70 hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-base-800/90 backdrop-blur-sm'
                }`}
                aria-pressed={active}
              >
                <FIcon
                  className={`w-4 h-4 ${active ? '' : 'opacity-80 group-hover:opacity-100'}`}
                  strokeWidth={2}
                />
                {label}
                <span
                  className={`inline-flex items-center justify-center min-w-[1.4rem] h-5 px-1.5 rounded-full text-[11px] font-bold ${
                    active
                      ? 'bg-white/18 text-white'
                      : 'bg-white/[0.06] text-slate-400 border border-white/[0.08] group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan group-hover:border-accent-cyan/30'
                  } transition-all`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* ===== TIMELINE VERTICALE ===== */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            {typeMeta[activeFilter]?.emptyLabel ?? 'Aucun élément à afficher'}
          </div>
        ) : (
          <div className="relative">
            {/* Ligne centrale verticale */}
            <div
              className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/60 via-slate-700/60 to-accent-blue/40"
              aria-hidden
            />

            <ol className="space-y-10 sm:space-y-14">
              {filtered.map((item, i) => {
                const alignLeft = i % 2 === 0
                const ItemIcon = item.icon
                const meta = typeMeta[item.type]

                return (
                  <li key={item.id} className="relative pl-12 sm:pl-0 group/item">
                    {/* ===== DOT TIMELINE ===== */}
                    <span className="timeline-dot group-hover/item:scale-125 group-hover/item:shadow-glow-cyan-strong transition-all duration-300" />

                    <div className={`sm:grid sm:grid-cols-2 sm:gap-10 ${alignLeft ? '' : 'sm:[&>*:first-child]:col-start-2'}`}>
                      <div className={`${alignLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:col-start-2'} space-y-3`}>
                        {/* ===== CHIP DATE + TYPE ===== */}
                        <div className={`inline-flex items-center gap-1.5 text-xs font-semibold chip chip-accent bg-base-900/60 backdrop-blur-sm ${alignLeft ? 'sm:ml-auto' : ''}`}>
                          <Calendar className="w-3 h-3" strokeWidth={2.2} />
                          {item.year}
                          <span className="mx-1 opacity-40">•</span>
                          <meta.icon className="w-3 h-3" strokeWidth={2.2} />
                          {meta.shortLabel}
                        </div>

                        {/* ===== CARTE ===== */}
                        <article className="card-base card-hover-base p-6 text-left overflow-hidden group/card hover:border-accent-cyan/35 hover:shadow-[0_30px_60px_-20px_rgba(56,189,248,0.25)] transition-all duration-500">
                          {/* Halo hover background */}
                          <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-accent-cyan/10 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          <div className="relative z-10 flex items-start justify-between gap-3 mb-3.5">
                            {/* Icône principale */}
                            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/20 group-hover/card:scale-110 group-hover/card:bg-accent-cyan/15 transition-all duration-300">
                              <ItemIcon className="w-5.5 h-5.5" strokeWidth={2} />
                            </div>

                            {/* Badge #categorie */}
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-bold tracking-[0.16em] uppercase text-slate-400 shrink-0">
                              <span className="relative inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan/80 group-hover/card:bg-accent-cyan group-hover/card:shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all" />
                              {item.location}
                            </span>
                          </div>

                          {/* TITRE */}
                          <h3 className="relative z-10 text-lg sm:text-[19px] font-bold text-white mb-1.5 leading-snug group-hover/card:text-transparent group-hover/card:bg-gradient-text group-hover/card:bg-clip-text transition-all duration-300">
                            {item.title}
                          </h3>

                          {/* ORGANE / ÉCOLE */}
                          <div className="relative z-10 text-sm font-semibold mb-3 text-accent-cyan flex items-center gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
                            <span className="truncate">{item.org}</span>
                          </div>

                          {/* DESCRIPTION */}
                          <p className="relative z-10 text-sm text-slate-400 leading-relaxed mb-4.5">
                            {item.desc}
                          </p>

                          {/* BADGES COMPETENCES */}
                          <div className="relative z-10 flex flex-wrap gap-1.5">
                            {item.tags.map((t) => {
                              const TagIcon = item.tagIcons?.[t]
                              return (
                                <span
                                  key={t}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-250 hover:border-accent-cyan/30 hover:bg-accent-cyan/[0.06] hover:text-white"
                                >
                                  {TagIcon && <TagIcon className="w-3 h-3 opacity-80" strokeWidth={2} />}
                                  {t}
                                </span>
                              )
                            })}
                          </div>
                        </article>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  )
}
