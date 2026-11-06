import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Container } from '../components/layout/Container'

export default function PlaceholderPage({ eyebrow, title, copy }) {
  return <section className="flex min-h-[65vh] items-center py-32"><Container><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-3xl font-serif text-6xl leading-none tracking-[-0.04em] sm:text-8xl">{title}</h1><p className="mt-6 max-w-lg text-lg leading-8 text-muted">{copy}</p><Button to="/" variant="secondary" className="mt-8"><ArrowLeft size={16} className="mr-2" /> Back home</Button></Container></section>
}
