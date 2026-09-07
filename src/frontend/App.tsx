import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Navbar from '@/components/Navbar'
import Projects from '@/pages/Projects'
import CV from '@/pages/CV'
import { projects } from '../backend/src/data/projects.ts'
import '@/App.css'
import NotFound from '@/pages/NotFound'
import Music from '@/pages/Music'
import BackgroundMusic from './components/BackgroundMusic'
import { initLog } from "packages";

const log = initLog();
function App() {
  log.info("App component rendered");
  return (
    <>
    <BackgroundMusic src="/portfolio_soundtrack.mp3" volume={0.4} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/music" element={<Music />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
