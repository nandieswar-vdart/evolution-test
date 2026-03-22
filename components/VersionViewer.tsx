import React, { useState, useEffect } from 'react';
import { SiteVersion, PageKey } from '../types';

interface VersionViewerProps {
  site: SiteVersion;
  version: 'v1' | 'v2';
}

export const VersionViewer: React.FC<VersionViewerProps> = ({ site, version }) => {
  const [currentPage, setCurrentPage] = useState<PageKey>(site.navigation[0].key);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setCurrentPage(site.navigation[0].key);
  }, [site]);

  const activePage = site.pages[currentPage] || site.pages[site.navigation[0].key];

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <aside className={`bg-white border-r border-slate-200 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex-1 space-y-2">
            {site.navigation.map((nav) => (
              <button
                key={nav.key}
                onClick={() => setCurrentPage(nav.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === nav.key 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}>
                <div className={`w-2 h-2 rounded-full ${currentPage === nav.key ? 'bg-indigo-500' : 'bg-slate-300'}`}></div>
                {isSidebarOpen && <span>{nav.label}</span>}
              </button>
            ))}
          </div>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-400 hover:text-slate-600 text-xs border-t border-slate-100 pt-4 flex justify-center">
            {isSidebarOpen ? 'COLLAPSE' : 'EXPAND'}
          </button>
        </div>
      </aside>

      <section className="flex-1 bg-white overflow-y-auto">
        <div className="max-w-6xl mx-auto p-8">
          <div className="mb-8 flex justify-between items-center border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{activePage?.title}</h2>
              <p className="text-slate-500 mt-1">Browser Path: /site-{version}/{activePage?.path}</p>
            </div>
          </div>
          {activePage?.content}
        </div>
      </section>
    </div>
  );
};
