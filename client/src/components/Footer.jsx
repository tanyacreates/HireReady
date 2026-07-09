import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-full bg-white pt-10 pb-36 px-6 md:px-12 border-t border-gray-100 flex flex-col items-center gap-16'>
      
      {/* Visual CTA Section (Off-white background) */}
      <div className='w-full max-w-7xl relative aspect-[21/9] md:aspect-[3/1] rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center p-8 border border-gray-100/50 bg-[#F2F0EF]/80 shadow-2xs'>
        
        {/* Overlay Content */}
        <div className='relative z-10 flex flex-col items-center gap-5'>
          <h2 className='font-serif text-2xl md:text-4xl text-black tracking-tight leading-tight max-w-xl'>
            Give a white glove experience to every candidate
          </h2>
          <button className='bg-black text-white px-6 py-2.5 rounded-full hover:opacity-90 transition text-sm font-semibold cursor-pointer active:scale-95 shadow-sm'>
            Let's talk
          </button>
        </div>
      </div>

      {/* Footer Links & Disclaimer Grid */}
      <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8 border-t border-gray-50'>
        {/* Left Column: Disclaimer */}
        <div className='lg:col-span-8 flex flex-col gap-4 text-[10px] md:text-[11px] text-gray-400 font-light leading-relaxed max-w-2xl'>
          <p>
            HireReady ("HireReady") provides technology and AI-powered agents designed to help candidates prepare for interviews, audit resumes, and grade technical rounds. HireReady is a software platform and does not provide professional placement, recruiting, legal, or advisory services.
          </p>
          <p>
            Any user interactions, mock questions, or recommendations generated through HireReady agents are based on general interview patterns. HireReady does not control, verify, or guarantee the accuracy, completeness, or suitability of any information presented through its platform. By using this website or the HireReady platform, you acknowledge that all content is provided for informational and educational purposes only and agree to our Terms of Use and Privacy Policy.
          </p>
        </div>

        {/* Right Column: Links Grid */}
        <div className='lg:col-span-4 grid grid-cols-2 gap-8 w-full'>
          <div className='flex flex-col gap-3'>
            <span className='text-xs font-semibold text-gray-500 tracking-wider uppercase'>HireReady</span>
            <Link to="/auth" className='text-xs md:text-sm font-semibold text-gray-800 hover:text-black transition-colors'>Sign in</Link>
            <a href="#" className='text-xs md:text-sm font-semibold text-gray-800 hover:text-black transition-colors'>Contact us</a>
            <a href="#" className='text-xs md:text-sm font-semibold text-gray-800 hover:text-black transition-colors'>Careers</a>
          </div>
          <div className='flex flex-col gap-3'>
            <span className='text-xs font-semibold text-gray-500 tracking-wider uppercase'>Legal</span>
            <Link to="/privacy" className='text-xs md:text-sm font-semibold text-gray-800 hover:text-black transition-colors'>Privacy policy</Link>
            <Link to="/cookies" className='text-xs md:text-sm font-semibold text-gray-800 hover:text-black transition-colors'>Cookie policy</Link>
            <a href="#" className='text-xs md:text-sm font-semibold text-gray-800 hover:text-black transition-colors'>Responsible disclosure</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
