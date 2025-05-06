import { useState } from "react";

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <header className="flex items-center justify-between px-6 py-4
                         bg-white/80 backdrop-blur-sm shadow-sm dark:bg-slate-800/60">
        <h1 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
          Priyanshu.dev
        </h1>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <span>Dark</span>
          <input
            type="checkbox"
            checked={dark}
            onChange={(e) => setDark(e.target.checked)}
            className="toggle"
          />
        </label>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white
                       dark:from-slate-900 dark:to-slate-800">
        {children}
      </main>
    </div>
  );
}
