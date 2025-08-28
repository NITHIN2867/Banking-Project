// SVG icon components for dashboard cards
// Place in src/components/DashboardIcons.jsx
import React from 'react';

export const UsersIcon = () => (
  <svg width="56" height="56" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#fff"/>
    <path d="M18 18c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.33 0-10 1.667-10 5v3h20v-3c0-3.333-6.67-5-10-5z" fill="#4f8cff"/>
  </svg>
);

export const DepositsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#fff"/>
    <path d="M12 24h12v-2H12v2zm0-4h12v-2H12v2zm0-4h12V8H12v8zm2-6h8v4h-8V10z" fill="#43e97b"/>
  </svg>
);

export const TransactionsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#fff"/>
    <g stroke="#f7971e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 18h12" />
      <path d="M20 14l4 4-4 4" />
      <path d="M16 22l-4-4 4-4" />
    </g>
  </svg>
);

export const LoansIcon = () => (
  <svg width="56" height="56" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#fff"/>
    <g>
      <path d="M10 22c1.5-2 4.5-2 6 0s4.5 2 6 0" stroke="#ff5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M13 18c0-2 3-2 3 0s3 2 3 0" stroke="#ff5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 16c0-1.5 2-1.5 2 0s2 1.5 2 0" stroke="#ff5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M24 16c0-1.5-2-1.5-2 0s-2 1.5-2 0" stroke="#ff5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M14 20l2 2 2-2" stroke="#ff5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="18" cy="24" r="2" fill="#ff5858"/>
      <text x="18" y="25.5" textAnchor="middle" fontSize="1.2em" fill="#fff" fontFamily="Arial">₹</text>
    </g>
  </svg>
);
