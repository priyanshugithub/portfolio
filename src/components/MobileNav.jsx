import { links } from "./Links";

export default function MobileNav({ onNavigate }) {
  return (
    <nav className="absolute inset-x-0 top-full flex flex-col gap-4
                    bg-white/90 p-6 shadow-md backdrop-blur-sm md:hidden
                    dark:bg-slate-800/90">
      {links.map(l => (
        <a key={l.href} href={l.href} onClick={onNavigate}
           className="text-base font-medium text-slate-700 hover:text-indigo-600
                      dark:text-slate-200 dark:hover:text-indigo-300">
          {l.label}
        </a>
      ))}
    </nav>
  );
}
