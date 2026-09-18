function MovieModal({ show, onClose }) {
  const rating = show.rating?.average ?? 'N/A'
  const premiered = show.premiered ?? 'N/A'
  const genres = show.genres?.length ? show.genres.join(', ') : 'N/A'
  const network = show.network?.name ?? show.webChannel?.name ?? 'N/A'
  const image = show.image?.original ?? show.image?.medium

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-white/10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-slate-950/80 text-white hover:bg-slate-800"
        >
          ✕
        </button>

        {image && (
          <img src={image} alt={show.name} className="w-full max-h-80 object-cover" />
        )}

        <div className="flex flex-col gap-3 p-6">
          <h2 className="text-2xl font-bold text-white">{show.name}</h2>
          <p className="text-slate-300 text-sm">
            ⭐ Rating: {rating} &nbsp;|&nbsp; 📅 Release: {premiered}
          </p>
          <p className="text-slate-300 text-sm">
            🎭 Genre: {genres} &nbsp;|&nbsp; 📺 Network: {network}
          </p>

          <div>
            <h3 className="text-white font-semibold mb-1">Overview</h3>
            <div
              className="text-slate-400 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: show.summary ?? 'No summary available.' }}
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="self-end mt-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors text-white text-sm font-medium px-5 py-2"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
