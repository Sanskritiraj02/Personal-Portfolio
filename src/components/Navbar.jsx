import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import Resume from '../assets/Docs/SRR.pdf'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href='#' className='text-3xl font-bold text-white'>
                        Sanskriti
                        <span className='text-purple-300'>Raj</span>
                        <span className='text-purple'>Rathor</span>
                        <div className='w-4 h-4 bg-purple rounded-full'></div>
                    </a>
                </div>
                {/* TAGS */}
                <div className='hidden md:flex space-x-10'>
                    <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#project' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#work' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Experience</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>

                    <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a className='btn btn-cv relative text-white/80 transition duration-300 hover:text-purple group' href={Resume} download="Sanskriti.pdf">Resume</a>
                </div>
            

                {/* Mobile Button */}
                <div className='md:hidden'>
                    {
                        showMenu ?
                        <FaXmark onClick={()=> setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/> :
                        <FaBars onClick={()=> setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                    }
                </div> 
            </div>

            {/* Mobile Menus */}
            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                        <a onClick={()=> setShowMenu(!showMenu)} href='#home' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Home</span>
                    </a>

                    <a onClick={()=> setShowMenu(!showMenu)} href='#about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>About</span>
                    </a>

                    <a onClick={()=> setShowMenu(!showMenu)} href='#skills' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Skills</span>
                    </a>

                    <a onClick={()=> setShowMenu(!showMenu)} href='#project' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Projects</span>
                    </a>

                    <a onClick={()=> setShowMenu(!showMenu)} href='#work' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Experience</span>
                    </a>

                    <a onClick={()=> setShowMenu(!showMenu)} href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span className=''>Contact</span>
                    </a>
                    <a href='#resume' className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>Resume</a>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
