import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Info, ExternalLink } from 'lucide-react';
import { navItems } from './Navbar';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20" id="main-footer">
      {/* Disclaimer Box */}
      <div className="border-b border-slate-800 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-start gap-3 text-xs text-slate-400 bg-slate-900/90 border border-slate-800 rounded-lg p-4">
            <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-200">Note for SIH Evaluators:</span> This website is an interactive educational and theoretical companion developed for our Smart India Hackathon 2026 presentation (Problem Statement 26001). It outlines our proposed architecture, data fusion methodology, risk formulation, and feasibility analysis without simulating fictitious real-time sensor streams or false alerts.
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">LANDSENTINEL AI</span>
                <span className="block text-xs text-emerald-400 font-medium">From Data to Early Warning</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI-Based Landslide Risk Intelligence and Early Warning Framework designed to transform fragmented environmental data into actionable, explainable geographical intelligence for vulnerable hill regions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs border border-slate-700">
                Smart India Hackathon 2026
              </span>
              <span className="px-2.5 py-1 bg-blue-950 text-blue-300 rounded text-xs border border-blue-800">
                Problem Statement ID: SIH26001
              </span>
              <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 rounded text-xs border border-emerald-800">
                Theme: Disaster Management (Software)
              </span>
            </div>
          </div>

          {/* Quick Route Links (Part 1) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Presentation Routes
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>→</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Route Links (Part 2) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Framework & Analysis
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.slice(5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>→</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong className="text-slate-300">LANDSENTINEL AI</strong> — Smart India Hackathon 2026 (SIH26001).
          </div>
          <div className="flex items-center gap-4">
            <span>SIH Problem Statement SIH26001</span>
            <span>•</span>
            <span>From Data to Early Warning</span>
            <span>•</span>
            <span>Disaster Management Theme</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
