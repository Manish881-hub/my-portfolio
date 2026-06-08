import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const projects = [
  {
    slug: 'adtext',
    title: 'Adtext',
    role: 'AI Monetization Platform',
    colors: ['#4f46e5', '#7c3aed'],
    features: ['Campaigns', 'Analytics', 'Revenue'],
  },
  {
    slug: 'dimewise-ai-finance-app',
    title: 'Dimewise',
    role: 'AI Finance Dashboard',
    colors: ['#7c3aed', '#ec4899'],
    features: ['Budget', 'Transactions', 'Insights'],
  },
  {
    slug: 'empty-cups',
    title: 'Empty Cups',
    role: 'Listing Platform',
    colors: ['#3b82f6', '#06b6d4'],
    features: ['Listings', 'Orders', 'Analytics'],
  },
  {
    slug: 'real-estate-tenant-platform',
    title: 'Tenant Platform',
    role: 'Property Management',
    colors: ['#a855f7', '#f43f5e'],
    features: ['Tenants', 'Properties', 'Leases'],
  },
  {
    slug: 'certifyme',
    title: 'CertifyME',
    role: 'Digital Certificate Manager',
    colors: ['#0ea5e9', '#6366f1'],
    features: ['Certificates', 'Verify', 'Templates'],
  },
  {
    slug: 'todo-app-with-authentication',
    title: 'Todo Auth',
    role: 'Secure Task Manager',
    colors: ['#d946ef', '#7c3aed'],
    features: ['Tasks', 'Teams', 'Completed'],
  },
  {
    slug: 'firebase-login-authentication',
    title: 'Firebase Auth',
    role: 'Auth System',
    colors: ['#6366f1', '#3b82f6'],
    features: ['Login', 'Users', 'Security'],
  },
];

projects.forEach((p) => {
  const [c1, c2] = p.colors;
  const navItems = ['Dashboard', ...p.features, 'Settings'].map(
    (label, i) =>
      `<text x="16" y="${56 + i * 28}" fill="${i === 0 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)'}" font-family="system-ui,sans-serif" font-size="11" font-weight="${i === 0 ? '600' : '400'}">${label}</text>`
  ).join('');

  const card = (cx, cy, cw, ch) =>
    `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="6" fill="rgba(255,255,255,0.08)"/>` +
    `<rect x="${cx + 10}" y="${cy + 10}" width="${cw * 0.4}" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>` +
    `<rect x="${cx + 10}" y="${cy + 24}" width="${cw * 0.7}" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>`;

  const contentCards = [card(180, 60, 200, 80), card(400, 60, 200, 80), card(180, 160, 420, 140)];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="g-${c1.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${c2}" stop-opacity="0.3"/>
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect width="30" height="30" fill="none"/>
      <rect width="1" height="1" fill="rgba(255,255,255,0.03)" x="0" y="0"/>
    </pattern>
  </defs>
  <!-- bg -->
  <rect width="800" height="500" fill="url(#bg)"/>
  <rect width="800" height="500" fill="url(#grid)"/>
  <!-- browser chrome -->
  <rect x="0" y="0" width="800" height="30" fill="rgba(0,0,0,0.2)"/>
  <circle cx="14" cy="15" r="4" fill="#ff5f57"/>
  <circle cx="28" cy="15" r="4" fill="#ffbd2e"/>
  <circle cx="42" cy="15" r="4" fill="#28c840"/>
  <text x="400" y="19" text-anchor="middle" fill="rgba(255,255,255,0.25)" font-family="system-ui,sans-serif" font-size="10">${p.title} — ${p.role}</text>
  <!-- sidebar -->
  <rect x="0" y="30" width="160" height="470" fill="rgba(0,0,0,0.15)"/>
  <!-- logo in sidebar -->
  <rect x="12" y="40" width="24" height="24" rx="6" fill="white" opacity="0.15"/>
  <text x="44" y="57" fill="rgba(255,255,255,0.8)" font-family="system-ui,sans-serif" font-size="13" font-weight="700">${p.title}</text>
  <!-- nav items -->
  ${navItems}
  <!-- content area -->
  ${contentCards.join('')}
</svg>`;

  writeFileSync(join(__dirname, '..', 'public', 'projects', `${p.slug}.svg`), svg);
  console.log(`Updated ${p.slug}.svg`);
});
