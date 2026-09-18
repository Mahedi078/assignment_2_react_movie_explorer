import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl">
          <span>🎬</span>
          <span>MovieExplorer</span>
        </Link>
        <Link
          to="/movies"
          className="rounded-full bg-purple-600 hover:bg-purple-500 transition-colors text-white text-sm sm:text-base font-medium px-4 py-2"
        >
          Movies
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
