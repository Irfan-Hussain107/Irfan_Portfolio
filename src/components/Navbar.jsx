import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navItems = [
        { to: 'hero', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' }
    ];

    return (
        <>
            <div className='hidden md:flex justify-center'>
                <nav className={`fixed top-4 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'backdrop-blur-lg bg-[#0d1224]/80 border border-violet-500/30 shadow-2xl shadow-violet-500/20' 
                        : 'backdrop-blur-md bg-[#0d1224]/60 border border-violet-400/20 shadow-lg shadow-violet-400/10'
                } rounded-full px-8 py-3`}>
                    <div className='flex items-center gap-8'>
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className='relative text-gray-300 font-medium cursor-pointer transition-all duration-300 hover:text-[#16f2b3] group px-3 py-2'
                            >
                                {item.label}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#16f2b3] to-violet-500 transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            <div className='md:hidden'>
                <div className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
                    scrolled 
                        ? 'backdrop-blur-lg bg-[#0d1224]/90 border-b border-violet-500/30 shadow-lg shadow-violet-500/20' 
                        : 'backdrop-blur-md bg-[#0d1224]/70 border-b border-violet-400/20'
                } px-4 py-3`}>
                    <div className='flex justify-between items-center'>
                        <div className='text-white font-bold text-xl'>
                            <span className='text-[#16f2b3]'>Irfan</span> Hussain
                        </div>
                        
                        <button
                            onClick={toggleMenu}
                            className='text-white p-2 rounded-lg hover:bg-violet-500/20 transition-colors duration-300'
                            aria-label='Toggle menu'
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>

                <div className={`fixed inset-0 z-[9997] transition-all duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                    <div 
                        className='absolute inset-0 backdrop-blur-sm bg-black/50'
                        onClick={closeMenu}
                    ></div>
                    
                    <div className={`absolute top-16 left-4 right-4 transition-all duration-300 ${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    } backdrop-blur-lg bg-[#0d1224]/95 border border-violet-500/30 rounded-2xl shadow-2xl shadow-violet-500/20 p-6`}>
                        <div className='flex flex-col space-y-4'>
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenu}
                                    className={`text-gray-300 font-medium cursor-pointer transition-all duration-300 hover:text-[#16f2b3] hover:bg-violet-500/10 rounded-lg px-4 py-3 border-l-4 border-transparent hover:border-[#16f2b3] transform hover:translate-x-2 delay-${index * 50}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        
                        <div className='mt-6 pt-4 border-t border-violet-500/20'>
                            <div className='flex justify-center'>
                                <div className='w-12 h-1 bg-gradient-to-r from-[#16f2b3] to-violet-500 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;