'use client'

import { ArrowRight, TrendingUp, Zap, Gauge, ShieldCheck } from 'lucide-react'
import { DispatchGrid } from '@/components/dispatch-grid'

const trustStats = [
  { value: '-38%', label: 'Leer KM' },
  { value: '95%', label: 'Auto-Dispatch' },
  { value: 'Fast', label: 'Integration' },
  { value: '7-Day', label: 'Trial Mode' },
]

const benchmarks = [
  {
    icon: Gauge,
    title: 'Empty Deadhead Cut',
    value: '-38%',
    note: 'Fewer empty return kilometers',
  },
  {
    icon: Zap,
    title: 'Automated Match Speed',
    value: 'Instant',
    note: 'Sub-80ms trip matching',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    value: '+30% Yield',
    note: 'More trips per active car',
  },
]

export function Hero({ onRequestPilot }: { onRequestPilot: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <DispatchGrid />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_0%,rgba(250,204,21,0.10),transparent_70%)]" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-20">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-sm">
            <span className="h-2 w-2 rounded-full bg-positive animate-pulse-dot" aria-hidden="true" />
            Move your cars where the next trip WILL be.
          </span>

          <h1 className="mt-6 text-pretty text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Do More With The{' '}
            <span className="border-b-4 border-accent pb-1">Same Taxi Fleet.</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-xl leading-relaxed text-ink-soft">
            Run a business backed by your own company past trip data instead of
            gut feelings.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onRequestPilot}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-base font-semibold text-accent-foreground transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              Join Us to Do More With the Same Taxi Car
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="#paradigm"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-base font-semibold text-ink transition-colors hover:bg-muted/10"
            >
              See The Paradigm Shift
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="bg-surface px-4 py-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold tracking-tight text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: benchmark card */}
        <div className="animate-fade-up lg:justify-self-end" style={{ animationDelay: '80ms' }}>
          <div className="w-full max-w-md rounded-2xl border border-dark-border bg-dark p-6 shadow-2xl shadow-dark/20">
            <div className="flex items-center justify-between border-b border-dark-border pb-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-positive animate-radar-ping" />
                  <span className="h-2 w-2 rounded-full bg-positive" />
                </span>
                <span className="text-base font-semibold text-dark-foreground">
                  Live Optimization Benchmark
                </span>
              </div>
              <span className="relative flex h-7 w-7 items-center justify-center" aria-hidden="true">
                <span className="absolute inset-0 rounded-full border border-dark-border" />
                <span className="absolute inset-0 rounded-full animate-radar-sweep bg-[conic-gradient(from_0deg,transparent_0deg,var(--accent)_60deg,transparent_120deg)] opacity-70" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {benchmarks.map((b) => (
                <div
                  key={b.title}
                  className="flex items-center gap-4 rounded-xl border border-dark-border bg-white/[0.03] px-4 py-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <b.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-medium text-dark-foreground/80">
                      {b.title}
                    </p>
                    <p className="text-sm text-dark-foreground/50">{b.note}</p>
                  </div>
                  <span className="font-mono text-lg font-bold text-positive">
                    {b.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2 rounded-lg bg-white/[0.03] px-4 py-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-positive" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-dark-foreground/60">
                <span className="font-semibold text-dark-foreground/90">Zero Risk:</span>{' '}
                Connects to your past trip logs in shadow mode.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
