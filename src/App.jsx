import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import FloatingIcon from "./components/FloatingIcon"
import Contact from "./components/Contact"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>
    <FloatingIcon/>
    
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <p>Developed by</p>
      <a 
        href="https://www.leonardojansen.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'rgb(150,150,150)', textDecoration: 'none' }}
      >
        www.leonardojansen.com
      </a>
    </footer>
   </main>
  )
}

export default App