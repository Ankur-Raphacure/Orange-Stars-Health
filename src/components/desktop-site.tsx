import { useRef, useState, type ReactNode, type FormEvent } from "react";
import {
  ChevronDown,
  Target,
  Columns2,
  Diamond,
  MoveUpRight,
  Lock,
  Check,
  Smartphone,
  Zap,
  Heart,
  ArrowUp,
  ShieldCheck,
  QrCode,
} from "lucide-react";

import poster from "@/assets/u13-badminton-poster.png";
import upiQr from "@/assets/upi-qr.png";

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */

export interface DesktopSiteProps {
  onOpenRaphacure?: (url: string) => void;
  onLogin?: () => void;
}

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-primary">
      {children}
    </div>
  );
}

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-10 ${className}`}>{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: ["Health", "Services"], href: "#services", isRaphacure: true, url: "https://orangestars.raphacure.com/" },
  { label: ["Health", "Packages"], href: "#services", isRaphacure: true, url: "https://orangestars.raphacure.com/" },
  { label: ["My", "Health"], href: "#", isLogin: true },
  { label: ["Corporate", "Wellness"], href: "#services", isRaphacure: true, url: "https://orangestars.raphacure.com/" },
  { label: ["Active", "Wellness"], href: "#active-wellness" },
  { label: ["Customer", "Support"], href: "#footer" },
];

function DesktopHeader({ onOpenRaphacure, onLogin }: DesktopSiteProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border/70">
      <Wrap className="h-[76px] flex items-center justify-between gap-8">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-full cta-gradient grid place-items-center text-card text-[15px] font-black">
            ✳
          </div>
          <div className="leading-none">
            <div className="text-[19px] font-black tracking-tight text-primary">ORANGE STARS</div>
            <div className="text-[9.5px] font-semibold tracking-[0.16em] text-muted-foreground mt-1">
              PREVENTIVE HEALTHCARE
            </div>
          </div>
        </a>

        <nav className="flex items-center gap-6">
          {NAV.map((n) => {
            const text = (
              <>
                {n.label[0]}
                <br />
                {n.label[1]}
              </>
            );

            if (n.isLogin && onLogin) {
              return (
                <button
                  key={n.label.join("-")}
                  type="button"
                  onClick={onLogin}
                  className="text-[13.5px] font-bold leading-[1.15] text-navy text-center hover:text-primary transition-colors cursor-pointer"
                >
                  {text}
                </button>
              );
            }

            if (n.isRaphacure && onOpenRaphacure) {
              return (
                <button
                  key={n.label.join("-")}
                  type="button"
                  onClick={() => onOpenRaphacure(n.url || "https://orangestars.raphacure.com/")}
                  className="text-[13.5px] font-bold leading-[1.15] text-navy text-center hover:text-primary transition-colors cursor-pointer"
                >
                  {text}
                </button>
              );
            }

            return (
              <a
                key={n.label.join("-")}
                href={n.href}
                className="text-[13.5px] font-bold leading-[1.15] text-navy text-center hover:text-primary transition-colors"
              >
                {text}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#registration"
            className="rounded-[10px] border border-primary/35 bg-secondary px-3 py-2 text-center leading-tight transition hover:border-primary"
          >
            <div className="text-[12px] font-extrabold text-navy">U-13 Badminton</div>
            <div className="text-[12px] font-extrabold text-navy">Championship</div>
            <div className="mt-1 rounded-md cta-gradient px-2 py-[3px] text-[9px] font-extrabold tracking-wide text-card">
              REGISTER NOW
            </div>
          </a>
          <button
            type="button"
            onClick={() => onOpenRaphacure?.("https://orangestars.raphacure.com/")}
            className="rounded-[10px] cta-gradient px-4 py-3 text-[12px] font-extrabold leading-tight text-card text-center shadow-soft press cursor-pointer"
          >
            BOOK
            <br />
            NOW
          </button>
        </div>
      </Wrap>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function DesktopHero({ onOpenRaphacure }: DesktopSiteProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onOpenRaphacure?.("https://orangestars.raphacure.com/");
  };

  return (
    <section className="bg-card">
      <Wrap className="pt-14 pb-16 grid grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <div className="inline-flex rounded-full bg-secondary px-4 py-2 text-[11.5px] font-extrabold uppercase tracking-[0.08em] text-primary">
            Preventive healthcare • Simple • Connected
          </div>

          <h1 className="mt-6 text-[52px] leading-[1.06] font-black tracking-tight text-navy">
            Your health needs,
            <br />
            <span className="text-primary">all in one place.</span>
          </h1>

          <p className="mt-5 text-[15.5px] text-muted-foreground max-w-lg">
            Book health services, preventive packages and consultations in one simple place.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center gap-0 rounded-[14px] border border-border bg-card p-2 shadow-soft max-w-2xl"
          >
            <div className="relative">
              <select
                aria-label="What do you need?"
                className="appearance-none bg-transparent pl-3 pr-9 py-2.5 text-[14px] font-medium text-navy outline-none cursor-pointer"
              >
                <option>What do you need?</option>
                <option>Health Packages</option>
                <option>Lab Tests</option>
                <option>Radiology</option>
                <option>Doctors</option>
                <option>Medicines</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <span className="h-7 w-px bg-border" />
            <input
              placeholder="Search service, test or package"
              className="flex-1 bg-transparent px-4 py-2.5 text-[14px] outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="rounded-[10px] cta-gradient px-6 py-2.5 text-[14px] font-extrabold text-card shadow-soft press cursor-pointer"
            >
              Explore
            </button>
          </form>
        </div>

        <div className="relative overflow-hidden rounded-[18px] cta-gradient h-[248px] shadow-card">
          <span className="absolute -right-16 -top-20 w-[300px] h-[300px] rounded-full bg-white/10" />
          <span className="absolute -left-24 bottom-[-90px] w-[280px] h-[280px] rounded-full bg-white/10" />
          <div className="absolute inset-0 grid place-items-center">
            <Stethoscope3D />
          </div>
          <div className="absolute left-7 bottom-6">
            <div className="text-[21px] font-black text-card">Healthy Today. Secure Tomorrow.</div>
            <div className="mt-1 text-[11.5px] font-medium text-card/85">
              Predict • Prevent • Protect
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

function Stethoscope3D() {
  return (
    <svg width="96" height="96" viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M18 10v14a12 12 0 0 0 24 0V10"
        stroke="oklch(0.75 0.15 200)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30 36v6a10 10 0 0 0 20 0v-4"
        stroke="oklch(0.5 0.18 300)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="50" cy="30" r="5" fill="oklch(0.68 0.14 240)" />
      <circle cx="18" cy="9" r="3" fill="oklch(0.75 0.15 200)" />
      <circle cx="42" cy="9" r="3" fill="oklch(0.75 0.15 200)" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Shortcuts                                                          */
/* ------------------------------------------------------------------ */

const SHORTCUTS = [
  { emoji: "❤️", label: "Health Packages", url: "https://orangestars.raphacure.com/" },
  { emoji: "🧪", label: "Lab Tests", url: "https://orangestars.raphacure.com/" },
  { emoji: "🩻", label: "Radiology", url: "https://orangestars.raphacure.com/" },
  { emoji: "🩺", label: "Doctors", url: "https://orangestars.raphacure.com/" },
  { emoji: "💊", label: "Medicines", url: "https://orangestars.raphacure.com/" },
  { emoji: "🏃", label: "Fitness", url: "https://orangestars.raphacure.com/" },
  { emoji: "🏸", label: "U13 Tournament", href: "#registration" },
];

function Shortcuts({ onOpenRaphacure }: DesktopSiteProps) {
  return (
    <section className="bg-card border-b border-border/70">
      <Wrap className="pb-14">
        <div className="flex items-end justify-between">
          <h2 className="text-[34px] font-black tracking-tight text-navy">
            What are you looking for?
          </h2>
          <button
            type="button"
            onClick={() => onOpenRaphacure?.("https://orangestars.raphacure.com/")}
            className="text-[14px] font-bold text-primary hover:underline cursor-pointer"
          >
            View all services →
          </button>
        </div>

        <div className="mt-8 grid grid-cols-7 gap-4">
          {SHORTCUTS.map((s) => {
            const content = (
              <>
                <div className="w-[54px] h-[54px] rounded-full bg-secondary grid place-items-center text-[22px] transition-transform duration-300 group-hover:-translate-y-1">
                  {s.emoji}
                </div>
                <div className="text-[12.5px] font-medium text-navy text-center">{s.label}</div>
              </>
            );

            if (s.href) {
              return (
                <a key={s.label} href={s.href} className="group flex flex-col items-center gap-3">
                  {content}
                </a>
              );
            }

            return (
              <button
                key={s.label}
                type="button"
                onClick={() => onOpenRaphacure?.(s.url || "https://orangestars.raphacure.com/")}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                {content}
              </button>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Prevention                                                         */
/* ------------------------------------------------------------------ */

const PREVENTION = [
  { icon: Target, title: "Health Assessment", desc: "Vitals, lifestyle, personal and family history." },
  { icon: Columns2, title: "Preventive Screening", desc: "Relevant lab and diagnostic tests based on need." },
  { icon: Diamond, title: "Health Risk Profile", desc: "Important health indicators in one structured view." },
  { icon: MoveUpRight, title: "Personal Next Steps", desc: "Guidance, follow-up and reassessment over time." },
];

function Prevention() {
  return (
    <section className="bg-card">
      <Wrap className="py-16">
        <Eyebrow>Start with prevention</Eyebrow>
        <div className="mt-4 grid grid-cols-[1.1fr_1fr] gap-16 items-start">
          <h2 className="text-[34px] leading-[1.15] font-black tracking-tight text-navy">
            Know what matters before symptoms decide for you.
          </h2>
          <p className="text-[14.5px] leading-relaxed text-muted-foreground pt-2">
            Orange Stars combines basic assessment, lifestyle information, screening and your health
            history to build a clearer picture of your preventive-health priorities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-5">
          {PREVENTION.map((c) => (
            <div
              key={c.title}
              className="rounded-[14px] border border-border bg-muted/40 p-6 transition duration-300 hover:border-primary/40 hover:bg-card hover:shadow-soft"
            >
              <c.icon className="w-5 h-5 text-navy/70" strokeWidth={1.6} />
              <div className="mt-5 text-[17px] font-black text-navy">{c.title}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Health services grid                                               */
/* ------------------------------------------------------------------ */

const SERVICES = [
  { emoji: "🧪", title: "Lab Tests", desc: "Routine and preventive laboratory tests through qualified diagnostic partners.", cta: "Book a test", url: "https://orangestars.raphacure.com/" },
  { emoji: "🩻", title: "Radiology & Scans", desc: "Access to imaging and radiology services where enabled through qualified providers.", cta: "Book a scan", url: "https://orangestars.raphacure.com/" },
  { emoji: "🩺", title: "Doctor Consultation", desc: "General and specialist consultation access through enabled healthcare partners.", cta: "Find a doctor", url: "https://orangestars.raphacure.com/" },
  { emoji: "💊", title: "Pharmacy & Medicines", desc: "Prescription fulfilment support through authorised pharmacy partners, where available.", cta: "Medicine support", url: "https://orangestars.raphacure.com/" },
  { emoji: "❤️", title: "Preventive Health", desc: "Assessment, screening, Health Risk Profile and structured follow-up.", cta: "Start assessment", url: "https://hra.raphacure.net/" },
  { emoji: "📋", title: "Diagnostics", desc: "Coordinated diagnostic access across laboratory and other clinically appropriate services.", cta: "Explore diagnostics", url: "https://orangestars.raphacure.com/" },
  { emoji: "🚑", title: "Emergency Assistance", desc: "Emergency navigation and support information. For life-threatening emergencies in India, call 112.", cta: "Emergency information", href: "tel:112" },
  { emoji: "🏃", title: "Fitness & Active Wellness", desc: "Walking, fitness, sports and wellness engagement for healthier lifestyles.", cta: "Explore wellness", url: "https://orangestars.raphacure.com/" },
  { emoji: "🏢", title: "Corporate Wellness", desc: "Preventive health and wellness programmes for organisations and employees.", cta: "For organisations", url: "https://orangestars.raphacure.com/" },
];

function HealthServices({ onOpenRaphacure }: DesktopSiteProps) {
  return (
    <section id="services" className="bg-card border-t border-border/70">
      <Wrap className="py-16">
        <Eyebrow>Health services</Eyebrow>
        <div className="mt-3 flex items-end justify-between gap-12">
          <h2 className="text-[32px] font-black tracking-tight text-navy">
            Simple access to the care you need.
          </h2>
          <p className="text-[13.5px] text-muted-foreground max-w-md text-right">
            Choose a health category and move directly to booking, enquiry or your next step.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const handleClick = () => {
              if (s.url) {
                onOpenRaphacure?.(s.url);
              }
            };

            return (
              <div
                key={s.title}
                onClick={s.url ? handleClick : undefined}
                className={`group rounded-[14px] border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card ${s.url ? "cursor-pointer" : ""}`}
              >
                <div className="text-[22px]">{s.emoji}</div>
                <div className="mt-5 text-[19px] font-black text-navy">{s.title}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground min-h-[42px]">
                  {s.desc}
                </p>
                <div className="mt-4 text-[13.5px] font-extrabold text-primary flex items-center gap-1">
                  {s.href ? (
                    <a href={s.href} className="inline-flex items-center gap-1">
                      {s.cta} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  ) : (
                    <>
                      {s.cta} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Active wellness + poster                                           */
/* ------------------------------------------------------------------ */

const CHAMP = [
  ["Next initiative", "Junior U13 Badminton Championship"],
  ["Date", "25 October 2026"],
  ["Venue", "Police Gymkhana, Bellary"],
  ["Entry", "₹500 per player"],
];

function ActiveWellness() {
  return (
    <section id="active-wellness" className="bg-card border-t border-border/70">
      <Wrap className="py-16 grid grid-cols-[1fr_0.85fr] gap-16 items-start">
        <div>
          <Eyebrow>Active wellness</Eyebrow>
          <h2 className="mt-4 text-[38px] leading-[1.12] font-black tracking-tight text-navy">
            Move more. Stay engaged. Live healthier.
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground max-w-lg">
            Fitness, walking, sports and community wellness complement the preventive-health journey.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {CHAMP.map(([k, v]) => (
              <div key={k} className="rounded-[12px] border border-border bg-muted/40 p-5">
                <div className="text-[12.5px] text-muted-foreground">{k}</div>
                <div className="mt-1 text-[15px] font-black text-navy leading-snug">{v}</div>
              </div>
            ))}
          </div>

          <a
            href="#registration"
            className="mt-7 inline-block rounded-[10px] bg-navy px-6 py-3.5 text-[14px] font-extrabold text-card press"
          >
            Championship Enquiry
          </a>
        </div>

        <img
          src={poster}
          alt="Orange Stars U-13 Badminton Championship poster — 25 October 2026, Police Gymkhana, Bellary"
          className="w-full rounded-[12px] border border-border shadow-card"
          loading="lazy"
        />
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Trust bar                                                          */
/* ------------------------------------------------------------------ */

const TRUST = [
  { icon: Lock, label: "Privacy-first design" },
  { icon: Check, label: "Secure authenticated health records" },
  { icon: Smartphone, label: "Mobile-first experience" },
  { icon: Zap, label: "Fast, focused navigation" },
  { icon: Heart, label: "Personalized preventive care" },
];

function TrustBar() {
  return (
    <section className="bg-card border-t border-border/70">
      <Wrap className="py-7 flex items-center justify-center gap-10 flex-wrap">
        {TRUST.map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-[13px] font-bold text-navy">
            <t.icon className="w-4 h-4 text-primary" strokeWidth={2.2} />
            {t.label}
          </div>
        ))}
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Registration                                                       */
/* ------------------------------------------------------------------ */

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-extrabold text-navy">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-border bg-card px-4 py-3 text-[14px] text-navy outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

const INFO = [
  ["Date", "25 October 2026"],
  ["Venue", "Police Gymkhana, Bellary"],
  ["Entry Fee", "₹500 per player"],
  ["Last Date", "21 October 2026"],
];

function Consent({
  id,
  checked,
  onChange,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-3 rounded-[12px] border px-5 py-3.5 text-[12.5px] font-bold transition-all duration-300 ${
        checked
          ? "border-emerald-500/40 bg-emerald-500/10 text-navy shadow-soft"
          : "border-border bg-muted/50 text-navy/80 hover:border-primary/30 hover:bg-secondary/50"
      }`}
    >
      <span
        className={`mt-[1px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-[5px] border transition-all duration-300 ${
          checked ? "border-emerald-600 bg-emerald-600 text-card" : "border-navy/30 bg-card"
        }`}
      >
        {checked && <Check className="h-3 w-3" strokeWidth={4} />}
      </span>
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{children}</span>
    </label>
  );
}

function Registration() {
  const formRef = useRef<HTMLFormElement>(null);
  const [paid, setPaid] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [consent, setConsent] = useState(false);
  const [utr, setUtr] = useState("");
  const [done, setDone] = useState(false);

  const ready = paid && eligible && consent && utr.trim().length > 3;

  const clear = () => {
    formRef.current?.reset();
    setPaid(false);
    setEligible(false);
    setConsent(false);
    setUtr("");
    setDone(false);
  };

  return (
    <section id="registration" className="bg-muted/40 border-t border-border/70">
      <Wrap className="py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] font-black tracking-tight text-navy">
            U-13 Badminton Championship
          </h2>
          <a href="#top" className="flex items-center gap-1 text-[14px] font-bold text-primary hover:underline">
            Back to top <ArrowUp className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-[14px] border border-border bg-card">
          <div className="bg-secondary/70 px-9 py-8 border-b border-border">
            <div className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-primary">
              Orange Stars • Sports & Active Wellness
            </div>
            <h3 className="mt-3 text-[26px] font-black tracking-tight text-navy">
              U-13 Badminton Championship Registration
            </h3>
            <p className="mt-2 text-[12.5px] text-muted-foreground">
              1st Edition • Under-13 Boys Singles & Girls Singles
            </p>

            <div className="mt-6 grid grid-cols-4 gap-4">
              {INFO.map(([k, v]) => (
                <div key={k} className="rounded-[10px] border border-border bg-card px-5 py-4">
                  <div className="text-[13px] font-extrabold text-navy">{k}</div>
                  <div className="mt-1.5 text-[12.5px] text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              if (ready) setDone(true);
            }}
            className="px-9 py-9"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <Field label="Player Full Name" required>
                <input className={inputCls} placeholder="Enter full name" required />
              </Field>
              <Field label="Category" required>
                <select className={inputCls} required>
                  <option value="">Select Category</option>
                  <option value="boys">Under-13 Boys Singles</option>
                  <option value="girls">Under-13 Girls Singles</option>
                </select>
              </Field>
              <Field label="Date of Birth" required>
                <input type="date" className={inputCls} required />
              </Field>
              <Field label="School / Academy">
                <input className={inputCls} placeholder="Enter school or academy name" />
              </Field>
              <Field label="District / City" required>
                <input className={inputCls} placeholder="e.g. Bellary" required />
              </Field>
              <Field label="Playing Experience">
                <select className={inputCls}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </Field>
              <Field label="Parent / Guardian Name" required>
                <input className={inputCls} placeholder="Enter parent/guardian name" required />
              </Field>
              <Field label="Registered Mobile Number" required>
                <input type="tel" className={inputCls} placeholder="+91" required />
              </Field>
              <Field label="Email">
                <input type="email" className={inputCls} placeholder="email@example.com" />
              </Field>
              <Field label="Emergency Contact Number" required>
                <input type="tel" className={inputCls} placeholder="+91" required />
              </Field>
            </div>

            <p className="mt-7 rounded-[12px] border border-primary/25 bg-secondary/70 px-5 py-4 text-[12.5px] text-navy/80">
              <strong className="font-extrabold text-navy">Eligibility:</strong> Player must be born
              on or after <strong className="font-extrabold text-navy">26 October 2013</strong>.
              Please complete the ₹500 entry fee payment before submitting the form.
            </p>

            {/* Scan & Pay */}
            <div className="relative mt-6 overflow-hidden rounded-[18px] border border-primary/25 bg-gradient-to-br from-secondary/80 via-card to-secondary/50 p-7 shadow-soft">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex gap-8">
                <div className="shrink-0 rounded-[16px] border border-border bg-card p-3 shadow-soft transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src={upiQr}
                    alt="UPI QR code to pay the ₹500 tournament entry fee to Orange Stars Private Limited"
                    className="h-[132px] w-[132px]"
                  />
                  <div className="mt-2 flex items-center justify-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-primary">
                    <QrCode className="h-3 w-3" /> Scan to pay
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="text-[19px] font-black tracking-tight text-navy">
                    Scan &amp; Pay Registration Fee
                  </h4>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-[30px] font-black leading-none text-primary">₹500</span>
                    <span className="pb-1 text-[12px] font-bold text-muted-foreground">
                      per player
                    </span>
                  </div>
                  <p className="mt-3 text-[12.5px] text-muted-foreground">
                    Scan the QR code using any UPI payment app.
                  </p>
                  <p className="mt-1 text-[12.5px] text-muted-foreground">
                    Payee: <strong className="font-extrabold text-navy">Orange Stars Private Limited</strong>
                  </p>
                  <p className="mt-1 text-[12.5px] text-muted-foreground">
                    UPI ID: <strong className="font-extrabold text-navy">Q16040655@ybl</strong>
                  </p>
                  <p className="mt-3 text-[12.5px] text-muted-foreground">
                    After payment, enter the{" "}
                    <strong className="font-extrabold text-navy">UPI / UTR Transaction Number</strong>{" "}
                    below and tick <strong className="font-extrabold text-navy">Payment Done</strong>.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-[11.5px] font-extrabold text-emerald-700">
                    <ShieldCheck className="h-3.5 w-3.5" /> Secure UPI • Verified payee
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 max-w-[520px]">
              <Field label="UPI / UTR Transaction Number" required>
                <input
                  className={inputCls}
                  placeholder="Enter payment reference"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                  required
                />
              </Field>
            </div>

            <div className="mt-5 space-y-3">
              <Consent id="c-paid" checked={paid} onChange={setPaid}>
                Payment Done – ₹500. I confirm that the tournament entry fee has been paid.
              </Consent>
              <Consent id="c-eligible" checked={eligible} onChange={setEligible}>
                I confirm that the player meets the U13 eligibility requirement and that the
                information provided is correct.
              </Consent>
              <Consent id="c-consent" checked={consent} onChange={setConsent}>
                I consent to participation in the tournament and agree to the organiser's event
                rules, safety requirements and privacy terms.
              </Consent>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <button
                type="submit"
                disabled={!ready}
                className="rounded-[12px] cta-gradient px-8 py-3.5 text-[14px] font-extrabold text-card shadow-soft press transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 cursor-pointer"
              >
                Submit Registration
              </button>
              <button
                type="button"
                onClick={clear}
                className="rounded-[12px] border border-border bg-muted px-8 py-3.5 text-[14px] font-extrabold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary press cursor-pointer"
              >
                Clear Form
              </button>
              {done && (
                <span className="flex items-center gap-2 text-[13px] font-extrabold text-emerald-700">
                  <Check className="h-4 w-4" strokeWidth={3} /> Registration submitted
                </span>
              )}
            </div>
          </form>
        </div>
      </Wrap>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function DesktopFooter({ onOpenRaphacure }: DesktopSiteProps) {
  return (
    <footer id="footer" className="bg-navy">
      <Wrap className="py-12 grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="text-[18px] font-black text-card">ORANGE STARS</div>
          <div className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-card/60">
            PREVENTIVE HEALTHCARE
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-card/70 max-w-xs">
            Predict • Prevent • Protect. Preventive healthcare, active wellness and connected health
            services in one simple place.
          </p>
        </div>
        {[
          { h: "Services", l: ["Lab Tests", "Radiology & Scans", "Doctor Consultation", "Diagnostics"] },
          { h: "Programmes", l: ["Preventive Health", "Corporate Wellness", "Active Wellness", "U-13 Championship"] },
          { h: "Company", l: ["About Us", "Partners", "Customer Support", "Privacy Policy"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-[13px] font-extrabold text-card">{c.h}</div>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      if (i === "U-13 Championship" || i === "Active Wellness") {
                        const el = document.getElementById("active-wellness");
                        el?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        onOpenRaphacure?.("https://orangestars.raphacure.com/");
                      }
                    }}
                    className="text-[13px] text-card/70 hover:text-primary transition-colors text-left cursor-pointer"
                  >
                    {i}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Wrap>
      <div className="border-t border-white/10">
        <Wrap className="py-5 text-[12px] text-card/55">
          © {new Date().getFullYear()} Orange Stars. All rights reserved.
        </Wrap>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

export function DesktopSite({ onOpenRaphacure, onLogin }: DesktopSiteProps) {
  return (
    <div id="top" className="relative z-10 hidden lg:block bg-card">
      <DesktopHeader onOpenRaphacure={onOpenRaphacure} onLogin={onLogin} />
      <DesktopHero onOpenRaphacure={onOpenRaphacure} />
      <Shortcuts onOpenRaphacure={onOpenRaphacure} />
      <Prevention />
      <HealthServices onOpenRaphacure={onOpenRaphacure} />
      <ActiveWellness />
      <TrustBar />
      <Registration />
      <DesktopFooter onOpenRaphacure={onOpenRaphacure} />
    </div>
  );
}
