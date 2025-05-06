import Header from "../components/Header.jsx";

export default function Layout({ children }) {
  return (
    <div className={dark ? "dark" : ""}>
      <Header />
      <main className="min-h-screen …">{children}</main>
    </div>
  );
}
