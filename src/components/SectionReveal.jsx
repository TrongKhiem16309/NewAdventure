import { motion } from 'framer-motion'

function SectionReveal({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="container mx-auto max-w-6xl px-6 lg:px-12"
      >
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/80">{subtitle}</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-ivory md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="space-y-6 text-white/75">{children}</div>
      </motion.div>
    </section>
  )
}

export default SectionReveal
