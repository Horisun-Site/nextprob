import React from "react";

const projects = [
  {
    id: 1,
    name: "DashBoard App",
    image: "https://cdn.pixabay.com/photo/2013/10/25/17/26/tree-200795_1280.jpg",
    link: "https://tema-parfait.vercel.app/admin/dashboard",
  },
  {
    id: 2,
    name: "E-commerce App",
    image: "https://cdn.pixabay.com/photo/2016/06/19/08/58/shop-1466324_1280.jpg",
    link: "https://timi-shop-x15j.vercel.app/",
  },
  {
    id: 3,
    name: "Business firm site",
    image: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
    link: "https://wellow.vercel.app/",
  },
  {
    id: 4,
    name: "mini-blog site",
    image: "https://cdn.pixabay.com/photo/2015/03/22/15/26/blog-684748_1280.jpg",
    link: "https://timilehin-blog-dcjb.vercel.app/",
  },
  {
    id: 5,
    name: "Phone Repair store",
    image: "https://www.image2url.com/r2/default/images/1785574300556-f18e770a-6387-4b43-99a5-0562040130a1.jpg",
    link: "https://hykinsrepair.vercel.app/",
  },
  {
    id: 6,
    name: "fun and cooking site",
    image: "https://cdn.pixabay.com/photo/2025/08/08/07/43/cooking-9762156_1280.png",
    link: "https://fun-site-three.vercel.app/",
  },
  {
    id: 7,
    name: "Note-Pad App",
    image: "https://cdn.pixabay.com/photo/2018/04/07/08/28/notepad-3297994_1280.jpg",
    link: "https://timpad.vercel.app/",
  },
  {
    id: 8,
    name: "Business firm site",
    image: "https://cdn.pixabay.com/photo/2022/08/24/20/54/subscribe-7408764_1280.png",
    link: "https://wellow.vercel.app/",
  },
  {
    id: 9,
    name: "Business firm site",
    image: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
    link: "https://wellow.vercel.app/",
  },
];

function getHostname(link) {
  try {
    return new URL(link).hostname.replace("www.", "");
  } catch {
    return "live.site";
  }
}

const Wish = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden border-b border-cyan-400/10 px-5 py-16 text-slate-200 sm:px-8 md:px-20 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-400/80">
              {"// 03 — selected.projects"}
            </p>
            <h2 className="animate-fadeSlide text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-slate-400">
              <span className="text-emerald-400">$</span> ls ./work --deployed
              <span className="animate-blink ml-1 text-cyan-400">▌</span>
            </p>
          </div>

          <div className="rounded-lg border border-white/[0.08] bg-[#070c17]/70 px-4 py-3 font-mono text-[10px] text-slate-500">
            <p>
              <span className="text-emerald-400">✓</span> {projects.length} live
              builds
            </p>
            <p className="mt-1">
              <span className="text-cyan-400">→</span> click any window to open
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex w-full animate-cardFadeUp flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="code-panel group w-full max-w-sm overflow-hidden rounded-2xl transition duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
                {/* Window chrome */}
                <div className="code-chrome flex items-center justify-between px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="terminal-dot bg-red-400/80" />
                    <span className="terminal-dot bg-yellow-400/80" />
                    <span className="terminal-dot bg-emerald-400/80" />
                  </div>
                  <span className="font-mono text-[9px] text-slate-500">
                    project-{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] text-emerald-400">
                    deployed
                  </span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`Open ${project.name} live project`}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute right-2 top-2 z-20 animate-bounce rounded-full border-2 border-[#05070d] bg-cyan-400 px-2.5 py-1 font-mono text-[9px] font-bold text-[#031018] shadow-lg">
                      🚀 open
                    </div>

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-48 w-full cursor-pointer object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      loading="lazy"
                    />

                    <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#020617]/70 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span className="rounded-lg border border-cyan-400/40 bg-[#031018]/80 px-4 py-2 font-mono text-xs font-semibold tracking-wide text-cyan-200 backdrop-blur">
                        open_project ↗
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.06] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                          {getHostname(project.link)}
                        </p>
                        <h3 className="mt-1 text-base font-bold tracking-wide text-white transition group-hover:text-cyan-200">
                          {project.name}
                        </h3>
                      </div>
                      <span className="mt-1 font-mono text-xs text-cyan-400 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 font-mono text-[9px] text-slate-500">
                      <span className="rounded border border-emerald-400/20 bg-emerald-400/[0.06] px-1.5 py-0.5 text-emerald-400">
                        status: live
                      </span>
                      <span className="text-slate-700">|</span>
                      <span>build: passing</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
          <span className="text-emerald-400">$</span> more experiments on{" "}
          <a
            href="https://github.com/Horisun-Site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 transition hover:text-cyan-300"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wish;
