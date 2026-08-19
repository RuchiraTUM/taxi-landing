/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Fuel, Phone, Compass, TrendingDown, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: Fuel,
      title: 'High Leer KM',
      desc: 'Up to 38% empty kilometers on deadhead return trips.',
      impact: 'Wasting fuel and vehicle life cruising without fares.'
    },
    {
      icon: Phone,
      title: 'Dispatcher Chaos',
      desc: 'Manual zone management causes fatigue. Dispatchers should handle exceptions, not chaos.',
      impact: 'Clogged phone lines, call delays, and dispatcher turnover.'
    },
    {
      icon: Compass,
      title: 'Naive Matching',
      desc: 'Straight-line radius circles ignore live traffic and upcoming return rides.',
      impact: 'Missing high-value return fares right down the road.'
    },
    {
      icon: TrendingDown,
      title: 'The False Fleet Ceiling',
      desc: 'The costly mistake of buying more cars when existing vehicles are underutilized by 40%.',
      impact: 'Huge capital expenditure on cars that sit idle.'
    }
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header & Core Friction Statement */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>The Agitation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Dispatchers struggle with vehicle-trip matching because they can't see the future. <br className="hidden sm:block" />
            <span className="text-slate-950 border-b-4 border-amber-400">We built the eyes they need.</span>
          </h2>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  <strong className="text-slate-700">Cost: </strong>{item.impact}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
