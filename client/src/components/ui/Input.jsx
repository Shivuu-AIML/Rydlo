export function Input({ label, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</span>}
      <input className={`w-full rounded-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent ${className}`} {...props} />
    </label>
  )
}
