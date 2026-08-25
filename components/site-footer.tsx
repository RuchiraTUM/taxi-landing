'use client'

import { Car, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import type { LegalTopic } from './legal-modal'

const legalLinks: { label: string; topic: LegalTopic }[] = [
  { label: 'Terms of Service', topic: 'terms' },
  { label: 'Privacy Policy', topic: 'privacy' },
  { label: 'SLA', topic: 'sla' },
  { label: 'AI Safety & Security', topic: 'safety' },
]

export function SiteFooter({
  onRequestPilot,
  onOpenLegal,
}: {
  onRequestPilot: () => void
  onOpenLegal: (topic: LegalTopic) => void
}) {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Banner CTA */}
        <div className="flex flex-col items-start gap-6 border-b border-dark-border py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
              Stop guessing. Start predicting.
            </h2>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-dark-foreground/60">
              Claim your 14-day zero-risk trial. Ingest historical trip logs in
              shadow mode seamlessly.
            </p>
          </div>
          <button
            onClick={onRequestPilot}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Get Your Fleet In Sync
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Link grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Car className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight">FleetMind</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-foreground/55">
              AI-powered dispatch optimization for taxi and mobility fleets. Do
              more with the same fleet.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-foreground/90">
              Trust &amp; Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.topic}>
                  <button
                    onClick={() => onOpenLegal(link.topic)}
                    className="text-sm text-dark-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-foreground/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-dark-foreground/60">
              <li>Pilot Program</li>
              <li>How It Works</li>
              <li>Fleet Case Studies</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-dark-foreground/60">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:pilots@fleetmind.ai" className="hover:text-accent">
                  pilots@fleetmind.ai
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>+49 30 5678 9012</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>Friedrichstraße 88, 10117 Berlin, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-dark-border py-6 text-xs text-dark-foreground/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} FleetMind. All rights reserved.</p>
          <p className="font-mono tracking-wide">
            No Vendor Lock-In • SOC-2 Type II Certified • GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
