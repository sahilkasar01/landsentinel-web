import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ProblemPage } from './pages/ProblemPage';
import { CurrentApproachPage } from './pages/CurrentApproachPage';
import { SolutionPage } from './pages/SolutionPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { InnovationPage } from './pages/InnovationPage';
import { FeasibilityPage } from './pages/FeasibilityPage';
import { ImpactPage } from './pages/ImpactPage';
import { ResearchPage } from './pages/ResearchPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-200 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/current-approach" element={<CurrentApproachPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/feasibility" element={<FeasibilityPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/research" element={<ResearchPage />} />
            {/* Fallback route to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
