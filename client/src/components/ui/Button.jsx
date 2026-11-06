import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-ink text-white hover:bg-accent',
  secondary: 'border border-line bg-white text-ink hover:border-ink',
  ghost: 'text-ink hover:text-accent',
}

export function Button({ children, variant = 'primary', to, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 ${styles[variant]} ${className}`

  if (to) {
    return <Link className={classes} to={to}>{children}</Link>
  }

  return <button className={classes} {...props}>{children}</button>
}
