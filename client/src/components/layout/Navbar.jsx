import { Menu, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Container } from './Container'

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <Container className="flex items-center justify-between py-6">
        <Link to="/" className="text-xl font-extrabold tracking-[-0.06em] text-white">rydlo<span className="text-accent">.</span></Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          <Link className="transition hover:text-white" to="/vehicles">Explore vehicles</Link>
          <Link className="transition hover:text-white" to="/list-your-vehicle">List your vehicle</Link>
          <Link className="transition hover:text-white" to="/login">Sign in</Link>
          <Button to="/register" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink">Get started <MoveUpRight size={15} className="ml-2" /></Button>
        </nav>
        <button className="rounded-full border border-white/30 p-2 text-white md:hidden" aria-label="Open menu"><Menu size={20} /></button>
      </Container>
    </header>
  )
}
