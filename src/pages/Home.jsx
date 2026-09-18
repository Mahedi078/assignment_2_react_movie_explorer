import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
      </main>
      <Footer />
    </div>
  )
}

export default Home
