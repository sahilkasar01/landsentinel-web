import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Bookmark, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  slideRef?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge = "SIH PS 26001 Companion",
  slideRef
}) => {
  return (
    <div className="bg-white border-b border-slate-200 py-8 mb-8" id="page-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-blue-900 flex items-center gap-1">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{title}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
              <Bookmark className="w-3 h-3 text-blue-700" />
              {badge}
            </span>
            {slideRef && (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-300">
                Presentation Ref: {slideRef}
              </span>
            )}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
