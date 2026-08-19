/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Car, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenPilotModal: () => void;
  onOpenLegalModal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPilotModal, 
  onOpenLegalModal 
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400">
      
      {/* 5. The Footer: Action Banner */}
      <div className="border-b border-slate-800 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Stop guessing. Start predicting.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-medium">
            Claim your 14-day zero-risk trial. Ingest historical trip logs in shadow mode seamlessly.
          </p>
          <div className="pt-3">
            <button
              onClick={onOpenPilotModal}
              className="px-9 py-4 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Get Your Fleet In Sync</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust, Legal & Contact Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Car className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white">Fleet<span className="text-amber-400">Mind</span></span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The autonomous AI dispatch brain for taxi & mobility fleets. Run a business backed by solid data instead of gut feelings.
            </p>
          </div>

          {/* Trust & Legal (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Trust &amp; Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenLegalModal('terms')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('privacy')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy &amp; GDPR
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('sla')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Service SLA (99.99%)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('telemetry_security')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  AI Safety &amp; Data Security
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Details</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:pilots@fleetmind.ai" className="hover:text-white transition-colors">pilots@fleetmind.ai</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+1 (800) 592-MIND (24/7 Operations Desk)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>500 Howard Street, San Francisco, CA &amp; Berlin Hub</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>&copy; {new Date().getFullYear()} FleetMind Technologies, Inc. All rights reserved.</div>
          <div>No Vendor Lock-In • SOC-2 Type II Certified • GDPR Compliant</div>
        </div>
      </div>

    </footer>
  );
};
