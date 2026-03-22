
import React from 'react';

export type PageKey = 'dashboard' | 'projects' | 'settings' | 'profile' | 'teams' | 'workspaces';

export interface SitePage {
  title: string;
  path: string;
  content: React.ReactNode;
}

export interface SiteVersion {
  id: string;
  name: string;
  pages: Partial<Record<PageKey, SitePage>>;
  navigation: { key: PageKey; label: string }[];
}
