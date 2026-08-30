import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import feasibilityMatrixImg from '../assets/images/feasibility_matrix_1788113833880.jpg';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Globe, 
  Database, 
  Lock, 
  FileCheck, 
  Building2,
  Workflow,
  Scale
} from 'lucide-react';

const technicalFeasibility = [
  {
    title: 'Modern web technologies are available',
    desc: 'Production-ready frameworks like React, TypeScript, and Node.js provide reliable, high-performance, and responsive interfaces suitable for both command-center consoles and field mobile viewports.'
  },
  {
    title: 'AI and machine learning techniques can be integrated',
    desc: 'Established machine learning algorithms (Random Forests, Gradient Boosting, neural architectures) have proven success in multi-variable hydrological and geotechnical hazard estimation.'
  },
  {
    title: 'GIS technologies can support geographical visualization',
    desc: 'Standard geospatial protocols (GeoJSON, Leaflet, MapLibre, OGC Web Map Services) easily handle multi-layer raster DEMs, slope overlays, and vector highway corridor representations.'
  },
  {
    title: 'The architecture is modular and scalable',
    desc: 'Decoupled pipeline stages allow individual microservices (data cleaning, ML inference, GIS rendering) to scale horizontally and expand to additional mountain districts seamlessly.'
  }
];

const potentialChallenges = [
  {
    title: 'Low-quality raw data',
    desc: 'Environmental sensor telemetry from remote mountain stations may experience signal noise, missing intervals, or calibration drift during severe storms.'
  },
  {
    title: 'Data availability',
    desc: 'Sparse sensor density across remote, inaccessible Himalayan hills and intermittent ground-station telemetry coverage during extreme monsoons.'
  },
  {
    title: 'Scientific validation',
    desc: 'Ensuring that AI risk predictions correlate accurately with verified geotechnical ground-truth and physical slope shear failure mechanics.'
  },
  {
    title: 'Accuracy of predictions',
    desc: 'Minimizing false positives (which cause warning fatigue) and preventing false negatives (which risk human safety during undetected slope failures).'
  },
  {
    title: 'Data privacy and security',
    desc: 'Protecting sensitive geographical spatial intelligence, critical infrastructure coordinates, and communication channels from unauthorized tampering.'
  }
];

const strategies = [
  {
    title: 'Data cleaning and normalization',
    desc: 'Automated filtering, anomaly detection, statistical imputation, and spatial interpolation to resolve sensor dropouts and noise.'
  },
  {
    title: 'Validation using historical and real-world data',
    desc: 'Benchmarking AI risk model performance against extensive historical landslide databases and past major monsoon disaster records.'
  },
  {
    title: 'Explainable AI techniques',
    desc: 'Implementing transparent feature attribution methods (e.g. SHAP/LIME formulations) so experts can review contributing variables before issuing alerts.'
  },
  {
    title: 'Secure data handling',
    desc: 'End-to-end encryption in transit and at rest, role-based access governance, and hardened API gateways for public safety communications.'
  },
  {
    title: 'Collaboration with reliable scientific and government sources',
    desc: 'Interfacing with established public bodies such as the India Meteorological Department (IMD), Geological Survey of India (GSI), ISRO, and NDMA.'
  }
];

export const FeasibilityPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        title="Feasibility and Viability"
        subtitle="A realistic assessment of the technical viability, potential operational challenges, and strategic mitigation measures for LANDSENTINEL AI."
        badge="Feasibility Analysis"
        slideRef="Slide 8: Feasibility & Viability"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Intro */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-blue-900 tracking-wider">
                Practical Feasibility
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Grounded Engineering & Implementation Viability
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Evaluating a disaster risk intelligence framework requires a balanced, honest understanding of technology readiness, raw data realities in remote terrains, and proven strategies to guarantee high system reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Feasibility Matrix Diagram */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Viability Architecture
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Feasibility, Challenges & Mitigation Framework
            </h2>
            <p className="text-sm text-slate-600">
              Structured evaluation mapping technical viability against environmental hurdles and data normalization strategies:
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-xs">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-16/9 max-h-72">
              <img 
                src={feasibilityMatrixImg} 
                alt="Infographic matrix displaying technical feasibility, terrain data challenges, and mitigation strategies" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-blue-900" />
                <span>Three-Pillar Analysis: Technical Viability • Potential Challenges • Strategic Mitigation</span>
              </span>
              <span className="text-[11px] text-slate-500">Engineering Viability</span>
            </div>
          </div>
        </section>

        {/* Technical Feasibility */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 rounded-xs bg-emerald-600"></div>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
                Enabling Factors
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Technical Feasibility
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalFeasibility.map((item, idx) => (
              <div key={idx} className="bg-white border border-emerald-100 rounded-lg p-5 hover:border-emerald-300 transition-colors shadow-2xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Potential Challenges */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 rounded-xs bg-amber-600"></div>
            <div>
              <span className="text-xs uppercase font-bold text-amber-800 tracking-wider">
                Identified Operational Hurdles
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Potential Challenges
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {potentialChallenges.map((item, idx) => (
              <div key={idx} className="bg-white border border-amber-100 rounded-lg p-5 hover:border-amber-300 transition-colors shadow-2xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mitigation Strategies */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 rounded-xs bg-blue-700"></div>
            <div>
              <span className="text-xs uppercase font-bold text-blue-900 tracking-wider">
                Engineering Solutions
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Proposed Mitigation Strategies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategies.map((item, idx) => (
              <div key={idx} className="bg-white border border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors shadow-2xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'What Makes LANDSENTINEL AI Different?', path: '/innovation' }}
          next={{ name: 'Impact & Benefits', path: '/impact' }}
        />
      </div>
    </div>
  );
};
