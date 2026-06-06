import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen font-sans text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Gallery />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
