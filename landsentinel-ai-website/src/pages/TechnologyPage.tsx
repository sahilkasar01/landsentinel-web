import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import techArchitectureImg from '../assets/images/tech_architecture_1788113786861.jpg';
import { 
  Cpu, 
  Code, 
  Server, 
  BrainCircuit, 
  Globe, 
  Database,
  Layers,
  CheckCircle2,
  CloudRain,
  Mountain,
  Satellite,
  Activity,
  History,
  Workflow,
  Radio,
  Gauge,
  Sparkles,
  Filter,
  Info
} from 'lucide-react';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        topicNumber="Topic 4 of 10"
        title="Technologies and Tools"
        subtitle="Frontend, Backend, AI / Data Processing, Geospatial Intelligence, and IoT Hardware powering LANDSENTINEL AI"
        badge="SIH26001 Technology Stack"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-8">
        {/* Prototype Clarification Banner */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-xs text-blue-950">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Project Technology Specifications:</strong> This page details the comprehensive software, hardware, AI algorithms (LSTM, GRU, Random Forest, SHAP), signal filters (Kalman, FFT), and geospatial platforms (ISRO Bhuvan, INSAT, Sentinel) defined in our Smart India Hackathon 2026 technical proposal.
          </div>
        </div>

        {/* Intro Card */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-indigo-700 tracking-wider">
                Full-Stack & Hardware Architecture
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Modular Technical Architecture
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                The LANDSENTINEL AI framework is structured into modular layers spanning reactive client interfaces, lightweight API backends, scalable machine learning models (LSTM, GRU, Random Forest), signal processing filters (Kalman, FFT), explainable AI (SHAP), and geospatial information layers.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Technology Architecture Diagram */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Technical Pipeline Overview
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Environmental Intelligence Architecture
            </h2>
            <p className="text-sm text-slate-600">
              System architecture integrating Earth observations, weather telemetry, ML models, and GIS mapping:
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-xs">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-16/9 max-h-72">
              <img 
                src={techArchitectureImg} 
                alt="Diagram showing environmental data, satellite observation, GIS maps, AI data analysis and web technology" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-indigo-700" />
                <span>Modular Integration: IoT Sensors • Satellite Observation • AI Engine • GIS Layers • Web Portal</span>
              </span>
              <span className="text-[11px] text-slate-500">System Blueprint</span>
            </div>
          </div>
        </section>

        {/* Core Tech Stack Categories */}
        <section className="space-y-6">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Component Breakdown
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Core Technical Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Frontend */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded bg-blue-50 text-blue-900 flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Frontend</h3>
                  <span className="text-xs text-slate-500">Client Interface & Visual Knowledge Portal</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>React:</strong> Component-based reactive UI architecture for high-performance dashboard rendering.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>TypeScript:</strong> Type-safe data structures, strict interfaces, and predictable telemetry contracts.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>HTML5 & CSS / Tailwind:</strong> Accessible semantic markup and responsive utility-based design system.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>Vite:</strong> Ultra-fast frontend build tooling and production bundling.</div>
                </li>
              </ul>
            </div>

            {/* 2. Backend */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded bg-emerald-50 text-emerald-900 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Backend & APIs</h3>
                  <span className="text-xs text-slate-500">Ingestion Gateways & Telemetry Services</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>Node.js:</strong> Event-driven asynchronous runtime optimized for high-throughput sensor telemetry ingestion.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>TypeScript:</strong> Unified typing across server middleware, validation, and AI inference proxies.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>REST API Architecture:</strong> Clean, stateless JSON endpoints for GIS microservices, sensor relays, and alerts.</div>
                </li>
              </ul>
            </div>

            {/* 3. AI and Data Processing */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded bg-purple-50 text-purple-900 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">AI & Signal Processing</h3>
                  <span className="text-xs text-slate-500">ML Models, Time-Series & Explainability</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>LSTM & GRU Neural Networks:</strong> Deep recurrent networks tailored for temporal sequence forecasting in rainfall and soil saturation.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>Random Forest Classifiers:</strong> Robust ensemble decision trees evaluating non-linear multi-variable terrain features.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>Signal Filtering (Kalman & FFT):</strong> Kalman filtering for true state tracking and Fast Fourier Transform for frequency spectrum analysis.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>SHAP (Explainable AI):</strong> Shapley value game theory generating transparent, human-interpretable feature contribution weights.</div>
                </li>
              </ul>
            </div>

            {/* 4. Geospatial Intelligence */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded bg-teal-50 text-teal-900 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Geospatial Intelligence</h3>
                  <span className="text-xs text-slate-500">Spatial Mapping & Earth Observation</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>GIS Platforms:</strong> Coordinate mapping, micro-risk zonation, and spatial overlays for disaster response teams.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>ISRO Bhuvan & INSAT:</strong> National space telemetry providing Indian meteorological imagery and terrain layers.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>Sentinel Satellite (Copernicus):</strong> Sentinel-1 SAR and Sentinel-2 optical imagery for surface moisture and land-cover analysis.</div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div><strong>Digital Elevation Models (DEM):</strong> CartoDEM and SRTM elevation rasters computing slope gradients and drainage profiles.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. IoT Sensor Hardware */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-blue-900" />
            <h3 className="font-bold text-slate-900 text-lg">
              Field IoT Sensor Hardware Deployment
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Physical on-site sensor modules planned for vulnerable mountain slopes across the North Eastern Region:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                <CloudRain className="w-4 h-4" />
                <span>Rainfall Gauges</span>
              </div>
              <p className="text-xs text-slate-600">
                Tipping-bucket automated gauges measuring high-intensity rain events in mm/hr with low-power solar relays.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <Gauge className="w-4 h-4" />
                <span>Soil Moisture Sensors</span>
              </div>
              <p className="text-xs text-slate-600">
                Subsurface capacitive moisture probes detecting Volumetric Water Content (VWC) across root and shear zones.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <Radio className="w-4 h-4" />
                <span>Tilt Inclinometers</span>
              </div>
              <p className="text-xs text-slate-600">
                MEMS bi-axial inclinometers anchored to bedrock/retaining walls to capture micro-angular slope displacement.
              </p>
            </div>
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'Our Proposed Solution', path: '/solution' }}
          next={{ name: 'Methodology & Implementation Process', path: '/methodology' }}
        />
      </div>
    </div>
  );
};
