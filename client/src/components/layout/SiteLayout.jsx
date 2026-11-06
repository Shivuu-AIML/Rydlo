import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function SiteLayout({ children }) {
  return <div className="min-h-screen bg-canvas text-ink"><Navbar /><main>{children}</main><Footer /></div>
}
