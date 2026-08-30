import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldAlert, 
  Menu, 
  X, 
  Layers, 
  AlertTriangle, 
  XCircle, 
  Lightbulb, 
  Cpu, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake,
  BookOpen
} from 'lucide-react';

export const navItems = [
  { name: 'Home', path: '/', icon: Layers },
  { name: 'Problem Statement', path: '/problem', icon: AlertTriangle },
  { name: 'Current Limitations', path: '/current-approach', icon: XCircle },
  { name: 'Proposed Solution', path: '/solution', icon: Lightbulb },
  { name: 'Technology Stack', path: '/technology', icon: Cpu },
  { name: 'Methodology', path: '/methodology', icon: Workflow },
  { name: 'Innovation', path: '/innovation', icon: Sparkles },
  { name: 'Feasibility & Viability', path: '/feasibility', icon: CheckCircle2 },
  { name: 'Impact & Benefits', path: '/impact', icon: HeartHandshake },
  { name: 'Research & Sources', path: '/research', icon: BookOpen },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs" id="main-header">
      {/* Top Banner for SIH Identification */}
      <div className="bg-slate-900 text-slate-100 text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2 font-medium">
          <span className="bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">
            SIH 2026
          </span>
          <span>Problem Statement ID: <strong className="text-white font-mono">SIH26001</strong></span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300">Theme: Disaster Management (Software)</span>
        </div>
        <div className="text-slate-300 text-[11px] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
          <span>Prototype & Technical Companion • NER Landslide AI</span>
        </div>
      </div>

      {/* Main Brand & Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-hidden"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-md bg-blue-900 text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-blue-800 transition-colors">
              <ShieldAlert className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-lg text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                LANDSENTINEL AI
              </div>
              <div className="text-xs text-slate-500 font-medium">
                From Data to Early Warning
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`nav-link-${item.path.replace('/', '') || 'home'}`}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-blue-900"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigation Menu (Direct SIH Slide Links)
            </div>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-blue-900 text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-slate-500'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
