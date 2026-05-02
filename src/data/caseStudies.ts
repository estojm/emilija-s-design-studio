import northwind from "@/assets/case-northwind.jpg";
import atlas from "@/assets/case-atlas.jpg";
import lumen from "@/assets/case-lumen.jpg";
import orbit from "@/assets/case-orbit.jpg";
import verse from "@/assets/case-verse.jpg";

export interface Metric {
  value: string;
  label: string;
}

export interface Section {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  index: string;
  title: string;
  client: string;
  tags: string[];
  year: string;
  metric: string;
  preview: string;
  hero: string;
  cover: string; // hero image
  role: string;
  team: string;
  duration: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: Metric[];
  sections: Section[];
  gallery: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind-onboarding",
    index: "01",
    title: "Rebuilding onboarding at Northwind",
    client: "Northwind · Fintech",
    tags: ["Research", "Design system", "A/B test"],
    year: "’26",
    metric: "+38% activation",
    preview: "linear-gradient(135deg, hsl(12 85% 58%), hsl(28 92% 62%))",
    hero: "linear-gradient(135deg, hsl(12 85% 58%), hsl(28 92% 62%))",
    cover: northwind,
    role: "Lead Product Designer",
    team: "1 PM · 3 Eng · 1 Researcher",
    duration: "5 months",
    overview:
      "Northwind is a European neobank serving 2.1M customers. New users were dropping out of onboarding at the income-verification step, costing the business an estimated €3.4M in annual revenue.",
    challenge:
      "We needed to verify income for compliance, but the existing flow demanded 9 steps and a document upload before users could see any value. Drop-off at step 4 was 57%.",
    approach:
      "I ran 14 user interviews and analysed Amplitude funnels to map exactly where intent collapsed. Together with engineering we redesigned the flow into a progressive disclosure pattern — verification became optional until the user attempted a regulated action.",
    outcome:
      "Activation grew from 41% to 57% (+38%). The team now treats friction-vs-trust as a measurable curve, not a debate.",
    metrics: [
      { value: "+38%", label: "Activation rate" },
      { value: "−57%", label: "Time to first action" },
      { value: "€3.4M", label: "Projected ARR lift" },
      { value: "4.7/5", label: "Post-onboarding NPS" },
    ],
    sections: [
      {
        heading: "Listening to the data, then the people",
        body: "Funnel analysis pointed to step 4 as the leak. Interviews told us why: users felt the bank didn't trust them yet, so why should they hand over a payslip? The fix had to address feeling, not just flow.",
      },
      {
        heading: "Progressive trust, not progressive forms",
        body: "We split the journey into 'explore' and 'transact' phases. Verification was deferred until the user wanted to move money — the moment trust naturally shifts.",
      },
      {
        heading: "Shipping the experiment",
        body: "We launched as a 50/50 A/B test across three markets. After 21 days, the variant cleared significance on every primary metric. We rolled it out bank-wide in week 6.",
      },
    ],
    gallery: [northwind, atlas],
  },
  {
    slug: "atlas-analytics",
    index: "02",
    title: "From spreadsheet to product: Atlas Analytics",
    client: "Atlas · B2B SaaS",
    tags: ["0→1", "Data viz", "Strategy"],
    year: "’25",
    metric: "12k MRR in 90d",
    preview: "linear-gradient(135deg, hsl(198 70% 38%), hsl(222 30% 11%))",
    hero: "linear-gradient(135deg, hsl(198 70% 38%), hsl(222 30% 11%))",
    cover: atlas,
    role: "Founding Designer",
    team: "2 founders · 2 Eng",
    duration: "6 months (0→1)",
    overview:
      "Atlas helps RevOps teams understand pipeline health without writing SQL. I joined as the first designer to take a Looker dashboard and turn it into a product people would pay for.",
    challenge:
      "The market is crowded with dashboards. We had to make complex data feel inevitable — like the user already knew what to ask before they asked it.",
    approach:
      "I built an opinionated default workspace based on 22 sales-leader interviews, then layered customisation as an escape hatch. Every chart had a 'why this matters' caption, written like a colleague would.",
    outcome:
      "Reached $12k MRR within 90 days of public launch with no paid acquisition. Atlas closed a $2.4M seed round on the strength of the product demo.",
    metrics: [
      { value: "$12k", label: "MRR in 90 days" },
      { value: "31", label: "Paying customers" },
      { value: "78%", label: "Trial → paid" },
      { value: "$2.4M", label: "Seed raised" },
    ],
    sections: [
      {
        heading: "Opinions over options",
        body: "Most analytics tools start blank. Atlas starts with a point of view. The default dashboard answers the three questions every revenue leader wakes up asking — and earns the right to ask more later.",
      },
      {
        heading: "Charts that explain themselves",
        body: "Every visual ships with a one-sentence interpretation. Not a tooltip — a caption. It changed how customers talked about Atlas in demos.",
      },
    ],
    gallery: [atlas, orbit],
  },
  {
    slug: "lumen-health",
    index: "03",
    title: "Designing trust for Lumen Health",
    client: "Lumen · Healthtech",
    tags: ["Mobile", "Accessibility"],
    year: "’25",
    metric: "−42% drop-off",
    preview: "linear-gradient(135deg, hsl(48 96% 60%), hsl(12 85% 58%))",
    hero: "linear-gradient(135deg, hsl(48 96% 60%), hsl(12 85% 58%))",
    cover: lumen,
    role: "Senior Product Designer",
    team: "1 PM · 4 Eng · 1 Clinical advisor",
    duration: "4 months",
    overview:
      "Lumen connects patients with mental-health professionals. The booking flow was abandoning anxious users at the worst possible moment.",
    challenge:
      "Booking a first therapy session is emotionally heavy. Every extra field is a reason to close the tab. We had to balance clinical requirements with kindness.",
    approach:
      "Co-design sessions with patients and clinicians shaped a flow that asks what's needed, when it's needed, and explains why. WCAG 2.2 AA throughout, with a calmer motion language for transitions.",
    outcome:
      "Booking drop-off fell 42%. Average time to first session shortened from 11 days to 4.",
    metrics: [
      { value: "−42%", label: "Drop-off" },
      { value: "11→4", label: "Days to first session" },
      { value: "AA", label: "WCAG 2.2 conformance" },
      { value: "+24%", label: "Patient retention" },
    ],
    sections: [
      {
        heading: "Designing for the worst day",
        body: "We assumed users were tired, distracted, and reaching out at midnight. The flow had to work in that state — not the showroom state.",
      },
      {
        heading: "Calm motion, careful copy",
        body: "Transitions slowed from 200ms to 320ms. Confirmation language moved from 'Submit' to 'I'm ready'. Small choices, measurable lift.",
      },
    ],
    gallery: [lumen, verse],
  },
  {
    slug: "orbit-pricing",
    index: "04",
    title: "Pricing page that converts: Orbit",
    client: "Orbit · DevTools",
    tags: ["Marketing", "Experiments"],
    year: "’24",
    metric: "+2.1× CTR",
    preview: "linear-gradient(135deg, hsl(222 30% 11%), hsl(12 85% 58%))",
    hero: "linear-gradient(135deg, hsl(222 30% 11%), hsl(12 85% 58%))",
    cover: orbit,
    role: "Product Designer (contract)",
    team: "1 PMM · 2 Eng",
    duration: "6 weeks",
    overview:
      "Orbit's pricing page was beautifully designed and converting at 1.4%. We rebuilt it around the question developers actually ask: 'will this break at scale?'",
    challenge:
      "Tier comparison tables hide the answer developers care about. We had to surface scale, limits, and migration cost without overwhelming the page.",
    approach:
      "I prototyped six variants and ran a sequential test. The winner used an interactive scale slider that showed live cost across tiers — anchoring on usage instead of features.",
    outcome:
      "CTR to sign-up jumped from 1.4% to 2.9% (+107%). The slider pattern became part of Orbit's design system.",
    metrics: [
      { value: "+2.1×", label: "Sign-up CTR" },
      { value: "6", label: "Variants tested" },
      { value: "94%", label: "Statistical confidence" },
      { value: "−18%", label: "Sales-assisted deals" },
    ],
    sections: [
      {
        heading: "Anchoring on usage",
        body: "Developers don't choose plans, they choose limits. The scale slider made the trade-off visible in one motion.",
      },
    ],
    gallery: [orbit, atlas],
  },
  {
    slug: "verse-editor",
    index: "05",
    title: "An editor designers actually love",
    client: "Verse · Creative tools",
    tags: ["IA", "Prototyping"],
    year: "’24",
    metric: "NPS 71",
    preview: "linear-gradient(135deg, hsl(35 30% 88%), hsl(198 70% 38%))",
    hero: "linear-gradient(135deg, hsl(35 30% 88%), hsl(198 70% 38%))",
    cover: verse,
    role: "Senior Product Designer",
    team: "1 PM · 5 Eng",
    duration: "8 months",
    overview:
      "Verse is a prose-and-design tool for creative directors. The challenge: build an editor powerful enough for pros, calm enough for daily use.",
    challenge:
      "Existing tools optimise for power-users via density. We bet that restraint would win — fewer surfaces, sharper defaults, deeper keyboard support.",
    approach:
      "I rebuilt the IA around three modes (write, layout, share) and prototyped every interaction in code. Keyboard-first; mouse as a fallback.",
    outcome:
      "Post-launch NPS landed at 71 — the highest in the company's history. Daily active sessions tripled within two quarters.",
    metrics: [
      { value: "71", label: "NPS at launch" },
      { value: "3×", label: "Daily active sessions" },
      { value: "120ms", label: "Median input latency" },
      { value: "0", label: "Modal dialogs in core flow" },
    ],
    sections: [
      {
        heading: "Three modes, no menus",
        body: "Write, layout, share. Each mode hides what doesn't belong. Users stop fishing for tools because the tools come to them.",
      },
    ],
    gallery: [verse, lumen],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
