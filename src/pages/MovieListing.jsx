import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import { fetchAllShows, searchShows } from '../api/tvmaze'

function MovieListing() {
  const [shows, setShows] = useState([])
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedShow, setSelectedShow] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchAllShows()
      .then((data) => {
        if (!cancelled) setShows(data)
      })
      .catch(() => {
        if (!cancelled) setError('Failed to load movies. Please try again later.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    let cancelled = false
    setLoading(true)
    const timeoutId = setTimeout(() => {
      searchShows(query)
        .then((data) => {
          if (!cancelled) setSearchResults(data)
        })
        .catch(() => {
          if (!cancelled) setError('Failed to search movies. Please try again later.')
        })
        .finally(() => {
          if (!cancelled) setLoading(false)
        })
    }, 400)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [query])

  const displayedShows = query.trim() ? searchResults : shows

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        <div className="max-w-xl mx-auto w-full">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {loading && (
          <p className="text-center text-slate-400">Loading movies...</p>
        )}

        {error && !loading && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && !error && displayedShows.length === 0 && (
          <p className="text-center text-slate-400">No movies found.</p>
        )}

        {!loading && !error && displayedShows.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedShows.map((show) => (
              <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
            ))}
          </div>
        )}
      </main>
      <Footer />

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  )
}

export default MovieListing
