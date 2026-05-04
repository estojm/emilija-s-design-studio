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
