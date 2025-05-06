import { useState } from "react";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between
                       bg-white/80 px-6 py-4 backdrop-blur-md shadow-sm
                       dark:bg-slate-800/60">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
        Priyanshu.dev
      </h1>

      {/* Desktop */}
      <DesktopNav className="hidden md:flex" />

      {/* Mobile toggle */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 stroke-indigo-600 dark:stroke-indigo-200"
          fill="none" strokeWidth="2" viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && <MobileNav onNavigate={() => setOpen(false)} />}
    </header>
  );
}
