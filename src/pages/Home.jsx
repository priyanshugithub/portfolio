export default function Home() {
    return (
      <section className="flex flex-col items-center gap-4 py-20">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300">
          Hi, I’m Priyanshu 👋
        </h1>
        <p className="max-w-xl text-center text-lg text-slate-700 dark:text-slate-200">
          Front‑end developer relaunching my career with React + Tailwind.  
          This portfolio grows as I learn — watch this space!
        </p>
        <a
          href="#projects"
          className="rounded-xl border px-5 py-2
                     border-brand bg-brand/10 text-brand hover:bg-indigo-100 dark:bg-indigo-600/20
                     dark:text-indigo-200"
        >
          View projects
        </a>
      </section>
    );
  }
  