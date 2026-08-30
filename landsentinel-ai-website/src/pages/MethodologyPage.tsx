import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import methodologyFlowImg from '../assets/images/methodology_flow_1788113800867.jpg';
import { 
  Workflow, 
  ArrowDown, 
  ArrowRight,
  Database, 
  Filter, 
  BrainCircuit, 
  Activity, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2,
  Sparkles,
  Info,
  Layers,
  Gauge,
  Satellite,
  BarChart3,
  Sliders,
  ChevronRight,
  Check
} from 'lucide-react';

interface MethodologyStep {
  step: string;
  num: string;
  phase: string;
  phaseId: number;
  title: string;
  summary: string;
  details: string;
  sourcesOrTools: string[];
  input: string;
  transform: string;
  output: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeColor: string;
  pillColor: string;
}

const actualMethodologySteps: MethodologyStep[] = [
  {
    step: 'STEP 1',
    num: '01',
    phase: 'Phase 1: Ingestion & Signal Prep',
    phaseId: 1,
    title: 'DATA COLLECTION',
    summary: 'Collect IoT environmental and satellite geospatial information from landslide-prone areas.',
    details: 'IoT field sensors (soil moisture, tilt sensors, rainfall gauges) capture live physical slope dynamics, while satellite and geographical platforms (ISRO Bhuvan, INSAT, Sentinel, and Digital Elevation Models) provide high-resolution terrain and meteorological context.',
    sourcesOrTools: ['Soil Moisture Sensors', 'Tilt Sensors', 'Rainfall Gauges', 'ISRO Bhuvan', 'INSAT', 'Sentinel Satellite', 'Digital Elevation Models (DEM)'],
    input: 'IoT Sensor Feeds + Satellite Data Streams + DEM Topography',
    transform: 'Multi-Protocol Telemetry Ingestion & Spatial Coordinate Binding',
    output: 'Raw Time-Series & Multi-Spectral Geospatial Datasets',
    icon: Database,
    color: 'bg-blue-50 text-blue-900 border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    pillColor: 'bg-blue-700 text-white'
  },
  {
    step: 'STEP 2',
    num: '02',
    phase: 'Phase 1: Ingestion & Signal Prep',
    phaseId: 1,
    title: 'DATA PROCESSING',
    summary: 'Clean, filter, and denoise sensor data using advanced signal processing algorithms.',
    details: 'Raw telemetry contains environmental noise, missing intervals, and high-frequency fluctuations. The system applies Signal Filtering, Kalman Filters to estimate accurate true states, and Fast Fourier Transform (FFT) to extract dominant cyclic rainfall and vibration patterns.',
    sourcesOrTools: ['Signal Filtering', 'Kalman Filter', 'Fast Fourier Transform (FFT)', 'Data Cleaning', 'Feature Extraction'],
    input: 'Raw Noisy Sensor Streams & Satellite Indices',
    transform: 'Kalman State Estimation, FFT Spectral Analysis & Noise Removal',
    output: 'Cleaned, Normalized Time-Series Matrices & Extracted Features',
    icon: Filter,
    color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    pillColor: 'bg-indigo-700 text-white'
  },
  {
    step: 'STEP 3',
    num: '03',
    phase: 'Phase 2: AI Model Engineering',
    phaseId: 2,
    title: 'AI MODEL TRAINING',
    summary: 'Train machine learning and deep learning models using comprehensive historical and triggering data.',
    details: 'Multiple architectures are trained on historical slope failure records: Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks capture temporal dependencies in continuous rainfall/moisture, while Random Forest models evaluate non-linear static terrain interactions.',
    sourcesOrTools: ['LSTM Networks', 'GRU Networks', 'Random Forest Classifiers', 'Historical Landslide Scars', 'Multi-Variable Tensors'],
    input: 'Rainfall Intensity, Soil Moisture, Slope Angles, Terrain Conditions, Historical Patterns',
    transform: 'Supervised Temporal & Ensemble Learning with Cross-Validation',
    output: 'Trained Machine Learning & Deep Neural Risk Models',
    icon: BrainCircuit,
    color: 'bg-purple-50 text-purple-900 border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    pillColor: 'bg-purple-700 text-white'
  },
  {
    step: 'STEP 4',
    num: '04',
    phase: 'Phase 2: AI Model Engineering',
    phaseId: 2,
    title: 'MODEL EVALUATION',
    summary: 'Rigorous benchmark evaluation to select the most reliable model for real-world deployment.',
    details: 'Candidate models undergo thorough validation against historical validation datasets using standard statistical metrics including Precision, Recall, and Root Mean Square Error (RMSE) to minimize false positives while eliminating catastrophic missed alerts.',
    sourcesOrTools: ['Precision Metrics', 'Recall & Sensitivity', 'Root Mean Square Error (RMSE)', 'ROC-AUC Curves', 'Confusion Matrix Analysis'],
    input: 'Trained Model Checkpoints & Historical Test Partitions',
    transform: 'K-Fold Cross-Validation, Error Residual Analysis & Benchmark Scoring',
    output: 'Selected Optimal Production AI Model Weights',
    icon: BarChart3,
    color: 'bg-sky-50 text-sky-900 border-sky-200',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
    pillColor: 'bg-sky-700 text-white'
  },
  {
    step: 'STEP 5',
    num: '05',
    phase: 'Phase 3: Real-Time Intelligence & Early Warning',
    phaseId: 3,
    title: 'DYNAMIC AI RISK PREDICTION',
    summary: 'Generate continuous dynamic landslide risk assessment based on changing environmental conditions.',
    details: 'The deployed AI engine continuously ingests real-time updates and computes dynamic risk scores (0 to 100) mapped into standard operational severity bands: Low (0-25), Moderate (26-50), High (51-75), and Critical (76-100).',
    sourcesOrTools: ['Dynamic Inference Engine', '0-100 Continuous Score Scale', 'Four Operational Severity Bands', 'Real-time Telemetry Loop'],
    input: 'Live Filtered Weather, Soil Saturation & Tilt Readings',
    transform: 'Real-Time Neural Inference & Risk Index Formulation',
    output: 'Dynamic Continuous Slope Risk Scores (0 – 100)',
    icon: Activity,
    color: 'bg-amber-50 text-amber-900 border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    pillColor: 'bg-amber-700 text-white'
  },
  {
    step: 'STEP 6',
    num: '06',
    phase: 'Phase 3: Real-Time Intelligence & Early Warning',
    phaseId: 3,
    title: 'HYPERLOCAL GIS INTELLIGENCE',
    summary: 'Display geographical risk information and heatmaps using interactive GIS visualization.',
    details: 'Translates raw numerical risk scores into high-resolution spatial maps showing micro-risk zones, location-based slope intelligence, color-coded risk heatmaps, and historical slope displacement trends across specific roads and villages.',
    sourcesOrTools: ['Interactive GIS Engine', 'Micro-Risk Zonation', 'Slope-Level Heatmaps', 'Historical Movement Trends'],
    input: 'Dynamic Risk Scores + Geo-referenced DEM Grids & Road Layers',
    transform: 'Spatial Rasterization & Hyperlocal Web Map Rendering',
    output: 'Interactive GIS Risk Map with Zone-Specific Telemetry',
    icon: MapPin,
    color: 'bg-teal-50 text-teal-900 border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
    pillColor: 'bg-teal-700 text-white'
  },
  {
    step: 'STEP 7',
    num: '07',
    phase: 'Phase 3: Real-Time Intelligence & Early Warning',
    phaseId: 3,
    title: 'EXPLAINABLE AI (XAI)',
    summary: 'Apply SHAP-based Explainable AI to identify important contributing factors behind every prediction.',
    details: 'Utilizes SHapley Additive exPlanations (SHAP) to calculate exact mathematical contributions of rainfall intensity, soil saturation, and slope angle, providing transparent natural-language summaries for every alert.',
    sourcesOrTools: ['SHAP (Shapley Additive exPlanations)', 'Feature Attribution Plots', 'Natural Language Factor Summaries'],
    input: 'AI Inference Prediction Vectors & Baseline Background Data',
    transform: 'Game-Theoretic Shapley Value Computation & Factor Attribution',
    output: 'Transparent Factor Breakdown (e.g. Rainfall 42%, Soil 34%, Slope 18%)',
    icon: Sparkles,
    color: 'bg-purple-50 text-purple-900 border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    pillColor: 'bg-purple-700 text-white'
  },
  {
    step: 'STEP 8',
    num: '08',
    phase: 'Phase 3: Real-Time Intelligence & Early Warning',
    phaseId: 3,
    title: 'EARLY WARNING AND DECISION SUPPORT',
    summary: 'Generate understandable, actionable early warnings for authorities, disaster teams, and local communities.',
    details: 'Delivers clear warnings to State Disaster Management Authorities (SDMAs), District Disaster Management Authorities (DDMAs), NDRF/SDRF emergency teams, and village leaders for proactive monitoring, emergency preparedness, evacuation planning, and emergency road prioritization.',
    sourcesOrTools: ['Multi-Channel Alert Dispatch', 'Evacuation Planning Protocols', 'District Priority Matrix', 'Community Early Warning Hub'],
    input: 'Validated High/Critical Risk Warnings + XAI Factor Summaries',
    transform: 'Decision-Rule Synthesis & Automated Warning Broadcast',
    output: 'Actionable Multi-Agency Early Warnings & Preparedness Directives',
    icon: ShieldAlert,
    color: 'bg-rose-50 text-rose-900 border-rose-200',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    pillColor: 'bg-rose-700 text-white'
  }
];

export const MethodologyPage: React.FC = () => {
  const [activePhaseFilter, setActivePhaseFilter] = useState<number | 'all'>('all');
  const [expandedStep, setExpandedStep] = useState<string | null>('STEP 1');

  const filteredSteps = activePhaseFilter === 'all' 
    ? actualMethodologySteps 
    : actualMethodologySteps.filter(s => s.phaseId === activePhaseFilter);

  return (
    <div className="pb-12">
      <PageHeader 
        topicNumber="Topic 5 of 10"
        title="Technical Approach & Methodology"
        subtitle="The 8-Step Engineering Pipeline: From Multi-Source Data Collection to Explainable Early Warning and Civil Decision Support"
        badge="SIH26001 Implementation Methodology"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-8">
        {/* Prototype Clarification Banner */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-xs text-blue-950">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Project Implementation Methodology:</strong> This page documents the actual 8-step technical lifecycle for LANDSENTINEL AI under Problem Statement SIH26001, highlighting data ingestion, Kalman/FFT filtering, model training (LSTM, GRU, Random Forest), SHAP explainability, and multi-agency civil action.
          </div>
        </div>

        {/* Visual Process Flowchart */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Technical Implementation Flowchart
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              End-to-End Implementation Lifecycle
            </h2>
            <p className="text-sm text-slate-600">
              Sequential flow from raw IoT and satellite inputs through signal filtering, AI model training, and SHAP-based early warnings:
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-xs">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-16/9 max-h-76">
              <img 
                src={methodologyFlowImg} 
                alt="Flowchart diagram showing the 8 steps: Data Acquisition, Processing, Fusion, AI Risk Analysis, Risk Prediction, GIS Intelligence, Explainability, and Early Warning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-emerald-700" />
                <span>8 Structured Steps: Data Collection → Data Processing → AI Training → Evaluation → Risk Prediction → GIS Mapping → Explainable AI → Decision Support</span>
              </span>
              <span className="text-[11px] text-slate-500">Pipeline Roadmap</span>
            </div>
          </div>
        </section>

        {/* Phase Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Sliders className="w-4 h-4 text-blue-900" />
            <span>Filter Pipeline by Phase:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActivePhaseFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activePhaseFilter === 'all'
                  ? 'bg-blue-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 8 Steps
            </button>
            <button
              onClick={() => setActivePhaseFilter(1)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activePhaseFilter === 1
                  ? 'bg-blue-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Phase 1: Ingestion & Signal Prep
            </button>
            <button
              onClick={() => setActivePhaseFilter(2)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activePhaseFilter === 2
                  ? 'bg-blue-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Phase 2: AI Model Engineering
            </button>
            <button
              onClick={() => setActivePhaseFilter(3)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activePhaseFilter === 3
                  ? 'bg-blue-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Phase 3: Real-Time Early Warning
            </button>
          </div>
        </div>

        {/* The 8 Connected Timeline Cards */}
        <section className="space-y-6">
          <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
            {filteredSteps.map((item, idx) => {
              const Icon = item.icon;
              const isExpanded = expandedStep === item.step;
              const isLast = idx === filteredSteps.length - 1;

              return (
                <div 
                  key={item.step} 
                  className="relative group transition-all"
                  id={`methodology-step-${item.num}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-6 sm:-left-10 top-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center shadow-xs z-10 ${item.pillColor}`}>
                    <span className="text-[10px] sm:text-xs font-bold">{item.num}</span>
                  </div>

                  {/* Main Card */}
                  <div className={`bg-white border rounded-xl p-5 sm:p-6 transition-all shadow-xs ${
                    isExpanded ? 'border-blue-500 ring-2 ring-blue-50' : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-blue-900">
                              {item.step}
                            </span>
                            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                              {item.phase}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <button
                        onClick={() => setExpandedStep(isExpanded ? null : item.step)}
                        className="text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 self-start sm:self-auto px-2.5 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        <span>{isExpanded ? 'Hide Technical Details' : 'View Technical Details'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-700 mt-3 font-medium">
                      {item.summary}
                    </p>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.details}
                    </p>

                    {/* Tools / Feeds Tags */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-slate-500 mr-1">Components:</span>
                      {item.sourcesOrTools.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Technical Matrix */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 p-4 sm:p-5 rounded-b-xl space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                              Data Input
                            </span>
                            <div className="font-semibold text-slate-900 text-xs">
                              {item.input}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-900 block">
                              Algorithmic Transformation
                            </span>
                            <div className="font-semibold text-slate-900 text-xs">
                              {item.transform}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-900 block">
                              Standardized Output
                            </span>
                            <div className="font-semibold text-slate-900 text-xs">
                              {item.output}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Flow Connector Arrow */}
                  {!isLast && (
                    <div className="flex justify-center my-1 text-slate-400">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'Technology Stack', path: '/technology' }}
          next={{ name: 'Innovation & Differentiators', path: '/innovation' }}
        />
      </div>
    </div>
  );
};
