import SectionReveal from '../components/SectionReveal'

function GalleryPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="container mx-auto max-w-6xl px-6 pt-24 lg:px-12">
        <SectionReveal subtitle="Thư viện" title="Gallery placeholder" id="gallery-page">
          <p>
            A gallery route built for premium visual storytelling. Imagery can be presented with elegant spacing, glass-like panels, and subtle hover motion.
          </p>
          <p>
            This placeholder keeps the interface refined while signaling a curated presentation of artifacts and portraits.
          </p>
        </SectionReveal>
      </div>
    </div>
  )
}

export default GalleryPage
