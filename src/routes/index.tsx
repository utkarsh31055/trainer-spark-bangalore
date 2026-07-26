import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Dumbbell, Apple, TrendingUp, Flame, Bike, User, Sparkles, Activity,
  Target, Calendar, HeartHandshake, LineChart, Phone, Mail,
  MapPin, Instagram, MessageCircle, Star, ChevronDown, ArrowRight, Check,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import trainerFlex from "@/assets/trainer-flex.jpg.asset.json";
import trainerGym from "@/assets/trainer-gym.png.asset.json";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "097420 69883";
const WHATSAPP = "https://wa.me/919742069883";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 text-primary ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/5" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-red-900 shadow-[0_10px_30px_-10px_rgba(229,57,53,0.7)]">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-bold uppercase tracking-widest">Freelance</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Personal Trainer</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {[["About","about"],["Services","services"],["Process","process"],["Reviews","reviews"],["Contact","contact"]].map(([l,h])=>(
            <a key={h} href={`#${h}`} className="transition-colors hover:text-white">{l}</a>
          ))}
        </nav>
        <a href={WHATSAPP} className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex">Book Now</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-3-24nxlEpWkg87JLb0TLetXnhMkxzq74.jpg" alt="Personal trainer in Bangalore" className="h-full w-full object-cover object-center" width={1600} height={1808} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pb-16 pt-10 sm:px-8 md:min-h-[calc(100svh-6rem)]">
        <div className="max-w-3xl" data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
            <Stars />
            <span className="text-xs font-medium text-white/80">5.0 · Bangalore</span>
          </div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl">
            Personal Training <br />
            That Delivers <span className="italic text-primary">Real Results</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Customized workout plans, nutrition guidance and one-on-one coaching designed to help you lose fat, build muscle and become your strongest self.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wider">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wider">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Star, label: "5.0 Google Rating" },
              { icon: User, label: "Personalized Coaching" },
              { icon: Activity, label: "Online & Offline" },
              { icon: Target, label: "Custom Workout Plans" },
            ].map((f) => (
              <div key={f.label} className="glass flex items-center gap-2 rounded-2xl px-3 py-3">
                <f.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs font-medium text-white/85">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative order-2 md:order-1" data-reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img src={trainerFlex.url} alt="Freelance Personal Trainer" className="h-[560px] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-[#121212] p-5 shadow-2xl sm:block">
            <Stars />
            <div className="mt-1 text-xs uppercase tracking-widest text-white/50">Google Rated</div>
            <div className="font-display text-3xl text-white">5.0 / 5.0</div>
          </div>
        </div>
        <div className="order-1 md:order-2" data-reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            About <span className="text-primary">Freelance</span><br /> Personal Trainer
          </h2>
          <p className="mt-6 text-white/70">
            Based in Bangalore, Freelance Personal Trainer is built around one idea — training that actually fits you. Every client gets a plan shaped around their body, goals and lifestyle, whether that's dropping stubborn fat, adding lean muscle, or building the confidence that comes with feeling strong.
          </p>
          <p className="mt-4 text-white/70">
            Coaching is personal, patient and outcome-driven. Expect real workouts, honest nutrition advice, and steady accountability — no gimmicks, no crash programs. Just sustainable progress you can feel week after week.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Fully personalized plans","One-on-one coaching","Online & offline sessions","Sustainable guidance"].map((t) => (
              <div key={t} className="flex items-start gap-2 text-sm text-white/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const SERVICES = [
  { icon: User, title: "Personal Training", desc: "Focused one-on-one sessions built around your goals, schedule and current fitness level." },
  { icon: Dumbbell, title: "Weight Training", desc: "Progressive strength programs to build lean muscle, boost strength and reshape your body." },
  { icon: Apple, title: "Nutrition Consulting", desc: "Simple, sustainable nutrition guidance tailored to Indian meals and your daily routine." },
  { icon: TrendingUp, title: "Weight Gain", desc: "Structured training and food plans for healthy weight gain and clean muscle growth." },
  { icon: Flame, title: "Six Pack Training", desc: "Focused fat-loss and core protocols to reveal a strong, defined mid-section." },
  { icon: Activity, title: "Aerobics", desc: "High-energy cardio sessions that improve stamina, endurance and heart health." },
  { icon: Bike, title: "Cycling", desc: "Cycling workouts to burn fat, strengthen legs and build long-lasting endurance." },
  { icon: Sparkles, title: "Private Lessons", desc: "Discreet, private coaching for clients who prefer training away from a busy gym floor." },
];

function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent">
      <div className="max-w-2xl" data-reveal>
        <Eyebrow>Services</Eyebrow>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          Everything you need to <span className="text-primary">transform</span>.
        </h2>
        <p className="mt-4 text-white/60">A complete coaching toolkit — training, nutrition and accountability, built around you.</p>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <div key={s.title} data-reveal className="card-lux group relative overflow-hidden p-6">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30 transition-transform duration-500 group-hover:scale-110">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const WHY = [
  { icon: Target, title: "Personalized workout plans", desc: "Programs built around your body, goals and pace." },
  { icon: Apple, title: "Nutrition guidance", desc: "Practical, Indian-friendly food strategies that fit your life." },
  { icon: LineChart, title: "Goal tracking", desc: "Measured progress, honest feedback, consistent adjustments." },
  { icon: Calendar, title: "Flexible scheduling", desc: "Sessions that work with your calendar — mornings or evenings." },
  { icon: User, title: "One-on-one coaching", desc: "Full attention every session — technique, tempo, mindset." },
  { icon: HeartHandshake, title: "Motivation & accountability", desc: "The push you need to keep showing up and finish strong." },
];

function Why() {
  return (
    <Section id="why">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div data-reveal>
          <Eyebrow>Why choose us</Eyebrow>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            The reason clients <span className="text-primary italic">stay</span>.
          </h2>
          <p className="mt-5 text-white/60">Six things you'll feel from your very first session.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {WHY.map((w) => (
            <div key={w.title} data-reveal className="card-lux flex gap-4 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                <w.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-white">{w.title}</div>
                <div className="mt-1 text-sm text-white/60">{w.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const STEPS = [
  { n: "01", title: "Book Consultation", desc: "A quick call to understand your goals, history and schedule." },
  { n: "02", title: "Fitness Assessment", desc: "Measurements, movement check and current fitness baseline." },
  { n: "03", title: "Personalized Plan", desc: "Your custom training + nutrition plan, built for real life." },
  { n: "04", title: "Track & Achieve", desc: "Weekly check-ins, adjustments and consistent progress." },
];

function Process() {
  return (
    <Section id="process" className="bg-[#0a0a0a]">
      <div className="max-w-2xl" data-reveal>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          A simple, proven <span className="text-primary">4-step</span> process.
        </h2>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.n} data-reveal className="relative">
            <div className="card-lux h-full p-6">
              <div className="font-display text-5xl text-primary/80">{s.n}</div>
              <div className="mt-4 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </div>
            {i < 3 && (
              <ArrowRight className="absolute right-[-14px] top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary md:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

const REVIEWS = [
  { name: "Rahul K.", initials: "RK", text: "Very good personal trainer. Very knowledgeable." },
  { name: "Priya S.", initials: "PS", text: "Nice trainer, I got good results, my belly fat reduced and my waist became very slim. The price for the classes is also very low." },
  { name: "Arjun M.", initials: "AM", text: "I have a great trainer who gives me customized plans accordingly and truly motivates me." },
];

function Reviews() {
  return (
    <Section id="reviews">
      <div className="flex flex-col items-center text-center" data-reveal>
        <Eyebrow>Google Reviews</Eyebrow>
        <div className="flex items-center gap-3">
          <span className="font-display text-6xl text-primary">5.0</span>
          <div>
            <Stars className="justify-center" />
            <div className="text-xs uppercase tracking-widest text-white/50">Verified on Google</div>
          </div>
        </div>
        <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          Real words from <span className="text-primary italic">real clients</span>.
        </h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <div key={r.name} data-reveal className="card-lux relative flex flex-col p-7">
            <div className="absolute right-6 top-6 font-display text-6xl leading-none text-primary/20">"</div>
            <Stars />
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/85">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-red-900 font-semibold text-white">{r.initials}</div>
              <div>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-white/50">Verified Google Review</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const imgs = [
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-4-Yz1GA0e5uRV7SM1sI73BDHGOKT78SW.jpg", h: "row-span-2" },
    { src: g1, h: "" },
    { src: g3, h: "" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-5-zOtONre1aPXSm6fA2XjbNfjLqJGCCA.jpg", h: "row-span-2" },
    { src: g6, h: "" },
    { src: g4, h: "" },
    { src: g5, h: "" },
    { src: g2, h: "" },
  ];
  return (
    <Section id="gallery" className="bg-[#0a0a0a]">
      <div className="max-w-2xl" data-reveal>
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          Inside the <span className="text-primary">training floor</span>.
        </h2>
      </div>
      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
        {imgs.map((img, i) => (
          <div key={i} data-reveal className={`group relative overflow-hidden rounded-2xl border border-white/5 ${img.h}`}>
            <img src={img.src} loading="lazy" alt="" className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-60 transition-opacity group-hover:opacity-30" />
          </div>
        ))}
      </div>
    </Section>
  );
}



const FAQS = [
  { q: "Do you train beginners?", a: "Absolutely. Most clients start as complete beginners. Every plan begins with a proper assessment so training matches your current level and progresses safely." },
  { q: "Do you offer online coaching?", a: "Yes. Online coaching includes a custom plan, weekly check-ins, form review over video, and full WhatsApp support between sessions." },
  { q: "Do you provide diet plans?", a: "Yes. You'll receive a nutrition plan built around Indian meals, your preferences and your goal — with adjustments as your progress evolves." },
  { q: "How many sessions should I take?", a: "It depends on your goal, but most clients see meaningful changes with 3–4 sessions per week. This is discussed during the free consultation." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="bg-[#0a0a0a]">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div data-reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Questions, <span className="text-primary italic">answered</span>.
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} data-reveal className="card-lux overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-white">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-white/70">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section id="cta">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1a0808] via-[#0a0a0a] to-[#0a0a0a] p-10 text-center sm:p-16 md:p-24">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative" data-reveal>
          <Stars className="justify-center" />
          <h2 className="mt-4 font-display text-4xl leading-[0.95] sm:text-6xl md:text-7xl">
            Ready to Transform <br /> Your <span className="italic text-primary">Fitness?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Your first consultation is free. Let's map out your goals and build the plan that gets you there.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", val: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "WhatsApp", val: "Chat instantly", href: WHATSAPP },
    { icon: Mail, label: "Email", val: "hello@freelancept.in", href: "mailto:hello@freelancept.in" },
    { icon: MapPin, label: "Location", val: "Bangalore, India", href: undefined as string | undefined },
  ];
  return (
    <Section id="contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div data-reveal>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            Let's <span className="text-primary">start</span> today.
          </h2>
          <p className="mt-4 max-w-md text-white/60">
            Reach out with any question or book your free consultation. Sessions available across Bangalore, plus online coaching anywhere.
          </p>
          <div className="mt-8 space-y-3">
            {items.map((c) => {
              const inner = (
                <>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-white/50">{c.label}</div>
                    <div className="truncate font-semibold">{c.val}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="card-lux flex items-center gap-4 p-5">{inner}</a>
              ) : (
                <div key={c.label} className="card-lux flex items-center gap-4 p-5">{inner}</div>
              );
            })}
          </div>
        </div>
        <div data-reveal className="relative overflow-hidden rounded-3xl border border-white/10">
          <iframe title="Bangalore map" src="https://www.google.com/maps?q=Bangalore,India&output=embed" className="h-full min-h-[440px] w-full grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808] px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-red-900">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-[13px] font-bold uppercase tracking-widest">Freelance</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Personal Trainer</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/50">
            Personal training, weight training, nutrition coaching and more. Bangalore, India.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {["About","Services","Process","Reviews","FAQ","Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 transition hover:text-white">{l}</a>
          ))}
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex gap-3">
            {[{icon:Instagram,href:"#"},{icon:MessageCircle,href:WHATSAPP},{icon:Mail,href:"mailto:hello@freelancept.in"}].map((s,i) => (
              <a key={i} href={s.href} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-primary hover:text-primary">
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="text-xs text-white/40">© {new Date().getFullYear()} Freelance Personal Trainer. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Why />
      <Process />
      <Reviews />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
