import SectionReveal from '../components/SectionReveal'

function DocumentsPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      <div className="container mx-auto max-w-6xl px-6 pt-24 lg:px-12">
        <SectionReveal subtitle="Tư liệu" title="Historical documents" id="documents-page">
          <p>
            This route is designed to surface scanned documents, letters, and archival media with a contemplative museum-style layout.
          </p>
          <p>
            The premium tone is achieved through restrained presentation, high contrast, and soft motion that supports reading.
          </p>
        </SectionReveal>
      </div>
    </div>
  )
}

export default DocumentsPage
