function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900 px-5 py-3 shadow-sm">
      <span aria-hidden="true">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
      />
    </div>
  )
}

export default SearchBar
