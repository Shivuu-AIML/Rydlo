export function Card({ children, className = '' }) {
  return <article className={`rounded-3xl border border-line bg-white ${className}`}>{children}</article>
}
