import { useRef, useState } from "react";

interface CaseStudy {
  index: string;
  title: string;
  client: string;
  tags: string[];
  year: string;
  metric: string;
  preview: string; // gradient or color string
}

const CaseStudyRow = ({ study }: { study: CaseStudy }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, show: false });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true });
  };

  return (
    <a
      ref={ref}
      href="#"
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, show: false }))}
      className="group relative block border-t border-border/70 py-8 md:py-10 transition-colors hover:bg-foreground hover:text-background"
    >
      <div className="container grid grid-cols-12 items-center gap-4">
        <span className="col-span-2 md:col-span-1 font-mono text-xs text-foreground/50 group-hover:text-background/50">
          {study.index}
        </span>
        <div className="col-span-10 md:col-span-5">
          <h3 className="font-display text-3xl md:text-5xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
            {study.title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground/50 group-hover:text-background/60">
            {study.client}
          </p>
        </div>
        <div className="col-span-7 md:col-span-3 flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-foreground/20 group-hover:border-background/30 px-3 py-1 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="col-span-3 md:col-span-2 text-right font-display italic text-2xl text-accent">
          {study.metric}
        </span>
        <span className="col-span-2 md:col-span-1 text-right font-mono text-xs text-foreground/50 group-hover:text-background/50">
          {study.year}
        </span>
      </div>

      {/* Floating preview that follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-10 hidden md:block transition-opacity duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: pos.show ? 1 : 0,
          transform: "translate(-50%, -50%) rotate(-4deg)",
        }}
      >
        <div
          className="h-44 w-60 rounded-lg shadow-soft animate-float-slow"
          style={{ background: study.preview }}
        />
      </div>
    </a>
  );
};

export default CaseStudyRow;
