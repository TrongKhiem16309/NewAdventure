import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import HeritagePage from '../pages/HeritagePage'
import TimelinePage from '../pages/TimelinePage'
import GalleryPage from '../pages/GalleryPage'
import DocumentsPage from '../pages/DocumentsPage'
import AboutPage from '../pages/AboutPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heritage" element={<HeritagePage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
