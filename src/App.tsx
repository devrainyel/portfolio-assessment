import './App.css'
// 1. Change BrowserRouter to HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom' 
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Certifications from './pages/Certifications'
import Redacted from './pages/Redacted'
import Contact from './pages/Contact'

function App() {
  return (
    // 2. Use Router (HashRouter) to handle GitHub Pages subfolders
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <Header />
        
        {/* Added flex-grow so footer stays at bottom if content is short */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Projects />
                <Certifications />
                <Contact />
              </main>
            } />
            <Route path="/redacted" element={<Redacted />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App