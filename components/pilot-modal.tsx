'use client'

import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

const fleetSizes = [
  'Under 25 vehicles',
  '25 – 100 vehicles',
  '100 – 500 vehicles',
  '500+ vehicles',
]

export function PilotModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    onClose()
    // reset after close transition
    setTimeout(() => setSubmitted(false), 200)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-dark/60 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-title"
      onClick={handleClose}
    >
      <div
        className="animate-fade-up w-full max-w-lg rounded-2xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-border p-6">
          <div>
            <h2 id="pilot-title" className="text-xl font-bold tracking-tight text-ink">
              Request Your Pilot
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              14-Day Zero-Risk Trial • Quick and seamless setup
            </p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close dialog"
            className="rounded-lg p-1.5 text-muted transition-colors hover:bg-muted/10 hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-positive-soft text-positive">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">
              You&apos;re on the list.
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
              Our team will reach out within one business day to schedule your
              shadow-mode ingestion.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Full Name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Jane Fleet"
                />
              </Field>
              <Field id="email" label="Work Email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="jane@company.com"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="phone" label="Phone Number">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="+49 30 0000 0000"
                />
              </Field>
              <Field id="fleet" label="Fleet Size">
                <select id="fleet" name="fleet" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select range
                  </option>
                  {fleetSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field id="city" label="Operating City">
              <input
                id="city"
                name="city"
                type="text"
                required
                className={inputClass}
                placeholder="Berlin"
              />
            </Field>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Claim My Zero-Risk Trial
            </button>
            <p className="text-center text-xs text-muted">
              We connect to your past trip logs in shadow mode. No disruption to
              live operations.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/30'

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  )
}
