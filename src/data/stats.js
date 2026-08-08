/* ══════════════════════════════════════════════
   CTF / TRAINING STATS
   ──────────────────────────────────────────────
   Update these by hand whenever your numbers move.
   `value` is what shows big; `label` sits under it.
   `accent` maps to a .stat-card modifier in index.css:
   cyan | green | amber | red
   ══════════════════════════════════════════════ */

export const ctfStats = [
  { value: '—', label: 'TryHackMe Rank', note: 'Global', accent: 'cyan' },
  { value: '—', label: 'Rooms Completed', note: 'TryHackMe', accent: 'green' },
  { value: '—', label: 'Badges Earned', note: 'All platforms', accent: 'amber' },
  { value: '—', label: 'Day Streak', note: 'Current', accent: 'red' },
]

/* Platforms shown as linked chips beneath the stat tiles. */
export const ctfPlatforms = [
  { name: 'TryHackMe', href: 'https://tryhackme.com/p/naveenkumar03585', handle: 'naveenkumar03585' },
  { name: 'Cylab Academy', href: 'https://learn.cylabacademy.org/users/ForestRanger', handle: 'ForestRanger' },
  { name: 'OverTheWire', href: 'https://overthewire.org/wargames/bandit/', handle: 'Bandit — completed' },
]
