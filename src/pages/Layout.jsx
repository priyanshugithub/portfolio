import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="dark">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white
                       dark:from-slate-900 dark:to-slate-800">
                        {children}
      </main>
    </div>
  );
}
