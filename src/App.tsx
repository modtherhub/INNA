import { AuroraBackground } from "./components/ui/aurora-background"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
    <Navbar/>
    <section className="min-h-screen w-full relative 
    bg-gradient-to-r from-fuchsia-500  via-red-400 to-orange-600
    flex items-center justify-center text-white">
      <AuroraBackground >
      <div className="text-center space-y-5 max-w-2xl z-8">
        <p></p>
      </div>
      </AuroraBackground>
    </section>
    
    </>
    
  )
}

export default App
