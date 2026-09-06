'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { ArrowLeft, HeartPulse } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const result = await authClient.resetPassword({ newPassword: password, token: token || undefined })
    setLoading(false)
    if (result.error) {
      setError('This reset link is invalid or expired. Please request a new one.')
      return
    }
    router.push('/sign-in')
  }

  return <main className="flex min-h-svh items-center justify-center bg-muted/40 px-5 py-10"><div className="w-full max-w-md"><Link href="/sign-in" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft aria-hidden="true" /> Back to sign in</Link><div className="rounded-3xl border border-border bg-background p-7 shadow-xl sm:p-10"><div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><HeartPulse aria-hidden="true" /></span><span className="font-serif text-xl font-semibold">AlRaji Med Test Hub</span></div><h1 className="mt-9 font-serif text-4xl font-semibold tracking-tight">Choose a new password</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">Use at least eight characters to keep your account secure.</p><form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5"><label className="flex flex-col gap-2 text-sm font-medium">Reset token<input className="h-11 rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" value={token} onChange={(event) => setToken(event.target.value)} required /></label><label className="flex flex-col gap-2 text-sm font-medium">New password<input className="h-11 rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} required /></label>{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<button disabled={loading} className="h-11 rounded-lg bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">{loading ? 'Saving…' : 'Update password'}</button></form></div></div></main>
}
