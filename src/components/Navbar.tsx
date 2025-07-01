
const Navbar = () => {
    const Listitem: string[] = [
        'Home',
        'Services',
        'Work',
        'Blog',
        'Product'
    ]
    return (
        <header className='fixed bg-neutral-400/20 backdrop-blur-[3px] 
        flex justify-between items-center gap-14 py-3 px-10
        z-10 border border-neutral-400/20 rounded-full
        left-1/2 translate-x-[-50%] top-[10px]
        shadow-lg text-white'>

            <ul className='flex gap-6 text-xl'>
                {Listitem.map((item, index) => (

                    <li className='text-sm relative group cursor-pointer' key={index}>
                        {item}
                        <span className="absolute left-0 bottom-[-5px] 
                        w-0 h-[2px] group-hover:w-full bg-gradient-to-r
                        from-blue-500 to-green-400 rounded-full
                        transition-all duration-300"></span>
                    </li>
                    
                ))}
            </ul>

            <button className='bg-gradient-to-r text-sm
                from-blue-500 to-green-400 px-4 py-1
                rounded-full shadow-2xl hover:from-blue-600
                hover:to-green-600 transition-all duration-500'>
                Contact
            </button>

        </header>
  )
}

export default Navbar