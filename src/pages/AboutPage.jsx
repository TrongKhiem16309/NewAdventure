import SectionReveal from '../components/SectionReveal'

function AboutPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="container mx-auto max-w-6xl px-6 pt-24 lg:px-12">
        <SectionReveal subtitle="Giới thiệu" title="About the project" id="about-page">
          <p>
            The Phan Legacy is built as a static React + Vite digital heritage portfolio with React Router, TailwindCSS, and Framer Motion.
            It is designed to feel cinematic, museum-like, and richly atmospheric.
          </p>
          <p>
            The homepage uses a persistent hero animation state so the statue zoom continues smoothly even after refresh.
          </p>
        </SectionReveal>
      </div>
    </div>
  )
}

export default AboutPage
