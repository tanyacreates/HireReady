import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='min-h-screen bg-white flex flex-col font-sans antialiased text-black'>
      <Navbar />
      
      <main className='flex-1 w-full px-6 py-16 md:py-24 bg-[#F2F0EF]/30'>
        <div className='max-w-3xl mx-auto'>
          {/* Header */}
          <div className='mb-12'>
            <span className='text-[10px] font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full shadow-2xs'>
              Legal Documents
            </span>
            <h1 className='font-serif text-4xl md:text-5xl lg:text-6xl text-black tracking-tight leading-tight mt-4 mb-4'>
              Cookie Policy
            </h1>
            <p className='text-xs md:text-sm text-gray-400 font-light'>
              Last updated: July 9, 2026
            </p>
          </div>

          {/* Content body */}
          <div className='flex flex-col gap-8 text-sm md:text-base text-gray-700 leading-relaxed font-light'>
            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                2. How We Use Cookies
              </h2>
              <p>
                We use cookies for several reasons. Some cookies are required for technical reasons in order for our platform to operate, which we refer to as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our platform.
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                3. Types of Cookies We Use
              </h2>
              <p>
                We use session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them or they expire). These include authentication cookies to keep you logged in to your account, preference cookies to remember your settings, and analytics cookies to measure site performance.
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                4. Controlling Your Cookie Choices
              </h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CookiePolicy
