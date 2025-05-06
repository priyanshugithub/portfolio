import { links } from "./Links";
  
export default function DesktopNav({ className = "" }) {
    return (
      <nav className={`flex items-center gap-8 ${className}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-base font-semibold text-slate-900 hover:text-brand
                      dark:text-white dark:hover:text-brand-dark"
          >
            {l.label}
          </a>
        ))}
      </nav>
    );
  }
  