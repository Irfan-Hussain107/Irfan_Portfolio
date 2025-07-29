import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import computer from '../assets/Programming_Computer.json'

function Hero() {

    return ( 
        <>
            <div id='hero' className='h-screen w-full flex justify-center items-center flex-col text-white'>
                <img 
                    src="/hero.svg"
                    className="absolute inset-0 -z-10 w-full h-full object-cover" 
                />
                <div className='grid sm:grid-cols-2 '>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text-left'>
                            <h1 className='text-4xl sm:text-6xl font-bold text-amber-400'>Hello, <br /> I'm <span className='text-pink-500'>Irfan Hussain</span></h1>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer', 1500,
                                    'Problem Solver', 1500,
                                    'Coder', 1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-xl sm:text-3xl text-amber-300 font-semibold"
                            />
                        </div>
                        
                        <div className="my-12 flex items-center gap-5">
                            <a
                                href='https://github.com/Irfan-Hussain107'
                                rel="noopener noreferrer"
                                target='_blank'
                                className="transition-all text-pink-500 hover:scale-125 duration-300 cursor-pointer"
                            >
                                <BsGithub size={30} />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/irfan-hussain-78537027a/'
                                rel="noopener noreferrer"
                                target='_blank'
                                className="transition-all text-pink-500 hover:scale-125 duration-300 cursor-pointer"
                            >
                                <BsLinkedin size={30} />
                            </a>
                            <a
                                href='https://x.com/Irfan_Hussain_S?t=r5JVynwY5uC4tSLo5YA5Vg&s=08'
                                rel="noopener noreferrer"
                                target='_blank'
                                className="transition-all text-pink-500 hover:scale-125 duration-300 cursor-pointer"
                            >
                                <FaTwitterSquare size={30} />
                            </a>
                        </div>

                        <div className="relative inline-block px-6 py-3 font-semibold text-blue-600 border border-blue-600 group overflow-hidden rounded-lg transition duration-300 ease-in-out cursor-pointer">
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out z-0"></span>
                            <Link 
                                to='contact' 
                                smooth={true}
                                duration={800}
                                offset={-70}
                                spy={true}
                                className="relative z-10 text-white group-hover:text-white"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </div>

                    <div className='sm:flex justify-center items-center hidden'>
                        <img 
                            src="/black_laptop.png"  
                        />
                        <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-xl shadow-lg max-w-3xl mx-auto font-mono text-sm absolute sm:h-[400px] sm:w-[610px] w-[300px] ">
                            <div className="flex space-x-2 mb-4">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <pre className="text-sm md:text-base font-mono text-white leading-relaxed">
                                    <code>
                                        <span className="text-[#7ee787]">const</span> life = () =&gt; &#123;
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#ff7b72]">while</span> (true) &#123;
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;try &#123;
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">code();</span>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">drink("coffee");</span>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#125; catch (err) &#123;
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">cry();</span>
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                                        <br />
                                        &nbsp;&nbsp;&#125;
                                        <br />
                                        &#125;;
                                        <br />
                                        <span className="text-[#7ee787]">function</span> debugFridayNight() &#123;
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#a5d6ff]">
                                        console.log(
                                            "
                                            <TypeAnimation
                                            sequence={[
                                                'Wait... it was broken an hour ago!',
                                                1500,
                                                'I write code… and occasionally, it works.',
                                                1500,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                            />
                                            "
                                        );
                                        </span>
                                        &#125;
                                        <br />
                                        <span className="text-[#ff7b72]">// motivation.js not found</span>
                                    </code>
                                </pre>
                        </div>

                    </div>

                    <div className='sm:hidden flex justify-center items-center'>
                        <Lottie 
                            animationData={computer} 
                            loop={true} 
                            className='w-full h-auto'
                        />
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Hero;