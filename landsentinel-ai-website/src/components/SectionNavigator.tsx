import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface SectionNavigatorProps {
  prev?: { name: string; path: string };
  next?: { name: string; path: string };
}

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({ prev, next }) => {
  return (
    <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4" id="section-navigator">
      <div>
        {prev ? (
          <Link
            to={prev.path}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 hover:text-blue-900 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span>Previous: <strong className="font-semibold text-slate-900">{prev.name}</strong></span>
          </Link>
        ) : (
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
          >
            <Home className="w-4 h-4 text-slate-500" />
            <span>Back to Portal Overview</span>
          </Link>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="text-xs text-slate-500 hover:text-blue-900 font-medium px-3 py-1.5 rounded hover:bg-slate-100 transition-colors"
        >
          All Topics Overview
        </Link>
      </div>

      <div>
        {next ? (
          <Link
            to={next.path}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors shadow-2xs"
          >
            <span>Next: <strong className="font-semibold">{next.name}</strong></span>
            <ArrowRight className="w-4 h-4 text-emerald-300" />
          </Link>
        ) : (
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors shadow-2xs"
          >
            <span>Return to Home Overview</span>
            <ArrowRight className="w-4 h-4 text-emerald-300" />
          </Link>
        )}
      </div>
    </div>
  );
};
