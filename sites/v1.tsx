import React from 'react';
import { SiteVersion } from '../../types';

export const Version1: SiteVersion = {
  id: 'v1',
  name: 'ProTasker V1',
  navigation: [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'projects', label: 'Projects' },
    { key: 'settings', label: 'Settings' },
    { key: 'profile', label: 'Profile' },
  ],
  pages: {
    dashboard: {
      title: 'Dashboard',
      path: 'index.html',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Tasks</h3>
              <p className="text-4xl font-bold text-slate-900">42</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">In Progress</h3>
              <p className="text-4xl font-bold text-blue-600">12</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Completed</h3>
              <p className="text-4xl font-bold text-green-600">30</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h3 className="font-semibold text-slate-700">Recent Activity</h3>
              <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
            </div>
            <ul className="divide-y divide-slate-100">
              <li className="px-6 py-4 text-sm text-slate-600">Task "Homepage Redesign" marked as complete by John.</li>
              <li className="px-6 py-4 text-sm text-slate-600">New project "Mobile App" created by Sarah.</li>
              <li className="px-6 py-4 text-sm text-slate-600">Jane added a comment to "API Documentation".</li>
            </ul>
          </div>
        </div>
      )
    },
    projects: {
      title: 'Projects',
      path: 'projects.html',
      content: (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm">
                <option>All Statuses</option>
                <option>Active</option>
                <option>On Hold</option>
              </select>
              <input type="text" placeholder="Search projects..." className="border border-slate-200 rounded-lg px-3 py-2 text-sm w-64" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              New Project
            </button>
          </div>
          <table className="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase text-left">
              <tr>
                <th className="px-6 py-3 border-b border-slate-200">Name</th>
                <th className="px-6 py-3 border-b border-slate-200">Owner</th>
                <th className="px-6 py-3 border-b border-slate-200">Progress</th>
                <th className="px-6 py-3 border-b border-slate-200">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900">Website Redesign</td>
                <td className="px-6 py-4 text-slate-600">John Doe</td>
                <td className="px-6 py-4 text-slate-600">75%</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span></td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900">Backend API</td>
                <td className="px-6 py-4 text-slate-600">Sarah Smith</td>
                <td className="px-6 py-4 text-slate-600">40%</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">In Review</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    settings: {
      title: 'Settings',
      path: 'settings.html',
      content: (
        <div className="max-w-2xl bg-white border border-slate-200 rounded-xl shadow-sm p-8">
          <div className="mb-8 border-b border-slate-100 pb-4">
            <div className="flex gap-8">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-4 text-sm font-bold">Preferences</button>
              <button className="text-slate-400 pb-4 text-sm font-medium hover:text-slate-600">Security</button>
              <button className="text-slate-400 pb-4 text-sm font-medium hover:text-slate-600">Billing</button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800">Dark Mode</h4>
                <p className="text-sm text-slate-500">Enable a darker interface for eye comfort</p>
              </div>
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Localization</label>
              <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg mt-4 hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      )
    },
    profile: {
      title: 'My Profile',
      path: 'profile.html',
      content: (
        <div className="max-w-2xl bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="h-24 bg-blue-600"></div>
          <div className="px-8 pb-8">
            <div className="relative -mt-12 mb-6">
              <div className="w-24 h-24 bg-white border-4 border-white rounded-full overflow-hidden shadow-lg">
                <img src="https://picsum.photos/200" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input type="text" defaultValue="John Doe" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" defaultValue="john@protasker.io" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50" disabled />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700">Bio</label>
                <textarea rows={3} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm" placeholder="Tell us about yourself..."></textarea>
              </div>
            </div>
            <button className="mt-8 px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
              Update Profile
            </button>
          </div>
        </div>
      )
    }
  }
};
