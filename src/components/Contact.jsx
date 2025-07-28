import React from 'react';
import ContactForm from './contact/ContactForm';
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall, IoLogoGithub } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
    return ( 
        <>
            <div id='contact' className='min-h-[50vh] z-50 text-white '>
                <img 
                    src="/section.svg"
                    className='absolute -z-10' 
                />
                <div>
                    <div className='w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 '></div>

                    <div className='flex justify-center -translate-y-[1px]'>
                        <div className='w-3/4'>
                            <div className='h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full'></div>
                        </div>
                    </div>

                    <div className='flex justify-center my-5 lg:py-8'>
                        <div className='flex items-center'>
                            <span className='w-24 h-[2px] bg-[#1a1443]'></span>
                            <span className='bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md'>Contact</span>
                            <span className='w-24 h-[2px] bg-[#1a1443]'></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 md:px-16 lg:px-24 mt-10">
                    <div className="w-full lg:w-1/2">
                        <ContactForm />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center">
                        <div className="flex flex-col gap-4 text-sm md:text-xl">
                            <p className="flex items-center gap-3">
                                <MdAlternateEmail className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={36} />
                                <span>irfanhussains98786@gmail.com</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <IoMdCall className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={36} />
                                <span>9310198149</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <CiLocationOn className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={36} />
                                <span>New Delhi</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 mt-4">
                            <a href='https://github.com/Irfan-Hussain107' target="_blank" rel="noopener noreferrer">
                                <IoLogoGithub className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
                            </a>
                            <a href='https://www.linkedin.com/in/irfan-hussain-78537027a/' target="_blank" rel="noopener noreferrer">
                                <BiLogoLinkedin className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
                            </a>
                            <a href='https://x.com/Irfan_Hussain_S?t=r5JVynwY5uC4tSLo5YA5Vg&s=08' target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={48} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
     );
}

export default Contact;