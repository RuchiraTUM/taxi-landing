/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Database, 
  Compass, 
  Zap, 
  Check, 
  X, 
  ArrowRight, 
  Cpu,
  Layers
} from 'lucide-react';

interface SolutionSectionProps {
  onOpenPilotModal: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenPilotModal }) => {
  const steps = [
    {
      stepNumber: '01',
      icon: Database,
      title: 'Ingest & Learn',
      desc: 'We train on your 7-day trip logs to identify patterns invisible to the human eye.'
    },
    {
      stepNumber: '02',
      icon: Compass,
      title: 'Forecast & Pre-Position',
      desc: 'Predict hotspots 30 minutes before they happen. Know where the next 50 trips are coming from before the phone even rings.'
    },
    {
      stepNumber: '03',
      icon: Zap,
      title: 'Live Dispatch Neural Match',
      desc: 'Every trip is matched in milliseconds across dozens of dynamic parameters, factoring in driver behavior and traffic latency.'
    }
  ];

  const comparisons = [
    {
      dimension: 'Matching Logic',
      legacy: 'Manual intuition, clogged call queues, and naive straight-line radius circles',
      fleetmind: 'Neural AI matching in <80ms across dozens of dynamic live parameters'
    },
    {
      dimension: 'Leer KM (Deadhead)',
      legacy: 'Cars cruise back empty, burning fuel and vehicle life',
      fleetmind: 'Predictive pre-positioning & automated return trip chaining'
    },
    {
      dimension: 'Hotspot Reaction',
      legacy: 'Reactive firefighting 25 minutes after passenger lines overflow',
      fleetmind: 'Hotspots predicted 30 minutes ahead; cars staged before calls begin'
    },
    {
      dimension: 'Dispatcher Role',
      legacy: 'High-stress call volume chaos, rapid burnout, and constant manual triage',
      fleetmind: '95% auto-dispatched; dispatchers supervise high-yield corporate accounts'
    }
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* The Solution: The Paradigm Shift */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-amber-600" />
              <span>The Paradigm Shift</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              From Reactive Guesswork to a <br className="hidden sm:block" />
              <span className="text-slate-950 border-b-4 border-amber-400">Profit-Engineered Fleet.</span>
            </h2>
          </div>

          {/* 3 Step Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.stepNumber}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4 relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-slate-400">
                      STEP {item.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* The Proof & Contrast: Comparison Table */}
        <div id="comparison" className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>The Proof &amp; Contrast</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Legacy Dispatch vs. FleetMind AI Brain
            </h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-900 uppercase tracking-wider">
                    <th className="py-4 px-6 w-1/4">Operational Dimension</th>
                    <th className="py-4 px-6 text-slate-500 w-3/8">Legacy Dispatch</th>
                    <th className="py-4 px-6 text-slate-950 bg-amber-50/70 w-3/8">FleetMind AI Brain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-950 whitespace-nowrap">
                        {row.dimension}
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{row.legacy}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-bold text-slate-950 bg-amber-50/30">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.fleetmind}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Direct CTA Button */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenPilotModal}
              className="px-8 py-4 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Join Us to Do More With the Same Car</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
