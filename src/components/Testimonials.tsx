import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "I am the owner of UnifiedDataAI, and i use it too. ",
    author: "Abhinav Sharma",
    role: "Founder",
    company: "UnifiedDataAI"
  },
  {
    quote: "This is exactly what the agent ecosystem needed. Standardized, secure, and developer-first access to user data.",
    author: "Aisha Patel",
    role: "Vibe Developer",
    company: "Independent Developer"
  },
  {
    quote: "Security was our biggest blocker for me in order to build my own ai agent to automate my work, huh it's solved now.",
    author: "Marcus Jensen",
    role: "SaaS Builder",
    company: "Independent"
  },
  {
    quote: "We were dreading building OAuth flows for 5 different platforms. UnifiedData AI let us ship our agent in two days instead of two months. The unified API is a lifesaver.",
    author: "Sarah Chen",
    role: "Vibe Developer",
    company: "Independent"
  },
  {
    quote: "I used it to build an agent that could read my emails and messages and automatically reply to them.",
    author: "Elena Rodriguez",
    role: "Agent Developer",
    company: "Independent"
  },
  {
    quote: "I've tried building this in-house before. The edge cases around rate limits and permissions are a nightmare. UnifiedData AI just handles it all gracefully.",
    author: "Rachel Torres",
    role: "AI Tools Builder",
    company: "Independent"
  },
  {
    quote: "Connecting Google Drive to an LLM without giving it full read access to everything was practically impossible until we found this platform.",
    author: "James Wilson",
    role: "AI Agent Builder",
    company: "Independent"
  },
  
]

// Duplicate for infinite marquee effect
const marqueeItems = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Loved by builders
          </h2>
          <p className="text-slate-400">
            Engineers are shipping faster and more securely with UnifiedData AI.
          </p>
        </motion.div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-x-hidden group -mx-4 sm:mx-0">
          
          {/* Left Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-950 to-transparent z-20"></div>
          
          <motion.div 
            className="flex gap-6 py-4 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((t, i) => (
              <div 
                key={i} 
                className="flex-[0_0_350px] flex flex-col justify-between bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-brand-500/30 hover:bg-slate-900/80 transition-all duration-300 relative"
              >
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-slate-800/20 to-transparent opacity-50"></div>
                <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-medium text-white text-sm">{t.author}</div>
                  <div className="text-xs text-brand-400">{t.role}, {t.company}</div>
                  <div className="text-xs italic text-slate-500 mt-2">Early Access</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-950 to-transparent z-20"></div>
        </div>

      </div>
    </section>
  )
}
