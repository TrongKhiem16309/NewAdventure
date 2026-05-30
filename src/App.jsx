import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="min-h-screen bg-midnight text-ivory selection:bg-gold/30 selection:text-midnight">
      <Navbar />
      <main className="relative overflow-hidden">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
