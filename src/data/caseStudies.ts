import nrth from "@/assets/case-nrth.jpg";
import nrth2 from "@/assets/case-nrth-2.jpg";
import codefu from "@/assets/case-codefu.jpg";
import codefu2 from "@/assets/case-codefu-2.jpg";
import swisscard from "@/assets/case-swisscard.jpg";
import swisscard2 from "@/assets/case-swisscard-2.jpg";

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
  cover: string;
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
    slug: "nrth",
    index: "01",
    title: "Building NRTH, a financial OS for UK SMEs",
    client: "NRTH · B2B Fintech SaaS",
    tags: ["Design system", "0→1", "Web SaaS"],
    year: "’25",
    metric: "Live · onboarding clients",
    preview: "linear-gradient(135deg, hsl(222 30% 11%), hsl(198 70% 38%))",
    hero: "linear-gradient(135deg, hsl(222 30% 11%), hsl(198 70% 38%))",
    cover: nrth,
    role: "Lead Product Designer, UX & UI",
    team: "Founders · Engineering · PM",
    duration: "End-to-end · MVP to live",
    overview:
      "NRTH is a UK-based financial operations platform built for SMEs. It consolidates two of the most operationally demanding workflows — collecting money from customers and paying employees and suppliers — into a single, modern, FCA-aligned platform.",
    challenge:
      "UK SMEs juggle Direct Debit mandates, late-payment chasing, multi-day settlement, and approver coordination across disconnected tools. Legacy accounting software records transactions but cannot initiate them, and payroll tools don't connect to collections — creating a fragmented, error-prone process with real compliance risk.",
    approach:
      "As Lead Product Designer I shaped the product from concept to live MVP: aligning with the client on goals, adapting their existing brand into a full design system, and iterating feature by feature with engineering. The system and the interface were built in parallel so we could hit MVP deadlines without sacrificing consistency.",
    outcome:
      "NRTH launched and is actively onboarding clients at gonrth.co — a single, FCA-aligned platform handling Collect and Pay flows, role-based views for Approvers and Payers, onboarding, and settings.",
    metrics: [
      { value: "Live", label: "Product status" },
      { value: "1", label: "Unified design system" },
      { value: "2", label: "Core products (Collect & Pay)" },
      { value: "FCA", label: "Aligned compliance" },
    ],
    sections: [
      {
        heading: "Defining the goal",
        body: "First step was consulting with the client on what NRTH needed to achieve and translating ambition into clear, testable design requirements.",
      },
      {
        heading: "A design system on top of brand",
        body: "NRTH already had brand foundations. I extended them into a full product design system — colour primitives, semantic tokens for light and dark, components — so the interface scaled with the product instead of behind it.",
      },
      {
        heading: "Iterate, then ship fast",
        body: "Working alongside engineering, we shipped feature by feature, building the system and interface simultaneously to hit MVP deadlines without compromising the experience.",
      },
    ],
    gallery: [nrth, nrth2],
  },
  {
    slug: "code-fu",
    index: "02",
    title: "Redesigning CodeFu for real coders, not assumptions",
    client: "Code Fu · EdTech",
    tags: ["Research", "UX redesign", "Accessibility"],
    year: "’23",
    metric: "Usability transformed",
    preview: "linear-gradient(135deg, hsl(322 60% 55%), hsl(12 85% 58%))",
    hero: "linear-gradient(135deg, hsl(322 60% 55%), hsl(12 85% 58%))",
    cover: codefu,
    role: "Lead Product Designer, UX & UI",
    team: "Engineering · Competition organisers",
    duration: "Research → redesign → validation",
    overview:
      "Code Fu is a programming competition platform launched in 2007 in North Macedonia. It lets developers and CS students test their skills through algorithmic challenges in a competitive environment, growing year over year in participants and task complexity.",
    challenge:
      "After a rapid migration and redesign, the platform still received negative feedback. Users hit recurring frustrations across practice, challenge, results, and chat flows — making it clear that without a serious focus on UX, reputation and effectiveness would keep eroding.",
    approach:
      "I ran user interviews across newcomers, seasoned competitors, and solo practisers, capturing observations in Miro. Findings were clustered into pain points across practice, challenges, results and chat. From there, the system was redesigned in Figma with deliberate accessibility — a high-contrast dark palette, Open Sans for legibility, and customisation for individual needs.",
    outcome:
      "Validation testing showed substantial improvements: a system that not only worked more intuitively but elicited genuine appreciation from its users. Accessibility considerations were baked into interviews and testing rather than bolted on at the end.",
    metrics: [
      { value: "3", label: "User segments interviewed" },
      { value: "4", label: "Flow areas redesigned" },
      { value: "WCAG", label: "Contrast & legibility" },
      { value: "↑", label: "User satisfaction" },
    ],
    sections: [
      {
        heading: "Listening before redesigning",
        body: "Interviews surfaced real friction: users hunting for a back button, missing the exit-round action, mistaking chat for a 1:1, and not noticing critical notifications. Each quote went into the Miro board so patterns — not opinions — drove the redesign.",
      },
      {
        heading: "Pain points, clustered",
        body: "Findings grouped into four areas: finding and entering practice, distinguishing challenge vs practice, locating results and chat, and overall navigation. Each cluster became a design brief instead of an isolated bug.",
      },
      {
        heading: "Designed for everyone",
        body: "A dark, high-contrast palette and Open Sans gave readability across visual abilities. Customisation options let users tailor the experience, and accessibility was tested with users — not assumed.",
      },
    ],
    gallery: [codefu, codefu2],
  },
  {
    slug: "swisscard",
    index: "03",
    title: "Making credit card management feel effortless at Swisscard",
    client: "Swisscard · Mobile Banking",
    tags: ["iOS", "Research", "Usability testing"],
    year: "’24",
    metric: "Released · improved CSAT",
    preview: "linear-gradient(135deg, hsl(0 70% 50%), hsl(222 30% 11%))",
    hero: "linear-gradient(135deg, hsl(0 70% 50%), hsl(222 30% 11%))",
    cover: swisscard,
    role: "Senior Product Designer (iOS)",
    team: "PMs · iOS engineers · Researchers",
    duration: "Research → design → release",
    overview:
      "Swisscard is a leading Swiss credit card provider serving thousands of customers through its iOS app for card management, payments, and account control. My role focused on improving usability, clarity, and task efficiency across critical card management features.",
    challenge:
      "Users struggled with sensitive actions — blocking a card, updating personal information, managing security settings. Around 36% of analysed feedback referenced difficulty locating security-related settings, and card lock/unlock sat in the top three support topics. Users were calling customer service for tasks the app should handle on its own.",
    approach:
      "I gathered insights from 200+ App Store reviews, 80 survey responses, support tickets and competitor analysis. Workshops turned raw feedback into structured hypotheses (e.g. 'Moving Card account details to the primary view will reduce search time'). The new IA was prototyped in Figma on top of the Swisscard design system, validated through moderated usability testing on real tasks: lock/unlock, change PIN, update address, manage cardholders.",
    outcome:
      "The redesigned app shipped with clearer navigation, more discoverable security features, and simplified account flows. Post-release feedback showed improved satisfaction and fewer reported usability issues on core card-management tasks.",
    metrics: [
      { value: "200+", label: "Reviews analysed" },
      { value: "36%", label: "Mentioned security findability" },
      { value: "Top 3", label: "Support topic resolved in-app" },
      { value: "WCAG", label: "Accessibility aligned" },
    ],
    sections: [
      {
        heading: "Research from many signals",
        body: "App Store reviews, CSAT surveys, support tickets, behavioural data and competitor flows together painted a realistic picture of where the app failed users — especially around navigation, discoverability and terminology.",
      },
      {
        heading: "Hypothesis-driven IA",
        body: "Card sorting and journey mapping restructured features into logical groups aligned with users' mental models. Each change was framed as a hypothesis with a measurable expectation, not a stylistic preference.",
      },
      {
        heading: "Validated, then refined",
        body: "Moderated usability tests on real tasks revealed the remaining friction. Iteration tightened labels, surfaced sensitive actions, and clarified system feedback so users could complete critical actions confidently.",
      },
    ],
    gallery: [swisscard, swisscard2],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
