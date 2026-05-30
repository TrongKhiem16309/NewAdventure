import Hero from '../components/Hero'
import SectionReveal from '../components/SectionReveal'

function Home() {
  const scrollToIntroduction = () => {
    const section = document.getElementById('introduction')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="overflow-hidden">
      <Hero onStartJourney={scrollToIntroduction} />

      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <SectionReveal
          id="introduction"
          subtitle="Giới thiệu"
          title="A premium window into Phan Boi Chau's life"
        >
          <p>
            The Phan Legacy is a dark luxury digital portfolio that feels more like a museum exhibition than a website.
            It offers a calm, cinematic entry point into the most important moments of a modern Vietnamese icon.
          </p>
          <p>
            Each section is designed to evoke careful curation, historical depth, and an elegant passage of time.
          </p>
        </SectionReveal>

        <SectionReveal
          id="heritage"
          subtitle="Di sản"
          title="Heritage preserved with quiet authority"
        >
          <p>
            Phan Boi Chau’s heritage is presented through visual texture, layered storytelling, and premium spacing.
            The experience is designed to feel timeless and dignified.
          </p>
        </SectionReveal>

        <SectionReveal
          id="timeline"
          subtitle="Câu chuyện"
          title="A timeline structured like a gallery"
        >
          <p>
            Important milestones are revealed in measured chapters, each with cinematic pauses and refined typography.
            The journey unfolds with calm momentum.
          </p>
        </SectionReveal>

        <SectionReveal
          id="documents"
          subtitle="Tư liệu"
          title="Historical documents and treasured pages"
        >
          <p>
            Placeholder sections are intentionally restrained. The style is refined, and every detail supports a museum-quality presentation.
          </p>
        </SectionReveal>

        <SectionReveal
          id="gallery"
          subtitle="Thư viện"
          title="A gallery space for memory and detail"
        >
          <p>
            This gallery section suggests a curated archive of images, artifacts, and visual impressions from Phan Boi Chau’s journey.
          </p>
        </SectionReveal>

        <SectionReveal
          id="about"
          subtitle="Giới thiệu dự án"
          title="Crafting a cinematic heritage portfolio"
        >
          <p>
            The design system is intentionally premium: soft motion, elegant text, and a warm dark palette to support the legacy narrative.
          </p>
        </SectionReveal>
      </div>
    </div>
  )
}

export default Home
