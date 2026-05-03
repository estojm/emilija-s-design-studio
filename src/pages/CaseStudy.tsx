import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

const PROTECTED_SLUGS: Record<string, string> = {
  nrth: "EmcheDesigns1234",
};
const STORAGE_PREFIX = "cs-unlock:";

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  const requiredPassword = slug ? PROTECTED_SLUGS[slug] : undefined;
  const [unlocked, setUnlocked] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (study) document.title = `${study.title} — Emilija`;
    if (slug && requiredPassword) {
      setUnlocked(sessionStorage.getItem(STORAGE_PREFIX + slug) === "1");
    } else {
      setUnlocked(true);
    }
    setPwInput("");
    setPwError("");
  }, [study, slug, requiredPassword]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwInput === requiredPassword) {
      sessionStorage.setItem(STORAGE_PREFIX + (slug ?? ""), "1");
      setUnlocked(true);
      setPwError("");
    } else {
      setPwError("Incorrect password.");
    }
  };

  if (!study) {
    return (
      <div className="min-h-screen">
        <SiteNav />
        <div className="container py-32 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
            404 — Not found
          </p>
          <h1 className="font-display text-5xl mb-6">This case study is missing.</h1>
          <Link to="/" className="underline-grow font-mono text-sm">
            ← Back to all work
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  if (requiredPassword && !unlocked) {
    return (
      <div className="min-h-screen">
        <SiteNav />
        <div className="container py-24 md:py-32 max-w-md">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
            Protected case study
          </p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            This one's behind a password<span className="text-accent">.</span>
          </h1>
          <p className="text-foreground/70 mb-8">
            Reach out if you'd like access — or enter the password below.
          </p>
          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              value={pwInput}
              onChange={(e) => setPwInput(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full rounded-md border border-border bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {pwError && (
              <p className="font-mono text-xs text-destructive">{pwError}</p>
            )}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-mono text-sm hover:shadow-pop transition-all"
            >
              Unlock →
            </button>
          </form>
          <Link
            to="/#work"
            className="mt-8 inline-block underline-grow font-mono text-xs uppercase tracking-widest text-foreground/60"
          >
            ← Back to work
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const currentIdx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(currentIdx + 1) % caseStudies.length];

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Back link */}
      <div className="container pt-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to work
        </Link>
      </div>

      {/* HERO */}
      <header className="container pt-10 pb-12 grain relative">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-foreground/60 mb-6">
          <span>{study.index}</span>
          <span className="h-px w-10 bg-foreground/40" />
          <span>{study.client}</span>
          <span className="h-px w-10 bg-foreground/40" />
          <span>{study.year}</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] text-balance max-w-5xl">
          {study.title}<span className="text-accent">.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75">
          {study.overview}
        </p>

        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border/70 pt-6">
          {[
            { k: "Role", v: study.role },
            { k: "Team", v: study.team },
            { k: "Duration", v: study.duration },
            { k: "Headline", v: study.metric, accent: true },
          ].map((it) => (
            <div key={it.k}>
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
                {it.k}
              </dt>
              <dd className={`font-display text-xl ${it.accent ? "italic text-accent" : ""}`}>
                {it.v}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* COVER IMAGE */}
      <section className="container">
        <div
          className="relative overflow-hidden rounded-xl shadow-soft"
          style={{ background: study.hero }}
        >
          <img
            src={study.cover}
            width={1600}
            height={1024}
            alt={`${study.title} — cover`}
            className="w-full aspect-[16/10] object-cover mix-blend-multiply"
          />
        </div>
      </section>

      {/* METRICS BAND */}
      <section className="bg-foreground text-background mt-24 py-16">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-widest text-background/50 mb-8">
            By the numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((m) => (
              <div key={m.label} className="border-t border-background/20 pt-4">
                <p className="font-display text-5xl md:text-6xl text-accent italic">
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-background/60">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SECTIONS */}
      <article className="container py-24 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-28 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              The project
            </p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              How it came together
            </h2>
          </div>
        </aside>

        <div className="md:col-span-8 space-y-12">
          <Block label="Challenge" body={study.challenge} />
          <Block label="Approach" body={study.approach} />
          <Block label="Outcome" body={study.outcome} />

          {study.sections.map((s, i) => (
            <div key={s.heading} className="border-t border-border/70 pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">
                §0{i + 1}
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
                {s.heading}
              </h3>
              <p className="text-lg text-foreground/80 max-w-2xl">{s.body}</p>
            </div>
          ))}
        </div>
      </article>

      {/* GALLERY */}
      <section className="container pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-6">
          Gallery
        </p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {study.gallery.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-soft group"
            >
              <img
                src={img}
                width={1600}
                height={1024}
                loading="lazy"
                alt={`${study.title} — view ${i + 1}`}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <Link
        to={`/work/${next.slug}`}
        className="group block bg-secondary/40 border-y border-border/70 py-20 hover:bg-foreground hover:text-background transition-colors"
      >
        <div className="container flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 group-hover:text-background/50 mb-3">
              Next case study — {next.index}
            </p>
            <h3 className="font-display text-4xl md:text-6xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
              {next.title}
            </h3>
          </div>
          <span className="font-display italic text-2xl text-accent">
            {next.metric} →
          </span>
        </div>
      </Link>

      <SiteFooter />
    </div>
  );
};

const Block = ({ label, body }: { label: string; body: string }) => (
  <div>
    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
      {label}
    </p>
    <p className="text-xl text-foreground/85 max-w-2xl leading-relaxed">{body}</p>
  </div>
);

export default CaseStudy;
