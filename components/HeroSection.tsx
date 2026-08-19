/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, CheckCircle2, Car, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenPilotModal: () => void;
  onScrollTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPilotModal, onScrollTo }) => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: The Hook */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Micro-Hook Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-950 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Move your cars where the next trip WILL be.</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Do More With The <br />
              <span className="text-slate-950 border-b-4 border-amber-400">Same Fleet.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-xl">
              Run a business backed by solid data instead of gut feelings.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onOpenPilotModal}
                className="px-8 py-4 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Us to Do More With the Same Car</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo('problem')}
                className="px-6 py-4 text-sm font-bold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all flex items-center justify-center cursor-pointer"
              >
                <span>See The Paradigm Shift</span>
              </button>
            </div>

            {/* Trust Grid (4 elements) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-center">
                <div className="text-lg font-mono font-extrabold text-slate-950">-38%</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Leer KM</div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-center">
                <div className="text-lg font-mono font-extrabold text-amber-600">95%</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Auto-Dispatch</div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-center">
                <div className="text-lg font-mono font-extrabold text-slate-950">Fast</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Integration</div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-center">
                <div className="text-lg font-mono font-extrabold text-emerald-600">7-Day</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Trial Mode</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Benchmark Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-amber-400 flex items-center justify-center font-bold">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">FleetMind Intelligence Engine</h3>
                  <p className="text-xs text-slate-500">Live Optimization Benchmark</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                Online
              </span>
            </div>

            <div className="space-y-3">
              
              <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Empty Deadhead Cut</div>
                  <div className="text-sm font-bold text-slate-900">Dropped from 38% to 14%</div>
                </div>
                <span className="text-xs font-mono font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                  -38% Fuel
                </span>
              </div>

              <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Neural Match Speed</div>
                  <div className="text-sm font-bold text-slate-900">Multi-parameter in &lt;80ms</div>
                </div>
                <span className="text-xs font-mono font-extrabold text-slate-900 bg-slate-100 px-2 py-1 rounded">
                  Instant
                </span>
              </div>

              <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Revenue Growth</div>
                  <div className="text-sm font-bold text-slate-900">+4 to 6 more rides per car/day</div>
                </div>
                <span className="text-xs font-mono font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                  +30% Yield
                </span>
              </div>

            </div>

            <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium">
              <strong>Zero Risk:</strong> Connects to your past trip logs in shadow mode. No driver re-training or new screens.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
