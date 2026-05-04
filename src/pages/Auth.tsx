import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255),
  password: z.string().min(8, { message: "At least 8 characters" }).max(128),
});

const Auth = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectTo = params.get("redirect") || "/";
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Sign in — Emilija";
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate(redirectTo, { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate(redirectTo, { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate, redirectTo]);

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: { emailRedirectTo: window.location.origin + redirectTo },
        });
        if (error) throw error;
        toast.success("Account created. You're signed in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + redirectTo,
    });
    if (result.error) {
      toast.error("Google sign-in failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="container py-24 md:py-32 max-w-md">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
          {mode === "signin" ? "Sign in" : "Create account"}
        </p>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          {mode === "signin" ? "Welcome back" : "Get access"}
          <span className="text-accent">.</span>
        </h1>
        <p className="text-foreground/70 mb-8">
          Sign in to view protected case studies.
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="w-full mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-mono text-sm hover:bg-secondary/40 transition-all disabled:opacity-50"
        >
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-6">
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            or
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={handleEmail} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            maxLength={255}
            className="w-full rounded-md border border-border bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (min 8 chars)"
            required
            minLength={8}
            maxLength={128}
            className="w-full rounded-md border border-border bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-mono text-sm hover:shadow-pop transition-all disabled:opacity-50"
          >
            {mode === "signin" ? "Sign in →" : "Create account →"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 underline-grow font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          {mode === "signin"
            ? "No account? Create one"
            : "Already have an account? Sign in"}
        </button>

        <div className="mt-8">
          <Link
            to="/#work"
            className="inline-block underline-grow font-mono text-xs uppercase tracking-widest text-foreground/60"
          >
            ← Back to work
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Auth;
