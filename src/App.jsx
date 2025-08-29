import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <div className="flex justify-center items-center gap-2 my-5">
    <p>Developed by</p>
    <a href="https://www.leonardojansen.com" target="_blank" rel="noopener noreferrer">
      www.leonardojansen.com
    </a>
    </div>
    
   </main>
  )
}

export default App