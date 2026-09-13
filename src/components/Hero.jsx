import { ArrowRight, Download, MapPin, Atom, Flame, Workflow, Brain, Terminal as TerminalIcon, Database, GitBranch, Cpu, MessageSquare, Code2, PenTool, Palette, Film, LayoutGrid, Globe2, Wand2, Video } from 'lucide-react'

export default function Hero() {
  /* ====== GROUPES DE TECHNOLOGIES ORGANISÉS ====== */
  const techGroups = [
    {
      name: 'Développement Web',
      color: 'text-accent-cyan',
      gradient: 'from-accent-cyan to-accent-blue',
      icon: Code2,
      items: [
        { label: 'React.js',     icon: Atom,       variant: 'react',     note: 'SPAs · Dashboards' },
        { label: 'Laravel 10',   icon: Flame,      variant: 'laravel',   note: 'APIs · MVC'      },
        { label: 'WordPress',    icon: Globe2,     variant: 'wordpress', note: 'CMS · E-commerce'},
        { label: 'Elementor',    icon: LayoutGrid, variant: 'elementor', note: 'Page builder'    },
      ],
    },
    {
      name: 'Automatisation & IA',
      color: 'text-accent-emerald',
      gradient: 'from-accent-emerald to-accent-cyan',
      icon: Workflow,
      items: [
        { label: 'n8n Workflows', icon: Workflow, variant: 'n8n',    note: 'Auto. multi-étapes' },
        { label: 'Python',        icon: Cpu,      variant: 'python', note: 'Scripts · FFmpeg'   },
        { label: 'AI & APIs',     icon: Brain,    variant: 'ai',     note: 'Gemini · Claude · GPT' },
      ],
    },
    {
      name: 'Design & Média',
      color: 'text-[#e03e9b]',
      gradient: 'from-[#f24e1e] via-[#a259ff] to-[#00c4cc]',
      icon: Palette,
      items: [
        { label: 'Figma',   icon: PenTool, variant: 'figma',  note: 'UI/UX · Prototypes' },
        { label: 'Canva',   icon: Wand2,   variant: 'canva',  note: 'Visuels · Sociaux'  },
        { label: 'CapCut',  icon: Video,   variant: 'capcut', note: 'Montage vidéo'      },
      ],
    },
  ]

  const stats = [
    { k: '1+',  v: "Années d'expérience" },
    { k: '20+', v: 'Projets livrés' },
    { k: '97%', v: 'Gain de temps moyen' },
  ]

  return (
    <section
      id="accueil"
      className="relative isolate pt-36 sm:pt-40 pb-24 sm:pb-32 overflow-hidden hero-vignette"
    >
      {/* ====== ARRIÈRE-PLAN ====== */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-base-950 via-base-900 to-base-900" />
      <div className="absolute inset-0 -z-20 hero-grid-bg" aria-hidden="true" />
      <div
        className="absolute -left-32 top-24 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none -z-10"
        style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.22), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-28 top-40 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none -z-10"
        style={{ background: 'radial-gradient(closest-side, rgba(37,99,235,0.22), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[22rem] -translate-x-1/2 w-[26rem] h-[26rem] rounded-full blur-3xl pointer-events-none -z-10 opacity-80"
        style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.12), rgba(37,99,235,0.08), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-10 items-center">
          {/* ======================================================= */}
          {/* COLONNE DE GAUCHE : CONTENU TEXTE PRINCIPAL             */}
          {/* ======================================================= */}
          <div className="xl:col-span-7 relative">
            {/* Badge disponibilité */}
            <div className="inline-flex items-center mb-6 sm:mb-7">
              <span className="hero-availability-pill animate-pulse-slow">
                <span className="hero-availability-dot animate-pulse-ring inline-flex" />
                <span className="relative">Disponible pour de nouveaux projets</span>
              </span>
            </div>

            {/* H1 — Titre principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-5 sm:mb-6">
              Développez vos{' '}
              <span className="hero-gradient-text font-black">apps web</span>
              .<br className="hidden sm:block" />
              <span className="hero-gradient-text font-black italic">Automatisez.</span>{' '}
              Multipliez
              <br className="hidden sm:block" />
              votre impact.
            </h1>

            {/* Paragraphe d'accroche */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-6 sm:mb-7">
              <span className="font-semibold text-slate-200">Oussama El Jounaidi</span> —{' '}
              <span className="text-slate-300">
                Développeur Web Full-Stack, Spécialiste Automatisation / IA & Créateur Digital
              </span>{' '}
              basé à{' '}
              <span className="inline-flex items-center gap-1 text-slate-300">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                Casablanca, Maroc
              </span>
              .<br className="hidden sm:block" />
              Je combine{' '}
              <span className="text-white font-medium">
                applications web sur-mesure
              </span>{' '}
              (React, Laravel, WordPress/Elementor),{' '}
              <span className="text-white font-medium">
                automatisation de workflows
              </span>{' '}
              (n8n, Python, IA) et{' '}
              <span className="text-white font-medium">
                création digitale
              </span>{' '}
              (Figma, Canva, CapCut) pour donner vie à vos projets de A à Z avec cohérence et rapidité.
            </p>

            {/* ============== TECH STACK — 3 GROUPES ============== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-9 sm:mb-10 w-full">
              {techGroups.map((group) => {
                const Icon = group.icon
                return (
                  <div key={group.name} className="tech-group group">
                    {/* Header groupe */}
                    <div className="tech-group-header">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/5 ${group.color}`}>
                        <Icon className="w-3.5 h-3.5" strokeWidth={2.1} />
                      </span>
                      <span className={`inline-flex items-center gap-1.5 font-extrabold tracking-[0.2em]`}>
                        <span className={`tech-group-dot ${group.color} bg-current`} />
                        <span className="bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-current via-slate-300 to-slate-400"
                              style={{ backgroundImage: `linear-gradient(90deg, ${group.color.includes('cyan') ? '#38bdf8' : group.color.includes('emerald') ? '#10b981' : '#e03e9b'}, #cbd5e1)` }}>
                          {group.name}
                        </span>
                      </span>
                    </div>
                    {/* Pills */}
                    <div className="tech-group-body">
                      {group.items.map((t) => {
                        const TI = t.icon
                        return (
                          <span
                            key={t.label}
                            className={`tech-pill tech-pill-${t.variant}`}
                            title={t.note}
                          >
                            <TI className="w-[15px] h-[15px] -translate-y-[0.5px]" strokeWidth={2.1} />
                            <span className="tracking-tight">{t.label}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-11 sm:mb-12">
              <a
                href="#projets"
                className="group btn-primary w-full sm:w-auto relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 shimmer-line opacity-70" />
                <span className="relative flex items-center gap-2">
                  Voir les projets
                  <ArrowRight className="w-[18px] h-[18px] transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="/public/OUSSAMA_EL_JOUNAIDI_(2).pdf"
                download="/OUSSAMA_EL_JOUNAIDI_(2).pdf"
                className="group btn-secondary w-full sm:w-auto relative"
              >
                <Download className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-y-[2px]" />
                Télécharger CV
                <span className="sr-only">(téléchargement direct)</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 sm:gap-10 w-full max-w-xl border-t border-white/5 pt-6 sm:pt-7">
              {stats.map((s) => (
                <div key={s.v} className="flex flex-col gap-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">
                    {s.k}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 leading-snug">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================= */}
          {/* COLONNE DE DROITE : VISUEL CODE + WORKFLOW (desktop)  */}
          {/* ======================================================= */}
          <div className="xl:col-span-5 hidden xl:block relative">
            <div className="relative z-10 animate-float">
              <HeroVisualCard />
            </div>

            {/* Carte KPI flottante — Workflow */}
            <div
              className="absolute -left-10 bottom-8 w-60 z-20 animate-float-slow"
              style={{ animationDelay: '-2.5s' }}
            >
              <div className="hero-visual-card rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="relative w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))', border: '1px solid rgba(16,185,129,0.35)' }}
                  >
                    <Workflow className="w-[18px] h-[18px] text-emerald-400" strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-400/90">
                      Workflow
                    </span>
                    <span className="text-xs text-slate-400">Auto · Synthèse IA</span>
                  </div>
                </div>
                <div className="flex items-end justify-between mb-1.5">
                  <div>
                    <div className="text-xl font-extrabold text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                      97%
                    </div>
                    <div className="text-[10px] text-slate-500 -mt-0.5">gain de temps</div>
                  </div>
                  <div className="flex items-end gap-0.5 h-9">
                    {[30, 45, 38, 62, 55, 74, 92].map((h, i) => (
                      <span
                        key={i}
                        className="w-2 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: 'linear-gradient(180deg, #34d399, #10b981 60%, #059669)',
                          opacity: 0.4 + i * 0.09,
                          boxShadow: '0 0 8px rgba(16,185,129,0.4)',
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-0.5 rounded-full mt-2 overflow-hidden bg-white/5">
                  <div
                    className="h-full rounded-full shimmer-line animate-shimmer"
                    style={{ width: '82%', background: 'linear-gradient(90deg, #10b981, #6ee7b7)' }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-slate-500">
                  <span>4 workflows actifs</span>
                  <span className="text-emerald-400">+18%</span>
                </div>
              </div>
            </div>

            {/* Carte flottante : Localisation */}
            <div
              className="absolute -right-6 top-10 w-52 z-20 animate-float"
              style={{ animationDelay: '-1.5s' }}
            >
              <div className="hero-visual-card rounded-2xl p-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg flex items-center justify-center bg-accent-cyan/10 border border-accent-cyan/30">
                    <MapPin className="w-4 h-4 text-accent-cyan" strokeWidth={2.3} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-bold text-white">Casablanca</span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse-slow" />
                      Maroc · GMT+1 · Remote OK
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Halo décoratif derrière */}
            <div
              className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] opacity-70 blur-2xl"
              style={{ background: 'conic-gradient(from 120deg, rgba(56,189,248,0.25), rgba(37,99,235,0.18), rgba(56,189,248,0.25))' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SOUS-COMPOSANT : Terminal + Mini Workflow n8n
   ============================================================ */
function HeroVisualCard() {
  return (
    <div className="hero-visual-card rounded-[1.75rem] w-full">
      {/* Barre fenêtre macOS */}
      <div className="terminal-bar">
        <div className="terminal-traffic">
          <span style={{ background: '#ff5f57', boxShadow: '0 0 10px rgba(255,95,87,0.5)' }} />
          <span style={{ background: '#febc2e', boxShadow: '0 0 10px rgba(254,188,46,0.5)' }} />
          <span style={{ background: '#28c840', boxShadow: '0 0 10px rgba(40,200,64,0.5)' }} />
        </div>
        <div className="flex-1 flex items-center justify-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-slate-500" strokeWidth={2.1} />
          <span className="text-[11px] text-slate-500 font-mono tracking-tight">
            oussama@dev — ~/portfolio/stack.tsx
          </span>
        </div>
        <span className="text-[10px] text-slate-600 font-mono">zsh</span>
      </div>

      {/* Code abstrait */}
      <div className="relative px-5 sm:px-6 py-5 font-mono text-[12.5px] leading-[1.75]">
        <div className="absolute inset-0 opacity-50" aria-hidden="true">
          <div
            className="h-full w-full hero-grid-bg"
            style={{
              backgroundSize: '100% 28px',
              maskImage: 'linear-gradient(180deg, #000, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(180deg, #000, transparent 90%)',
            }}
          />
        </div>

        <div className="relative space-y-0.5">
          <CodeLine n={1} dots>
            <span className="text-slate-500">{'// '}</span>
            <span className="text-accent-cyan">@file</span>
            <span className="text-slate-400"> Oussama.dev · Full-Stack · Auto · Creator</span>
          </CodeLine>
          <CodeLine n={2} dots>
            <span className="text-fuchsia-400/80">import</span>
            <span className="text-slate-200"> {'{ '}</span>
            <span className="text-sky-300">React</span>
            <span className="text-slate-400">,</span>
            <span className="text-orange-300"> Laravel</span>
            <span className="text-slate-400">,</span>
            <span className="text-indigo-300"> WordPress</span>
            <span className="text-slate-200"> {'}'} </span>
            <span className="text-fuchsia-400/80">from</span>
            <span className="text-emerald-300/80"> 'web-core'</span>
            <span className="text-slate-500">;</span>
          </CodeLine>
          <CodeLine n={3} dots>
            <span className="text-fuchsia-400/80">import</span>
            <span className="text-slate-200"> {'{ '}</span>
            <span className="text-amber-300">n8n</span>
            <span className="text-slate-400">,</span>
            <span className="text-blue-300"> Python</span>
            <span className="text-slate-400">,</span>
            <span className="text-emerald-300"> AI_APIs</span>
            <span className="text-slate-200"> {'}'} </span>
            <span className="text-fuchsia-400/80">from</span>
            <span className="text-emerald-300/80"> 'automation-suite'</span>
            <span className="text-slate-500">;</span>
          </CodeLine>
          <CodeLine n={4} dots>
            <span className="text-fuchsia-400/80">import</span>
            <span className="text-slate-200"> {'{ '}</span>
            <span className="text-rose-300">Figma</span>
            <span className="text-slate-400">,</span>
            <span className="text-teal-300"> Canva</span>
            <span className="text-slate-400">,</span>
            <span className="text-cyan-300"> CapCut</span>
            <span className="text-slate-200"> {'}'} </span>
            <span className="text-fuchsia-400/80">from</span>
            <span className="text-emerald-300/80"> 'design-kit'</span>
            <span className="text-slate-500">;</span>
          </CodeLine>
          <CodeLine n={5} dots />
          <CodeLine n={6} dots active>
            <span className="text-fuchsia-400/80">export const </span>
            <span className="text-sky-300 font-bold">Oussama</span>
            <span className="text-slate-200">: </span>
            <span className="text-yellow-300/90">FullStackCreator</span>
            <span className="text-slate-200"> = {'{'}</span>
          </CodeLine>
          <CodeLine n={7} dots>
            <span className="text-slate-300 pl-4">role</span>
            <span className="text-slate-500">:</span>
            <span className="text-emerald-300/90 pl-1">
              'Full-Stack · Automation · AI · Digital Creator'
            </span>
            <span className="text-slate-500">,</span>
          </CodeLine>
          <CodeLine n={8} dots>
            <span className="text-slate-300 pl-4">location</span>
            <span className="text-slate-500">:</span>
            <span className="text-emerald-300/90 pl-1">'Casablanca, MA'</span>
            <span className="text-slate-500">,</span>
          </CodeLine>
          <CodeLine n={9} dots>
            <span className="text-slate-300 pl-4">deliver</span>
            <span className="text-slate-500">:</span>
            <span className="text-slate-200 pl-1"> (</span>
            <span className="text-orange-300">project</span>
            <span className="text-slate-200">) ={'>'} </span>
            <span className="text-slate-200">{'{'}</span>
          </CodeLine>
          <CodeLine n={10} dots>
            <span className="text-slate-300 pl-8">return </span>
            <span className="text-slate-200">pipe(</span>
          </CodeLine>
          <CodeLine n={11} dots>
            <span className="text-sky-300 font-bold pl-12">Design</span>
            <span className="text-slate-500">(project),</span>
            <span className="text-slate-400"> // Figma · Canva</span>
          </CodeLine>
          <CodeLine n={12} dots>
            <span className="text-accent-cyan font-bold pl-12">Build</span>
            <span className="text-slate-500">(project),</span>
            <span className="text-slate-400">   // React · Laravel · WP</span>
          </CodeLine>
          <CodeLine n={13} dots>
            <span className="text-emerald-300 font-semibold pl-12">Automate</span>
            <span className="text-slate-500">(project),</span>
            <span className="text-slate-400">// n8n · Python · AI</span>
          </CodeLine>
          <CodeLine n={14} dots>
            <span className="text-slate-200 pl-8">)</span>
            <span className="text-slate-500">;</span>
            <span className="ml-2 inline-flex items-center gap-1 align-middle">
              <span className="w-2 h-3.5 bg-accent-cyan inline-block animate-blink" />
            </span>
          </CodeLine>
        </div>
      </div>

      {/* Workflow n8n */}
      <div className="relative px-5 sm:px-6 pb-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
        <div className="flex items-center gap-2 mb-3.5">
          <GitBranch className="w-3.5 h-3.5 text-accent-cyan" strokeWidth={2.2} />
          <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-slate-400">
            Pipeline n8n · Design → Build → Auto
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-accent-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse-slow" />
            En ligne
          </span>
        </div>

        <div className="relative grid grid-cols-5 gap-1 items-center">
          <WFNode accent="figma"     icon={Palette}      title="Design"   subtitle="Figma · Canva" className="col-span-1" />
          <WFArrow color="figma" />
          <WFNode accent="blue"      icon={Code2}        title="Build"    subtitle="React · Laravel"  className="col-span-1" />
          <WFArrow color="blue" />
          <WFNode accent="emerald"   icon={Workflow}     title="AI · Auto" subtitle="n8n · Gemini" highlight className="col-span-1" />
          <WFArrow color="emerald" />
          <WFNode accent="capcut"    icon={Film}         title="Launch"   subtitle="CapCut · Media" className="col-span-1" />
        </div>
      </div>
    </div>
  )
}

/* Ligne de code */
function CodeLine({ n, children, active, dots }) {
  return (
    <div
      className={`group flex items-stretch rounded-md transition-colors ${
        active ? 'bg-accent-cyan/5 -mx-1 px-1' : 'hover:bg-white/[0.03] -mx-1 px-1'
      }`}
    >
      <div
        className={`w-7 shrink-0 pr-3 flex items-center justify-end select-none ${
          active ? 'text-accent-cyan/80' : 'text-slate-600'
        } font-mono text-[10.5px] tabular-nums`}
        aria-hidden="true"
      >
        {n}
      </div>
      <div className={`flex-1 min-w-0 ${dots ? '' : 'opacity-70'}`}>
        {children ?? <span className="opacity-0">·</span>}
      </div>
    </div>
  )
}

/* Nœud workflow */
function WFNode({ accent = 'cyan', icon: Icon, title, subtitle, highlight, className = '' }) {
  const palette = {
    cyan:    { bg: 'rgba(56,189,248,0.10)',  bd: 'rgba(56,189,248,0.35)',  txt: '#7dd3fc', ic: '#38bdf8', glow: '0 0 18px rgba(56,189,248,0.35)' },
    blue:    { bg: 'rgba(37,99,235,0.10)',  bd: 'rgba(37,99,235,0.35)',  txt: '#93c5fd', ic: '#60a5fa', glow: '0 0 18px rgba(37,99,235,0.35)' },
    emerald: { bg: 'rgba(16,185,129,0.12)', bd: 'rgba(16,185,129,0.42)', txt: '#6ee7b7', ic: '#34d399', glow: '0 0 22px rgba(16,185,129,0.5)'  },
    laravel: { bg: 'rgba(245,82,71,0.10)',  bd: 'rgba(245,82,71,0.35)',  txt: '#fca5a5', ic: '#fb7185', glow: '0 0 18px rgba(245,82,71,0.35)' },
    wordpress:{bg: 'rgba(56,88,233,0.10)',  bd: 'rgba(56,88,233,0.35)',  txt: '#a5b4fc', ic: '#818cf8', glow: '0 0 18px rgba(56,88,233,0.35)' },
    figma:   { bg: 'linear-gradient(135deg, rgba(242,78,30,0.08), rgba(162,89,255,0.06), rgba(26,188,254,0.06))',
               bd: 'rgba(242,78,30,0.28)',  txt: '#fda4af', ic: '#f472b6', glow: '0 0 18px rgba(242,78,30,0.3)' },
    canva:   { bg: 'rgba(0,196,204,0.08)',  bd: 'rgba(139,92,246,0.3)',  txt: '#67e8f9', ic: '#22d3ee', glow: '0 0 18px rgba(0,196,204,0.35)' },
    capcut:  { bg: 'rgba(0,240,255,0.07)',  bd: 'rgba(254,44,85,0.3)',   txt: '#a5f3fc', ic: '#67e8f9', glow: '0 0 18px rgba(0,240,255,0.3)' },
  }[accent]

  return (
    <div
      className={`wf-node group ${highlight ? 'py-3' : ''} ${className}`}
      style={{ background: palette.bg, borderColor: palette.bd, color: palette.txt, boxShadow: palette.glow }}
    >
      <div
        className="relative shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
        style={{ background: `${palette.ic}1a`, border: `1px solid ${palette.bd}` }}
      >
        <Icon
          className={`${highlight ? 'w-4 h-4' : 'w-3.5 h-3.5'}`}
          style={{ color: palette.ic }}
          strokeWidth={2.2}
        />
      </div>
      <div className="flex-1 min-w-0 leading-tight">
        <div className={`font-extrabold tracking-tight text-[11px] ${highlight ? 'text-[12px]' : ''} whitespace-nowrap truncate`}>
          {title}
        </div>
        <div className="text-[9.5px] opacity-80 whitespace-nowrap truncate">{subtitle}</div>
      </div>
      <div className="wf-node-pin-in -left-[7px] top-1/2 -translate-y-1/2" style={{ background: palette.ic }} />
      <div className="wf-node-pin-out -right-[7px] top-1/2 -translate-y-1/2" style={{ background: palette.ic }} />
    </div>
  )
}

/* Connecteur entre nœuds */
function WFArrow({ color = 'cyan' }) {
  const c = {
    cyan: '#38bdf8', blue: '#60a5fa', emerald: '#34d399', laravel: '#fb7185',
    wordpress: '#818cf8', elementor: '#f472b6', n8n: '#fb923c', ai: '#34d399',
    figma: '#a78bfa', canva: '#22d3ee', capcut: '#67e8f9',
  }[color]
  return (
    <div className="col-span-0 hidden sm:block relative h-0.5 -mx-1 -my-1 w-auto">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${c}80, ${c}, ${c}80)`,
          boxShadow: `0 0 12px ${c}80`,
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        style={{
          width: 0, height: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft: `5px solid ${c}`,
          filter: `drop-shadow(0 0 4px ${c})`,
        }}
      />
    </div>
  )
}
