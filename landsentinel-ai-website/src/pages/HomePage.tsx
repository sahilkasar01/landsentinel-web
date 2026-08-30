import React from 'react';
import { Link } from 'react-router-dom';
import homeHeroImg from '../assets/images/home_hero_terrain_1788113704917.jpg';
import { 
  Database, 
  Activity, 
  MapPin, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  XCircle, 
  Lightbulb, 
  Cpu, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake,
  ShieldCheck,
  Compass,
  Info,
  Mountain,
  BookOpen,
  CloudRain,
  Radio,
  Gauge,
  Satellite,
  Users,
  BrainCircuit,
  ArrowDown
} from 'lucide-react';

const exploreCards = [
  {
    title: 'Problem Statement',
    code: 'SIH26001',
    description: 'Vulnerability of North Eastern India, triggering factors, terrain fragility, soil saturation, and converting fragmented data into timely intelligence.',
    path: '/problem',
    icon: AlertTriangle,
    accent: 'border-rose-200 bg-white hover:border-rose-400',
    iconColor: 'text-rose-600 bg-rose-50',
    tag: 'Problem Analysis'
  },
  {
    title: 'Why Current Approaches Are Limited',
    code: 'Gaps & Bottlenecks',
    description: 'Analysis of fragmented single-source data silos, delayed warning timelines, manual monitoring limitations, and reactive emergency responses.',
    path: '/current-approach',
    icon: XCircle,
    accent: 'border-slate-200 bg-white hover:border-slate-400',
    iconColor: 'text-amber-600 bg-amber-50',
    tag: 'Gap Analysis'
  },
  {
    title: 'Our Proposed Solution',
    code: 'Multi-Source AI Fusion',
    description: '7-source ingestion engine combining rainfall, soil moisture, tilt sensors, satellite telemetry, DEMs, historical data, and citizen reports.',
    path: '/solution',
    icon: Lightbulb,
    accent: 'border-blue-200 bg-white hover:border-blue-400',
    iconColor: 'text-blue-700 bg-blue-50',
    tag: 'Core Solution'
  },
  {
    title: 'Technology Stack',
    code: 'Hardware & Software',
    description: 'IoT sensor hardware, satellite geospatial platforms, AI/ML models (LSTM, GRU, Random Forest), Kalman/FFT filtering, and React/GIS portal.',
    path: '/technology',
    icon: Cpu,
    accent: 'border-indigo-200 bg-white hover:border-indigo-400',
    iconColor: 'text-indigo-600 bg-indigo-50',
    tag: 'Tech Stack'
  },
  {
    title: 'Methodology & Process',
    code: '8-Step Implementation',
    description: 'End-to-end lifecycle: Data Collection → Signal Processing → AI Training → Evaluation → Dynamic Risk → GIS Mapping → XAI → Early Warning.',
    path: '/methodology',
    icon: Workflow,
    accent: 'border-slate-200 bg-white hover:border-slate-400',
    iconColor: 'text-emerald-600 bg-emerald-50',
    tag: '8-Step Pipeline'
  },
  {
    title: 'What Makes It Different',
    code: 'Key Innovations',
    description: 'Multi-Source Fusion, Dynamic AI Risk Score, Hyperlocal GIS Intelligence, SHAP Explainable AI, and Actionable Early Warning Decision Support.',
    path: '/innovation',
    icon: Sparkles,
    accent: 'border-emerald-200 bg-white hover:border-emerald-400',
    iconColor: 'text-emerald-700 bg-emerald-50',
    tag: 'Innovations'
  },
  {
    title: 'Feasibility & Viability',
    code: 'Deployment Analysis',
    description: 'Low-cost modular sensors, open satellite integrations, institutional alignment with NDMA/GSI/SDMAs, and phased village-to-region scalability.',
    path: '/feasibility',
    icon: CheckCircle2,
    accent: 'border-slate-200 bg-white hover:border-slate-400',
    iconColor: 'text-blue-600 bg-blue-50',
    tag: 'Feasibility'
  },
  {
    title: 'Impact & Benefits',
    code: 'Life & Infrastructure',
    description: 'Life preservation under the ethos "Every second of warning is a life saved", arterial highway protection, and proactive evacuation support.',
    path: '/impact',
    icon: HeartHandshake,
    accent: 'border-emerald-200 bg-white hover:border-emerald-400',
    iconColor: 'text-emerald-600 bg-emerald-50',
    tag: 'Impact'
  },
  {
    title: 'Research & Data Sources',
    code: 'Scientific Baselines',
    description: 'GSI susceptibility maps, ISRO Bhuvan/NRSC, IMD meteorology, NDMA guidelines, NASA LHASA research, Copernicus Sentinel, DEMs, and SHAP.',
    path: '/research',
    icon: BookOpen,
    accent: 'border-purple-200 bg-white hover:border-purple-400',
    iconColor: 'text-purple-700 bg-purple-50',
    tag: 'Scientific Sources'
  }
];

const dataStreams = [
  { name: 'Rainfall Gauges', desc: 'Precipitation intensity & duration', icon: CloudRain, color: 'text-sky-600 bg-sky-50' },
  { name: 'Soil Moisture Sensors', desc: 'Subsurface soil saturation levels', icon: Gauge, color: 'text-amber-700 bg-amber-50' },
  { name: 'Tilt Inclinometers', desc: 'Slope displacement & movement', icon: Radio, color: 'text-rose-600 bg-rose-50' },
  { name: 'ISRO / Satellite Data', desc: 'Bhuvan, INSAT & Sentinel feeds', icon: Satellite, color: 'text-blue-600 bg-blue-50' },
  { name: 'DEM Terrain & Slope', desc: 'Elevation, slope angles & curvature', icon: Mountain, color: 'text-slate-700 bg-slate-100' },
  { name: 'Historical Landslide Data', desc: 'Past event patterns & hazard scars', icon: Database, color: 'text-indigo-600 bg-indigo-50' },
  { name: 'Citizen Community Reports', desc: 'Ground-level localized observations', icon: Users, color: 'text-emerald-600 bg-emerald-50' },
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 pb-8">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14" id="home-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-bold bg-blue-900 text-white tracking-wide">
                  SMART INDIA HACKATHON 2026
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-300">
                  ID: SIH26001
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Theme: Disaster Management (Software)
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  LANDSENTINEL AI
                </h1>
                <div className="text-lg sm:text-xl font-bold text-blue-900 mt-1">
                  AI-Based Early Warning and Landslide Risk Monitoring System in NER
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md inline-block mt-2">
                  Tagline: From Data to Early Warning
                </div>
              </div>

              <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 pt-1">
                <p>
                  <strong>LANDSENTINEL AI</strong> is an AI-based landslide risk monitoring and early warning system designed for the North Eastern Region (NER) of India.
                </p>
                <p>
                  The system combines multiple sources of environmental and geographical intelligence to generate timely, dynamic and explainable landslide risk predictions.
                </p>
              </div>

              {/* Core Philosophy Callout */}
              <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800 shadow-xs">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  Core Project Philosophy
                </div>
                <blockquote className="text-sm sm:text-base font-semibold italic text-slate-100">
                  &ldquo;The problem is not lack of data. The problem is lack of timely intelligence.&rdquo;
                </blockquote>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/solution"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-900 text-white font-medium text-sm hover:bg-blue-800 transition-colors shadow-xs"
                >
                  <span>Explore Proposed Solution</span>
                  <ArrowRight className="w-4 h-4 text-emerald-300" />
                </Link>
                <Link
                  to="/methodology"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  <span>View 8-Step Methodology</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-xs">
                <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-900 aspect-16/10">
                  <img 
                    src={homeHeroImg} 
                    alt="Vulnerable mountainous terrain in North East India during heavy monsoon rainfall" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                    <span>North Eastern Region • Terrain Vulnerability</span>
                  </div>
                </div>
                <div className="mt-3 px-1 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Problem Statement SIH26001</span>
                  <span className="text-[11px] text-slate-500">Conceptual Demonstration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Innovation Sequence Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="core-flow">
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                Core Project Innovation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                The 4-Stage Intelligence Flow
              </h2>
            </div>
            <div className="text-xs text-slate-400 font-mono bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
              End-to-End Architecture
            </div>
          </div>

          {/* 4 Connected Stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded bg-blue-950 text-blue-300 flex items-center justify-center font-bold text-xs border border-blue-800">
                    01
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    Integration Layer
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-2 leading-tight">
                  MULTI-SOURCE AI FUSION
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Synthesizing rain gauges, soil saturation, tilt sensors, satellite intelligence (ISRO Bhuvan/INSAT/Sentinel), DEMs, and citizen observations.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>7 Unified Streams</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded bg-amber-950 text-amber-300 flex items-center justify-center font-bold text-xs border border-amber-800">
                    02
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    AI Risk Engine
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-2 leading-tight">
                  DYNAMIC AI RISK SCORE
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  LSTM, GRU, and Random Forest models continuously evaluate changing saturation thresholds, slope stresses, and trigger probabilities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>Dynamic Assessment</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded bg-emerald-950 text-emerald-300 flex items-center justify-center font-bold text-xs border border-emerald-800">
                    03
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Spatial Mapping
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-2 leading-tight">
                  HYPERLOCAL GIS INTELLIGENCE
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pinpointing high-risk terrain down to specific hill slopes, road corridors, and settlement clusters rather than broad district warnings.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Micro-Zonation Maps</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded bg-rose-950 text-rose-300 flex items-center justify-center font-bold text-xs border border-rose-800">
                    04
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    Civil Action
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-2 leading-tight">
                  EXPLAINABLE EARLY WARNING
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  SHAP-based transparent factor breakdowns giving authorities, disaster teams, and communities the exact reasons to evacuate or reinforce.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                <span>Actionable Alerting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual: Multiple Data Sources Flowing into AI System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="data-fusion-visual">
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                System Ingestion Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Multiple Data Streams Flowing into LANDSENTINEL AI
              </h2>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
              Multi-Source Ingestion Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {dataStreams.map((stream, idx) => {
              const Icon = stream.icon;
              return (
                <div 
                  key={stream.name}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col justify-between space-y-2 hover:border-blue-400 transition-colors text-center sm:text-left"
                >
                  <div>
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center mx-auto sm:mx-0 ${stream.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-slate-900 text-xs mt-2 leading-tight">
                      {stream.name}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {stream.desc}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-mono">
                    Stream #{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Convergence Box */}
          <div className="bg-blue-950 text-white rounded-lg p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-900">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded bg-blue-800 text-emerald-400 flex items-center justify-center shrink-0">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">
                  LANDSENTINEL AI Multi-Source Fusion Engine
                </div>
                <div className="text-xs text-blue-200 mt-0.5">
                  Noise Filtering (Kalman & FFT) → Multi-Variable Feature Vector → Machine Learning Risk Estimation
                </div>
              </div>
            </div>
            <Link
              to="/solution"
              className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded transition-colors"
            >
              View Ingestion Architecture →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore All 9 Sections Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="explore-sections">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Project Navigation & Documentation
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Explore All Technical Topics & SIH Documentation
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Access specific sections corresponding to our Smart India Hackathon 2026 presentation slides and technical evaluation materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {exploreCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                id={`explore-card-${idx}`}
                className={`p-5 rounded-lg border ${card.accent} flex flex-col justify-between hover:shadow-md transition-all group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-9 h-9 rounded-md flex items-center justify-center ${card.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {card.tag}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 font-semibold mb-0.5">
                    {card.code}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-blue-900 group-hover:text-blue-700">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Information Banner on SIH Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Conceptual Demonstration & Technical Companion
              </h3>
              <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                This portal is created specifically for the evaluation of <strong>Smart India Hackathon 2026 (Problem Statement SIH26001)</strong>. It provides a structured, technically grounded overview of our proposed AI architecture, scientific data integrations, and community warning workflows.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <Link
              to="/technology"
              className="px-4 py-2 bg-blue-900 text-white rounded text-xs font-medium hover:bg-blue-800 transition-colors"
            >
              Review Technologies
            </Link>
            <Link
              to="/research"
              className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded text-xs font-medium hover:bg-slate-50 transition-colors"
            >
              Data Sources & Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
