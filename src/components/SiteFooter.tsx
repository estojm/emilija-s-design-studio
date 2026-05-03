const SiteFooter = () => {
  const items = ["Available · Q3 ’26", "Based in Berlin", "ex-Spotify · ex-N26", "e.stojmenovska@gmail.com"];
  return (
    <footer className="relative overflow-hidden bg-foreground text-background mt-32">
      <div className="border-y border-background/10 py-6 overflow-hidden">
        <div className="marquee-track flex gap-16 whitespace-nowrap font-display text-5xl md:text-7xl italic">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              {["Designing with data", "Shipping with taste", "Measuring what matters", "Designing with data"].map((t, j) => (
                <span key={j} className="flex items-center gap-16">
                  {t}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container py-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-background/50 mb-4">Get in touch</p>
          <a href="mailto:e.stojmenovska@gmail.com" className="font-display text-4xl underline-grow md:text-4xl">
            e.stojmenovska@gmail.com
          </a>
        </div>
      </div>
      <div className="container pb-8 flex justify-between text-xs font-mono text-background/40">
        <span>© 2026 Emilija</span>
        <span>Made with care, measured with data.</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
