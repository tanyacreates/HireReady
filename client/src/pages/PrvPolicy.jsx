import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className='text-xs md:text-sm text-gray-400 font-light'>
              Last updated: July 9, 2026
            </p>
          </div>

          {/* Content body */}
          <div className='flex flex-col gap-8 text-sm md:text-base text-gray-700 leading-relaxed font-light'>
            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                1. Information We Collect
              </h2>
              <p>
                We collect information to provide better services to all our users. This includes information you provide to us (such as your name, email address, password, resume details, and voice/audio responses during mock interviews) and information we collect automatically (such as cookies, usage logs, and analytics data).
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                2. How We Use Information
              </h2>
              <p>
                We use the collected data to operate, maintain, and improve the HireReady platform. Specifically, voice responses and resume uploads are used to conduct tailored mock interview simulations and generate grading reports with real-time feedback. We do not use your private interview audio recordings for training public models without your explicit consent.
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our platform, conducting our business, or serving our users, provided those parties agree to keep this information confidential.
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                4. Data Security
              </h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal details. This includes encryption of data in transit and at rest.
              </p>
            </section>

            <section className='flex flex-col gap-3'>
              <h2 className='font-serif text-xl md:text-2xl text-black font-semibold tracking-tight'>
                5. Contact Us
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy, you may contact us using the contact forms available on our website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
