import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Di sản', path: '/heritage' },
  { label: 'Câu chuyện', path: '/timeline' },
  { label: 'Tư liệu', path: '/documents' },
  { label: 'Thư viện', path: '/gallery' },
  { label: 'Giới thiệu', path: '/about' }
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05030d]/70 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-sm font-semibold uppercase tracking-[0.36em] text-white/80">The Phan Legacy</div>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="lg:hidden text-white/70">MENU</div>
      </div>
    </header>
  )
}

export default Navbar
