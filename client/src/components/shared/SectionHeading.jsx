export function SectionHeading({ eyebrow, title, copy, light = false }) {
  return <div className={`max-w-2xl ${light ? 'text-white' : ''}`}><p className={`eyebrow ${light ? 'text-white/60' : ''}`}>{eyebrow}</p><h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">{title}</h2>{copy && <p className={`mt-5 max-w-lg text-base leading-7 ${light ? 'text-white/70' : 'text-muted'}`}>{copy}</p>}</div>
}
