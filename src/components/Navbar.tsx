import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="UnifiedDataAI Logo" className="h-12 w-12 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-white">
            UnifiedDataAI
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            How it Works
          </a>
          <Button
            size="sm"
            variant="secondary"
            className="bg-slate-800"
            onClick={scrollToEarlyAccess}
          >
            Get Early Access
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 pb-6 pt-4 space-y-4">
          <a
            href="#features"
            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="block text-sm font-medium text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </a>
          <Button
            size="sm"
            variant="secondary"
            className="w-full bg-slate-800"
            onClick={scrollToEarlyAccess}
          >
            Get Early Access
          </Button>
        </div>
      )}
    </nav>
  )
}