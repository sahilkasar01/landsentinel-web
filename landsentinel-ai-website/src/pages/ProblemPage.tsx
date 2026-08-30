import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import roadBlockedImg from '../assets/images/landslide_road_blocked_1788113721582.jpg';
import vulnerableSettlementImg from '../assets/images/vulnerable_settlement_1788113736997.jpg';
import { 
  AlertTriangle, 
  CloudRain, 
  Mountain, 
  Layers, 
  Activity, 
  Trees, 
  Truck, 
  Home, 
  HeartCrack, 
  Construction, 
  HelpCircle,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Gauge
} from 'lucide-react';

const primaryCauses = [
  {
    title: 'Heavy Rainfall',
    desc: 'Intense and prolonged monsoonal precipitation triggering sudden slope destabilization and pore-pressure buildup.',
    icon: CloudRain,
    color: 'text-sky-700 bg-sky-50 border-sky-200'
  },
  {
    title: 'Fragile Terrain',
    desc: 'Young Himalayan and Indo-Burma sedimentary formations with weathered shales and weak structural shear planes.',
    icon: Mountain,
    color: 'text-amber-700 bg-amber-50 border-amber-200'
  },
  {
    title: 'Steep Slopes',
    desc: 'High natural gradients often exceeding 35° to 65°, elevating gravitational shear stress on loose topsoil.',
    icon: Layers,
    color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
  },
  {
    title: 'Soil Saturation',
    desc: 'Subsurface moisture saturation drastically reducing soil cohesion and frictional resistance across slope faces.',
    icon: Gauge,
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
  },
  {
    title: 'Geological Instability',
    desc: 'Active tectonic boundaries, fault lines, lineaments, and micro-seismic vibrations destabilizing fragile strata.',
    icon: Activity,
    color: 'text-rose-700 bg-rose-50 border-rose-200'
  },
  {
    title: 'Environmental Changes',
    desc: 'Deforestation, land-use modifications, unmanaged hill cuttings, and drainage alterations intensifying runoff velocity.',
    icon: Trees,
    color: 'text-teal-700 bg-teal-50 border-teal-200'
  }
];

export const ProblemPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        topicNumber="Topic 1 of 10"
        title="Problem Statement: SIH26001"
        subtitle="AI-Based Early Warning and Landslide Risk Monitoring System in the North Eastern Region of India"
        badge="SIH26001 Problem Definition"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mt-8">
        {/* Core Philosophy Statement Prominent Banner */}
        <section className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-md text-center">
          <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
            The Fundamental Problem
          </span>
          <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-3 mb-3 uppercase leading-snug max-w-4xl mx-auto">
            &ldquo;THE PROBLEM IS NOT LACK OF DATA. <br className="hidden sm:inline" />THE PROBLEM IS LACK OF TIMELY INTELLIGENCE.&rdquo;
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The North Eastern Region is monitored by weather satellites, rain gauges, and terrain surveys. However, the critical challenge is converting fragmented, heterogeneous, and continuously changing data streams into timely, actionable, and explainable intelligence for early warning.
          </p>
        </section>

        {/* Core Overview Card */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-rose-700 tracking-wider">
                Geographical Reality in North Eastern India
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Why the North Eastern Region Faces Frequent Landslides
              </h2>
              <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                The North Eastern Region (NER) of India experiences severe and repetitive slope failures each year. The region&apos;s complex geomorphology combined with intense monsoonal precipitation creates an acute hazard landscape where landslides regularly cause loss of human lives, road blockages, and community isolation.
              </p>
            </div>
          </div>
        </section>

        {/* The 6 Core Factors */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                6 Primary Drivers
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Key Triggering & Vulnerability Factors
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              SIH26001 Hazard Parameters
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryCauses.map((cause) => {
              const Icon = cause.icon;
              return (
                <div 
                  key={cause.title}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 shadow-xs transition-colors space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${cause.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {cause.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visual Realities of Landslide Disasters */}
        <section className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
              Ground Evidence & Terrain Realities
            </span>
            <h2 className="text-xl font-bold text-slate-900">
              Visual Documentation of Regional Vulnerability
            </h2>
            <p className="text-sm text-slate-600">
              Photographic documentation showing how sudden slope movements sever critical arterial transport lifelines and threaten hillside communities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image 1: Road Blockage */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors">
              <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                <img 
                  src={roadBlockedImg} 
                  alt="Landslide and rockfall debris blocking a mountain arterial highway in North East India" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Image 1 • Arterial Road Disruption</span>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h3 className="text-xs font-bold text-slate-900">
                  Critical Transport Route Severed by Slope Failure
                </h3>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Debris flows, rockfalls, and mudslides frequently bury national highways, cutting off medical convoys and food logistics across remote mountain passes.
                </p>
              </div>
            </div>

            {/* Image 2: Vulnerable Settlement */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors">
              <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                <img 
                  src={vulnerableSettlementImg} 
                  alt="Vulnerable hillside town and rural settlement built on steep precarious terrain in heavy monsoon rain" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-rose-400" />
                  <span>Image 2 • Fragile Hillside Settlement</span>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <h3 className="text-xs font-bold text-slate-900">
                  Community Habitations on Precarious Slopes
                </h3>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Dense settlements and agricultural terraces situated on steep, water-saturated gradients face heightened disaster risks during extended monsoonal downpours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Challenge: Converting Data into Timely Intelligence */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-slate-900 text-lg">
              The Data Conversion Bottleneck
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            While satellite images, historical catalogs, and rainfall logs exist across different portals, they remain in silos. Disaster management officials and local district authorities cannot manually cross-reference high-resolution topography with dynamic soil saturation and live rainfall intensity in time to issue proactive local evacuations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block text-rose-700">1. Data Fragmentation</span>
              <span className="text-slate-600 mt-1 block">Weather, terrain, and geological data exist in separate unlinked portals.</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block text-amber-700">2. Time Lag</span>
              <span className="text-slate-600 mt-1 block">Manual risk synthesis is too slow to catch rapidly saturating slope thresholds.</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="font-bold text-slate-900 block text-emerald-700">3. LANDSENTINEL AI Fix</span>
              <span className="text-slate-600 mt-1 block">Automated AI fusion generating real-time, explainable early warnings.</span>
            </div>
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'Home Overview', path: '/' }}
          next={{ name: 'Why Current Approaches Are Limited', path: '/current-approach' }}
        />
      </div>
    </div>
  );
};
