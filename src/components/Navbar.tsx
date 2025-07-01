import React from 'react'

const Navbar = () => {
    const Listitem: string[] = [
        'Work',
        'Services'
    ]
    return (
        <header className='fixed bg-neutral-400/20 backdrop-blur-[3px] 
        flex justify-between items-center gap-14 py-3 px-10
        z-10 border border-neutral-400/20 rounded-full
        left-1/2 translate-x-[-50%] top-[10px]
        shadow-lg text-white'>

            <ul className='flex gap-6 text-xl'>

            </ul>

            <button className='bg-gradient-to-r
                from-blue-500 to-green-400 px-4 py-1
                rounded-full shadow-2xl hover:from-blue-600
                hover:to-green-600 transition-all duration-500'>
                Contact
            </button>

        </header>
  )
}

export default Navbar