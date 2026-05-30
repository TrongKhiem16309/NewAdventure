import { motion } from 'framer-motion'
import { usePersistentHeroZoom } from '../hooks/usePersistentHeroZoom'
import statueImage from '../../Tượng cụ Phan.jpg'

function Hero({ onStartJourney }) {
  const scale = usePersistentHeroZoom()

  return (
    <section className="relative overflow-hidden px-6 pt-8 pb-16 lg:px-12 lg:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%)]" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-[1480px] items-center justify-between gap-10">
        <div className="max-w-2xl space-y-8 text-white">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold/90">
            DIGITAL HERITAGE PROJECT
          </span>
          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.04em] text-ivory md:text-6xl lg:text-7xl">
            THE PHAN LEGACY
          </h1>
          <p className="max-w-xl text-base leading-8 text-white/70 md:text-lg">
            A cinematic digital heritage portfolio dedicated to the quiet strength and enduring legacy of Phan Boi Chau.
            Experience a premium museum-like journey through story, archives, and visual memory.
          </p>
          <button
            onClick={onStartJourney}
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-midnight shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-[#d7a26a]"
          >
            BẮT ĐẦU HÀNH TRÌNH
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-glow backdrop-blur-sm">
          <motion.div
            style={{ scale }}
            className="overflow-hidden rounded-[2rem]"
          >
            <img
              src={statueImage}
              alt="Statue of Phan Boi Chau"
              className="h-[620px] min-w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-[45vh] bg-gradient-to-t from-black/90 to-transparent blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
