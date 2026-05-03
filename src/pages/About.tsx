import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import portrait from "@/assets/emilija-portrait.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="container pt-16 md:pt-24 pb-24 grain relative">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-6">
          §01 — About
        </p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 relative">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/20 rounded-md -rotate-2" aria-hidden />
              <img
                src={portrait}
                width={1024}
                height={1280}
                alt="Portrait of Emilija, product designer"
                className="relative rounded-md shadow-soft w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <span className="absolute -bottom-4 -right-4 bg-foreground text-background font-mono text-xs px-3 py-2 rotate-3 shadow-soft">
                Emilija · Berlin ’26
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
              I make products that <span className="italic text-accent">measure up</span>.
            </h1>

            <div className="mt-8 space-y-5 text-lg text-foreground/80 max-w-xl">
              <p>
                I’m a Product Designer with 10 years of experience shaping digital
                products from early concept to launch. I work across the full
                product lifecycle—combining user research, strategy, and hands-on
                design to create experiences that are both intuitive and impactful.
              </p>
              <p>
                My favourite work sits at the intersection of craft and curiosity:
                designing clean interfaces, then proving they work with research,
                experimentation, and the right metric at the right time.
              </p>
              <p>
                Outside of work you'll find me bouldering, brewing pour-over, and
                writing the occasional essay on why dashboards should be kinder.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              <Block title="Currently">
                Senior Product Designer, freelance.
                <br />Open to senior roles in 2026.
              </Block>
              <Block title="Previously">
                Spotify · N26 · Babbel
                <br />Designit (consultancy)
              </Block>
              <Block title="Toolkit">
                Figma, Amplitude, Mixpanel, SQL,
                <br />Framer, a little bit of React.
              </Block>
              <Block title="Speaking">
                Config ’25 · UX Berlin ’24
                <br />Smashing Conf ’23
              </Block>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="mailto:hello@emilija.design"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-mono text-sm hover:shadow-pop transition-all"
              >
                Start a project →
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-border/70 pt-4">
    <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-2">
      {title}
    </p>
    <p className="text-foreground/85">{children}</p>
  </div>
);

export default About;
