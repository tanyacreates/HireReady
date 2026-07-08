import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';
const hrImg = "/assets/HR.png";
const techImg = "/assets/tech.png";
const confidenceImg = "/assets/confi.png";
const creditImg = "/assets/credit.png";
const evalImg = "/assets/ai-ans.png";
const resumeImg = "/assets/resume.png";
const pdfImg = "/assets/pdf.png";
const analyticsImg = "/assets/history.png";
import Footer from '../components/Footer';
import SmoothWave from '../components/SmoothWave';


function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const navigate = useNavigate()

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    if (!userData) {
      setShowAuth(true);
      return;
    }
    navigate('/interview', { state: { initialPrompt: chatInput } });
  };
  return (
    <div className='min-h-screen bg-white flex flex-col font-sans antialiased text-black'>
      {/* Announcement Banner */}
      <div className='w-full bg-[#F2F0EF] border-b border-gray-100 py-2.5 px-4 text-center text-xs md:text-sm text-gray-600 font-light flex items-center justify-center gap-1.5'>
        <span>Practice role-based mock interviews with AI.</span>
        <a href="#start" className='font-normal underline hover:text-black transition inline-flex items-center gap-0.5'>
          Start practicing for free <span className='text-xs'>→</span>
        </a>
      </div>

      <Navbar />

      {/* Hero Text Section */}
      <div className='w-full px-6 pt-16 pb-4'>
        <div className='max-w-6xl mx-auto text-center mt-6'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='font-serif font-normal text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-black max-w-4xl mx-auto mb-6'>
            A dedicated guide <br />
            for every interview
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className='text-gray-600 mt-6 max-w-xl mx-auto text-base md:text-lg font-light tracking-normal leading-relaxed mb-8'>
            AI agents conducting tailored mock interviews & evaluation 24/7
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-wrap justify-center gap-3 mt-8'>
            <motion.button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true)
                  return;
                }
                navigate("/interview")
              }}
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              whileTap={{ opacity: 1, scale: 0.98 }}
              id="start"
              className='bg-black text-white px-6 py-2.5 rounded-full hover:opacity-90 transition font-medium text-sm flex items-center gap-2 shadow-sm cursor-pointer'>
              <HiSparkles size={14} />
              Start Interview
            </motion.button>

            <motion.button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true)
                  return;
                }
                navigate("/history")
              }}
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              whileTap={{ opacity: 1, scale: 0.98 }}
              className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2.5 rounded-full transition font-medium text-sm cursor-pointer'>
              {userData ? "View History" : "Try for free"}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Full-width Smooth Wave Ribbon Animation */}
      <div className='w-full h-[220px] md:h-[300px] relative overflow-hidden flex items-center justify-center -mt-14 mb-8'>
        <SmoothWave />
      </div>

      {/* Remaining Page Content */}
      <div className='flex-1 w-full px-6 pb-20'>
        <div className='max-w-6xl mx-auto'>

          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28'>
            {
              [
                {
                  icon: <BsRobot size={24} />,
                  step: "STEP 1",
                  title: "Role & Experience Selection",
                  desc: "AI adjusts difficulty based on selected job role."
                },
                {
                  icon: <BsMic size={24} />,
                  step: "STEP 2",
                  title: "Smart Voice Interview",
                  desc: "Dynamic follow-up questions based on your answers."
                },
                {
                  icon: <BsClock size={24} />,
                  step: "STEP 3",
                  title: "Timer Based Simulation",
                  desc: "Real interview pressure with time tracking."
                }
              ].map((item, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + index * 0.2 }}
                  whileHover={{ rotate: 0, scale: 1.06 }}

                  className={`
        relative bg-white rounded-3xl border-2 border-indigo-100 
        hover:border-indigo-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl 
        transition-all duration-300
        ${index === 0 ? "rotate-[-4deg]" : ""}
        ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
        ${index === 2 ? "rotate-[-3deg]" : ""}
      `}>

                  <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-indigo-500 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'>
                    {item.icon}</div>
                  <div className='pt-10 text-center'>
                    <div className='text-xs text-indigo-600 font-semibold mb-2 tracking-wider'>{item.step}</div>
                    <h3 className='font-semibold mb-3 text-lg'>{item.title}</h3>
                    <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
                  </div>


                </motion.div>
              ))
            }
          </div>


          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16'>
              Advanced AI{" "}
              <span className="text-indigo-600">Capabilities</span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>
              {
                [
                  {
                    image: evalImg,
                    icon: <BsBarChart size={20} />,
                    title: "AI Answer Evaluation",
                    desc: "Scores communication, technical accuracy and confidence."
                  },
                  {
                    image: resumeImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Resume Based Interview",
                    desc: "Project-specific questions based on uploaded resume."
                  },
                  {
                    image: pdfImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Downloadable PDF Report",
                    desc: "Detailed strengths, weaknesses and improvement insights."
                  },
                  {
                    image: analyticsImg,
                    icon: <BsBarChart size={20} />,
                    title: "History & Analytics",
                    desc: "Track progress with performance graphs and topic analysis."
                  }
                ].map((item, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                      <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64' />
                      </div>

                      <div className='w-full md:w-1/2'>
                        <div className='bg-indigo-50 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                          {item.icon}
                        </div>
                        <h3 className='font-semibold mb-3 text-xl'>{item.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
                      </div>

                    </div>


                  </motion.div>
                ))
              }
            </div>


          </div>

          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16'>
              Multiple Interview{" "}
              <span className="text-indigo-600">Modes</span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>
              {
                [
                  {
                    img: hrImg,
                    title: "HR Interview Mode",
                    desc: "Behavioral and communication based evaluation."
                  },
                  {
                    img: techImg,
                    title: "Technical Mode",
                    desc: "Deep technical questioning based on selected role."
                  },

                  {
                    img: confidenceImg,
                    title: "Confidence Detection",
                    desc: "Basic tone and voice analysis insights."
                  },
                  {
                    img: creditImg,
                    title: "Credits System",
                    desc: "Unlock premium interview sessions easily."
                  }
                ].map((mode, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">

                    <div className='flex items-center justify-between gap-6'>
                      <div className="w-1/2">
                        <h3 className="font-semibold text-xl mb-3">
                          {mode.title}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed">
                          {mode.desc}
                        </p>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="w-1/2 flex justify-end">
                        <img
                          src={mode.img}
                          alt={mode.title}
                          className="w-28 h-28 object-contain"
                        />
                      </div>



                    </div>


                  </motion.div>
                ))
              }
            </div>


          </div>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

      <Footer/>

      {/* Floating Chat Bar */}
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white/85 backdrop-blur-md border border-gray-200/80 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.08)] px-2 py-1.5 flex items-center gap-2 z-50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-gray-300/80'>
        <input 
          type="text" 
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask me anything..." 
          className='flex-1 pl-4 pr-2 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-hidden'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleChatSubmit();
            }
          }}
        />
        <button 
          onClick={handleChatSubmit}
          className='w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer active:scale-95'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Home
