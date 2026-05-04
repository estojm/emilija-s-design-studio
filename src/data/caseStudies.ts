import nrth from "@/assets/case-nrth.jpg";
import nrth2 from "@/assets/case-nrth-2.jpg";
import codefu from "@/assets/case-codefu.jpg";
import codefu2 from "@/assets/case-codefu-2.jpg";
import swisscard from "@/assets/case-swisscard.jpg";
import swisscard2 from "@/assets/case-swisscard-2.jpg";
import swisscard3 from "@/assets/case-swisscard-3.jpg";

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
  protected?: boolean;
}

// Image map used to resolve protected case study images after authorization.
export const caseStudyImages: Record<string, string> = {
  nrth,
  nrth2,
};

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
    role: "",
    team: "",
    duration: "",
    overview: "",
    challenge: "",
    approach: "",
    outcome: "",
    metrics: [],
    sections: [],
    gallery: [],
    protected: true,
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
    cover: swisscard3,
    role: "Senior Product Designer (iOS) — design lead",
    team: "Product · iOS engineers · Research",
    duration: "Research → design → validation → release",
    overview:
      "My first opportunity to lead design as a Senior Product Designer, working on the iOS app for Swisscard — a leading Swiss credit card provider. I focused on improving usability, clarity, and user confidence across high-risk card management actions like locking a card, updating personal details, and managing security settings. The challenge: users struggled to complete critical actions independently, often relying on customer support for simple tasks.",
    challenge:
      "User feedback revealed a clear pattern of friction in core journeys. 36% of complaints related to difficulty finding security settings, card lock/unlock was among the top 3 support issues, users lacked confidence performing sensitive actions, and navigation and terminology didn't match user mental models. The impact: increased support costs, reduced trust, and poor task efficiency.",
    approach:
      "I synthesised insights from 200+ App Store reviews, 80+ survey responses, support tickets, behavioural data and competitor analysis. The key insight: users weren't failing because features were missing — they were failing because they couldn't find or trust them. We reframed problems as testable hypotheses (e.g. 'surfacing key actions on the main card screen will reduce search time'), shifting the team from assumptions to evidence-based decisions. I led workshops to cluster feedback, rebuild the IA via card sorting, and map journeys by risk and frequency. Flows were redesigned in Figma on the Swisscard design system, prototyped, and validated through moderated usability tests on lock/unlock, update details, change PIN, and manage cardholders.",
    outcome:
      "The redesigned experience reduced reliance on customer support for key tasks, increased discoverability of security features, improved task completion speed and clarity, and raised user confidence in sensitive actions. The release validated how structured research and iterative design can directly improve trust in financial products.",
    metrics: [
      { value: "200+", label: "Reviews analysed" },
      { value: "36%", label: "Mentioned security findability" },
      { value: "Top 3", label: "Support topic resolved in-app" },
      { value: "WCAG", label: "Accessibility aligned" },
    ],
    sections: [
      {
        heading: "From assumptions to hypotheses",
        body: "Each pain point was reframed as a testable hypothesis tied to a measurable outcome — search time, task success, confidence — so design decisions were grounded in evidence rather than opinion.",
      },
      {
        heading: "Restructured around mental models",
        body: "Card sorting and journey mapping rebuilt the information architecture so high-risk actions like lock/unlock surfaced on primary screens, and terminology matched how users actually think about their cards.",
      },
      {
        heading: "Confidence as a UX metric",
        body: "Moderated testing focused not just on task success and time, but on hesitation and confidence in sensitive flows. Even small labelling changes meaningfully improved how safely users felt completing critical actions.",
      },
      {
        heading: "Built with engineering and accessibility in mind",
        body: "Close collaboration with iOS engineers ensured high-quality, feasible implementation aligned with Apple Human Interface Guidelines and WCAG accessibility principles.",
      },
    ],
    gallery: [swisscard3, swisscard, swisscard2],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
