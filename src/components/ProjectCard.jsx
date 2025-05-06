import { Github } from "lucide-react";

export default function ProjectCard({ p }) {
    return (
      <article className="group rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm
                          transition hover:shadow-lg dark:bg-slate-800/60">
        <img
          src={p.image}
          alt={p.title}
          className="h-40 w-full rounded-t-2xl object-cover"
        />
  
        <div className="space-y-2 p-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {p.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {p.tagline}
          </p>
  
          <ul className="flex flex-wrap gap-2 pt-1">
            {p.tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-brand/10 px-3 py-1
                           text-xs text-brand dark:bg-brand-dark/20
                           dark:text-brand-dark"
              >
                {t}
              </li>
            ))}
          </ul>
  
          <div className="flex gap-4 pt-2">
          <a href={p.repo} aria-label="GitHub repo" target="_blank" rel="noreferrer">
            <Github className="w-5 h-5 stroke-current hover:scale-110 transition" />
          </a>
            <a href={p.live} className="text-sm underline">
              Live
            </a>
          </div>
        </div>
      </article>
    );
  }
  