import React from 'react';

export const Changelog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-12">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Sprint Release: ProTasker 2.0</h2>
        <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
          Release Evolution
        </div>
        <p className="text-slate-500 text-lg">Detailed record of transitions from the V1 Baseline to the V2 Evolved product.</p>
      </div>

      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">High-Level Summary</h3>
          <p className="text-slate-600 leading-relaxed">
            The 2.0 sprint focused on shifting the platform from a solo task-tracking tool to a collaborative workspace. 
            Key changes include a complete visual overhaul using an "Indigo Modern" theme, the introduction of a new "Teams" 
            hierarchy, and the consolidation of profile management into the settings module for a more streamlined flow.
          </p>
        </section>

        <section className="space-y-8">
           <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">Feature & Module Changes</h3>
           
           <div className="grid gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-slate-800 text-lg">Core Navigation & Global UI</h4>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded tracking-widest uppercase">UI/Content Change</span>
                 </div>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                    <li>Primary brand color updated from Blue to Indigo.</li>
                    <li>Global font weight and spacing adjusted for higher density data display.</li>
                    <li>Navigation sidebar labels renamed: "Dashboard" to "Home", "Projects" to "Workspaces".</li>
                    <li>Sidebar collapsible interaction added for screen space optimization.</li>
                 </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-slate-800 text-lg">Workspaces (formerly Projects)</h4>
                    <span className="px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-black rounded tracking-widest uppercase">Flow Change</span>
                 </div>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                    <li>Switch from tabular list view to a visual grid-based card view.</li>
                    <li>Added "Archive Workspace" action to project cards.</li>
                    <li>View mode toggle (Grid/List) introduced in the toolbar.</li>
                 </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm border-l-4 border-l-green-500">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-slate-800 text-lg text-green-700">Teams Module</h4>
                    <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded tracking-widest uppercase">New Feature</span>
                 </div>
                 <p className="text-sm text-slate-600 mb-4">Entirely new section for cross-departmental collaboration.</p>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                    <li>Team directory with member counts and linked workspaces.</li>
                    <li>Real-time storage utilization tracker for team assets.</li>
                    <li>Team member "Active" status indicators.</li>
                 </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm border-l-4 border-l-red-500">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-slate-800 text-lg text-red-700">Profile & User Flow</h4>
                    <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-black rounded tracking-widest uppercase">Deprecated / Flow Change</span>
                 </div>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                    <li>Dedicated "Profile" navigation link removed from the sidebar.</li>
                    <li>User profile editing consolidated into a sub-tab within the "Settings" menu.</li>
                    <li>Added top-right "User Avatar" dropdown for quick profile access.</li>
                 </ul>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
