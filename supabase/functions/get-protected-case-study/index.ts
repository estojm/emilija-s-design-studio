import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Protected case studies live server-side only — never shipped to the browser bundle.
const PROTECTED: Record<string, unknown> = {
  nrth: {
    slug: "nrth",
    index: "01",
    title: "Building NRTH, a financial OS for UK SMEs",
    client: "NRTH · B2B Fintech SaaS",
    tags: ["Design system", "0→1", "Web SaaS"],
    year: "’25",
    metric: "Live · onboarding clients",
    preview: "linear-gradient(135deg, hsl(222 30% 11%), hsl(198 70% 38%))",
    hero: "linear-gradient(135deg, hsl(222 30% 11%), hsl(198 70% 38%))",
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
    // Image paths resolved client-side after authorization.
    coverKey: "nrth",
    galleryKeys: ["nrth", "nrth2"],
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const token = authHeader.replace("Bearer ", "");
    const { data, error } = await supabase.auth.getClaims(token);
    if (error || !data?.claims) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = new URL(req.url);
    const slug = url.searchParams.get("slug") ?? "";
    const study = PROTECTED[slug];
    if (!study) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ study }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
