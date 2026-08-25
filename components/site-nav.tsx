'use client'

import { Car } from 'lucide-react'

export function SiteNav({ onRequestPilot }: { onRequestPilot: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark text-accent">
            <Car className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            FleetMind
          </span>
        </a>

        <button
          onClick={onRequestPilot}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Request Pilot
        </button>
      </nav>
    </header>
  )
}
