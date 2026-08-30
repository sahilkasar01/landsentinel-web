import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import { 
  BookOpen, 
  Map, 
  Satellite, 
  CloudRain, 
  ShieldCheck, 
  Compass, 
  BrainCircuit, 
  Layers, 
  Mountain,
  ExternalLink,
  Info,
  CheckCircle2,
  Database
} from 'lucide-react';

interface ResearchSource {
  title: string;
  agency: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  use: string;
  details: string;
  relevance: string;
}

const researchSources: ResearchSource[] = [
  {
    title: 'Geological Survey of India (GSI)',
    agency: 'Ministry of Mines, Government of India',
    category: 'Geological & Susceptibility Baselines',
    icon: Map,
    color: 'bg-amber-50 text-amber-900 border-amber-200',
    badge: 'National Geological Authority',
    use: 'Landslide susceptibility maps, geological information and hazard information.',
    details: 'Provides national-scale macro-zonation, lithological formations, historical landslide inventory records, and terrain stability classifications across the North Eastern Region.',
    relevance: 'Forms the geological ground truth foundation for static slope vulnerability parameters.'
  },
  {
    title: 'ISRO Bhuvan / NRSC',
    agency: 'National Remote Sensing Centre (NRSC / ISRO)',
    category: 'Satellite & Geospatial Telemetry',
    icon: Satellite,
    color: 'bg-blue-50 text-blue-900 border-blue-200',
    badge: 'Space & Geospatial Platform',
    use: 'Geospatial information and satellite data for terrain and risk mapping.',
    details: 'Delivers high-resolution Indian Earth observation satellite telemetry (Cartosat, Resourcesat), thematic geospatial hazard layers, and digital land-use classifications.',
    relevance: 'Supplies hyperlocal remote-sensing imagery and spatial geo-referencing layers.'
  },
  {
    title: 'India Meteorological Department (IMD)',
    agency: 'Ministry of Earth Sciences, Government of India',
    category: 'Meteorological Observations',
    icon: CloudRain,
    color: 'bg-sky-50 text-sky-900 border-sky-200',
    badge: 'National Weather Agency',
    use: 'Rainfall and weather observations.',
    details: 'Automated Weather Stations (AWS), Doppler radar rainfall grids, synoptic forecasts, and historical monsoonal precipitation records across North Eastern hill stations.',
    relevance: 'Primary real-time and forecasted dynamic trigger for rainfall-induced slope instability.'
  },
  {
    title: 'National Disaster Management Authority (NDMA)',
    agency: 'Ministry of Home Affairs, Government of India',
    category: 'Disaster Risk Reduction Frameworks',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    badge: 'Disaster Governance Body',
    use: 'Disaster management guidance and landslide risk reduction frameworks.',
    details: 'National Landslide Risk Mitigation Strategy guidelines, standard operating procedures (SOPs) for civil alerts, and community evacuation threshold guidelines.',
    relevance: 'Governs our early warning tier classifications and civil decision support workflows.'
  },
  {
    title: 'NASA GPM / LHASA',
    agency: 'NASA Earth Science / Global Precipitation Measurement',
    category: 'Global Landslide Hazard Research',
    icon: Compass,
    color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    badge: 'Global Research Model',
    use: 'Rainfall-based landslide hazard research and situational awareness.',
    details: 'Landslide Hazard Assessment for Situational Awareness (LHASA) open-source framework and Global Precipitation Measurement (GPM) multi-satellite rain data.',
    relevance: 'Serves as scientific literature benchmark for antecedent rainfall index formulations.'
  },
  {
    title: 'SHAP (SHapley Additive exPlanations)',
    agency: 'Interpretable Machine Learning Community',
    category: 'Explainable Artificial Intelligence',
    icon: BrainCircuit,
    color: 'bg-purple-50 text-purple-900 border-purple-200',
    badge: 'XAI Framework',
    use: 'Explainable AI for identifying important factors behind predictions.',
    details: 'Game-theoretic cooperative game formulation calculating exact marginal feature contributions (Shapley values) for complex non-linear ensemble and deep neural models.',
    relevance: 'Enables LANDSENTINEL AI to provide human-readable factor attributions for every risk prediction.'
  },
  {
    title: 'Copernicus / Sentinel (ESA)',
    agency: 'European Space Agency & European Commission',
    category: 'SAR & Optical Earth Observation',
    icon: Layers,
    color: 'bg-teal-50 text-teal-900 border-teal-200',
    badge: 'Open Earth Observation',
    use: 'Satellite imagery and environmental monitoring.',
    details: 'Sentinel-1 Synthetic Aperture Radar (SAR) for cloud-penetrating ground deformation and moisture indices, plus Sentinel-2 optical multi-spectral vegetation indices (NDVI).',
    relevance: 'Provides continuous open-access satellite telemetry during cloud-heavy monsoonal periods.'
  },
  {
    title: 'Digital Elevation Models (DEM)',
    agency: 'SRTM / CartoDEM / ALOS PALSAR',
    category: 'Topographic & Morphometric Modeling',
    icon: Mountain,
    color: 'bg-slate-100 text-slate-900 border-slate-300',
    badge: 'Elevation & Terrain Baseline',
    use: 'Elevation and slope-derived terrain features for landslide risk modelling.',
    details: 'High-resolution Digital Elevation Models used to calculate primary topographic indices: slope gradient, aspect, curvature, Topographic Wetness Index (TWI), and flow accumulation.',
    relevance: 'Crucial baseline geometry that defines gravitational shear stress on mountain slopes.'
  }
];

export const ResearchPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        topicNumber="Topic 10 of 10"
        title="Research and Data Sources"
        subtitle="Foundational Scientific Literature, Public Data Repositories & Government Frameworks Supporting LANDSENTINEL AI"
        badge="SIH26001 Scientific Baseline"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-10">
        {/* Core Philosophy Banner */}
        <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
              Scientific & Institutional Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Grounded in Proven Geological Science & Open Geospatial Standards
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              LANDSENTINEL AI does not operate in a vacuum. Our architecture is designed to ingest and harmonize verified data streams from premier Indian and global space, meteorological, and disaster management agencies.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                Government of India Data Portals
              </span>
              <span className="px-2.5 py-1 bg-blue-950 text-blue-300 rounded border border-blue-800">
                Open Access Satellite Constellations
              </span>
              <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 rounded border border-emerald-800">
                Peer-Reviewed Explainable AI (XAI)
              </span>
            </div>
          </div>
        </section>

        {/* Prototype Clarification Banner */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-xs text-blue-950">
          <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Prototype & Conceptual Demonstration Note:</strong> During the hackathon phase, our system utilizes open sample datasets, published GSI susceptibility records, and simulated API pipelines. In a full-scale deployment, direct API feeds from IMD AWS networks, ISRO Bhuvan geospatial servers, and deployed IoT field gateways will be integrated.
          </div>
        </div>

        {/* 8 Research Source Cards */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                Authoritative Data Sources
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                The 8 Core Data & Methodological Pillars
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              8 Standardized Integrations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchSources.map((source, idx) => {
              const Icon = source.icon;
              return (
                <div 
                  key={source.title}
                  className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-5 sm:p-6 transition-all shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${source.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            {source.category}
                          </span>
                          <h3 className="font-bold text-slate-900 text-base leading-tight">
                            {source.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{idx + 1}
                      </span>
                    </div>

                    <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>{source.agency}</span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-1.5">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Core Use: {source.use}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {source.details}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Relevance to Model:</span>
                    <span className="text-blue-900 font-semibold text-right max-w-[70%]">
                      {source.relevance}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Multi-Source Fusion Integration Summary */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-900" />
            <h3 className="font-bold text-slate-900 text-lg">
              Data Harmonization & Fusion Architecture
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            By harmonizing static geological data (GSI susceptibility + DEM slope derivatives) with high-frequency dynamic telemetry (IMD rainfall + IoT soil moisture/tilt + Sentinel SAR moisture indices), LANDSentinel AI establishes a multi-dimensional risk matrix capable of predicting slope instability hours before catastrophic failure occurs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block text-blue-900">1. Static Parameters</span>
              <span className="text-slate-600 mt-1 block">Lithology, DEM Slope, Fault Zones, Historical Landslide Scars</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block text-purple-900">2. Dynamic Telemetry</span>
              <span className="text-slate-600 mt-1 block">Live Rain Gauges, Soil Saturation Indices, Tilt Inclinometers</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block text-emerald-900">3. Explainable Output</span>
              <span className="text-slate-600 mt-1 block">SHAP Factor Attribution, 0–100 Dynamic Score, Hyperlocal GIS Alert</span>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <SectionNavigator 
          prev={{ name: 'Impact & Benefits', path: '/impact' }}
          next={{ name: 'Home Overview', path: '/' }}
        />
      </div>
    </div>
  );
};
