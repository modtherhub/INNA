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
        <p className="py-1 px-2 bg-zinc-900/40 backdrop-blur-md
        font-light rounded-full inline-block">Join 7.000 Users</p>
        <div className="space-y-3">
          <h1 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r 
          from-blue-100 via-purple-500 to-green-400 text-transparent font-semibold">
            Build your <span className="text-amber-400">Dream</span> Website  
          </h1>
        </div>
        <p className="text-lg text-zinc-200/90">
          Create stunning websites with our easy-to-use tools and templates.
          No coding required, just drag and drop your way to success! 
        </p>
        <div className="space-x-3">
          <button className="rounded-lg bg-neutral-600/60 px-3 py-1">Shows Plans</button>
          <button className="rounded-lg bg-gradient-to-r from-green-400 to-blue-700 px-3 py-1">Contact Us</button>
        </div>
      </div>
      </AuroraBackground>
    </section>
    
    </>
    
  )
}

export default App
