function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-6 text-sm">
        <div className="flex items-center gap-2 text-white font-semibold">
          <span>🎬</span>
          <span>MovieExplorer</span>
        </div>
        <p>© 2026 MovieExplorer. All rights reserved.</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
