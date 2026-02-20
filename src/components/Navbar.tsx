import { Button } from "./ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="UnifiedDataAI Logo" className="h-14 w-14 rounded-lg" />
          <span className="text-lg font-bold tracking-tight text-white">UnifiedDataAI</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">How it Works</a>
            <Button size="sm" variant="secondary" className="bg-slate-800" onClick={() => document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })}>
                Get Early Access
            </Button>
        </div>
      </div>
    </nav>
  )
}