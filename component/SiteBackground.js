import CodeRain from "./CodeRain";

export default function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05070d]"
    >
      <div className="absolute inset-0 code-grid opacity-70" />
      <CodeRain />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.13),transparent_42%),radial-gradient(circle_at_85%_35%,rgba(139,92,246,0.10),transparent_36%),radial-gradient(circle_at_10%_80%,rgba(74,222,128,0.07),transparent_32%)]" />
      <div className="scanlines absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="animate-scan absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-cyan-300/[0.04] to-transparent" />
    </div>
  );
}
