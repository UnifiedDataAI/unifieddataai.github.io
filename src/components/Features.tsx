"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Share2,
  Package,
  FileJson,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Search,
  Layers,
} from "lucide-react"

const features = [
  {
    icon: Share2,
    title: "Universal Data API",
    description:
      "Access emails, sheets, docs, calendars, and messages through consistent, structured endpoints designed for AI agents.",
    points: [
      {
        icon: Sparkles,
        title: "Structured actions",
        description: "Turn raw data into deterministic agent workflows.",
      },
      {
        icon: Search,
        title: "Unified querying",
        description: "Search across connected services with one interface.",
      },
      {
        icon: Layers,
        title: "Normalized responses",
        description: "Consistent output shape across all providers.",
      },
    ],
  },
  {
    icon: Package,
    title: "Plug-and-Play npm Package",
    description:
      "Install one npm package and connect. No provider-specific SDKs. No repeating OAuth plumbing for every service.",
    points: [
      {
        icon: Sparkles,
        title: "Single integration",
        description: "Connect once and access multiple providers.",
      },
      {
        icon: Search,
        title: "Less boilerplate",
        description: "Remove repetitive OAuth setup from every project.",
      },
      {
        icon: Layers,
        title: "Developer-first",
        description: "Clean APIs built specifically for agents.",
      },
    ],
  },
  {
    icon: FileJson,
    title: "Normalized Schemas",
    description:
      "Unified response shapes across Gmail, Outlook, Sheets, Docs, and more. Your agent logic stays clean and predictable.",
    points: [
      {
        icon: Sparkles,
        title: "Consistent formats",
        description: "Same structure across providers.",
      },
      {
        icon: Search,
        title: "Cleaner logic",
        description: "No provider-specific condition handling.",
      },
      {
        icon: Layers,
        title: "Predictable outputs",
        description: "Easier reasoning for AI systems.",
      },
    ],
  },
  {
    icon: Cpu,
    title: "Agent-First Design",
    description:
      "Built specifically for deterministic and structured agent execution. Not retrofitted from traditional SaaS APIs.",
    points: [
      {
        icon: Sparkles,
        title: "Deterministic access",
        description: "Built for tool-based agent execution.",
      },
      {
        icon: Search,
        title: "Structured I/O",
        description: "Optimized for LLM compatibility.",
      },
      {
        icon: Layers,
        title: "Context-aware",
        description: "Designed for multi-step reasoning.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure Connections",
    description:
      "Scoped OAuth connections with strict permission boundaries and secure token handling by default.",
    points: [
      {
        icon: Sparkles,
        title: "Least privilege",
        description: "Minimal required scopes by default.",
      },
      {
        icon: Search,
        title: "Token encryption",
        description: "Encrypted at rest and isolated per user.",
      },
      {
        icon: Layers,
        title: "Strict isolation",
        description: "No cross-tenant credential exposure.",
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Scales with You",
    description:
      "From early prototypes to production systems handling thousands of users. Infrastructure ready for growth.",
    points: [
      {
        icon: Sparkles,
        title: "Production ready",
        description: "Built for real-world scale.",
      },
      {
        icon: Search,
        title: "Reliable performance",
        description: "Stable infrastructure for agent workloads.",
      },
      {
        icon: Layers,
        title: "Future-proof",
        description: "Designed for evolving AI ecosystems.",
      },
    ],
  },
]

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = features[activeIndex]

  return (
    <section id="features" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white">
            Everything your agent needs
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Stop building integrations. Start building intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE LIST */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-2 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`flex flex-col rounded-2xl lg:rounded-none transition-colors duration-300 ${
                  activeIndex === index 
                    ? 'bg-slate-900/40 border border-slate-800 lg:bg-transparent lg:border-transparent' 
                    : 'border border-transparent hover:bg-slate-900/20 lg:hover:bg-transparent'
                }`}
              >
                <div
                  onMouseEnter={() => {
                    // Only trigger hover on desktop
                    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                      setActiveIndex(index)
                    }
                  }}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-300 py-4 lg:py-2 px-5 lg:px-0 flex items-center gap-4 ${
                    activeIndex === index
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  
                  <div className="flex-1">
                     <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-4">
                  <span className={`transition-colors duration-300 ${activeIndex === index ? 'text-brand-400' : 'text-slate-600'}`}>
                    <feature.icon className="w-6 h-6" />
                  </span>
                  {feature.title}
                </h3>
                  </div>
                </div>

                {/* Desktop Underline Indicator */}
                <div className="hidden lg:block pl-10">
                  <div
                    className={`h-[2px] mt-2 transition-all duration-300 rounded-full ${
                      activeIndex === index
                        ? "w-16 bg-brand-500"
                        : "w-0 bg-transparent"
                    }`}
                  />
                </div>

                {/* Mobile Content Display (Accordion Style) */}
                <div className="lg:hidden">
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-slate-400 leading-relaxed text-base">
                          {feature.description}
                        </div>
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE CONTENT (DESKTOP ONLY) */}
          <div className="hidden lg:block col-span-1 lg:col-span-7 relative">
            <div className="min-h-[280px] lg:min-h-[320px] relative w-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 w-full shadow-2xl shadow-brand-900/5"
                >
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    {activeFeature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg md:text-xl">
                    {activeFeature.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
                  {activeFeature.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex flex-col gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                        <point.icon className="w-5 h-5 text-brand-400" />
                      </div>

                      <h4 className="text-white font-semibold">
                        {point.title}
                      </h4>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}