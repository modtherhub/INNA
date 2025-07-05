import { AuroraBackground } from "./components/ui/aurora-background"
import Navbar from "./components/Navbar"
import { ChartNoAxesCombined } from 'lucide-react';

function App() {
  
  return (
    <>
    <Navbar/>
    <section className="min-h-screen w-full relative 
    bg-gradient-to-r from-fuchsia-500  via-red-400 to-orange-600
    flex items-center justify-center text-white dark:bg-black">
      <AuroraBackground >
        <div className="pt-24 flex flex-col md:grid md:grid-cols-[30%_70%] md:grid-rows-2  ">
      
            <p className="flex flex-col justify-start pl-3 text-s max-w-48
            tracking-tight bg-clip-text bg-gradient-to-r 
            from-blue-100 via-purple-500 to-green-400 text-transparent ">
              Trust me, I am a <span className=" text-amber-400">developer</span> and I know what I am doing.
            </p>

            <div className="pl-10 text-zinc-200/90">
              <p className="flex flex-col justify-end  pl-45 text-8xl font-extrabold">
                RIPPLE
              </p>
              <p className="flex flex-col justify-start  col-start-2 text-8xl font-extrabold ">
                INTO THE  
              </p>
              <p className="flex flex-col justify-start pl-24 font-extrabold text-8xl col-start-2 text-amber-400">
                FUTURE
              </p>
            </div>

            <div className=" flex flex-col  justify-center text-neutral-600/60 pl-4">
              <ChartNoAxesCombined className="size-28"/>
            </div>

            <div className="pl-12 flex justify-end items-center">
              <div className="flex items-start space-x-12 ">
                <p className="text-xs max-w-xs text-red-700">
                  Easily create stunning websites with our easy-to-use tools and templates.
                  No coding required, just drag and drop your way to success!
                </p>
                <p className="text-xs max-w-xs text-gray-200">
                  Enjoy the beauty of the web with our stunning designs and layouts.
                  Whether you're a beginner or an experienced developer, our platform has everything you need to create a
                  professional-looking website in no time.
                </p>
              </div>
            </div>
        </div>

      </AuroraBackground>
    </section>
    
    </>
    
  )
}

export default App
