import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0c0c1a] to-[#0e0e1f]">
      {/* Grain + aurora gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(1200px_600px_at_-10%_-10%,rgba(106,17,203,0.35),transparent), radial-gradient(900px_500px_at_110%_10%,rgba(37,117,252,0.35),transparent)'}} />
        <div className="absolute inset-0 mix-blend-overlay opacity-25" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
          Now open: Veltrax premium store
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Elevate your setup with Veltrax
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-lg text-white/70 sm:text-xl"
        >
          Futuristic peripherals engineered for creators and gamers. Premium build, precision performance, and unforgettable aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#products" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-700/20 transition hover:scale-[1.02]">
            <span className="relative z-10">Shop the Collection</span>
            <span className="absolute inset-0 translate-y-[110%] bg-gradient-to-r from-white/30 to-transparent transition group-hover:translate-y-0" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/80 backdrop-blur transition hover:bg-white/10">
            Explore features
          </a>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0e0e1f]" />
    </section>
  );
}
