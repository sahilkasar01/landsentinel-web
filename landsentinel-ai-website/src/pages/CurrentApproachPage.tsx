import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import currentFlowImg from '../assets/images/current_flow_diagram_1788113752916.jpg';
import { 
  XCircle, 
  ArrowDown, 
  Clock, 
  AlertTriangle, 
  DatabaseZap, 
  EyeOff, 
  LifeBuoy, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  FileSpreadsheet
} from 'lucide-react';

const traditionalFlow = [
  { step: '01', title: 'Heavy Rainfall', desc: 'Monsoon precipitation or extreme cloudburst event starts saturating hill slopes.' },
  { step: '02', title: 'Different Data Sources', desc: 'Rain gauges, weather forecasts, and satellite scans remain isolated across different departments.' },
  { step: '03', title: 'Manual Monitoring and Analysis', desc: 'Field teams and observers assess conditions manually without automated multi-source correlation.' },
  { step: '04', title: 'Delayed Understanding of Risk', desc: 'Time lag in processing information causes delayed situational awareness of imminent slope collapse.' },
  { step: '05', title: 'Landslide Occurrence', desc: 'Critical slope stability thresholds are exceeded; debris slides and mudflows strike roadways and dwellings.' },
  { step: '06', title: 'Reactive Emergency Response', desc: 'Rescue forces mobilized only after disaster strikes, dealing with blocked routes and casualties.' }
];

const limitations = [
  {
    title: 'Fragmented environmental information',
    desc: 'Rainfall data, geotechnical profiles, soil moisture measurements, and satellite indices are maintained in disconnected repositories across various ministries and institutes.'
  },
  {
    title: 'Different data sources are not effectively combined',
    desc: 'Lack of an automated data fusion layer prevents cross-referencing rainfall intensity with real-time terrain slope and past landslide history.'
  },
  {
    title: 'Manual monitoring can be time-consuming',
    desc: 'Physical field inspection and ad-hoc manual reporting cannot scale across vast, rugged, and inaccessible mountain corridors.'
  },
  {
    title: 'Risk warnings may be delayed',
    desc: 'Broad regional bulletins often arrive too late for local authorities to execute safe evacuations or preemptively close vulnerable highway sections.'
  },
  {
    title: 'Limited location-specific intelligence',
    desc: 'Advisories are typically issued at wide district or sub-division levels rather than pinpointing specific micro-watersheds or vulnerable hill cutting slopes.'
  },
  {
    title: 'Emergency response is often reactive',
    desc: 'Disaster management operations remain predominantly post-event (search, rescue, debris clearing) rather than proactive, preventative pre-warning.'
  }
];

export const CurrentApproachPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        title="Limitations of Traditional Approaches"
        subtitle="Analyzing the bottlenecks of conventional landslide monitoring pipelines and why existing workflows remain reactive."
        badge="Gap Analysis"
        slideRef="Slide 3: Current Approach & Limitations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Intro */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                Current State Bottleneck
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                The Conventional Monitoring Gap
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Traditional landslide disaster workflows in mountain states rely heavily on manual visual inspections, discrete rain-gauge records, and post-disaster distress calls. Without an automated, multi-source data fusion engine, the time elapsed between rainfall accumulation and warning dissemination often leads to reactive emergency response.
              </p>
            </div>
          </div>
        </section>

        {/* Traditional Linear Flow */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Sequence of Conventional Pipeline
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Traditional Landslide Incident Flow
            </h2>
            <p className="text-sm text-slate-600">
              The typical chain of events highlighting where time lag and fragmented information create critical vulnerabilities:
            </p>
          </div>

          {/* Educational Visual Diagram */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-xs">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-16/9 max-h-72">
              <img 
                src={currentFlowImg} 
                alt="Educational diagram showing traditional reactive landslide monitoring bottleneck from rainfall to delayed response" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-amber-600" />
                <span>Conceptual Bottleneck: Rainfall → Manual Monitoring → Delayed Analysis → Disaster Response</span>
              </span>
              <span className="text-[11px] text-slate-500">Traditional Linear Flow</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white border border-slate-800">
            <div className="space-y-4 max-w-3xl mx-auto">
              {traditionalFlow.map((item, index) => (
                <div key={item.step} className="flex flex-col items-center">
                  <div className="w-full bg-slate-800/90 border border-slate-700 hover:border-amber-500/50 rounded-lg p-4 transition-colors flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-slate-900 text-amber-400 border border-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white text-sm sm:text-base">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  {index < traditionalFlow.length - 1 && (
                    <div className="my-2 text-amber-400/80 flex items-center justify-center">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Identified Limitations Grid */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-rose-700 tracking-wider">
              Critical System Limitations
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Key Weaknesses of Existing Systems
            </h2>
            <p className="text-sm text-slate-600">
              Six core operational hurdles identified in traditional landslide surveillance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {limitations.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-rose-100 rounded-lg p-5 hover:border-rose-300 transition-colors shadow-2xs space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold text-lg leading-none shrink-0 mt-0.5">✖</span>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Callout Box */}
        <section className="bg-white border-2 border-slate-300 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
            <span className="text-xs uppercase font-bold text-blue-900 tracking-wider">
              Strategic Paradigm Shift
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              From Reactive Defense to Predictive Intelligence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50/70 border border-rose-200 rounded-lg p-5 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                <XCircle className="w-3.5 h-3.5" />
                Traditional Approach
              </div>
              <div className="text-xl font-bold text-rose-900 pt-1">
                Reactive
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relies on manual notifications after slope movements initiate, resulting in delayed disaster response and emergency relief bottlenecks.
              </p>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-300 rounded-lg p-5 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                LANDSENTINEL AI Approach
              </div>
              <div className="text-xl font-bold text-emerald-900 pt-1">
                Predictive and Data-Driven
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuously fuses multi-source satellite, soil, slope, and precipitation indicators to provide dynamic, explainable early warning hours before failure.
              </p>
            </div>
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'SIH Problem Statement', path: '/problem' }}
          next={{ name: 'Our Proposed Solution', path: '/solution' }}
        />
      </div>
    </div>
  );
};
