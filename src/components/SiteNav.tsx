import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
];

const SiteNav = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-2.5 w-2.5 rounded-full bg-accent animate-blink" />
          <span className="font-display text-xl tracking-tight">
            Emilija<span className="text-accent">.</span>
          </span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-mono uppercase tracking-widest">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`underline-grow pb-1 ${active ? "text-accent" : "text-foreground/70 hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="mailto:hello@emilija.design"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
          >
            Let's talk →
          </a>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
