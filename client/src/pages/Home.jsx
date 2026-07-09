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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi!' },
    { sender: 'bot', text: 'How can I help you with HireReady today?' }
  ]);
  const navigate = useNavigate()

  const testimonials = [
    {
      quote: "HireReady helps our candidates prepare for the technical screening rounds. It's an efficient tool for building candidates' confidence and reducing screening failures in every region we hire.",
      name: "Anette Tenison",
      role: "Talent Acquisition Lead at Finbite",
      image: "/assets/anette_profile.png"
    },
    {
      quote: "We noticed a significant increase in the quality of system design explanations from candidates who practiced on HireReady. The grading report is incredibly accurate.",
      name: "Marcus Vance",
      role: "Engineering Director at Stripe",
      image: "/assets/marcus_profile.png"
    },
    {
      quote: "Our candidates are much better prepared, creating a much higher pass rate in technical rounds. HireReady's AI coach has been super useful for coverage outside of regular mentoring hours.",
      name: "Alasdair Reynolds",
      role: "Head of Growth at Parim",
      image: "/assets/Alasdair.webp"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const faqs = [
    {
      question: "How long does it take to set up?",
      answer: "Setting up your profile and choosing a role takes less than 30 seconds. You can start your first simulated mock interview immediately after logging in."
    },
    {
      question: "How do the AI interviewers stay up to date?",
      answer: "Our AI coaches are updated continuously with the latest interview patterns and questions from top tech companies, ensuring you practice relevant topics."
    },
    {
      question: "How are the mock sessions personalised?",
      answer: "Every session adapts to your target job title, experience level, and resume background. The AI adjusts the technical difficulty and asks follow-up questions based on your live answers."
    },
    {
      question: "What languages does HireReady support?",
      answer: "We support mock interviews in English, Spanish, German, French, Mandarin, and over 15 other languages."
    },
    {
      question: "What kind of evaluation analytics are available?",
      answer: "You receive detailed feedback on your communication speed, confidence, technical accuracy, code logic, and structural explanation, complete with improvement tips and score breakdowns."
    },
    {
      question: "Is the AI coach able to guide me through coding questions?",
      answer: "Yes, the coach evaluates code syntax, complexity constraints, and system design layouts, offering drop-in suggestions to correct logical errors."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChatSubmit = (customText = null) => {
    const textToSend = customText || chatInput;
    if (!textToSend.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, { sender: 'user', text: textToSend }];
    setChatMessages(newMessages);
    setIsChatOpen(true);
    setChatInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm Holly, your HireReady assistant. I can guide you on setting up mock interviews, managing credits, or viewing your history. Let me know what you need!";
      const lower = textToSend.toLowerCase();
      if (lower.includes('what does') || lower.includes('do?')) {
        botResponse = "HireReady is an AI-powered interview preparation platform. We conduct tailored mock interviews with real-time feedback, grading your communication, technical accuracy, and structure.";
      } else if (lower.includes('demo') || lower.includes('try') || lower.includes('start')) {
        botResponse = "You can try a mock interview for free! Just click the 'Start Interview' button in the hero section to set up your role.";
      } else if (lower.includes('pricing') || lower.includes('cost')) {
        botResponse = "HireReady gives you free mock interview credits upon sign up. You can upgrade to a premium plan for unlimited practice sessions.";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
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

      <div className='w-full px-6 pt-16 pb-4'>
        <div className='max-w-7xl mx-auto text-center mt-6'>
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

      <div className='flex-1 w-full px-6 pb-20'>
        <div className='max-w-7xl mx-auto'>

          {/* Stats & Testimonial Section */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-12 border-t border-gray-100 mb-16'>
            {/* Stat 1 */}
            <div className='lg:col-span-3 flex items-start gap-4'>
              <span className='font-sans font-light text-5xl md:text-6xl tracking-tight text-black'>90%</span>
              <p className='text-xs md:text-[13px] text-gray-500 leading-tight mt-1.5 max-w-[130px] font-light'>
                confidence boost in real interviews
              </p>
            </div>

            {/* Stat 2 */}
            <div className='lg:col-span-3 flex items-start gap-4'>
              <span className='font-sans font-light text-5xl md:text-6xl tracking-tight text-black'>10x</span>
              <p className='text-xs md:text-[13px] text-gray-500 leading-tight mt-1.5 max-w-[130px] font-light'>
                faster mock interview feedback loops
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className='lg:col-span-6 flex flex-col items-start gap-4 lg:pl-8 lg:border-l border-gray-100'>
              <p className='font-sans text-sm md:text-base text-gray-600 leading-relaxed italic font-light w-full'>
                "Our candidates are much better prepared, creating a much higher pass rate in technical rounds. HireReady's AI coach has been super useful for coverage outside of regular mentoring hours."
              </p>
              <div className='flex items-center gap-3 self-end'>
                <div className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100'>
                  <img src='/assets/Alasdair.webp' alt="Alasdair Reynolds" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col'>
                  <span className='font-sans font-semibold text-xs text-gray-800'>Alasdair Reynolds</span>
                  <span className='font-sans text-[10px] text-gray-400 font-light'>Head of Growth at Parim</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Showcase Demo Rounded Card */}
          <div className='w-full bg-[#F2F0EF]/80 rounded-[32px] border border-gray-100/50 p-8 md:p-12 relative overflow-hidden flex flex-col items-center justify-center text-center aspect-[16/9] max-h-[460px] mb-28 shadow-xs'>
            {/* Hologram Image Background */}
            <div className='absolute inset-0 z-0 flex items-center justify-center opacity-40 mix-blend-multiply pointer-events-none select-none'>
              <img 
                src='/assets/ai-model-img.png' 
                alt="AI Hologram" 
                className='h-[100%] w-auto object-contain max-w-none'
              />
            </div>

            {/* Glowing 3D Glass Orbs (Floating CSS Deco) */}
            <div className='absolute top-1/4 left-1/10 w-6 h-6 rounded-full bg-gradient-to-tr from-amber-200/50 to-blue-200/50 backdrop-blur-xs blur-[0.5px] shadow-sm animate-pulse duration-4000 z-10' />
            <div className='absolute bottom-1/4 left-1/8 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-300/40 to-indigo-200/40 backdrop-blur-xs blur-[0.5px] shadow-sm animate-pulse duration-3000 z-10' />
            <div className='absolute top-1/3 right-1/6 w-7 h-7 rounded-full bg-gradient-to-tr from-amber-300/40 to-orange-200/40 backdrop-blur-xs blur-[0.5px] shadow-sm animate-pulse duration-5000 z-10' />
            <div className='absolute bottom-1/3 right-1/12 w-6 h-6 rounded-full bg-gradient-to-tr from-blue-200/40 to-teal-100/40 backdrop-blur-xs blur-[0.5px] shadow-sm animate-pulse duration-3500 z-10' />

            {/* Foreground Content */}
            <div className='relative z-20 max-w-xl flex flex-col items-center gap-3 mt-50'>
              <h2 className='font-serif text-3xl md:text-5xl text-black tracking-tight leading-tight mt-1'>
                See HireReady in action
              </h2>
              <p className='text-gray-500 text-xs md:text-sm font-light max-w-sm md:max-w-md leading-relaxed mb-3'>
                Let our AI agent walk you through a simulated mock interview and real-time response grading.
              </p>
              <button 
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate('/interview');
                }}
                className='bg-black text-white px-5 py-2.5 rounded-full hover:opacity-90 transition text-xs font-semibold flex items-center gap-2 active:scale-95 shadow-sm cursor-pointer'
              >
                {/* Dots Symbol matching design */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <circle cx="2" cy="6" r="1.2" fill="currentColor"/>
                  <circle cx="6" cy="2" r="1.2" fill="currentColor"/>
                  <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
                  <circle cx="6" cy="10" r="1.2" fill="currentColor"/>
                  <circle cx="10" cy="6" r="1.2" fill="currentColor"/>
                </svg>
                Start demo
              </button>
            </div>
          </div>
          
          {/* Master Interview Prep Section (Split Grid Layout) */}
          <div className='mb-32 pt-12 border-t border-gray-100'>
            <div className='max-w-3xl mb-16'>
              <h2 className='font-serif text-4xl md:text-6xl text-black tracking-tight leading-tight mb-6'>
                Master every phase of your interview prep
              </h2>
              <p className='text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-xl'>
                From resume building to technical evaluation and live voice rounds, our specialized AI agents guide you through every challenge.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
              {/* Left Column (Interactive Agent Tabs) */}
              <div className='lg:col-span-5 flex flex-col gap-8'>
                <div>
                  <h3 className='font-serif text-2xl md:text-3xl text-black tracking-tight leading-tight mt-4 mb-4'>
                    Practice realistic voice & chat rounds
                  </h3>
                  
                  <div className='flex flex-col gap-5 border-t border-gray-100 pt-6'>
                    <div className='flex items-start gap-3 py-2 border-b border-gray-50'>
                      <span className='text-xs font-semibold text-gray-400 mt-1'>01</span>
                      <p className='text-sm text-gray-700 font-light leading-relaxed'>
                        Engages you with domain-specific follow-up questions.
                      </p>
                    </div>
                    <div className='flex items-start gap-3 py-2 border-b border-gray-50'>
                      <span className='text-xs font-semibold text-gray-400 mt-1'>02</span>
                      <p className='text-sm text-gray-700 font-light leading-relaxed'>
                        Qualifies your communication depth and technical accuracy.
                      </p>
                    </div>
                    <div className='flex items-start gap-3 py-2'>
                      <span className='text-xs font-semibold text-gray-400 mt-1'>03</span>
                      <p className='text-sm text-gray-700 font-light leading-relaxed'>
                        Retains memory of your resume context for targeted questioning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Gradient Visual Card Box with tags) */}
              <div className='lg:col-span-7 aspect-[4/3] w-full rounded-[32px] border border-gray-100/50 relative overflow-hidden flex items-center justify-center p-8 shadow-xs'>
                {/* Blurry Gradient Background Image */}
                <img 
                  src='/assets/blue_gold_gradient.png' 
                  alt="Blurry Gradient Background" 
                  className='absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none'
                />

                {/* Floating Metadata Tags (Simulating handhold.io visitor/lead indicators) */}
                <div className='relative z-10 flex flex-col items-center gap-4 w-full max-w-md'>
                  {/* Candidate Info Badge */}
                  <div className='bg-white/90 backdrop-blur-xs border border-white/80 px-4 py-2 rounded-full shadow-xs flex items-center gap-2'>
                    {/* Small user icon */}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                      <circle cx="6" cy="4" r="2" fill="currentColor"/>
                      <path d="M2 10C2 7.8 3.8 6 6 6s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className='text-[11px] text-gray-800 font-semibold tracking-wide'>Candidate Info:</span>
                  </div>

                  <div className='flex flex-wrap justify-center gap-2'>
                    <span className='bg-white/90 backdrop-blur-xs border border-white/80 px-4 py-2 rounded-full shadow-2xs text-[11px] text-gray-800 font-medium'>
                      Software Engineer
                    </span>
                    <span className='bg-white/90 backdrop-blur-xs border border-white/80 px-4 py-2 rounded-full shadow-2xs text-[11px] text-gray-800 font-medium'>
                      3+ Years Exp
                    </span>
                  </div>

                  <div className='flex flex-wrap justify-center gap-2'>
                    <span className='bg-white/90 backdrop-blur-xs border border-white/80 px-4 py-2 rounded-full shadow-2xs text-[11px] text-gray-800 font-medium'>
                      System Design Focus
                    </span>
                    <span className='bg-white/90 backdrop-blur-xs border border-white/80 px-4 py-2 rounded-full shadow-2xs text-[11px] text-gray-800 font-medium'>
                      Vercel Candidate
                    </span>
                  </div>

                  {/* Goal Badge */}
                  <div className='bg-white/90 backdrop-blur-xs border border-white/80 px-5 py-2.5 rounded-full shadow-xs text-[11px] text-gray-800 font-semibold tracking-wide mt-2'>
                    Goal: Ace Technical Assessment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Evaluator Section (Opposite Split Layout) */}
          <div className='mb-32'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
              
              {/* Left Column (Green/Teal Gradient Visual Card Box with bubble) */}
              <div className='lg:col-span-7 aspect-[4/3] w-full rounded-[32px] border border-gray-100/50 relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 shadow-xs'>
                {/* Blurry Gradient Background Image */}
                <img 
                  src='/assets/green_teal_gradient.png' 
                  alt="Blurry Green Gradient Background" 
                  className='absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none'
                />

                {/* Floating Response Message Bubble (Simulating handhold.io visitor/lead questions) */}
                <div className='relative z-10 w-full max-w-sm flex flex-col gap-3'>
                  <div className='bg-white/95 backdrop-blur-xs border border-white/80 p-5 rounded-[22px] shadow-sm text-left flex flex-col gap-1.5'>
                    <span className='text-[10px] text-indigo-500 font-semibold uppercase tracking-wider'>
                      Candidate Response:
                    </span>
                    <p className='text-xs text-gray-700 leading-relaxed font-light'>
                      "To reverse a linked list, we keep three pointers: prev, curr, and next. In each step, we save curr.next, point curr.next to prev, and advance pointers..."
                    </p>
                  </div>

                  {/* Status Capsule */}
                  <div className='self-center bg-white/95 backdrop-blur-xs border border-white/80 px-4 py-2 rounded-full shadow-xs flex items-center gap-2'>
                    {/* Small analysis spark icon */}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className='text-[10px] text-gray-800 font-medium tracking-wide'>Evaluating logic accuracy...</span>
                  </div>
                </div>
              </div>

              {/* Right Column (Interactive Agent Tabs) */}
              <div className='lg:col-span-5 flex flex-col gap-8'>
                <div>
                  <h3 className='font-serif text-2xl md:text-3xl text-black tracking-tight leading-tight mt-4 mb-4'>
                    Get instant grades & improvement tips
                  </h3>
                  
                  <div className='flex flex-col gap-5 border-t border-gray-100 pt-6'>
                    <div className='flex flex-col gap-1.5 py-1.5 border-b border-gray-50'>
                      <span className='text-xs font-semibold text-gray-400'>01. Runs mock sessions</span>
                      <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed pl-5'>
                        Guides you through standard coding and behavioral assessments.
                      </p>
                    </div>
                    <div className='flex flex-col gap-1.5 py-1.5 border-b border-gray-50'>
                      <span className='text-xs font-semibold text-emerald-600'>02. Gathers evaluation signals</span>
                      <p className='text-xs md:text-sm text-gray-600 font-light leading-relaxed pl-5'>
                        Captures key signals, logic weaknesses, and improvement goals directly from your response.
                      </p>
                    </div>
                    <div className='flex flex-col gap-1.5 py-1.5'>
                      <span className='text-xs font-semibold text-gray-400'>03. Turns sessions into offers</span>
                      <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed pl-5'>
                        Nudges you to target correct topics and build structural confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* AI Onboarding/Resume Guide Section (Standard Split Layout) */}
          <div className='mb-32 '>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
              
              {/* Left Column (Interactive Agent Tabs) */}
              <div className='lg:col-span-5 flex flex-col gap-8'>
                <div>
                  <h3 className='font-serif text-2xl md:text-3xl text-black tracking-tight leading-tight mt-4 mb-4'>
                    Provide tailored prep from your actual resume
                  </h3>
                  
                  <div className='flex flex-col gap-5 border-t border-gray-100 pt-6'>
                    <div className='flex flex-col gap-1.5 py-1.5 border-b border-gray-50'>
                      <span className='text-xs font-semibold text-gray-400'>01. Knows your background inside out</span>
                      <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed pl-5'>
                        Fully understands your stack, experience level, and project architecture.
                      </p>
                    </div>
                    <div className='flex flex-col gap-1.5 py-1.5 border-b border-gray-50'>
                      <span className='text-xs font-semibold text-orange-600'>02. Navigates directly inside your resume</span>
                      <p className='text-xs md:text-sm text-gray-600 font-light leading-relaxed pl-5'>
                        Audits your background and generates targeted interview questions for your projects.
                      </p>
                    </div>
                    <div className='flex flex-col gap-1.5 py-1.5'>
                      <span className='text-xs font-semibold text-gray-400'>03. Helps candidates reach their goals</span>
                      <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed pl-5'>
                        Aligns mock rounds with specific job descriptions and company cultures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Orange/Peach Gradient Visual Card Box) */}
              <div className='lg:col-span-7 aspect-[4/3] w-full rounded-[32px] border border-gray-100/50 relative overflow-hidden flex items-center justify-center p-6 md:p-10 shadow-xs'>
                {/* Blurry Gradient Background Image */}
                <img 
                  src='/assets/orange_peach_gradient.png' 
                  alt="Blurry Orange Gradient Background" 
                  className='absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none'
                />

                {/* Mock UI Frame (Resume Mockup Layout) */}
                <div className='relative z-10 bg-white/70 backdrop-blur-xs border border-white/60 w-[85%] rounded-2xl p-4 shadow-sm flex flex-col gap-3'>
                  {/* Mock UI Header */}
                  <div className='flex items-center gap-2 pb-2 border-b border-gray-200/50'>
                    <div className='w-3 h-3 rounded-full bg-red-400/80' />
                    <div className='w-3 h-3 rounded-full bg-yellow-400/80' />
                    <div className='w-3 h-3 rounded-full bg-green-400/80' />
                    <span className='text-[10px] text-gray-400 pl-2 font-mono'>resume_audit.pdf</span>
                  </div>

                  {/* Mock Resume Columns */}
                  <div className='grid grid-cols-3 gap-2'>
                    <div className='col-span-1 border-r border-gray-200/40 pr-2 flex flex-col gap-2'>
                      <div className='h-3 w-12 bg-gray-400/35 rounded' />
                      <div className='h-2 w-full bg-gray-300/30 rounded' />
                      <div className='h-2 w-4/5 bg-gray-300/30 rounded' />
                      <div className='h-3 w-14 bg-gray-400/35 rounded mt-2' />
                      <div className='h-2 w-full bg-gray-300/30 rounded' />
                    </div>
                    <div className='col-span-2 flex flex-col gap-2 pl-2'>
                      <div className='h-3 w-20 bg-gray-400/35 rounded' />
                      <div className='h-2 w-full bg-gray-300/30 rounded' />
                      <div className='h-2 w-5/6 bg-gray-300/30 rounded' />
                      <div className='h-3 w-24 bg-gray-400/35 rounded mt-2' />
                      <div className='h-2 w-full bg-gray-300/30 rounded' />
                    </div>
                  </div>

                  {/* Floating Cursor pointing to UI */}
                  <div className='absolute top-[40%] left-[30%] z-20 flex items-start gap-1 transform translate-x-4 -translate-y-2 pointer-events-none'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 drop-shadow-xs">
                      <path d="M1.5 1.5v11l3.5-3.5 3 5 1.5-1-3-5 5-.5-10-6z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Floating Chat Helper Card inside Mock UI */}
                  <div className='absolute bottom-[-15px] right-[10px] w-[80%] bg-white border border-gray-200/80 rounded-2xl p-3 shadow-md flex flex-col gap-2 z-20'>
                    <div className='flex items-center gap-2 pb-1 border-b border-gray-50'>
                      <div className='w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px] text-orange-600 font-semibold'>H</div>
                      <div className='flex flex-col'>
                        <span className='text-[10px] text-gray-800 font-semibold leading-tight'>Holly</span>
                        <span className='text-[8px] text-gray-400 leading-none'>AI Resume Guide</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1 text-[9px] leading-tight'>
                      <div className='text-gray-500 italic'>How do I highlight my system design experience?</div>
                      <div className='text-gray-800 font-medium'>First, add metrics on database scalability.</div>
                    </div>
                    {/* Progress indicator */}
                    <div className='w-full bg-gray-100 h-1 rounded-full overflow-hidden mt-1'>
                      <div className='w-2/5 bg-blue-500 h-full' />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Scale Mock Rounds Section (Create Agent / Feature Grid Layout) */}
          <div className='mb-32 pt-12 border-t border-gray-100'>
            <div className='max-w-3xl mb-16'>
              <h2 className='font-serif text-4xl md:text-6xl text-black tracking-tight leading-tight mb-6'>
                Scale your interview readiness with AI mock runs
              </h2>
              <p className='text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-xl'>
                Get a dedicated mock interviewer for any target role — HireReady agents are always available. Practice coding, system design, or leadership rounds anytime.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'>
              {/* Left Column (Create Agent Generator Box) */}
              <div className='lg:col-span-7 bg-[#F2F0EF]/80 rounded-[32px] border border-gray-100/50 p-8 md:p-12 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-2xs'>
                <div className='flex flex-col items-center gap-3 relative z-10 w-full'>
                  <h3 className='font-serif text-3xl md:text-4xl text-black tracking-tight leading-tight'>
                    Configure your own interviewer
                  </h3>
                  <p className='text-gray-500 text-xs md:text-sm font-light max-w-md leading-relaxed'>
                    Generate a tailored AI coach from any job description or company profile.
                  </p>
                </div>

                {/* Overlapping Gradient Circles representing the three agent styles */}
                <div className='flex items-center justify-center -space-x-8 my-10 relative z-10 scale-90 md:scale-100'>
                  {/* Circle 1: Red/Orange */}
                  <div className='w-28 h-28 rounded-full bg-gradient-to-tr from-orange-300 to-orange-200 shadow-sm relative flex items-center justify-center overflow-hidden border border-white/60'>
                    {/* Small Dot Grid SVG overlay */}
                    <div className='absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]' />
                  </div>
                  {/* Circle 2: Blue/Yellow */}
                  <div className='w-32 h-32 rounded-full bg-gradient-to-tr from-blue-300 to-amber-200 shadow-md relative flex items-center justify-center overflow-hidden border border-white/60 z-20'>
                    <div className='absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]' />
                  </div>
                  {/* Circle 3: Green/Teal */}
                  <div className='w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-300 to-teal-200 shadow-sm relative flex items-center justify-center overflow-hidden border border-white/60 z-10'>
                    <div className='absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px]' />
                  </div>
                </div>

                <div className='flex flex-col items-center gap-4 relative z-10 w-full'>
                  <span className='text-[10px] text-gray-400 font-light leading-none'>
                    No credit card required. Free credits. Start mock session in seconds.
                  </span>
                  
                  {/* Form input field and CTA */}
                  <div className='w-full max-w-md bg-white rounded-full border border-gray-200/80 p-1 flex items-center gap-2 shadow-2xs'>
                    <input 
                      type="text" 
                      placeholder="Enter target job role (e.g. React Developer)..." 
                      className='flex-1 pl-4 pr-2 py-2 text-xs md:text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-hidden'
                    />
                    <button 
                      onClick={() => navigate('/interview')}
                      className='bg-black text-white px-5 py-2.5 rounded-full hover:opacity-90 transition text-xs font-semibold shrink-0 cursor-pointer active:scale-95'
                    >
                      Create interviewer
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column (Three stacked rounded cards) */}
              <div className='lg:col-span-5 flex flex-col gap-4'>
                {/* Card 1 */}
                <div className='bg-[#F2F0EF]/40 hover:bg-[#F2F0EF]/60 transition border border-gray-100/50 rounded-[24px] p-6 md:p-8 flex flex-col gap-2 shadow-2xs'>
                  <h4 className='font-serif text-xl md:text-2xl text-black tracking-tight leading-tight'>
                    Practice 24/7
                  </h4>
                  <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed'>
                    Always available to conduct mock coding, system design, or behavioral rounds whenever you are ready.
                  </p>
                </div>
                
                {/* Card 2 */}
                <div className='bg-[#F2F0EF]/40 hover:bg-[#F2F0EF]/60 transition border border-gray-100/50 rounded-[24px] p-6 md:p-8 flex flex-col gap-2 shadow-2xs'>
                  <h4 className='font-serif text-xl md:text-2xl text-black tracking-tight leading-tight'>
                    Unlimited Custom Roles
                  </h4>
                  <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed'>
                    Covers frontend, backend, PM, sales, finance, management, and 100+ specializations instantly.
                  </p>
                </div>

                {/* Card 3 */}
                <div className='bg-[#F2F0EF]/40 hover:bg-[#F2F0EF]/60 transition border border-gray-100/50 rounded-[24px] p-6 md:p-8 flex flex-col gap-2 shadow-2xs'>
                  <h4 className='font-serif text-xl md:text-2xl text-black tracking-tight leading-tight'>
                    Personalised for each candidate
                  </h4>
                  <p className='text-xs md:text-sm text-gray-500 font-light leading-relaxed'>
                    Adapts question depth and complexity in real-time based on your previous responses.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Slide-driven Testimonials Slider Section */}
          <div className='mb-32 flex flex-col gap-8'>
            <span className='text-xs md:text-sm text-gray-400 font-light tracking-wide'>
              What our customers say about us
            </span>
            
            {/* The Quote Block (Serif Large Font) */}
            <div className='min-h-[140px] md:min-h-[180px] lg:min-h-[200px] flex items-center'>
              <p className='font-serif text-2xl md:text-4xl lg:text-5xl text-black leading-tight tracking-tight max-w-5xl transition-all duration-300'>
                "{testimonials[activeTestimonial].quote}"
              </p>
            </div>

            {/* Bottom Row containing Profile & Navigation Arrows */}
            <div className='flex items-center justify-between mt-6'>
              {/* Profile Block */}
              <div className='flex items-center gap-3.5'>
                <div className='w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border border-gray-100/80 shadow-2xs'>
                  <img 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name} 
                    className='w-full h-full object-cover' 
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='font-sans font-semibold text-sm md:text-base text-gray-800 leading-tight'>
                    {testimonials[activeTestimonial].name}
                  </span>
                  <span className='font-sans text-[11px] md:text-xs text-gray-400 font-light mt-0.5'>
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </div>

              {/* Slider Arrow Controls */}
              <div className='flex items-center gap-2.5'>
                <button 
                  onClick={prevTestimonial}
                  className='w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 transition shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer'
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className='w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 transition shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer'
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className='mb-32 pt-16 border-t border-gray-100 flex flex-col gap-8'>
            <span className='text-xs md:text-sm text-gray-400 font-light tracking-wide'>
              Frequently Asked Questions
            </span>
            
            <div className='flex flex-col border-b border-gray-100'>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className='border-t border-gray-100 py-6 flex flex-col gap-4'>
                    <button 
                      onClick={() => toggleFaq(index)}
                      className='w-full flex items-center justify-between text-left cursor-pointer group'
                    >
                      <span className='font-serif text-xl md:text-2xl text-gray-900 group-hover:text-black transition-colors'>
                        {faq.question}
                      </span>
                      <div className='w-8 h-8 rounded-full bg-[#F2F0EF]/80 group-hover:bg-[#F2F0EF] flex items-center justify-center text-sm text-gray-600 transition shrink-0'>
                        {isOpen ? (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        )}
                      </div>
                    </button>
                    
                    {/* Expandable Answer wrapper */}
                    {isOpen && (
                      <p className='text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-4xl animate-in fade-in slide-in-from-top-2 duration-300 pl-1'>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

      <Footer/>

      {/* Floating Chat Bar / Widget */}
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50 flex flex-col gap-3'>
        
        {/* Chat Popup Window */}
        {isChatOpen && (
          <div className='w-full bg-white border border-gray-200/80 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300'>
            {/* Header */}
            <div className='flex items-center justify-between pb-3 border-b border-gray-100'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-amber-100 overflow-hidden flex items-center justify-center border border-gray-100'>
                  {/* Small hologram svg icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <div className='flex flex-col'>
                  <span className='font-sans font-semibold text-sm text-gray-800 leading-tight'>Holly</span>
                  <span className='font-sans text-[11px] text-gray-400'>AI Interview Coach</span>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className='text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-50 rounded-full cursor-pointer'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Display Area */}
            <div className='flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-1 py-1 scrollbar-none'>
              {chatMessages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-[18px] px-4 py-2.5 text-xs md:text-sm font-light leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#2E2E33] text-white rounded-tr-xs' 
                      : 'bg-[#F2F0EF] text-gray-800 rounded-tl-xs'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between pt-2 border-t border-gray-50 text-[10px] text-gray-400'>
              <span className='flex items-center gap-1'>
                powered by <span className='font-medium text-gray-500'>HireReady</span>
              </span>
              <span className='text-right max-w-[70%] font-light leading-tight'>
                AI can make mistakes. By continuing, you agree to our <a href="#" className='underline hover:text-gray-600'>Privacy Policy</a>
              </span>
            </div>
          </div>
        )}

        {/* Input Bar and Quick Chips */}
        <div className='w-full bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-[28px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] p-2 flex flex-col gap-2 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-gray-300/80'>
          
          {/* Quick Suggestions Chips (Visible when chat is open or input is focused) */}
          {isChatOpen && (
            <div className='flex flex-wrap gap-1.5 px-2 pt-1 pb-1 border-b border-gray-50'>
              {[
                "What does HireReady do?",
                "Can I see a demo?",
                "How does pricing work?"
              ].map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChatSubmit(chip)}
                  className='px-3.5 py-1.5 rounded-full border border-gray-200/80 hover:bg-gray-50 hover:border-gray-300 transition text-[11px] text-gray-700 font-medium cursor-pointer active:scale-95'
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Actual Input Row */}
          <div className='flex items-center gap-2 w-full'>
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask me anything..." 
              className='flex-1 pl-4 pr-2 py-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-hidden'
              onFocus={() => setIsChatOpen(true)} // Auto-open chat display on focus
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleChatSubmit();
                }
              }}
            />
            <button 
              onClick={() => handleChatSubmit()}
              className='w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer active:scale-95 shrink-0'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
