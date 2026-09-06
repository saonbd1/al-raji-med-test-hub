'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ArrowLeft, HeartPulse } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const isSignUp = mode === 'sign-up'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)
    const result = isSignUp
      ? await authClient.signUp.email({ name, email, password })
      : await authClient.signIn.email({ email, password })
    setLoading(false)
    if (result.error) {
      setError('We could not complete that request. Please check your details and try again.')
      return
    }
    router.push('/')
    router.refresh()
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 px-5 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft aria-hidden="true" /> Back to AlRaji</Link>
        <div className="rounded-3xl border border-border bg-background p-7 shadow-xl sm:p-10">
          <div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><HeartPulse aria-hidden="true" /></span><span className="font-serif text-xl font-semibold">AlRaji Med Test Hub</span></div>
          <div className="mt-9"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">{isSignUp ? 'Get started' : 'Welcome back'}</p><h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">{isSignUp ? 'Create your account' : 'Sign in to continue'}</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">{isSignUp ? 'Keep your service requests and updates in one place.' : 'Access your AlRaji service journey securely.'}</p></div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            {isSignUp && <label className="flex flex-col gap-2 text-sm font-medium">Full name<input className="h-11 rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required /></label>}
            <label className="flex flex-col gap-2 text-sm font-medium">Email address<input className="h-11 rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required /></label>
            <label className="flex flex-col gap-2 text-sm font-medium">Password<input className="h-11 rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={isSignUp ? 'new-password' : 'current-password'} minLength={8} required /></label>
            {!isSignUp && <div className="-mt-2 text-right"><Link href="/forgot-password" className="text-sm font-semibold text-accent-foreground hover:underline">Forgot password?</Link></div>}
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <button disabled={loading} className="h-11 rounded-lg bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">{loading ? 'Please wait…' : isSignUp ? 'Create account' : 'Sign in'}</button>
          </form>
          <p className="mt-7 text-center text-sm text-muted-foreground">{isSignUp ? 'Already have an account? ' : "Don't have an account? "}<Link href={isSignUp ? '/sign-in' : '/sign-up'} className="font-semibold text-foreground hover:underline">{isSignUp ? 'Sign in' : 'Create one'}</Link></p>
        </div>
      </div>
    </main>
  )
}
