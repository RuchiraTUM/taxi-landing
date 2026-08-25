import { Fuel, Phone, Radar, TrendingDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const painPoints = [
  {
    icon: Fuel,
    title: 'High Leer KM',
    body: 'Up to 38% empty kilometers on deadhead return trips. Wasting fuel and vehicle life cruising without fares.',
  },
  {
    icon: Phone,
    title: 'Dispatcher Chaos',
    body: 'Manual zone management causes fatigue. Dispatchers should handle exceptions, not chaos.',
    cost: 'Cost: Clogged phone lines, call delays, and dispatcher turnover.',
  },
  {
    icon: Radar,
    title: 'Naive Matching',
    body: 'Straight-line radius circles ignore live traffic and upcoming return rides.',
  },
  {
    icon: TrendingDown,
    title: 'The False Fleet Ceiling',
    body: 'The costly mistake of buying more cars when existing vehicles are underutilized by 40%.',
  },
]

export function Problem() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">
            The Problem
          </span>
          <h2 className="mt-3 text-pretty text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Dispatchers struggle with vehicle-trip matching because they can&apos;t
            see the future.{' '}
            <span className="text-ink-soft">We built the eyes they need.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 90}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-dark text-accent transition-transform duration-300 group-hover:scale-110">
                <point.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {point.body}
              </p>
              {point.cost && (
                <p className="mt-3 border-t border-border pt-3 text-xs font-medium text-muted">
                  {point.cost}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
