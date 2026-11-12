const stack = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "MongoDB",
  "Astra DB",
  "React Native",
  "WordPress",
  "SEO",
  "Figma",
  "Graphic Design",
];

export default function CodeTicker() {
  const items = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden border-y border-cyan-400/10 bg-[#060a13]/80 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070d] to-transparent" />
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap font-mono text-xs tracking-wider text-slate-400 sm:text-sm">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-3">
            <span className="text-emerald-400">$</span>
            <span>{item}</span>
            <span className="text-slate-700">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
