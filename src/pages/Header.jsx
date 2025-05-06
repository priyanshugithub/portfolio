import { useState } from "react";
import DesktopNav from "../components/DesktopNav";
import MobileNav  from "../components/MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between
                    bg-slate-50/90 px-6 py-4 backdrop-blur-md shadow-sm
                    dark:bg-slate-800/60">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
        Priyanshu.dev
      </h1>

      <DesktopNav className="" />

      {/* Hamburger */}
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="md:hidden"
      >
        <svg className="w-6 h-6 stroke-indigo-600 dark:stroke-indigo-200" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          {open
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {open && <MobileNav onNavigate={() => setOpen(false)} />}
    </header>
  );
}
