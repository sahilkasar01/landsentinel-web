import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import solutionInfographicImg from '../assets/images/solution_infographic_1788113769904.jpg';
import { 
  Lightbulb, 
  Database, 
  Activity, 
  MapPin, 
  ShieldCheck, 
  CloudRain, 
  Gauge, 
  Radio,
  Satellite, 
  Mountain, 
  History,
  Users,
  BrainCircuit,
  Info,
  Network,
  CheckCircle2,
  ArrowDown,
  Layers,
  Sparkles,
  Sliders
} from 'lucide-react';

const dataSourceItems = [
  {
    id: 1,
    title: 'Rainfall Data',
    desc: 'Rainfall gauges and weather information help identify intense or prolonged rainfall conditions.',
    icon: CloudRain,
    color: 'text-sky-600 bg-sky-50 border-sky-200',
    type: 'Dynamic Hydrological Trigger',
    examples: 'IMD Rain Gauges, Automated Weather Stations (AWS), Real-time mm/hr'
  },
  {
    id: 2,
    title: 'Soil Moisture Sensors',
    desc: 'IoT sensors monitor soil saturation levels that can increase slope instability.',
    icon: Gauge,
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    type: 'Subsurface Saturation',
    examples: 'Volumetric Water Content (VWC), Pore water pressure transducers'
  },
  {
    id: 3,
    title: 'Tilt Sensors',
    desc: 'Tilt sensors help detect changes in slope movement and terrain instability.',
    icon: Radio,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    type: 'Slope Displacement',
    examples: 'MEMS Inclinometers, Bi-axial angular displacement in degrees/min'
  },
  {
    id: 4,
    title: 'Satellite Intelligence',
    desc: 'Satellite data from sources such as ISRO Bhuvan, INSAT and Sentinel can support terrain and environmental monitoring.',
    icon: Satellite,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    type: 'Remote Sensing Telemetry',
    examples: 'ISRO Bhuvan geospatial layers, INSAT cloud tops, Sentinel-1 SAR moisture'
  },
  {
    id: 5,
    title: 'Terrain and Slope Data',
    desc: 'Digital Elevation Models and terrain information help analyze slope-related risk factors.',
    icon: Mountain,
    color: 'text-slate-700 bg-slate-100 border-slate-300',
    type: 'Geomorphological Baseline',
    examples: 'CartoDEM, SRTM 30m, slope angle gradients, flow accumulation'
  },
  {
    id: 6,
    title: 'Historical Landslide Data',
    desc: 'Historical events help AI models identify patterns associated with previous landslides.',
    icon: History,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    type: 'Pattern Recognition Baseline',
    examples: 'GSI National Landslide Inventory, past rupture scars, failure dates'
  },
  {
    id: 7,
    title: 'Citizen Reports',
    desc: 'Community observations can provide additional local information about changing ground conditions.',
    icon: Users,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    type: 'Crowdsourced Ground Intelligence',
    examples: 'Road cracks, spring discharge changes, minor ground fissures'
  }
];

const riskLevels = [
  {
    range: '0 – 25',
    level: 'LOW',
    color: 'bg-emerald-50 text-emerald-900 border-emerald-300',
    badge: 'bg-emerald-600 text-white',
    description: 'Dry to mild rainfall, normal soil pore pressures, stable slope conditions.'
  },
  {
    range: '26 – 50',
    level: 'MODERATE',
    color: 'bg-blue-50 text-blue-900 border-blue-300',
    badge: 'bg-blue-600 text-white',
    description: 'Intermittent precipitation, rising moisture indices, close monitoring advised.'
  },
  {
    range: '51 – 75',
    level: 'HIGH',
    color: 'bg-amber-50 text-amber-900 border-amber-300',
    badge: 'bg-amber-600 text-white',
    description: 'Prolonged torrential rain, saturated soil strata, high vulnerability on steep cuts.'
  },
  {
    range: '76 – 100',
    level: 'CRITICAL',
    color: 'bg-rose-50 text-rose-900 border-rose-300',
    badge: 'bg-rose-600 text-white',
    description: 'Extreme cloudburst, threshold exceeded, imminent risk of slope shear failure.'
  }
];

export const SolutionPage: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<number>(1);

  return (
    <div className="pb-12">
      <PageHeader 
        topicNumber="Topic 3 of 10"
        title="LANDSENTINEL AI – Our Proposed Solution"
        subtitle="Multi-Source Data Fusion, Dynamic Risk Estimation, Hyperlocal GIS Intelligence, and Explainable Early Warning"
        badge="SIH26001 Proposed Framework"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-8">
        {/* Prototype Clarification Banner */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-xs text-blue-950">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Conceptual Demonstration & Prototype Architecture:</strong> This section models the 7 data feeds and the automated AI fusion engine for SIH26001. All risk scores and factor attributions represent algorithmic prototypes rather than simulated live alerts.
          </div>
        </div>

        {/* Core Solution Summary */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-blue-900 tracking-wider">
                Solution Paradigm
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Multi-Source AI Fusion Architecture
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                <strong>LANDSENTINEL AI</strong> unifies heterogeneous environmental sensors, satellite intelligence, topographical models, and citizen ground observations into a single real-time intelligence pipeline. Instead of relying on isolated rainfall thresholds, it continuously computes dynamic, slope-specific risk scores with explainable decision factors.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Fusion Infographic */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Conceptual Pipeline Diagram
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              System Ingestion & Intelligence Flow
            </h2>
            <p className="text-sm text-slate-600">
              How the 7 data streams converge into the LANDSENTINEL AI multi-source fusion engine:
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-4 shadow-xs">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-16/9 max-h-76">
              <img 
                src={solutionInfographicImg} 
                alt="Infographic showing Rainfall, Soil Moisture, Satellite, Terrain and Historical data fusing into LANDSENTINEL AI dynamic risk score and GIS early warning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                <Network className="w-4 h-4 text-blue-800" />
                <span>Multi-Source AI Fusion → Dynamic Risk Score → Hyperlocal GIS Intelligence → Explainable Early Warning</span>
              </span>
              <span className="text-[11px] text-slate-500">Framework Overview</span>
            </div>
          </div>
        </section>

        {/* The 7 Core Data Sources (Interactive & Visual Grid) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                Multi-Source AI Fusion Inputs
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                The 7 Ingestion Streams Feeding the AI Engine
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              7 Heterogeneous Streams
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataSourceItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedSource === item.id;
              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedSource(item.id)}
                  className={`bg-white border rounded-xl p-5 cursor-pointer transition-all shadow-xs flex flex-col justify-between space-y-3 ${
                    isSelected ? 'border-blue-700 ring-2 ring-blue-100 bg-blue-50/20' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Stream #{item.id}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px]">
                    <div className="text-slate-500 font-medium">Telemetry Type: <span className="text-slate-900 font-semibold">{item.type}</span></div>
                    <div className="text-slate-400 font-mono truncate">{item.examples}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Convergence Engine Banner */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
              <BrainCircuit className="w-4 h-4 text-emerald-400" />
              <span>Harmonization Hub</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              LANDSENTINEL AI MULTI-SOURCE AI FUSION ENGINE
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
              All 7 data streams pass through signal filtering (Kalman & FFT) and feature normalization to generate unified spatial vectors. The AI engine continuously outputs dynamic risk predictions, hyperlocal GIS heatmaps, and SHAP-based early warnings.
            </p>
          </div>
        </section>

        {/* Dynamic AI Risk Score Bands */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Risk Quantification Matrix
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Continuous Dynamic AI Risk Score (0 – 100)
            </h2>
            <p className="text-sm text-slate-600">
              Unlike static hazard maps that remain unchanged for years, LANDSENTINEL AI recalculates slope risk dynamically:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className={`border rounded-xl p-5 space-y-2 ${lvl.color}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded ${lvl.badge}`}>
                    {lvl.level}
                  </span>
                  <span className="font-mono text-sm font-bold">
                    {lvl.range}
                  </span>
                </div>
                <div className="font-bold text-sm text-slate-900 pt-1">
                  Dynamic Threshold
                </div>
                <p className="text-xs leading-relaxed text-slate-700">
                  {lvl.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Explainable AI Example Demonstration */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-700" />
            <h3 className="font-bold text-slate-900 text-lg">
              Explainable AI (SHAP-Based) in Action
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Black-box AI models that only output numbers without justification create skepticism among disaster response officials. LANDSENTINEL AI provides clear factor attributions:
          </p>

          <div className="bg-slate-900 text-white rounded-lg p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-emerald-400">Automated Natural Language Decision Summary:</span>
              <span className="font-mono bg-slate-800 px-2 py-0.5 rounded">SHAP Feature Attribution</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-slate-100 italic bg-slate-950 p-4 rounded border border-slate-800">
              &ldquo;Risk is HIGH primarily because of intense rainfall (42% contribution), high soil saturation (34% contribution) and steep slope conditions (18% contribution).&rdquo;
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
              <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
                <span className="text-sky-400 font-bold block">+42%</span>
                <span className="text-[11px] text-slate-300">Rainfall Intensity</span>
              </div>
              <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
                <span className="text-amber-400 font-bold block">+34%</span>
                <span className="text-[11px] text-slate-300">Soil Saturation</span>
              </div>
              <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
                <span className="text-indigo-400 font-bold block">+18%</span>
                <span className="text-[11px] text-slate-300">Slope Gradient</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'Why Current Approaches Are Limited', path: '/current-approach' }}
          next={{ name: 'Technology Stack', path: '/technology' }}
        />
      </div>
    </div>
  );
};
