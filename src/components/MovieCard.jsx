function MovieCard({ show, onSelect }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : 'N/A'
  const rating = show.rating?.average ?? 'N/A'

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform">
      <div className="aspect-[2/3] bg-slate-800 flex items-center justify-center">
        {show.image?.medium ? (
          <img
            src={show.image.medium}
            alt={show.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-slate-500 text-sm px-4 text-center">No image available</span>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="text-white font-semibold line-clamp-2">{show.name}</h3>
        <p className="text-slate-400 text-sm">
          ⭐ {rating} • 📅 {year}
        </p>
        <button
          type="button"
          onClick={() => onSelect(show)}
          className="mt-auto rounded-full bg-purple-600 hover:bg-purple-500 transition-colors text-white text-sm font-medium py-2"
        >
          See Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
