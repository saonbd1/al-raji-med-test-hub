'use client'

import Link from 'next/link'
import { ArrowLeft, HeartPulse } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { authClient } from '@/lib/auth-client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    await authClient.forgetPassword({ email, redirectTo: '/reset-password' })
    setLoading(false)
    setSent(true)
  }

  return <main className="flex min-h-svh items-center justify-center bg-muted/40 px-5 py-10"><div className="w-full max-w-md"><Link href="/sign-in" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft aria-hidden="true" /> Back to sign in</Link><div className="rounded-3xl border border-border bg-background p-7 shadow-xl sm:p-10"><div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><HeartPulse aria-hidden="true" /></span><span className="font-serif text-xl font-semibold">AlRaji Med Test Hub</span></div><div className="mt-9"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">Account recovery</p><h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Reset your password</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">Enter your email and we will send instructions if an account exists.</p></div>{sent ? <div className="mt-8 rounded-xl bg-muted p-4 text-sm leading-6 text-muted-foreground">If an account matches that email, password reset instructions are on the way.</div> : <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5"><label className="flex flex-col gap-2 text-sm font-medium">Email address<input className="h-11 rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required /></label><button disabled={loading} className="h-11 rounded-lg bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">{loading ? 'Sending…' : 'Send reset link'}</button></form>}<p className="mt-7 text-center text-sm text-muted-foreground"><Link href="/sign-in" className="font-semibold text-foreground hover:underline">Return to sign in</Link></p></div></div></main>
}
