import type { CSSProperties } from "react";
const paths: Record<string, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  diagonal: <><path d="M6 18 18 6M6 6h12v12" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-3 5-5 3 3-5 5-3Z" /></>,
  layers: <><path d="m12 3 10 6-10 6L2 9l10-6ZM2 14l10 6 10-6M2 18l10 6 10-6" /></>,
  flask: <><path d="M9 3h6M10 3v7l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3M8 15h8" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  file: <><path d="M14 2H5v20h14V7l-5-5ZM14 2v6h5M8 13h8M8 17h5" /></>,
  sparkles: <><path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4M18 4h4" /></>,
  terminal: <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m6 9 3 3-3 3M12 15h5" /></>,
  chart: <><path d="M3 3v18h18M6 16l5-6 4 3 6-8" /></>,
  search: <><circle cx="10.5" cy="10.5" r="7" /><path d="m16 16 5 5" /></>,
  check: <><path d="m7 12 3 3 7-7" /><rect x="3" y="3" width="18" height="18" rx="5" /></>,
  shield: <><path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z" /><path d="m8 12 3 3 5-6" /></>,
  menu: <><path d="M3 6h18M3 12h18M3 18h18" /></>,
  close: <><path d="m5 5 14 14M19 5 5 19" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 5 10 8L22 5" /></>,
  chevron: <path d="m8 10 4 4 4-4" />,
  plus: <path d="M12 5v14M5 12h14" />,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
};
export function Icon({ name, size = 24, className = "", style }: { name: string; size?: number; className?: string; style?: CSSProperties }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">{paths[name] || paths.sparkles}</svg>;
}
export function Logo({ light = false }: { light?: boolean }) {
  return <span className={`logo ${light ? "logo-light" : ""}`}><svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><path d="M4 3h7v10h8V3h7v24h-7V18h-8v9H4Z" fill="currentColor" /><path d="m15 0 4 6-4 6-4-6Z" fill="#5d7bff" /></svg><span>HJSol<span className="logo-dot">.</span></span></span>;
}
