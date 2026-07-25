import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Bell,
  Heart,
  Stethoscope,
  FlaskConical,
  FileText,
  ShieldCheck,
  PiggyBank,
  Building2,
  Smartphone,
  Pill,
  ShoppingBag,
  PackageCheck,
  Sparkles,
  TrendingUp,
  Activity,
  ArrowRight,
  ChevronRight,
  Plus,
  Home as HomeIcon,
  LayoutGrid,
  Wallet,
  ClipboardList,
  User,
  Leaf,
  Award,
  BadgeCheck,
  Users,
} from "lucide-react";

import heroFamily from "@/assets/hero-family.png";
import doctorReports from "@/assets/doctor-reports.png";
import hsaPiggy from "@/assets/hsa-piggy.png";
import digitalHealth from "@/assets/digital-health.png";
import corporateWellness from "@/assets/corporate-wellness.png";

function Link({ to, children, className = "", ...rest }: { to: string; children: ReactNode; className?: string; [key: string]: unknown }) {
  return <a href={to} className={className} {...rest}>{children}</a>;
}

/* ---------- Reveal on scroll wrapper ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 20,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "none" : `translate3d(0, ${y}px, 0) scale(0.985)`,
        filter: shown ? "blur(0px)" : "blur(6px)",
        opacity: shown ? 1 : 0,
      }}
      className={`transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Premium page loader ---------- */
function PageLoader() {
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t1 = window.setTimeout(() => setFading(true), 850);
    const t2 = window.setTimeout(() => setGone(true), 1350);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);
  if (gone) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      <div className="pointer-events-none absolute inset-0 hero-gradient opacity-70" />
      <div className="relative flex flex-col items-center gap-5">
        <div className="relative w-20 h-20 rounded-[26px] cta-gradient grid place-items-center shadow-glow animate-logo-in">
          <Sparkles className="w-9 h-9 text-white" strokeWidth={2.2} />
          <span className="absolute inset-0 rounded-[26px] animate-pulse-ring" />
        </div>
        <div className="text-[15px] font-extrabold tracking-tight animate-fade-in">Orange Stars</div>
        <div className="relative w-32 h-[3px] rounded-full bg-primary/15 overflow-hidden">
          <span className="absolute inset-y-0 w-1/2 rounded-full cta-gradient animate-bar-load" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Small primitives ---------- */
function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="px-5 mb-4">
      {eyebrow && (
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80 mb-1.5 animate-fade-in">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[26px] leading-[1.1] font-bold tracking-tight text-foreground">{title}</h2>
      {sub && <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function CardLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={`group block press transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    >
      {children}
    </Link>
  );
}

function PillButton({
  children,
  variant = "primary",
  icon,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  icon?: ReactNode;
}) {
  const base =
    "relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const styles =
    variant === "primary"
      ? "cta-gradient text-primary-foreground shadow-glow hover:shadow-card hover:-translate-y-0.5 animate-gradient"
      : variant === "dark"
        ? "bg-foreground text-background hover:opacity-90 hover:-translate-y-0.5"
        : "glass text-foreground hover:bg-white/80 hover:-translate-y-0.5";
  return (
    <span className={`${base} ${styles}`}>
      {variant === "primary" && <span className="shimmer-sheen" aria-hidden />}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon ?? (
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        )}
      </span>
    </span>
  );
}


/* ============================================================ */
function RaphacureIframe({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 shrink-0 bg-white">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Orange Stars
        </button>
      </div>
      <iframe
        src="https://orangestars.raphacure.com/"
        className="flex-1 w-full border-none"
        title="RaphaCure"
      />
    </div>
  );
}

function Landing() {
  const [showRaphacure, setShowRaphacure] = useState(false);

  const appColumn = (
    <>
      <TopBar />
      <Hero onOpenRaphacure={() => setShowRaphacure(true)} />
      <HealthRiskAssessment onOpenRaphacure={() => setShowRaphacure(true)} />
      <QuickServices />
      <BentoGrid />
      <WhyOrangeStars />
      <HSASection />
      <PreventivePrograms />
      <CorporateWellness />
      <DigitalHealth />
      <HealthJourney />
      <WellnessCarousel />
      <TrustSection />
      <BottomCTA />
    </>
  );

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <PageLoader />
      <AuroraBackground />

      {/* Hidden preload iframe — tells browser to fetch & cache orangestars.raphacure.com on page load */}
      <iframe
        src="https://orangestars.raphacure.com/"
        className="absolute w-px h-px opacity-0 pointer-events-none"
        aria-hidden="true"
        title="RaphaCure preload"
      />

      {/* Full-viewport iframe overlay */}
      {showRaphacure && <RaphacureIframe onClose={() => setShowRaphacure(false)} />}

      {/* Mobile / tablet: original edge-to-edge column */}
      <div className="relative z-10 mx-auto w-full max-w-[480px] pb-40 lg:hidden">
        {appColumn}
      </div>
      <div className="lg:hidden">
        <BottomNav />
      </div>

      {/* Desktop: premium marketing shell with the app rendered inside a phone frame */}
      <DesktopShell phone={<PhoneFrame>{appColumn}</PhoneFrame>} onOpenRaphacure={() => setShowRaphacure(true)} />
    </div>
  );
}

/* ---------- Phone frame (desktop only) ---------- */
function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[420px]">
      <div className="pointer-events-none absolute -inset-10 rounded-[80px] bg-primary/20 blur-3xl opacity-60" />
      <div className="relative rounded-[56px] p-3 bg-gradient-to-b from-foreground/90 to-foreground shadow-[0_40px_120px_-30px_oklch(0.5_0.16_50/0.55),0_20px_60px_-20px_oklch(0.5_0.16_50/0.35)] ring-1 ring-white/10">
        <span className="absolute top-28 -left-[3px] w-[3px] h-14 rounded-l-full bg-foreground/70" />
        <span className="absolute top-48 -left-[3px] w-[3px] h-20 rounded-l-full bg-foreground/70" />
        <span className="absolute top-32 -right-[3px] w-[3px] h-24 rounded-r-full bg-foreground/70" />
        <div className="relative rounded-[44px] overflow-hidden bg-background h-[860px]">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-32 h-7 rounded-full bg-foreground" />
          <div className="absolute inset-0 overflow-y-auto no-scrollbar">
            <div className="relative w-full pb-32 pt-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Desktop marketing shell ---------- */
function DesktopShell({ phone, onOpenRaphacure }: { phone: ReactNode; onOpenRaphacure: () => void }) {
  return (
    <div className="relative z-10 hidden lg:block">
      <DesktopNav />

      <section className="relative mx-auto max-w-7xl px-10 pt-16 pb-24 grid grid-cols-[1.05fr_auto] gap-16 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] font-semibold text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.68_0.16_148)] animate-pulse" />
            India's premium preventive care platform
          </div>
          <h1 className="mt-6 text-[68px] leading-[0.98] font-extrabold tracking-tight">
            Healthy Today.
            <br />
            <span className="bg-gradient-to-r from-[oklch(0.62_0.2_38)] to-[oklch(0.72_0.2_58)] bg-clip-text text-transparent">
              Secure Tomorrow.
            </span>
          </h1>
          <p className="mt-6 text-[19px] leading-relaxed text-foreground/70 max-w-lg">
            Preventive healthcare, digital health records, wellness programs, and a Health Savings Account — designed like your favorite app, built for the way you actually live.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onOpenRaphacure} className="group press">
              <PillButton>Explore Services</PillButton>
            </button>
            <button onClick={onOpenRaphacure} className="group press">
              <PillButton variant="ghost" icon={<ChevronRight className="w-4 h-4" />}>
                Start Health Assessment
              </PillButton>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "Members", v: 2, suffix: "M+" },
              { k: "Cities", v: 180, suffix: "+" },
              { k: "Partners", v: 1200, suffix: "+" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-[28px] font-extrabold tracking-tight">
                  <CountUp to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground mt-1">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">{phone}</div>
      </section>

      <section className="relative mx-auto max-w-7xl px-10 pb-24">
        <div className="mb-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80 mb-2">Four pillars</div>
          <h2 className="text-[42px] leading-[1.05] font-bold tracking-tight max-w-2xl">
            One app for every part of your health journey.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { icon: Stethoscope, title: "Preventive Care", desc: "Screenings, checkups & doctor consults.", tint: "from-[oklch(0.94_0.09_25)] to-[oklch(0.86_0.16_30)]" },
            { icon: PiggyBank, title: "Health Savings", desc: "Tax-smart HSA for every medical need.", tint: "from-[oklch(0.93_0.09_68)] to-[oklch(0.82_0.16_55)]" },
            { icon: Smartphone, title: "Digital Health", desc: "Records, prescriptions & AI insights.", tint: "from-[oklch(0.92_0.08_235)] to-[oklch(0.78_0.14_240)]" },
            { icon: Leaf, title: "Wellness Programs", desc: "Fitness, nutrition, mindfulness.", tint: "from-[oklch(0.93_0.09_155)] to-[oklch(0.8_0.14_158)]" },
          ].map((f) => (
            <div key={f.title} className="group press bento-card p-6 rounded-[24px] relative overflow-hidden">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.tint} grid place-items-center shadow-soft`}>
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <div className="mt-5 text-[18px] font-bold">{f.title}</div>
              <p className="mt-1.5 text-[14px] text-muted-foreground leading-relaxed">{f.desc}</p>
              <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
          ))}
        </div>
      </section>

      <footer className="relative border-t border-border/60 bg-background/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-10 py-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl cta-gradient grid place-items-center shadow-glow">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[14px] font-bold">Orange Stars</div>
              <div className="text-[11px] text-muted-foreground">Preventive care · HSA</div>
            </div>
          </div>
          <div className="text-[12px] text-muted-foreground">© {new Date().getFullYear()} Orange Stars. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function DesktopNav() {
  const links = ["Preventive", "HSA", "Digital Health", "Wellness", "Corporate"];
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-7xl px-6">
      <div className="glass-strong rounded-full px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl cta-gradient grid place-items-center shadow-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="text-[15px] font-bold">Orange Stars</div>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l}
              to="/"
              className="px-4 py-2 rounded-full text-[13px] font-medium text-foreground/70 hover:text-foreground hover:bg-white/60 transition"
            >
              {l}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/" className="group press">
            <PillButton>Get the app</PillButton>
          </Link>
        </div>
      </div>
    </header>
  );
}


/* ---------- Aurora background — drifting soft-peach blooms ---------- */
function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden>
      <div className="absolute -top-24 -left-16 w-[60vw] h-[60vw] max-w-[520px] max-h-[520px] rounded-full blur-[80px] opacity-70 animate-drift-a"
           style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.9 0.13 62 / 0.55), transparent 65%)" }} />
      <div className="absolute top-[30vh] -right-20 w-[65vw] h-[65vw] max-w-[560px] max-h-[560px] rounded-full blur-[90px] opacity-60 animate-drift-b"
           style={{ background: "radial-gradient(circle at 60% 40%, oklch(0.88 0.14 40 / 0.5), transparent 65%)" }} />
      <div className="absolute bottom-[10vh] left-[10vw] w-[55vw] h-[55vw] max-w-[480px] max-h-[480px] rounded-full blur-[100px] opacity-50 animate-drift-a"
           style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.92 0.09 75 / 0.55), transparent 65%)", animationDelay: "-8s" }} />
    </div>
  );
}

/* ---------- CountUp — springy number tween on view ---------- */
function CountUp({
  to,
  duration = 1400,
  prefix = "",
  suffix = "",
  format,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(to * eased);
            if (t < 1) requestAnimationFrame(step);
            else setV(to);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const shown = format ? format(v) : Math.round(v).toString();
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

/* ---------- AnimatedBar — fills on view ---------- */
function AnimatedBar({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setOn(true));
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="mt-2 h-2 rounded-full bg-white/80 overflow-hidden shadow-inner">
      <div
        className="h-full rounded-full cta-gradient relative overflow-hidden transition-[width] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: on ? `${pct}%` : "0%" }}
      >
        <span className="shimmer-sheen" aria-hidden />
      </div>
    </div>
  );
}


/* ---------- Top App Bar ---------- */
function TopBar() {
  return (
    <header className="sticky top-0 z-40 px-5 pt-4 pb-3 bg-gradient-to-b from-background via-background/90 to-background/0 backdrop-blur-md">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <div className="relative shrink-0 w-10 h-10 rounded-2xl cta-gradient grid place-items-center shadow-glow">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[oklch(0.68_0.16_148)] ring-2 ring-background" />
          </div>
          <div className="min-w-0">
            <div className="text-[15px] font-bold leading-none truncate">Orange Stars</div>
            <div className="text-[11px] text-muted-foreground mt-1">Preventive care · HSA</div>
          </div>
        </Link>
        <div className="flex items-center gap-2 shrink-0">
          <button
            aria-label="Notifications"
            className="relative w-10 h-10 rounded-full glass grid place-items-center hover:bg-white/80 transition"
          >
            <Bell className="w-[18px] h-[18px] text-foreground" />
            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-primary" />
          </button>
          <button aria-label="Profile" className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-soft">
            <div className="w-full h-full bg-gradient-to-br from-[oklch(0.86_0.11_65)] to-[oklch(0.72_0.18_45)] grid place-items-center text-white text-sm font-bold">
              A
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onOpenRaphacure }: { onOpenRaphacure: () => void }) {
  return (
    <section className="px-5 pt-3">
      <Reveal>
        <div className="relative rounded-[24px] sm:rounded-[32px] hero-gradient p-6 pb-4 shadow-card overflow-hidden">
          {/* floating shapes */}
          <div className="pointer-events-none absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/40 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-[oklch(0.86_0.14_60)]/40 blur-3xl" />
          <div className="pointer-events-none absolute top-6 right-6 w-6 h-6 rounded-full bg-white/70 animate-float-slow" />
          <div className="pointer-events-none absolute top-20 right-16 w-3 h-3 rounded-full bg-primary/50 animate-float" />
          <div className="pointer-events-none absolute bottom-24 left-4 w-4 h-4 rounded-lg rotate-12 bg-white/60 animate-float-slow" />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[11px] font-semibold text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.68_0.16_148)] animate-pulse" />
              Live · Preventive care platform
            </div>
            <h1 className="mt-4 text-[36px] leading-[1.02] font-extrabold tracking-tight text-foreground">
              Healthy Today.
              <br />
              <span className="bg-gradient-to-r from-[oklch(0.62_0.2_38)] to-[oklch(0.7_0.2_55)] bg-clip-text text-transparent">
                Secure Tomorrow.
              </span>
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/70 max-w-[300px]">
              Your trusted preventive healthcare and health savings companion.
            </p>

            <div className="relative mt-2 h-[220px] -mx-2">
              <img
                src={heroFamily}
                alt="Happy family with doctor"
                width={1200}
                height={1024}
                className="absolute inset-0 w-full h-full object-contain animate-float-slow"
              />
              {/* mini stat chips */}
              <div className="absolute top-2 left-1 glass rounded-2xl px-3 py-2 shadow-soft animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[oklch(0.94_0.07_155)] grid place-items-center">
                    <Heart className="w-3.5 h-3.5 text-[oklch(0.55_0.18_148)]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground leading-none">Wellness</div>
                    <div className="text-[13px] font-bold leading-tight">
                      <CountUp to={92} /> / 100
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-1 glass rounded-2xl px-3 py-2 shadow-soft animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/15 grid place-items-center">
                    <PiggyBank className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground leading-none">HSA</div>
                    <div className="text-[13px] font-bold leading-tight">
                      <CountUp
                        to={24800}
                        prefix="₹"
                        format={(n) => Math.round(n).toLocaleString("en-IN")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-2.5">
              <button onClick={onOpenRaphacure} className="group press">
                <PillButton>Explore Services</PillButton>
              </button>
              <button onClick={onOpenRaphacure} className="group press">
                <PillButton variant="ghost" icon={<ChevronRight className="w-4 h-4" />}>
                  Start Health Assessment
                </PillButton>
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Health Risk Assessment ---------- */
function HealthRiskAssessment({ onOpenRaphacure }: { onOpenRaphacure: () => void }) {
  return (
    <section className="px-5 mt-12">
      <Reveal>
        <div className="relative rounded-[24px] p-6 bento-card overflow-hidden bg-gradient-to-br from-white to-[oklch(0.97_0.03_60)]">
          <div className="pointer-events-none absolute -top-10 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[oklch(0.94_0.09_25)] to-[oklch(0.86_0.16_30)] grid place-items-center shadow-soft animate-pulse-ring">
                <Heart className="w-7 h-7 text-white" fill="white" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                Health Risk Assessment
              </div>
              <h3 className="mt-1 text-[19px] font-bold leading-snug">
                Know your health <br />
                before symptoms appear.
              </h3>
            </div>
          </div>
          <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed">
            Complete your assessment and receive a personalized wellness score in under 5 minutes.
          </p>

          {/* progress preview */}
          <div className="mt-4 rounded-2xl bg-secondary/70 p-3">
            <div className="flex items-center justify-between text-[12px] font-medium">
              <span className="text-muted-foreground">Your wellness score</span>
              <span className="text-primary font-bold">
                <CountUp to={78} /> / 100
              </span>
            </div>
            <AnimatedBar pct={78} />
          </div>

          <div className="mt-5">
            <button onClick={onOpenRaphacure} className="group press">
              <PillButton>Start Assessment</PillButton>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Quick Services ---------- */
function QuickServices() {
  const items = [
    { label: "Preventive Health", Icon: ShieldCheck, tint: "from-[oklch(0.94_0.09_60)] to-[oklch(0.86_0.16_50)]" },
    { label: "Book Lab Test", Icon: FlaskConical, tint: "from-[oklch(0.93_0.08_240)] to-[oklch(0.78_0.15_240)]" },
    { label: "Doctor Consult", Icon: Stethoscope, tint: "from-[oklch(0.94_0.08_155)] to-[oklch(0.78_0.15_150)]" },
    { label: "Health Reports", Icon: FileText, tint: "from-[oklch(0.94_0.07_25)] to-[oklch(0.82_0.15_25)]" },
  ];
  return (
    <section className="mt-12">
      <SectionTitle eyebrow="Quick access" title="Quick Services" />
      <Reveal>
        <div className="px-5 grid grid-cols-4 gap-3">
          {items.map(({ label, Icon, tint }, i) => (
            <CardLink key={label} to="/" className="flex flex-col items-center gap-2">
              <div
                className={`relative w-[62px] h-[62px] rounded-[24px] bg-gradient-to-br ${tint} grid place-items-center shadow-soft animate-breathe transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-glow group-active:scale-90`}
                style={{ animationDelay: `${i * 220}ms` }}
              >
                <Icon
                  className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={2.2}
                />
                <span className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20" />
              </div>
              <span className="text-[11px] font-medium text-center leading-tight text-foreground/80 min-w-0">
                {label}
              </span>
            </CardLink>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Bento Grid ---------- */
function BentoGrid() {
  return (
    <section className="mt-12">
      <SectionTitle
        eyebrow="Explore modules"
        title="A premium care bento."
        sub="Everything for your health, curated into one experience."
      />
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Large — Preventive Checkups (spans 2) */}
        <Reveal className="col-span-2">
          <CardLink to="/">
            <div className="relative rounded-[24px] bento-card p-6 pb-4 overflow-hidden bg-gradient-to-br from-[oklch(0.99_0.02_75)] to-[oklch(0.94_0.07_60)]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                    Preventive Checkups
                  </div>
                  <h3 className="mt-1 text-[20px] font-bold leading-tight">
                    Detect health risks early.
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                    Explore Packages <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <img
                  src={doctorReports}
                  alt="Doctor reviewing reports"
                  width={900}
                  height={900}
                  loading="lazy"
                  className="shrink-0 w-[104px] h-[104px] sm:w-[130px] sm:h-[130px] object-contain -mr-2 -mt-2 animate-float-slow"
                />
              </div>
            </div>
          </CardLink>
        </Reveal>

        {/* Medium — HSA */}
        <Reveal delay={50}>
          <CardLink to="/">
            <div className="relative rounded-[24px] bento-card p-6 h-full overflow-hidden bg-gradient-to-br from-[oklch(0.98_0.03_320)] to-[oklch(0.93_0.08_20)]">
              <div className="w-10 h-10 rounded-2xl bg-white/70 grid place-items-center shadow-soft">
                <PiggyBank className="w-5 h-5 text-primary" />
              </div>
              <div className="mt-16 text-[15px] font-bold leading-tight">
                Save today.<br />Stay protected.
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">Health Savings Account</div>
              <img
                src={hsaPiggy}
                alt="Piggy bank"
                width={900}
                height={900}
                loading="lazy"
                className="absolute top-8 right-2 w-[92px] h-[92px] object-contain animate-float"
              />
              <div className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-primary">
                Know more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </CardLink>
        </Reveal>

        {/* Medium — Corporate */}
        <Reveal delay={100}>
          <CardLink to="/">
            <div className="relative rounded-[24px] bento-card p-6 h-full overflow-hidden bg-gradient-to-br from-[oklch(0.96_0.04_240)] to-[oklch(0.9_0.09_240)]">
              <div className="w-10 h-10 rounded-2xl bg-white/70 grid place-items-center shadow-soft">
                <Building2 className="w-5 h-5 text-[oklch(0.55_0.18_240)]" />
              </div>
              <div className="mt-16 text-[15px] font-bold leading-tight">
                Corporate<br />wellness camps.
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">For teams that care</div>
              <img
                src={corporateWellness}
                alt="Employees"
                width={1000}
                height={900}
                loading="lazy"
                className="absolute top-6 right-1 w-[100px] h-[100px] object-contain animate-float-slow"
              />
              <div className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[oklch(0.5_0.18_240)]">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </CardLink>
        </Reveal>

        {/* Wide — Digital Health Portal (spans 2) */}
        <Reveal className="col-span-2" delay={80}>
          <CardLink to="/">
            <div className="relative rounded-[24px] bento-card overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.03_45)] to-[oklch(0.32_0.05_50)] text-white">
              <div className="p-5 pr-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary/90">
                  Digital Health Portal
                </div>
                <h3 className="mt-1 text-[20px] font-bold leading-tight">
                  Your entire health,<br />on one screen.
                </h3>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Records", "Book Tests", "Home Collection", "Track Reports"].map((f) => (
                    <span
                      key={f}
                      className="text-[10.5px] font-medium px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-glow">
                  Open Portal <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <img
                src={digitalHealth}
                alt="Digital health app"
                width={1200}
                height={900}
                loading="lazy"
                className="absolute -right-2 -bottom-2 w-[170px] h-[170px] object-contain animate-float-slow opacity-95"
              />
              <div className="pointer-events-none absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/30 blur-2xl" />
            </div>
          </CardLink>
        </Reveal>

        {/* 4 medium squares */}
        {[
          { title: "Doctor Consultation", Icon: Stethoscope, tint: "from-[oklch(0.94_0.07_155)] to-[oklch(0.86_0.13_150)]" },
          { title: "Medicine Delivery", Icon: Pill, tint: "from-[oklch(0.94_0.08_20)] to-[oklch(0.86_0.14_25)]" },
          { title: "Health Store", Icon: ShoppingBag, tint: "from-[oklch(0.93_0.07_280)] to-[oklch(0.85_0.13_285)]" },
          { title: "Preventive Packages", Icon: PackageCheck, tint: "from-[oklch(0.94_0.07_60)] to-[oklch(0.86_0.14_50)]" },
        ].map(({ title, Icon, tint }, i) => (
          <Reveal key={title} delay={i * 60}>
            <CardLink to="/">
              <div className={`rounded-[24px] bento-card p-6 h-[130px] bg-gradient-to-br ${tint} relative overflow-hidden`}>
                <div className="w-10 h-10 rounded-2xl bg-white/70 grid place-items-center shadow-soft">
                  <Icon className="w-5 h-5 text-foreground/80" />
                </div>
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-[14px] font-bold leading-tight">{title}</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/70">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </CardLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Why Orange Stars ---------- */
function WhyOrangeStars() {
  const cards = [
    { title: "Prevent Early", desc: "Detect diseases before symptoms.", Icon: ShieldCheck, color: "oklch(0.68 0.18 45)" },
    { title: "Stay Healthy", desc: "Lifestyle improvement programs.", Icon: Leaf, color: "oklch(0.6 0.15 148)" },
    { title: "Save Smart", desc: "Health savings for future needs.", Icon: PiggyBank, color: "oklch(0.66 0.14 240)" },
    { title: "Track Forever", desc: "Digital records & monitoring.", Icon: Activity, color: "oklch(0.62 0.2 320)" },
  ];
  return (
    <section className="mt-12">
      <SectionTitle eyebrow="Why us" title="Why Orange Stars" sub="Four pillars of a lifetime of care." />
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map(({ title, desc, Icon, color }, i) => (
          <Reveal key={title} delay={i * 60}>
            <CardLink to="/">
              <div className="rounded-[24px] bg-card p-4 h-full shadow-soft border border-border/60 hover:-translate-y-0.5 transition">
                <div
                  className="w-11 h-11 rounded-2xl grid place-items-center shadow-soft"
                  style={{ background: `color-mix(in oklab, ${color} 18%, white)` }}
                >
                  <Icon className="w-[22px] h-[22px]" style={{ color }} strokeWidth={2.2} />
                </div>
                <div className="mt-3 text-[15px] font-bold leading-tight">{title}</div>
                <div className="mt-1 text-[12.5px] text-muted-foreground leading-snug">{desc}</div>
              </div>
            </CardLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- HSA Section ---------- */
function HSASection() {
  const pills = ["Tax Benefits", "Emergency Support", "Lifetime Savings", "Health Wallet", "Flexible Withdrawals"];
  return (
    <section className="px-5 mt-12">
      <Reveal>
        <CardLink to="/">
          <div className="relative rounded-[24px] sm:rounded-[32px] p-6 overflow-hidden bento-card bg-gradient-to-br from-[oklch(0.98_0.03_75)] via-[oklch(0.94_0.07_60)] to-[oklch(0.88_0.13_50)]">
            <div className="pointer-events-none absolute -top-8 -right-6 w-44 h-44 rounded-full bg-white/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary/90">
                  Health Savings Account
                </div>
                <h3 className="mt-1 text-[24px] font-extrabold leading-[1.05]">
                  Grow a fund<br />that heals.
                </h3>
              </div>
              <img
                src={hsaPiggy}
                alt="HSA"
                width={900}
                height={900}
                loading="lazy"
                className="w-[110px] h-[110px] object-contain animate-float"
              />
            </div>
            <p className="relative mt-3 text-[14px] leading-relaxed text-foreground/75">
              Build a dedicated healthcare fund for future medical expenses while enjoying long-term financial wellness.
            </p>

            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {pills.map((p) => (
                <span
                  key={p}
                  className="text-[11.5px] font-semibold px-3 py-1.5 rounded-full glass text-foreground/80"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="relative mt-5">
              <PillButton>Explore HSA</PillButton>
            </div>
          </div>
        </CardLink>
      </Reveal>
    </section>
  );
}

/* ---------- Preventive Programs (horizontal) ---------- */
function PreventivePrograms() {
  const items = [
    { title: "Annual Health Check", tag: "Most popular", tint: "from-[oklch(0.94_0.07_60)] to-[oklch(0.86_0.14_50)]" },
    { title: "Executive Health Check", tag: "Premium", tint: "from-[oklch(0.22_0.03_45)] to-[oklch(0.36_0.06_55)]", dark: true },
    { title: "Diabetes Screening", tag: "Metabolic", tint: "from-[oklch(0.94_0.08_20)] to-[oklch(0.86_0.14_25)]" },
    { title: "Heart Screening", tag: "Cardiac", tint: "from-[oklch(0.94_0.09_25)] to-[oklch(0.85_0.16_30)]" },
    { title: "Cancer Screening", tag: "Preventive", tint: "from-[oklch(0.93_0.07_280)] to-[oklch(0.84_0.13_285)]" },
    { title: "Women's Health", tag: "For her", tint: "from-[oklch(0.94_0.07_355)] to-[oklch(0.87_0.13_10)]" },
    { title: "Senior Citizen Health", tag: "60+", tint: "from-[oklch(0.94_0.07_155)] to-[oklch(0.86_0.13_150)]" },
    { title: "Lifestyle Screening", tag: "Everyday", tint: "from-[oklch(0.96_0.04_240)] to-[oklch(0.88_0.11_240)]" },
  ];
  return (
    <section className="mt-12">
      <SectionTitle eyebrow="Programs" title="Preventive healthcare" sub="Curated packages, doctor designed." />
      <div className="pl-5 flex gap-3 overflow-x-auto no-scrollbar pb-2 pr-5 snap-x snap-mandatory">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 40}>
            <CardLink to="/" className="snap-start">
              <div
                className={`w-[180px] h-[220px] rounded-[24px] p-4 bg-gradient-to-br ${it.tint} shadow-card relative overflow-hidden ${
                  it.dark ? "text-white" : ""
                }`}
              >
                <div className="text-[10.5px] font-semibold px-2 py-1 rounded-full bg-white/60 text-foreground/80 inline-block">
                  {it.tag}
                </div>
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-[16px] font-bold leading-tight">{it.title}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold opacity-90">
                    Book now <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-6 -right-4 w-24 h-24 rounded-full bg-white/25 blur-2xl" />
              </div>
            </CardLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Corporate Wellness ---------- */
function CorporateWellness() {
  const features = ["Health Camps", "Annual Checkups", "Occupational Health", "Risk Assessment", "Wellness Calendar"];
  return (
    <section className="px-5 mt-12">
      <Reveal>
        <CardLink to="/">
          <div className="relative rounded-[24px] sm:rounded-[32px] p-6 overflow-hidden bg-gradient-to-br from-[oklch(0.95_0.04_240)] to-[oklch(0.88_0.1_240)] shadow-card">
            <div className="pointer-events-none absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/50 blur-3xl" />
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[oklch(0.45_0.18_240)]">
              For companies
            </div>
            <h3 className="mt-1 text-[22px] font-extrabold leading-tight">
              Corporate Wellness<br />Programs.
            </h3>

            <img
              src={corporateWellness}
              alt="Employees"
              width={1000}
              height={900}
              loading="lazy"
              className="mx-auto my-3 w-[240px] h-[180px] object-contain animate-float-slow"
            />

            <div className="glass-strong rounded-2xl p-3">
              <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[12.5px] font-medium text-foreground/80 min-w-0">
                    <BadgeCheck className="w-3.5 h-3.5 mt-0.5 text-[oklch(0.55_0.18_240)] shrink-0" />
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <PillButton variant="dark">Corporate Solutions</PillButton>
            </div>
          </div>
        </CardLink>
      </Reveal>
    </section>
  );
}

/* ---------- Digital Health full-width ---------- */
function DigitalHealth() {
  const features = ["Book Labs", "Free Home Collection", "Digital Reports", "Health Records", "Trend Tracking", "Book Doctors"];
  return (
    <section className="px-5 mt-12">
      <Reveal>
        <CardLink to="/">
          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-card bg-gradient-to-br from-[oklch(0.22_0.03_45)] to-[oklch(0.34_0.06_55)] text-white p-6">
            <div className="pointer-events-none absolute -top-10 -left-10 w-44 h-44 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-6 w-44 h-44 rounded-full bg-[oklch(0.7_0.15_240)]/30 blur-3xl" />

            <div className="text-[11px] font-semibold uppercase tracking-wider text-primary-glow">Digital Health</div>
            <h3 className="mt-1 text-[24px] font-extrabold leading-tight">
              Everything<br />connected.
            </h3>

            <img
              src={digitalHealth}
              alt="Digital dashboard"
              width={1200}
              height={900}
              loading="lazy"
              className="mx-auto my-4 w-[260px] h-[190px] object-contain animate-float-slow"
            />

            <div className="grid grid-cols-2 gap-2">
              {features.map((f) => (
                <div
                  key={f}
                  className="text-[12px] font-medium px-3 py-2 rounded-2xl bg-white/8 border border-white/12 backdrop-blur flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-glow shrink-0" />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <PillButton>Open Dashboard</PillButton>
            </div>
          </div>
        </CardLink>
      </Reveal>
    </section>
  );
}

/* ---------- Health Journey timeline ---------- */
function HealthJourney() {
  const steps = [
    { t: "Join Orange Stars", Icon: Sparkles },
    { t: "Complete Health Assessment", Icon: ClipboardList },
    { t: "Book Preventive Checkup", Icon: ShieldCheck },
    { t: "Doctor Review", Icon: Stethoscope },
    { t: "Personalized Wellness Plan", Icon: Leaf },
    { t: "Track Progress", Icon: TrendingUp },
    { t: "Healthy Lifestyle", Icon: Heart },
  ];
  return (
    <section className="mt-12">
      <SectionTitle eyebrow="The path" title="Your health journey" sub="Seven steps to a healthier you." />
      <div className="pl-5 flex gap-3 overflow-x-auto no-scrollbar pb-2 pr-5 snap-x snap-mandatory">
        {steps.map(({ t, Icon }, i) => (
          <Reveal key={t} delay={i * 40}>
            <div className="snap-start w-[150px] rounded-[24px] bg-card p-4 shadow-soft border border-border/60 h-full">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl cta-gradient grid place-items-center shadow-soft">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-[11px] font-bold text-primary/70">0{i + 1}</div>
              </div>
              <div className="mt-3 text-[13px] font-semibold leading-tight">{t}</div>
              {i < steps.length - 1 && (
                <div className="mt-3 flex items-center gap-1 text-primary/60">
                  <div className="h-[2px] w-full rounded-full bg-primary/25" />
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Wellness Programs Carousel ---------- */
function WellnessCarousel() {
  const items = [
    { t: "Weight Management", emoji: "⚖️", tint: "from-[oklch(0.94_0.07_60)] to-[oklch(0.85_0.14_50)]" },
    { t: "Heart Care", emoji: "❤️", tint: "from-[oklch(0.94_0.09_25)] to-[oklch(0.85_0.16_30)]" },
    { t: "Diabetes Care", emoji: "🩸", tint: "from-[oklch(0.94_0.08_15)] to-[oklch(0.86_0.15_20)]" },
    { t: "Nutrition", emoji: "🥗", tint: "from-[oklch(0.94_0.08_150)] to-[oklch(0.85_0.15_150)]" },
    { t: "Mental Wellness", emoji: "🧠", tint: "from-[oklch(0.93_0.07_280)] to-[oklch(0.85_0.13_285)]" },
    { t: "Yoga", emoji: "🧘", tint: "from-[oklch(0.94_0.07_75)] to-[oklch(0.86_0.13_65)]" },
    { t: "Lifestyle Coaching", emoji: "✨", tint: "from-[oklch(0.96_0.04_240)] to-[oklch(0.88_0.11_240)]" },
    { t: "Stress Management", emoji: "🌿", tint: "from-[oklch(0.95_0.05_155)] to-[oklch(0.88_0.11_155)]" },
  ];
  return (
    <section className="mt-12">
      <SectionTitle eyebrow="Wellness" title="Programs for every you" />
      <div className="pl-5 flex gap-3 overflow-x-auto no-scrollbar pb-2 pr-5 snap-x snap-mandatory">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 40}>
            <CardLink to="/" className="snap-start">
              <div className={`w-[140px] h-[170px] rounded-[24px] p-4 bg-gradient-to-br ${it.tint} shadow-card relative overflow-hidden`}>
                <div className="w-12 h-12 rounded-2xl bg-white/70 grid place-items-center text-2xl shadow-soft">
                  {it.emoji}
                </div>
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="text-[13.5px] font-bold leading-tight">{it.t}</div>
                  <div className="mt-1 text-[11px] text-foreground/60">Guided program</div>
                </div>
              </div>
            </CardLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Trust Section ---------- */
function TrustSection() {
  const hero = {
    t: "Orange Stars",
    d: "The care ecosystem tying it all together — preventive health, savings, and a lifetime of records.",
    Icon: Sparkles,
  };
  const items = [
    {
      t: "Indus Fortune",
      d: "Cooperative Society",
      Icon: Users,
      accent: "oklch(0.66 0.14 240)",
      tint: "from-[oklch(0.97_0.02_240)] to-[oklch(0.93_0.06_240)]",
    },
    {
      t: "Cure & Care",
      d: "Primary care partner",
      Icon: Heart,
      accent: "oklch(0.62 0.2 25)",
      tint: "from-[oklch(0.98_0.02_25)] to-[oklch(0.94_0.07_25)]",
    },
    {
      t: "NABL Labs",
      d: "Certified diagnostics",
      Icon: FlaskConical,
      accent: "oklch(0.6 0.15 148)",
      tint: "from-[oklch(0.97_0.03_150)] to-[oklch(0.93_0.07_150)]",
    },
    {
      t: "Trusted Doctors",
      d: "Experienced panel",
      Icon: Award,
      accent: "oklch(0.68 0.18 55)",
      tint: "from-[oklch(0.98_0.03_75)] to-[oklch(0.94_0.07_60)]",
    },
  ];
  return (
    <section className="mt-14 px-5">
      <SectionTitle
        eyebrow="Ecosystem"
        title="Trusted healthcare ecosystem"
        sub="Built on partnerships you can rely on."
      />

      {/* Hero trust card */}
      <Reveal>
        <CardLink to="/">
          <div className="relative overflow-hidden rounded-[24px] bento-card p-6 bg-gradient-to-br from-white via-[oklch(0.98_0.02_75)] to-[oklch(0.94_0.07_60)] hover:-translate-y-0.5 transition-all duration-500">
            <div className="pointer-events-none absolute -top-10 -right-8 w-40 h-40 rounded-full bg-primary/15 blur-3xl group-hover:bg-primary/25 transition-colors duration-700" />
            <div className="pointer-events-none absolute -bottom-14 -left-10 w-40 h-40 rounded-full bg-[oklch(0.86_0.14_60)]/25 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-2xl cta-gradient grid place-items-center shadow-glow">
                <hero.Icon className="w-7 h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-[16px] font-extrabold leading-tight truncate">{hero.t}</div>
                  <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="mt-1.5 text-[12.5px] text-muted-foreground leading-relaxed">{hero.d}</p>
              </div>
            </div>

            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {["ISO Aligned", "Data Secure", "Doctor Reviewed"].map((p) => (
                <span
                  key={p}
                  className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full glass text-foreground/75"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </CardLink>
      </Reveal>

      {/* Bento partner grid */}
      <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map(({ t, d, Icon, accent, tint }, i) => (
          <Reveal key={t} delay={i * 60}>
            <CardLink to="/">
              <div
                className={`group/card relative h-full overflow-hidden rounded-[24px] p-4 bg-gradient-to-br ${tint} border border-white/60 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card`}
              >
                {/* hover glass sheen */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl" style={{ background: `color-mix(in oklab, ${accent} 30%, transparent)` }} />
                </div>

                <div className="relative flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-2xl grid place-items-center shadow-soft backdrop-blur"
                    style={{ background: `color-mix(in oklab, ${accent} 14%, white)` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
                  </div>
                  <BadgeCheck className="w-4 h-4 opacity-40 group-hover/card:opacity-100 transition" style={{ color: accent }} />
                </div>

                <div className="relative mt-6">
                  <div className="text-[14px] font-bold leading-tight truncate">{t}</div>
                  <div className="text-[11.5px] text-muted-foreground truncate mt-0.5">{d}</div>
                </div>
              </div>
            </CardLink>
          </Reveal>
        ))}
      </div>

      {/* Micro trust bar */}
      <Reveal delay={200}>
        <div className="mt-4 glass rounded-[24px] px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span className="text-[11.5px] font-semibold text-foreground/75 truncate">
              End-to-end encrypted · Private by default
            </span>
          </div>
          <div className="flex -space-x-1.5 shrink-0">
            {[
              "oklch(0.72 0.18 55)",
              "oklch(0.66 0.14 240)",
              "oklch(0.6 0.15 148)",
            ].map((c, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full ring-2 ring-white"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Bottom CTA ---------- */
function BottomCTA() {
  return (
    <section className="px-5 mt-14">
      <Reveal>
        <CardLink to="/">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] p-7 shadow-card cta-gradient text-white">
            <div className="pointer-events-none absolute -top-10 -right-6 w-40 h-40 rounded-full bg-white/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -left-8 w-44 h-44 rounded-full bg-black/10 blur-3xl" />
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/90">Join today</div>
            <h3 className="mt-1 text-[26px] font-extrabold leading-[1.05]">
              Ready to start your<br />wellness journey?
            </h3>
            <p className="mt-3 text-[14px] text-white/85 leading-relaxed max-w-[300px]">
              Preventive care, health savings, and a lifetime of digital records — one tap away.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-bold text-[15px] shadow-glow hover:-translate-y-0.5 transition">
              Get Started <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </CardLink>
      </Reveal>
    </section>
  );
}

/* ---------- Bottom Navigation ---------- */
function BottomNav() {
  const items = [
    { t: "Home", Icon: HomeIcon },
    { t: "Services", Icon: LayoutGrid },
    { t: "HSA", Icon: Wallet },
    { t: "Reports", Icon: ClipboardList },
    { t: "Profile", Icon: User },
  ];
  const [active, setActive] = useState("Home");
  const [pressed, setPressed] = useState(false);
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 pb-[max(env(safe-area-inset-bottom),12px)] pt-2 pointer-events-none">
      <div className="mx-auto w-full max-w-[480px] px-4 pointer-events-auto">
        <div className="relative">
          {/* floating center button */}
          <button
            aria-label="Health+ quick actions"
            onPointerDown={() => setPressed(true)}
            onPointerUp={() => setPressed(false)}
            onPointerLeave={() => setPressed(false)}
            className={`absolute left-1/2 -translate-x-1/2 -top-7 w-16 h-16 rounded-full cta-gradient grid place-items-center shadow-glow ring-4 ring-background transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_oklch(0.7_0.19_45/0.55)] active:scale-95 ${pressed ? "scale-95" : ""}`}
          >
            <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden />
            <span className="absolute inset-0 rounded-full shimmer-sheen" aria-hidden />
            <Plus
              className={`relative w-7 h-7 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${pressed ? "rotate-90" : "rotate-0"}`}
              strokeWidth={2.6}
            />
            <span className="absolute -bottom-5 text-[10px] font-bold text-primary tracking-wide">
              Health+
            </span>
          </button>

          <nav className="glass-strong rounded-[24px] px-3 py-2.5 flex items-center justify-between">
            {items.slice(0, 2).map(({ t, Icon }) => (
              <NavItem key={t} t={t} Icon={Icon} active={active === t} onSelect={() => setActive(t)} />
            ))}
            <div className="w-16" aria-hidden />
            {items.slice(2).map(({ t, Icon }) => (
              <NavItem key={t} t={t} Icon={Icon} active={active === t} onSelect={() => setActive(t)} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  t,
  Icon,
  active,
  onSelect,
}: {
  t: string;
  Icon: typeof HomeIcon;
  active?: boolean;
  onSelect?: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      aria-current={active ? "page" : undefined}
      className={`group relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-90 ${
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground hover:-translate-y-0.5"
      }`}
    >
      {/* active pill background */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/15 to-primary/0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      />
      <Icon
        className={`relative w-[22px] h-[22px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active ? "-translate-y-0.5 scale-110" : "group-hover:-translate-y-0.5"
        }`}
        strokeWidth={active ? 2.6 : 2}
      />
      <span
        className={`relative text-[10.5px] font-semibold leading-none transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-90"
        }`}
      >
        {t}
      </span>
      {/* active dot indicator */}
      <span
        aria-hidden
        className={`relative mt-0.5 h-1 rounded-full cta-gradient transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          active ? "w-5 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </button>
  );
}

export default Landing;
