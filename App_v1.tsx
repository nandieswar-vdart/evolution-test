import React from 'react';
import { Version1 } from './sites/v1';
import { VersionViewer } from './components/VersionViewer';

const App_v1: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8 font-sans">
      <div className="max-w-6xl w-full">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight italic uppercase">ProTasker V1</h1>
          <p className="text-slate-400">Baseline single-user product experience.</p>
        </header>

        <main className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <VersionViewer site={Version1} version={'v1'} />
        </main>

        <footer className="mt-8 text-center text-slate-400">Standalone pages: <a href="/v1-files/site-v1/index.html">v1 static site</a></footer>
      </div>
    </div>
  );
};

export default App_v1;
