import React from 'react';

function Footer() {
    return ( 
        <div id='footer' className='bg-[#0d1224] text-white py-6 flex flex-col items-center'>
            <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-4"></div>

            <p className="text-sm text-center">
                © Developer Portfolio by{" "}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/irfan-hussain-78537027a/"
                    className="text-[#16f2b3]"
                >
                    Irfan Hussain
                </a>
            </p>
        </div>
    );
}

export default Footer;
