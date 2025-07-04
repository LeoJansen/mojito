import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <div className="h-dvh bg-black flex items-center justify-center">
      <p className="text-3xl text-indigo-50">Que não me dá um pingo de atenção</p>
    </div>
   </main>
  )
}

export default App