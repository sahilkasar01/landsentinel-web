import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SectionNavigator } from '../components/SectionNavigator';
import impactCommunityImg from '../assets/images/impact_community_1788113855875.jpg';
import protectedInfraImg from '../assets/images/protected_infra_1788113871437.jpg';
import { 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Home, 
  Activity, 
  Clock, 
  LifeBuoy, 
  Building2, 
  Compass, 
  Globe2, 
  BookOpen, 
  Plane, 
  Wrench,
  CheckCircle2,
  Shield,
  Milestone
} from 'lucide-react';

const impactPoints = [
  {
    title: 'Saves lives through earlier landslide risk awareness',
    desc: 'Provides critical advance warning hours ahead of critical slope collapse, enabling families and workers to move to designated safety zones.',
    icon: LifeBuoy,
    color: 'text-rose-600 bg-rose-50'
  },
  {
    title: 'Reduces injuries and property damage',
    desc: 'Preemptive alerts allow securing vehicles, livestock, machinery, and residential contents before catastrophic debris impact.',
    icon: ShieldCheck,
    color: 'text-amber-600 bg-amber-50'
  },
  {
    title: 'Improves disaster preparedness',
    desc: 'Equips district disaster management authorities (DDMA) with clear threat indices for preemptive resource and personnel staging.',
    icon: Activity,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Supports faster emergency response',
    desc: 'Pinpoints vulnerable micro-sectors before landslides sever primary access corridors, allowing rescue units to deploy without delays.',
    icon: Clock,
    color: 'text-indigo-600 bg-indigo-50'
  },
  {
    title: 'Builds resilience in vulnerable hill communities',
    desc: 'Fosters trust and organized safety protocols across remote mountain villages historically vulnerable to sudden monsoon cutoffs.',
    icon: Users,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Provides communities with actionable risk information',
    desc: 'Replaces complex technical charts with clear, plain-language risk indicators that local panchayats and volunteers can readily act upon.',
    icon: Home,
    color: 'text-teal-600 bg-teal-50'
  },
  {
    title: 'Supports evacuation planning',
    desc: 'Supplies precise geographical hazard zoning so local officials can plan safe evacuation routes and avoid dangerous hill passes.',
    icon: Compass,
    color: 'text-purple-600 bg-purple-50'
  },
  {
    title: 'Protects vulnerable populations by increasing warning time',
    desc: 'Gives elderly residents, children, and hospital patients in hill stations sufficient buffer time for dignified and safe relocation.',
    icon: HeartHandshake,
    color: 'text-rose-600 bg-rose-50'
  }
];

const benefitPoints = [
  {
    title: 'Helps reduce disaster recovery costs',
    desc: 'Mitigates millions of rupees spent on post-calamity debris excavation, temporary emergency shelters, and emergency compensation.',
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    title: 'Supports protection of roads, bridges and infrastructure',
    desc: 'Enables targeted slope stabilization and timely closure of critical mountain highways before heavy transit vehicles become trapped.',
    icon: Building2,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Supports land-use and slope monitoring',
    desc: 'Provides long-term geotechnical and terrain insights to guide municipal town planning, zoning regulations, and hillside construction limits.',
    icon: Compass,
    color: 'text-indigo-600 bg-indigo-50'
  },
  {
    title: 'Can be scaled to other landslide-prone regions',
    desc: 'Modular framework design allows straightforward adaptation to the Western Ghats, Himachal Pradesh, Uttarakhand, and Jammu & Kashmir.',
    icon: Globe2,
    color: 'text-purple-600 bg-purple-50'
  },
  {
    title: 'Strengthens the landslide early warning ecosystem',
    desc: 'Contributes to national disaster reduction goals under the National Disaster Management Authority (NDMA) guidelines.',
    icon: ShieldCheck,
    color: 'text-teal-600 bg-teal-50'
  },
  {
    title: 'Supports research using environmental information',
    desc: 'Generates standardized datasets of multi-source triggers to advance academic research in mountain hydrology and geotechnical modeling.',
    icon: BookOpen,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    title: 'Improves safety for communities and tourism',
    desc: 'Protects seasonal tourist flows and economic transit across the North East by providing reliable mountain route travel advisories.',
    icon: Plane,
    color: 'text-amber-600 bg-amber-50'
  },
  {
    title: 'Can create opportunities for monitoring and maintenance activities',
    desc: 'Encourages regular preventive maintenance of drainage culverts, retaining walls, and sensor stations by local civic bodies.',
    icon: Wrench,
    color: 'text-slate-600 bg-slate-100'
  }
];

export const ImpactPage: React.FC = () => {
  return (
    <div className="pb-12">
      <PageHeader 
        title="Impact & Benefits"
        subtitle="Exploring the life-saving human impact and long-term socio-economic advantages of the LANDSENTINEL AI framework."
        badge="Value & Outcomes"
        slideRef="Slide 9: Impact & Benefits"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro */}
        <section className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
                Human & Regional Outcomes
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Protecting Lives, Lifelines & Hill Economies
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                By bridging fragmented environmental data and predictive spatial intelligence, LANDSENTINEL AI delivers direct immediate life-safety impacts as well as enduring regional and structural benefits for the North Eastern Region.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Impact */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 rounded-xs bg-rose-600"></div>
            <div>
              <span className="text-xs uppercase font-bold text-rose-700 tracking-wider">
                Immediate Life & Community Safety
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Impact
              </h2>
            </div>
          </div>

          {/* Community Visual Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 bg-slate-900 aspect-16/10 md:aspect-auto">
                <img 
                  src={impactCommunityImg} 
                  alt="Mountain village community in North East India equipped with disaster safety protocols and early warnings" 
                  className="w-full h-full object-cover min-h-[220px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-center bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wide">
                  <Shield className="w-4 h-4 text-rose-600" />
                  <span>Human Life Protection</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  Empowering Hillside Communities with Advance Warning
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Moving from post-disaster rescue to preemptive alert broadcasts gives families, students, and local authorities critical hours to seek safe shelters and evacuate vulnerable zones before slope failure occurs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-5 transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className={`w-9 h-9 rounded-md flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Direct Community Impact</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Benefits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 rounded-xs bg-emerald-600"></div>
            <div>
              <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
                Long-Term Economic & Ecosystem Value
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Benefits
              </h2>
            </div>
          </div>

          {/* Infrastructure Protection Visual Card */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 bg-slate-900 aspect-16/10 md:aspect-auto">
                <img 
                  src={protectedInfraImg} 
                  alt="Protected mountain highway in North East India with engineered retaining walls and stabilized rock slope" 
                  className="w-full h-full object-cover min-h-[220px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-center bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  <Milestone className="w-4 h-4 text-emerald-700" />
                  <span>Infrastructure Lifeline Protection</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  Safeguarding Arterial Corridors & Mountain Economies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Proactive slope intelligence protects national highways, bridges, and power lines from sudden severances, ensuring unhindered transport of essential goods, medical supplies, and tourist connectivity across the region.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefitPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-5 transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className={`w-9 h-9 rounded-md flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] text-blue-800 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    <span>Sustainable Value</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section Navigation Footer */}
        <SectionNavigator 
          prev={{ name: 'Feasibility and Viability', path: '/feasibility' }}
          next={{ name: 'Home Portal Overview', path: '/' }}
        />
      </div>
    </div>
  );
};
