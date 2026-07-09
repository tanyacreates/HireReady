import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Auth({isModel = false, onClose = null}) {
    const dispatch = useDispatch()

    const handleGoogleAuth = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const name = response.user.displayName
            const email = response.user.email
            const result = await axios.post(ServerUrl + "/api/auth/google", { name, email }, { withCredentials: true })
            dispatch(setUserData(result.data))
        } catch (error) {
            console.log(error)
            dispatch(setUserData(null))
        }
    }

  return (
    <div className={`
      w-full flex items-center justify-center
      ${isModel ? "" : "min-h-screen bg-[#FCFAF7] px-6 py-20"}
    `}>
        <motion.div
        initial={{opacity:0 , y:20}}
        animate={{opacity:1 , y:0}}
        transition={{duration:0.4, ease: "easeOut"}}
        className={`
          w-full relative
          ${isModel ? "max-w-md p-8 md:p-10 rounded-[32px]" : "max-w-md p-10 md:p-12 rounded-[32px]"}
          bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center
        `}>
            {/* Close Button (for Modal Mode) */}
            {isModel && onClose && (
                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-50 rounded-full cursor-pointer focus:outline-hidden"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            )}

            {/* Logo Block */}
            <div className='flex items-center gap-3 mb-8 mt-2'>
                <div className='bg-black text-white p-2 rounded-xl flex items-center justify-center shadow-xs'>
                    <BsRobot size={18}/>
                </div>
                <span className='font-serif font-semibold text-lg text-gray-900 tracking-tight'>HireReady</span>
            </div>

            {/* Title */}
            <h1 className='text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 leading-tight mb-5 flex flex-col items-center gap-3'>
                Continue with
                <span className='bg-blue-50/80 border border-blue-100 text-blue-600 text-lg md:text-xl px-4.5 py-1.5 rounded-full inline-flex items-center gap-2 font-semibold shadow-3xs font-sans'>
                    <IoSparkles className="text-blue-500 w-4 h-4"/>
                    AI Smart Interview
                </span>
            </h1>

            {/* Subtext */}
            <p className='text-gray-500 text-center text-xs md:text-sm font-light leading-relaxed max-w-xs mb-8'>
                Sign in to start AI-powered mock interviews, track your progress, and unlock detailed performance insights.
            </p>

            {/* Google Button */}
            <motion.button
            onClick={handleGoogleAuth}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full flex items-center justify-center gap-3 py-3 bg-black hover:opacity-90 text-white rounded-full transition shadow-xs cursor-pointer text-sm font-semibold'>
                <FcGoogle size={20}/>
                Continue with Google
            </motion.button>
        </motion.div>
    </div>
  )
}

export default Auth
