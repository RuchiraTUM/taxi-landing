'use client'

import { X } from 'lucide-react'

export type LegalTopic = 'terms' | 'privacy' | 'sla' | 'safety'

const content: Record<LegalTopic, { title: string; body: string[] }> = {
  terms: {
    title: 'Terms of Service',
    body: [
      'These Terms govern your use of the FleetMind platform during the pilot and any subsequent subscription. By requesting a pilot you agree to evaluate the service in good faith.',
      'FleetMind operates in shadow mode against your historical trip logs and never assumes control of live dispatch without explicit written authorization from your operations team.',
      'Either party may terminate the pilot at any time. There is no vendor lock-in and no obligation to continue beyond the trial period.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    body: [
      'We process trip log data solely to generate dispatch forecasts and optimization insights for your fleet. Data is never sold or shared with third parties.',
      'All personally identifiable passenger information is anonymized on ingestion. We retain only the aggregated patterns required to run predictions.',
      'You may request deletion of your data at any time, and it is permanently removed within 30 days of a written request. FleetMind is GDPR compliant.',
    ],
  },
  sla: {
    title: 'Service Level Agreement',
    body: [
      'FleetMind targets 99.9% platform uptime for production deployments, measured monthly and excluding scheduled maintenance windows.',
      'Neural trip matching is delivered in under 80 milliseconds at the 95th percentile under standard fleet load.',
      'Support responses are provided within one business day during the pilot, and within four business hours for production customers.',
    ],
  },
  safety: {
    title: 'AI Safety & Security',
    body: [
      'FleetMind is SOC-2 Type II certified. All data is encrypted in transit and at rest using industry-standard protocols.',
      'Our forecasting models are continuously validated against realized outcomes. Dispatchers retain full override authority and supervise exception handling at all times.',
      'The system augments human dispatchers rather than replacing oversight, ensuring accountable decisions across every trip assignment.',
    ],
  },
}

export function LegalModal({
  topic,
  onClose,
}: {
  topic: LegalTopic | null
  onClose: () => void
}) {
  if (!topic) return null
  const { title, body } = content[topic]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-dark/60 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={onClose}
    >
      <div
        className="animate-fade-up w-full max-w-lg rounded-2xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 id="legal-title" className="text-xl font-bold tracking-tight text-ink">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg p-1.5 text-muted transition-colors hover:bg-muted/10 hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="space-y-4 p-6">
          {body.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
