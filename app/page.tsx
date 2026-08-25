'use client'

import { useState } from 'react'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Solution } from '@/components/solution'
import { SiteFooter } from '@/components/site-footer'
import { PilotModal } from '@/components/pilot-modal'
import { LegalModal, type LegalTopic } from '@/components/legal-modal'

export default function Page() {
  const [pilotOpen, setPilotOpen] = useState(false)
  const [legalTopic, setLegalTopic] = useState<LegalTopic | null>(null)

  const openPilot = () => setPilotOpen(true)

  return (
    <main className="min-h-screen">
      <SiteNav onRequestPilot={openPilot} />
      <Hero onRequestPilot={openPilot} />
      <Problem />
      <Solution />
      <SiteFooter onRequestPilot={openPilot} onOpenLegal={setLegalTopic} />

      <PilotModal open={pilotOpen} onClose={() => setPilotOpen(false)} />
      <LegalModal topic={legalTopic} onClose={() => setLegalTopic(null)} />
    </main>
  )
}
