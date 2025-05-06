import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="dark">
      <Header />
      <main className="min-h-screen …">{children}</main>
    </div>
  );
}
