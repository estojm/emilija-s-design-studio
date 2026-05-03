import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CaseStudyRow from "@/components/CaseStudyRow";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const studies = caseStudies;

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div className="container pt-16 md:pt-24 pb-20 md:pb-32 relative">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-foreground/60 mb-8 animate-reveal-up">
            <span className="h-px w-10 bg-foreground/40" />
            Portfolio · 2020 — 2026
          </div>

          <h1 className="font-display text-[14vw] md:text-[9.5vw] leading-[0.92] tracking-[-0.03em] text-balance animate-reveal-up">
            Emilija,{" "}
            <span className="italic text-accent">a&nbsp;data-driven</span>{" "}
            <span className="relative inline-block">
              product designer
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9 C 80 2, 160 14, 240 6 S 380 4, 398 8"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-6 md:gap-8 items-end">
            <p className="md:col-span-6 text-lg md:text-xl text-foreground/75 max-w-xl animate-reveal-up" style={{ animationDelay: "120ms" }}>
              From insight to execution — I design experiences that align user needs
              with business impact. Backed by a decade of experience and frontend
              knowledge, I turn ideas into scalable, real-world products.
            </p>
            <div className="md:col-span-3 md:col-start-9 flex flex-col gap-2 font-mono text-xs animate-reveal-up" style={{ animationDelay: "200ms" }}>
              <Stat label="Years shipping" value="6" />
              <Stat label="Experiments run" value="140+" />
              <Stat label="Currently" value="Open to lead roles" accent />
            </div>
          </div>
        </div>

        {/* decorative ticker */}
        <div className="border-y border-border/60 bg-secondary/40 py-3 overflow-hidden">
          <div className="marquee-track flex gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-foreground/60">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {[
                  "Product design",
                  "Design systems",
                  "Experimentation",
                  "Data viz",
                  "Research",
                  "0 → 1",
                  "Strategy",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-12">
                    {t} <span className="text-accent">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="pt-20 md:pt-28">
        <div className="container flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-3">
              §02 — Selected work
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">
              Case studies, in numbers.
            </h2>
          </div>
          <Link
            to="/about"
            className="hidden md:inline-flex items-center gap-2 font-mono text-sm underline-grow"
          >
            About me →
          </Link>
        </div>

        <div className="border-b border-border/70">
          {studies.map((s) => (
            <CaseStudyRow key={s.index} study={s} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const Stat = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="flex items-baseline justify-between border-b border-border/70 pb-2">
    <span className="uppercase tracking-widest text-foreground/50">{label}</span>
    <span className={`font-display text-2xl ${accent ? "text-accent italic" : ""}`}>{value}</span>
  </div>
);

export default Index;
