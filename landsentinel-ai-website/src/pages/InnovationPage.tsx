import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import innovationFusionImg from '../assets/images/innovation_fusion_1788113817961.jpg';
import { 
  Sparkles, 
  Database, 
  Activity, 
  MapPin, 
  HelpCircle, 
  UserCheck, 
  CheckCircle2, 
  Layers,
  ArrowRight,
  BrainCircuit
} from 'lucide-react';

const innovationCards = [
  {
    num: '01',
    title: 'Multi-Source Intelligence',
    description: 'Combines different environmental and geographical data sources.',
    details: 'Unlike conventional methods that analyze rainfall gauges in complete isolation, LANDSENTINEL AI fuses precipitation, satellite terrain data, soil moisture metrics, and geological fault line proximity into a unified multi-dimensional model.',
    icon: Database,
    color: 'bg-blue-50 text-blue-900 border-blue-200',
    highlight: 'Comprehensive Data Fusion'
  },
  {
    num: '02',
    title: 'Dynamic Risk Assessment',
    description: 'Risk can change according to changing environmental conditions.',
    details: 'Rather than relying on static, once-a-year susceptibility maps, the framework computes continuous time-varying risk scores that adapt dynamically to ongoing rainfall events and evolving ground moisture conditions.',
    icon: Activity,
    color: 'bg-amber-50 text-amber-900 border-amber-200',
    highlight: 'Real-Time Condition Adaptation'
  },
  {
    num: '03',
    title: 'Hyperlocal Intelligence',
    description: 'Focuses on location-specific understanding of risk.',
    details: 'Pinpoints specific hillside cuttings, micro-catchments, and critical highway curves rather than issuing broad, generic regional warnings that lead to alert fatigue.',
    icon: MapPin,
    color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    highlight: 'High-Resolution Spatial Precision'
  },
  {
    num: '04',
    title: 'Explainable AI',
    description: 'Provides understandable reasons behind risk assessments.',
    details: 'Eliminates opaque "black box" decisions by providing human-readable explanations of contributing factors (e.g., "70% saturated soil + 45° slope + 120mm rainfall"), building trust among administrative personnel.',
    icon: HelpCircle,
    color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    highlight: 'Transparent Factor Breakdown'
  },
  {
    num: '05',
    title: 'Decision Support',
    description: 'Can support better preparedness and emergency prioritization.',
    details: 'Translates theoretical risk scores into practical, actionable insights for disaster response teams, enabling targeted traffic diversions, preemptive resource staging, and orderly evacuations.',
    icon: UserCheck,
    color: 'bg-rose-50 text-rose-900 border-rose-200',
    highlight: 'Actionable Civil Protection'
  }
];

export const InnovationPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        title="What Makes LANDSENTINEL AI Different?"
        subtitle="Five foundational pillars that elevate LANDSENTINEL AI from conventional static monitoring to an intelligent, explainable early warning system."
        badge="Key Innovations"
        slideRef="Slide 7: Innovations & Differentiators"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Intro */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
                Competitive Advantage & Novelty
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                A Unified Intelligent Paradigm
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Existing approaches to landslide hazards in mountain regions are often either static (outdated susceptibility maps) or reactive (post-disaster response). LANDSENTINEL AI introduces five key distinct advantages to bridge this critical operational gap.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Innovation Diagram */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Core Differentiator
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Multi-Source Intelligence & Dynamic Risk Tracking
            </h2>
            <p className="text-sm text-slate-600">
              Transforming fragmented single-point rainfall alerts into unified environmental risk intelligence:
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-xs">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-16/9 max-h-72">
              <img 
                src={innovationFusionImg} 
                alt="Infographic highlighting Multi-Source Fusion, Dynamic Risk Assessment, Hyperlocal Intelligence, Explainable AI, and Decision Support" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <BrainCircuit className="w-4 h-4 text-emerald-700" />
                <span>The 5 Pillars: Multi-Source Fusion • Dynamic Risk • Hyperlocal Precision • Explainability • Actionable Decision Support</span>
              </span>
              <span className="text-[11px] text-slate-500">Innovation Framework</span>
            </div>
          </div>
        </section>

        {/* 5 Innovation Cards Grid */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Pillars of Novelty
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              The 5 Foundational Innovations
            </h2>
            <p className="text-sm text-slate-600">
              Examine each core differentiator designed into the LANDSENTINEL AI architecture:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationCards.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.num}
                  className="bg-white border border-slate-200 hover:border-slate-400 rounded-xl p-6 transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {item.num}
                      </span>
                    </div>

                    <div>
                      <span className="inline-block text-[10px] font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mb-1">
                        {item.highlight}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs font-semibold text-slate-800">
                      {item.description}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified SIH 26001 Alignment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Synthesis Highlight Banner */}
        <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-xs">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Summary of Distinction
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Why This Represents a True Step Forward
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              By combining <strong>dynamic multi-source intelligence</strong> with <strong>hyperlocal spatial modeling</strong> and <strong>explainable AI</strong>, LANDSENTINEL AI transforms raw, disconnected meteorological readings into clear, confident early warning guidance for frontline disaster managers.
            </p>
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'Methodology and Implementation Process', path: '/methodology' }}
          next={{ name: 'Feasibility and Viability', path: '/feasibility' }}
        />
      </div>
    </div>
  );
};
