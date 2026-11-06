import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-[-0.06em] text-ink">rydlo<span className="text-accent">.</span></Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">The considered way to move through your city.</p>
        </div>
        <div><p className="eyebrow">Explore</p><div className="mt-4 space-y-3 text-sm text-muted"><Link className="block hover:text-ink" to="/vehicles">Vehicles</Link><Link className="block hover:text-ink" to="/register">Create account</Link></div></div>
        <div><p className="eyebrow">Owners</p><div className="mt-4 space-y-3 text-sm text-muted"><Link className="block hover:text-ink" to="/list-your-vehicle">List your vehicle</Link><span className="block">Owner resources</span></div></div>
        <div><p className="eyebrow">Follow along</p><div className="mt-4 flex gap-3 text-muted"><Instagram size={18} /><Twitter size={18} /><Linkedin size={18} /></div></div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-line py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Rydlo. Demo foundation.</span><span>Move on your own terms.</span></Container>
    </footer>
  )
}
