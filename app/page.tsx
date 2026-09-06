'use client'

import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  Globe2,
  HeartPulse,
  Languages,
  Menu,
  ShieldCheck,
  Stethoscope,
  X,
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    title: 'Visa Check',
    description: 'Fast, guided verification for visa medical requirements.',
    icon: FileCheck2,
    href: '#services',
  },
  {
    title: 'Medical Check',
    description: 'Book your approved medical examination with confidence.',
    icon: Stethoscope,
    href: '#services',
  },
  {
    title: 'MOFA Check',
    description: 'Simple status support for Ministry of Foreign Affairs files.',
    icon: ShieldCheck,
    href: '#services',
  },
  {
    title: 'Medical Update',
    description: 'Track updates and stay informed at every step.',
    icon: HeartPulse,
    href: '#services',
  },
  {
    title: 'PDO / LMS',
    description: 'Pre-departure orientation and learning management support.',
    icon: Languages,
    href: '#services',
  },
  {
    title: 'Tasheer Finger',
    description: 'Helpful guidance for Tasheer fingerprint appointments.',
    icon: Globe2,
    href: '#services',
  },
  {
    title: 'Takamul',
    description: 'Clear support for Takamul registration and checks.',
    icon: CheckCircle2,
    href: '#services',
  },
  {
    title: 'Apostille Check',
    description: 'Document readiness support for international use.',
    icon: FileCheck2,
    href: '#services',
  },
]

const faqs = [
  ['What should I bring to my medical appointment?', 'Bring your passport, appointment details, and any documents listed in your visa or employer instructions.'],
  ['How can I check my application status?', 'Use the service that matches your application, then follow the guided status steps or contact our support team.'],
  ['Do you support applicants outside Saudi Arabia?', 'Yes. AlRaji Med Test Hub is designed to make overseas medical and document checks easier to understand.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-svh overflow-hidden bg-background text-foreground">
      <div className="border-b border-border bg-primary px-4 py-2 text-center text-xs font-medium tracking-wide text-primary-foreground sm:text-sm">
        Trusted support for your overseas medical journey
      </div>

      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="#top" className="flex items-center gap-3" aria-label="AlRaji Med Test Hub home">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <HeartPulse aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-lg font-semibold leading-none tracking-tight">AlRaji</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Med Test Hub</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Main navigation">
            <Link className="transition-colors hover:text-foreground" href="#services">Services</Link>
            <Link className="transition-colors hover:text-foreground" href="#how-it-works">How it works</Link>
            <Link className="transition-colors hover:text-foreground" href="#about">Why AlRaji</Link>
            <Link className="transition-colors hover:text-foreground" href="#faq">FAQ</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/sign-in" className="rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Log in</Link>
            <Link href="/sign-up" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Create account</Link>
          </div>

          <button className="rounded-lg p-2 text-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 text-sm font-medium md:hidden" aria-label="Mobile navigation">
            <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</Link>
            <Link href="#about" onClick={() => setMenuOpen(false)}>Why AlRaji</Link>
            <Link href="#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <div className="flex gap-3 pt-2">
              <Link href="/sign-in" className="rounded-lg border border-border px-4 py-2">Log in</Link>
              <Link href="/sign-up" className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">Create account</Link>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative border-b border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <span className="size-2 rounded-full bg-accent" /> Clear. Reliable. Ready.
            </div>
            <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">Your health journey, made simpler.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">AlRaji Med Test Hub helps you navigate medical checks, visa documentation, and overseas application services with less uncertainty.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Explore services <ArrowRight aria-hidden="true" /></Link>
              <Link href="/sign-up" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-muted">Create your account</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-accent" aria-hidden="true" /> Guided process</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-accent" aria-hidden="true" /> Human support</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="text-accent" aria-hidden="true" /> Secure by design</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl bg-primary p-5 shadow-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-5 text-primary-foreground">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">Your care dashboard</p>
                  <p className="mt-2 font-serif text-2xl font-semibold">One step at a time</p>
                </div>
                <div className="flex size-11 items-center justify-center rounded-full bg-primary-foreground/10"><HeartPulse aria-hidden="true" /></div>
              </div>
              <div className="mt-6 rounded-2xl bg-background p-5 text-foreground">
                <div className="flex items-center justify-between">
                  <div><p className="text-xs font-medium text-muted-foreground">Current service</p><p className="mt-1 font-semibold">Medical Check</p></div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">In progress</span>
                </div>
                <div className="mt-7 flex items-center gap-2">
                  {[1, 2, 3, 4].map((step) => <span key={step} className={`h-1.5 flex-1 rounded-full ${step < 4 ? 'bg-accent' : 'bg-muted'}`} />)}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground"><span>Documents received</span><span>3 of 4</span></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-primary-foreground/20 p-4 text-primary-foreground"><Clock3 className="mb-6" aria-hidden="true" /><p className="text-xs text-primary-foreground/65">Average response</p><p className="mt-1 font-semibold">Within 1 day</p></div>
                <div className="rounded-2xl border border-primary-foreground/20 p-4 text-primary-foreground"><ShieldCheck className="mb-6" aria-hidden="true" /><p className="text-xs text-primary-foreground/65">Your information</p><p className="mt-1 font-semibold">Handled securely</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Our services</p><h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Everything you need to move forward.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Choose the service that matches your journey. We keep the next step clear and easy to follow.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon, href }) => (
            <Link key={title} href={href} className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex items-center justify-between"><span className="flex size-11 items-center justify-center rounded-xl bg-muted text-primary"><Icon aria-hidden="true" /></span><ArrowRight className="text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" /></div>
              <h3 className="mt-8 font-serif text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">How it works</p><h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">A calmer route from paperwork to progress.</h2></div><div className="mt-12 grid gap-8 md:grid-cols-3"><div className="flex gap-4"><span className="font-serif text-4xl text-accent">01</span><div><h3 className="font-semibold">Choose a service</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Find the check or document service that fits your application.</p></div></div><div className="flex gap-4"><span className="font-serif text-4xl text-accent">02</span><div><h3 className="font-semibold">Share your details</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Create an account so your updates and next steps stay together.</p></div></div><div className="flex gap-4"><span className="font-serif text-4xl text-accent">03</span><div><h3 className="font-semibold">Move with confidence</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Follow your progress with helpful guidance when you need it.</p></div></div></div></div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28"><div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">Built around your needs</p><h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold tracking-tight sm:text-5xl">Less confusion. More care.</h2><p className="mt-6 max-w-lg leading-7 text-primary-foreground/75">Medical and document applications can feel complicated. AlRaji brings the key services into one clear, dependable place.</p><Link href="/sign-up" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90">Start your journey <ArrowRight aria-hidden="true" /></Link></div><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">Why AlRaji</p><div className="mt-6 flex flex-col gap-6"><div className="flex gap-4"><ShieldCheck className="mt-1 shrink-0 text-accent-foreground" aria-hidden="true" /><div><h3 className="font-semibold">A trusted, focused experience</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Clear information, straightforward pathways, and a service experience designed for real people.</p></div></div><div className="flex gap-4"><HeartPulse className="mt-1 shrink-0 text-accent-foreground" aria-hidden="true" /><div><h3 className="font-semibold">Support that feels human</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">When you are managing an important application, you deserve guidance that is calm and responsive.</p></div></div><div className="flex gap-4"><Globe2 className="mt-1 shrink-0 text-accent-foreground" aria-hidden="true" /><div><h3 className="font-semibold">Made for global journeys</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">From overseas medical checks to document readiness, keep your journey moving from one place.</p></div></div></div></div></section>

      <section id="faq" className="border-t border-border bg-muted/40"><div className="mx-auto max-w-3xl px-5 py-20 lg:py-24"><div className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">FAQ</p><h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Questions, answered.</h2></div><div className="mt-10 flex flex-col divide-y divide-border rounded-2xl border border-border bg-background px-6">{faqs.map(([question, answer], index) => <div key={question} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-semibold" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} aria-hidden="true" /></button>{openFaq === index && <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{answer}</p>}</div>)}</div></div></section>

      <footer className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-8"><div><Link href="#top" className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10"><HeartPulse aria-hidden="true" /></span><span className="font-serif text-xl font-semibold">AlRaji Med Test Hub</span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/65">Making your medical and document journey easier to understand.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/70"><Link href="#services" className="hover:text-primary-foreground">Services</Link><Link href="#about" className="hover:text-primary-foreground">About</Link><Link href="#faq" className="hover:text-primary-foreground">FAQ</Link><Link href="/sign-in" className="hover:text-primary-foreground">Log in</Link><a href="#" aria-label="Facebook" className="hover:text-primary-foreground">Facebook</a><a href="#" aria-label="Instagram" className="hover:text-primary-foreground">Instagram</a><a href="#" aria-label="LinkedIn" className="hover:text-primary-foreground">LinkedIn</a></div></div><div className="border-t border-primary-foreground/15"><div className="mx-auto max-w-7xl px-5 py-5 text-xs text-primary-foreground/55 lg:px-8">© 2026 AlRaji Med Test Hub. All rights reserved.</div></div></footer>
    </main>
  )
}
