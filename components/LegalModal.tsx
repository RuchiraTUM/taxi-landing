/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

export type LegalDocType = 'terms' | 'privacy' | 'sla' | 'telemetry_security';

interface LegalModalProps {
  isOpen: boolean;
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const contentMap: Record<LegalDocType, { title: string; subtitle: string; icon: any; body: React.ReactNode }> = {
    terms: {
      title: "Terms of Service",
      subtitle: "FleetMind Neural Dispatch SaaS Agreement",
      icon: FileText,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Service Scope:</strong> FleetMind provides autonomous machine learning dispatch optimization, demand forecasting, and predictive telemetry analytics for taxi and mobility operators.
          </p>
          <p>
            <strong>2. Pilot Guarantee & SLA:</strong> During the 14-day zero-risk Proof of Concept (POC), FleetMind ingests historical trip logs in shadow mode. No changes to existing dispatch operations occur without explicit operator confirmation.
          </p>
          <p>
            <strong>3. Algorithmic Transparency:</strong> All multi-parameter scoring weights (proximity, traffic, SLA, battery SoC, driver rest) remain configurable by licensed fleet managers with full manual override capabilities at all times.
          </p>
          <p>
            <strong>4. Data Ownership:</strong> The customer retains 100% ownership of all raw ride logs, passenger fares, and driver identity records.
          </p>
        </div>
      )
    },
    privacy: {
      title: "Privacy & GDPR Policy",
      subtitle: "Enterprise-grade data protection & driver privacy standards",
      icon: Lock,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Driver Privacy:</strong> GPS breadcrumbs and driver metrics are anonymized with unique pseudonymous hash identifiers. No off-duty location data is collected.
          </p>
          <p>
            <strong>2. Passenger Data Protection:</strong> Customer phone numbers and addresses are tokenized to preserve GDPR and CCPA transport privacy compliance.
          </p>
          <p>
            <strong>3. Zero Third-Party Monetization:</strong> Your fleet's ride patterns, pricing rules, and corporate client lists are never sold, rented, or shared with competitors.
          </p>
        </div>
      )
    },
    sla: {
      title: "Service Level Agreement (SLA)",
      subtitle: "99.99% Neural Core Uptime & Real-Time Latency Guarantees",
      icon: ShieldCheck,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Matching Latency:</strong> FleetMind guarantees sub-80 millisecond dynamic matching latency under peak enterprise concurrency.
          </p>
          <p>
            <strong>2. High Availability:</strong> Multi-region redundant server clusters with instant fallback to standard proximity rules.
          </p>
          <p>
            <strong>3. Support:</strong> Enterprise tier includes dedicated solutions architects, emergency dispatch hotline access, and quarterly model retraining sessions.
          </p>
        </div>
      )
    },
    telemetry_security: {
      title: "AI Safety & Telemetry Isolation",
      subtitle: "SOC-2 Type II Certified Cloud Infrastructure",
      icon: ShieldCheck,
      body: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>1. Dedicated Tenant Model:</strong> Your custom AI brain is partitioned in an isolated compute container. Your historical trends never leak into other fleet models.
          </p>
          <p>
            <strong>2. Encryption:</strong> All API payloads, live vehicle telematics, and historical CSV imports are encrypted using TLS 1.3 in transit and AES-256 at rest.
          </p>
        </div>
      )
    }
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{current.title}</h3>
              <p className="text-xs text-slate-500">{current.subtitle}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            {current.body}
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
