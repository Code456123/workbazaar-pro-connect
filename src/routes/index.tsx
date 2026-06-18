import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Zap, Wrench, Hammer, Paintbrush, Snowflake, Sparkles, Cog, Droplets,
  ShieldCheck, Brain, Bell, BadgeDollarSign, Headphones, Search,
  Smartphone, UserPlus, MapPin, Phone, Mail, ArrowRight, Star, Check, Plus, Minus,
  Mic, Navigation, Wallet, Globe, Twitter, Instagram, Linkedin, Facebook, Menu, X,
} from "lucide-react";
import heroWorker from "@/assets/hero-worker.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WorkBazaar — Book Trusted Local Professionals Instantly" },
      { name: "description", content: "AI-powered marketplace connecting you with verified electricians, plumbers, carpenters, painters, cleaners and AC technicians in minutes." },
      { property: "og:title", content: "WorkBazaar — Book Trusted Local Professionals Instantly" },
      { property: "og:description", content: "AI-powered marketplace for verified local professionals across India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Landing() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Features />
      <WhyChoose />
      <BecomeWorker />
      <Founder />
      <FutureVision />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "Founder", href: "#founder" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass px-4 py-3 shadow-soft sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight">WorkBazaar</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{l.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#become" className="rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Become a Pro</a>
          <a href="#download" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90">Get App</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 hover:bg-accent" aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl glass p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent">{l.label}</a>
            ))}
            <a href="#download" className="mt-2 rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background">Get App</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="grid size-9 place-items-center rounded-xl shadow-glow" style={{ background: "var(--gradient-brand)" }}>
      <Wrench className="size-5 text-white" />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 pb-20 pt-36 sm:pt-44">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 -z-10 size-[480px] rounded-full bg-brand/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-32 -z-10 size-[520px] rounded-full bg-ember/20 blur-3xl animate-blob" style={{ animationDelay: "-7s" }} />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            <span className="grid size-5 place-items-center rounded-full bg-ember/90"><Sparkles className="size-3 text-ember-foreground" /></span>
            AI-powered services marketplace · Now in 20+ cities
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Book trusted local <span className="text-gradient">professionals</span> instantly.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            From electricians to AC techs — WorkBazaar's AI matches you with verified, top-rated experts in under 60 seconds. Transparent pricing, real-time tracking, zero hassle.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#download" className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]" style={{ background: "var(--gradient-brand)" }}>
              <Smartphone className="size-4" /> Download the App
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#become" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold shadow-card transition hover:bg-accent">
              <UserPlus className="size-4" /> Become a Worker
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#2563EB","#F59E0B","#0F172A","#10B981"].map((c,i)=>(
                <div key={i} className="size-9 rounded-full ring-2 ring-background" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-ember">
                {Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current" />)}
                <span className="ml-2 text-sm font-semibold text-foreground">4.9 / 5</span>
              </div>
              <p className="text-xs text-muted-foreground">Loved by 200K+ customers nationwide</p>
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y }} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[2.5rem] glass shadow-glow" />
            <div className="absolute inset-6 overflow-hidden rounded-[2rem]" style={{ background: "var(--gradient-brand)" }}>
              <div className="absolute inset-0 bg-grid opacity-20" />
            </div>
            <img src={heroWorker} alt="WorkBazaar verified professional" width={1024} height={1024} className="absolute inset-0 mx-auto size-full object-contain animate-float drop-shadow-2xl" />
            {/* Floating cards */}
            <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.4 }} className="absolute -left-2 top-10 rounded-2xl glass p-3 shadow-card sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600"><Check className="size-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Booking confirmed</p>
                  <p className="text-sm font-semibold">Arriving in 23 min</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.6 }} className="absolute -right-2 bottom-12 rounded-2xl glass p-3 shadow-card sm:-right-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-ember/20 text-ember"><ShieldCheck className="size-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Verified Pro</p>
                  <p className="text-sm font-semibold">Rohit · 4.95★</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const stats = [
    { value: "50K+", label: "Verified Workers", icon: ShieldCheck },
    { value: "200K+", label: "Happy Customers", icon: Sparkles },
    { value: "1M+", label: "Successful Bookings", icon: Check },
    { value: "20+", label: "Cities Across India", icon: MapPin },
  ];
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.p {...fadeUp} className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Trusted by thousands</motion.p>
        <motion.h2 {...fadeUp} className="mt-3 text-center text-3xl font-bold sm:text-4xl">The fastest growing services platform in India</motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="absolute right-0 top-0 size-32 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/20" />
              <s.icon className="size-6 text-brand" />
              <p className="mt-4 font-display text-4xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { name: "Electrician", icon: Zap, tint: "from-yellow-400/20 to-amber-500/10", color: "text-amber-500" },
    { name: "Plumber", icon: Droplets, tint: "from-sky-400/20 to-blue-500/10", color: "text-sky-500" },
    { name: "Carpenter", icon: Hammer, tint: "from-orange-400/20 to-red-500/10", color: "text-orange-500" },
    { name: "Painter", icon: Paintbrush, tint: "from-pink-400/20 to-fuchsia-500/10", color: "text-pink-500" },
    { name: "AC Repair", icon: Snowflake, tint: "from-cyan-400/20 to-blue-500/10", color: "text-cyan-500" },
    { name: "Cleaning", icon: Sparkles, tint: "from-emerald-400/20 to-teal-500/10", color: "text-emerald-500" },
    { name: "Appliance Repair", icon: Cog, tint: "from-violet-400/20 to-purple-500/10", color: "text-violet-500" },
    { name: "RO Repair", icon: Wrench, tint: "from-indigo-400/20 to-blue-500/10", color: "text-indigo-500" },
  ];
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Services</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Every service your home needs.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Hand-picked experts across 8+ categories, available on demand or scheduled.</p>
          </motion.div>
          <motion.a {...fadeUp} href="#download" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
            View all services <ArrowRight className="size-4" />
          </motion.a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={s.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 4) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${s.tint} opacity-0 transition group-hover:opacity-100`} />
              <div className="relative">
                <div className={`grid size-12 place-items-center rounded-xl bg-secondary ${s.color}`}>
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Verified pros · Same-day</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition group-hover:opacity-100">
                  Book now <ArrowRight className="size-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { t: "Customer books", d: "Choose a service and slot in seconds.", icon: Smartphone },
    { t: "Worker gets notified", d: "Our AI finds the best match instantly.", icon: Bell },
    { t: "Worker visits", d: "Real-time tracking until they arrive.", icon: Navigation },
    { t: "Estimate generated", d: "Transparent pricing, no surprises.", icon: BadgeDollarSign },
    { t: "Customer approves", d: "One tap to confirm and start the work.", icon: Check },
    { t: "Work completed", d: "Pay securely, rate, and you're done.", icon: ShieldCheck },
  ];
  return (
    <section id="how" className="relative px-4 py-24" style={{ background: "color-mix(in oklab, var(--brand) 4%, var(--background))" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">How it works</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">From tap to done in 6 simple steps.</h2>
        </motion.div>
        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl text-primary-foreground shadow-glow" style={{ background: "var(--gradient-brand)" }}>
                  <s.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step {i+1}</div>
                  <h3 className="mt-1 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES ---------- */
function Features() {
  const feats = [
    { t: "Verified Workers", d: "Every pro is background-checked and skill-verified.", icon: ShieldCheck },
    { t: "Smart Matching", d: "AI pairs you with the right pro for the job.", icon: Search },
    { t: "Real-time Notifications", d: "Stay updated at every stage of your booking.", icon: Bell },
    { t: "AI Recommendations", d: "Personalized suggestions based on your home.", icon: Brain },
    { t: "Transparent Pricing", d: "Upfront estimates — no hidden fees, ever.", icon: BadgeDollarSign },
    { t: "Fast Support", d: "24/7 human support whenever you need it.", icon: Headphones },
  ];
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Features</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Built for trust, speed, and quality.</h2>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {feats.map((f, i) => (
            <motion.div key={f.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:border-brand/40">
              <div className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE ---------- */
function WhyChoose() {
  const items = [
    { t: "Faster than traditional booking", d: "Average match time: 47 seconds." },
    { t: "Trusted professionals", d: "100% identity & skill verified." },
    { t: "Secure platform", d: "End-to-end encrypted, secure payments." },
    { t: "Quality assurance", d: "Guaranteed service or money-back." },
  ];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Why WorkBazaar</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">The smarter way to fix, build and clean.</h2>
          <p className="mt-4 text-lg text-muted-foreground">We obsess over every detail so you don't have to. From the first tap to the final handshake, WorkBazaar is engineered for excellence.</p>
          <div className="mt-8 space-y-4">
            {items.map((it) => (
              <div key={it.t} className="flex items-start gap-4">
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand"><Check className="size-4" /></div>
                <div>
                  <h3 className="font-semibold">{it.t}</h3>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="absolute -right-20 -top-20 size-60 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-ember/20 blur-3xl" />
            <div className="relative space-y-4">
              {[
                { label: "Avg. response time", value: "47s", pct: 95 },
                { label: "Customer satisfaction", value: "98%", pct: 98 },
                { label: "On-time arrival", value: "96%", pct: 96 },
                { label: "Repeat customers", value: "82%", pct: 82 },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl glass p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">{m.label}</span>
                    <span className="font-display text-xl font-bold">{m.value}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${m.pct}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full" style={{ background: "var(--gradient-brand)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- BECOME WORKER ---------- */
function BecomeWorker() {
  return (
    <section id="become" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14" style={{ background: "var(--navy)" }}>
          <div className="absolute -top-32 -right-32 size-[400px] rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-[400px] rounded-full bg-ember/30 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
                <Sparkles className="size-3.5 text-ember" /> Earn more. Work smarter.
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Grow your business with <span className="text-gradient">WorkBazaar.</span>
              </h2>
              <p className="mt-4 max-w-lg text-white/70">Join 50,000+ verified pros earning up to ₹80,000/month. Free onboarding, weekly payouts, and a steady stream of nearby jobs.</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Weekly payouts","Free training","Flexible hours","Insurance cover"].map(x=>(
                  <li key={x} className="flex items-center gap-2 text-sm text-white/80"><Check className="size-4 text-ember" /> {x}</li>
                ))}
              </ul>
            </div>
            <form className="rounded-2xl glass p-6 shadow-glow" onSubmit={(e)=>e.preventDefault()}>
              <h3 className="text-lg font-semibold text-white">Apply to become a Pro</h3>
              <p className="mt-1 text-sm text-white/60">Takes less than 2 minutes.</p>
              <div className="mt-5 space-y-3">
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40" placeholder="Full name" />
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40" placeholder="Phone number" />
                <select className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/40">
                  {["Select your trade","Electrician","Plumber","Carpenter","Painter","AC Technician","Cleaner"].map(o=><option key={o} className="bg-navy text-white">{o}</option>)}
                </select>
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40" placeholder="City" />
                <button className="mt-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95" style={{ background: "var(--gradient-brand)" }}>
                  Start Earning Today
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOUNDER ---------- */
function Founder() {
  const founders = [
    { name: "Shiva Bind", role: "Founder", initials: "SB", gradient: "from-brand to-indigo-500" },
    { name: "Aryan Vishwakarma", role: "Co-Founder", initials: "AV", gradient: "from-ember to-rose-500" },
  ];
  return (
    <section id="founder" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Leadership</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Meet the founders behind WorkBazaar.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built by operators who believe technology can create dignified livelihoods for millions of skilled workers.
          </p>
        </motion.div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {founders.map((f, i) => (
            <motion.div key={f.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className={`absolute -right-20 -top-20 size-48 rounded-full bg-gradient-to-br ${f.gradient} opacity-15 blur-3xl`} />
              <div className="relative flex items-center gap-6">
                <div className={`grid size-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${f.gradient} text-2xl font-bold text-white shadow-glow`}>
                  {f.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">{f.role}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{f.name}</h3>
                </div>
              </div>
              <p className="relative mt-6 text-base text-muted-foreground">
                {f.role === "Founder"
                  ? "Leading WorkBazaar's mission to build India's most trusted, AI-powered services marketplace — one city, one worker, one home at a time."
                  : "Shaping product, growth, and operations to make home services instant, transparent, and reliable for every Indian household."}
              </p>
              <div className="relative mt-6 flex gap-3">
                <a href="https://www.instagram.com/workbazaar.india" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full border border-border bg-card transition hover:bg-accent" aria-label="Instagram"><Instagram className="size-4" /></a>
                <a href="#" className="grid size-10 place-items-center rounded-full border border-border bg-card transition hover:bg-accent" aria-label="LinkedIn"><Linkedin className="size-4" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- FUTURE VISION ---------- */
function FutureVision() {
  const items = [
    { t: "AI Voice Booking", d: "Just say it — book hands-free.", icon: Mic },
    { t: "Live Tracking", d: "See your pro on the map in real time.", icon: Navigation },
    { t: "Smart Worker Matching", d: "ML models that learn what you love.", icon: Brain },
    { t: "Online Payments", d: "UPI, cards, BNPL — all built-in.", icon: Wallet },
    { t: "Pan-India Expansion", d: "100+ cities in the next 18 months.", icon: Globe },
    { t: "WorkBazaar for Business", d: "Bulk bookings for offices & societies.", icon: ShieldCheck },
  ];
  return (
    <section className="relative px-4 py-24" style={{ background: "color-mix(in oklab, var(--brand) 4%, var(--background))" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Roadmap</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">What's coming next.</h2>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid size-11 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <it.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { n: "Aditi Sharma", r: "Delhi · Customer", q: "Booked an electrician at 9pm — fixed in 45 minutes. Absolute lifesaver.", a: "AS" },
    { n: "Mohammed Irfan", r: "Mumbai · Plumber", q: "I earn 3x more on WorkBazaar than I did with my old contractor.", a: "MI" },
    { n: "Sneha Patel", r: "Bangalore · Customer", q: "Transparent pricing and lovely staff. Easily the best app for home services.", a: "SP" },
    { n: "Rahul Verma", r: "Pune · Customer", q: "The tracking and instant updates feel like ordering food. Brilliant.", a: "RV" },
    { n: "Kiran Das", r: "Hyderabad · AC Tech", q: "Weekly payouts and steady jobs — exactly what I needed.", a: "KD" },
    { n: "Neha Kapoor", r: "Gurgaon · Customer", q: "I deleted every other handyman app. WorkBazaar just works.", a: "NK" },
  ];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Testimonials</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Loved by customers and pros alike.</h2>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure key={t.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-1 text-ember">
                {Array.from({length:5}).map((_,j)=><Star key={j} className="size-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>{t.a}</div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "How quickly can I book a service?", a: "Most bookings are matched in under 60 seconds, with a pro at your door in 30–90 minutes depending on city." },
    { q: "Are WorkBazaar professionals verified?", a: "Yes. Every pro undergoes ID verification, background checks, and skill assessments before joining the platform." },
    { q: "What if I'm not happy with the service?", a: "Our 100% satisfaction guarantee means we'll re-do the service for free or refund you — no questions asked." },
    { q: "How do payments work?", a: "Pay through the app via UPI, cards, or wallets after the service is complete. No upfront payments needed." },
    { q: "How do I become a WorkBazaar pro?", a: "Tap 'Become a Worker' above, fill the 2-minute form, and our onboarding team will get back within 24 hours." },
    { q: "Which cities are you available in?", a: "We currently operate in 20+ Indian metros and Tier-1 cities, with new ones added every month." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Questions, answered.</h2>
        </motion.div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-card shadow-card">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Contact</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Let's talk.</h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Have a question, partnership idea, or feedback? Our team is here to help — reach out anytime.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:workbazaar.official@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition hover:border-brand/40">
                <div className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><Mail className="size-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-medium">workbazaar.official@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                <div className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand"><Phone className="size-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <div className="flex flex-col gap-0.5 font-medium">
                    <a href="tel:+917307335545">+91 7307335545</a>
                    <a href="tel:+918010730910">+91 8010730910</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                <div className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand"><MapPin className="size-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
              <a href="https://www.instagram.com/workbazaar.india" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition hover:border-brand/40">
                <div className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><Instagram className="size-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</p>
                  <p className="font-medium">@workbazaar.india</p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.form {...fadeUp} onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="First name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
              <input placeholder="Last name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
            </div>
            <input placeholder="Email" type="email" className="mt-4 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
            <input placeholder="Subject" className="mt-4 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
            <textarea placeholder="Message" rows={5} className="mt-4 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95" style={{ background: "var(--gradient-brand)" }}>
              Send message <ArrowRight className="size-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}


/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { h: "Services", l: ["Electrician","Plumber","Carpenter","Painter","AC Repair","Cleaning"] },
    { h: "Company", l: ["About","Founder","Careers","Press","Contact"] },
    { h: "For Pros", l: ["Become a Pro","Pro App","Training","Earnings","Support"] },
    { h: "Legal", l: ["Terms","Privacy","Cookies","Refunds"] },
  ];
  return (
    <footer id="download" className="relative px-4 pb-10 pt-20 text-white" style={{ background: "var(--navy)" }}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2"><Logo /><span className="font-display text-lg font-bold">WorkBazaar</span></div>
            <p className="mt-4 max-w-xs text-sm text-white/60">AI-powered marketplace for verified local professionals. Book trusted pros — instantly.</p>
            <div className="mt-5 flex gap-2">
              {[Twitter,Instagram,Linkedin,Facebook].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid size-9 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"><I className="size-4" /></a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/15"><Smartphone className="size-4" /> App Store</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/15"><Smartphone className="size-4" /> Google Play</a>
            </div>
          </div>
          {cols.map(c=>(
            <div key={c.h}>
              <h4 className="text-sm font-semibold">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {c.l.map(x=><li key={x}><a href="#" className="hover:text-white">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} WorkBazaar Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Made with care in Bengaluru, India.</p>
        </div>
      </div>
    </footer>
  );
}
