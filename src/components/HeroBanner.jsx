import { Link } from 'react-router-dom'

function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-center px-4 sm:px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_60%)]" />
      <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          DISCOVER MOVIES
        </h1>
        <p className="text-slate-300 text-base sm:text-lg">
          Explore and discover your favorite movies and TV shows from around the world.
        </p>
        <Link
          to="/movies"
          className="rounded-full bg-purple-600 hover:bg-purple-500 transition-colors text-white font-semibold px-8 py-3"
        >
          Explore Now
        </Link>
      </div>
    </section>
  )
}

export default HeroBanner
