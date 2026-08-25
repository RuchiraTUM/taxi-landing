import { Database, Radar, Cpu, Check, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: Database,
    step: '01',
    title: 'Ingest & Learn',
    body: 'We train on your 7-day trip logs to identify patterns invisible to the human eye.',
  },
  {
    icon: Radar,
    step: '02',
    title: 'Forecast & Pre-Position',
    body: 'Predict hotspots 30 minutes before they happen. Know where the next 50 trips are coming from before the phone even rings.',
  },
  {
    icon: Cpu,
    step: '03',
    title: 'Live Dispatch Neural Match',
    body: 'Every trip is matched in milliseconds across dozens of dynamic parameters.',
  },
]

const comparison = [
  {
    label: 'Matching Logic',
    legacy:
      'Manual intuition, clogged call queues, and naive straight-line radius circles',
    fleetmind:
      'Neural AI matching in <80ms across dozens of dynamic live parameters',
  },
  {
    label: 'Leer KM (Deadhead)',
    legacy: 'Cars cruise back empty, burning fuel and vehicle life',
    fleetmind: 'Predictive pre-positioning & automated return trip chaining',
  },
  {
    label: 'Hotspot Reaction',
    legacy:
      'Reactive firefighting 25 minutes after passenger lines overflow',
    fleetmind:
      'Hotspots predicted 30 minutes ahead; cars staged before calls begin',
  },
  {
    label: 'Dispatcher Role',
    legacy:
      'High-stress call volume chaos, rapid burnout, and constant manual triage',
    fleetmind:
      '95% auto-dispatched; dispatchers supervise high-yield corporate accounts',
  },
]

export function Solution() {
  return (
    <section id="paradigm" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="max-w-3xl">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">
          The Paradigm Shift
        </span>
        <h2 className="mt-3 text-pretty text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          From reactive guesswork to predictive dispatch.
        </h2>
      </div>

      {/* Pipeline */}
      <div className="relative mt-12">
        {/* Route connector with a traveling vehicle (desktop) */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[46px] hidden md:block"
          aria-hidden="true"
        >
          <div className="border-t border-dashed border-accent/40" />
          <span className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-pipeline-move rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent)]" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 120}
              className="group relative flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-2xl font-bold text-border">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="mt-16">
        <h3 className="text-center text-xl font-bold tracking-tight text-ink sm:text-2xl">
          Legacy Dispatch vs. FleetMind AI Brain
        </h3>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1.3fr]">
            {/* Header row */}
            <div className="hidden bg-dark px-5 py-4 md:block" />
            <div className="hidden bg-dark px-5 py-4 md:block">
              <span className="text-sm font-semibold text-dark-foreground/60">
                Legacy Dispatch
              </span>
            </div>
            <div className="hidden bg-dark px-5 py-4 md:block">
              <span className="text-sm font-semibold text-accent">
                FleetMind AI Brain
              </span>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.label}
                className={`contents`}
              >
                <div
                  className={`bg-surface px-5 py-4 text-sm font-semibold text-ink ${
                    i > 0 ? 'md:border-t md:border-border' : ''
                  }`}
                >
                  {row.label}
                </div>
                <div
                  className={`flex items-start gap-2.5 bg-surface px-5 py-4 text-sm leading-relaxed text-ink-soft ${
                    i > 0 ? 'md:border-t md:border-border' : ''
                  }`}
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <span>{row.legacy}</span>
                </div>
                <div
                  className={`flex items-start gap-2.5 bg-positive-soft px-5 py-4 text-sm leading-relaxed text-ink ${
                    i > 0 ? 'md:border-t md:border-border' : 'border-t border-border md:border-t-0'
                  }`}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-positive" aria-hidden="true" />
                  <span>{row.fleetmind}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
