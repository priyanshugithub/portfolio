const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  
  export default function DesktopNav({ className = "" }) {
    return (
      <nav className={`items-center gap-6 ${className}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-slate-700 hover:text-indigo-600
                       dark:text-slate-200 dark:hover:text-indigo-300"
          >
            {l.label}
          </a>
        ))}
      </nav>
    );
  }
  