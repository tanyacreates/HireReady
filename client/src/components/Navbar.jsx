import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "motion/react"
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';
function Navbar() {
    const {userData} = useSelector((state)=>state.user)
    const [showCreditPopup,setShowCreditPopup] = useState(false)
    const [showUserPopup,setShowUserPopup] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAuth, setShowAuth] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
            dispatch(setUserData(null))
            setShowCreditPopup(false)
            setShowUserPopup(false)
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <header className='w-full bg-white flex justify-center px-6 md:px-12 py-4 z-40 relative'>
        <div className='w-full max-w-7xl flex justify-between items-center'>
            <div onClick={() => navigate("/")} className='flex items-center gap-2.5 cursor-pointer'>
                <div className='bg-black text-white p-1.5 rounded-lg flex items-center justify-center shadow-sm'>
                    <BsRobot size={15}/>
                </div>
                <span className='font-serif font-semibold text-lg md:text-xl tracking-tight text-black'>HireReady</span>
            </div>

            <div className='flex items-center gap-6 font-sans text-sm font-medium text-gray-700'>
                {/* Resources dropdown */}
                <div className='hidden md:flex items-center gap-1 cursor-pointer text-gray-500 hover:text-black transition'>
                    Resources
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {userData ? (
                    <div className='flex items-center gap-4 relative'>
                        <button onClick={()=>{
                            setShowCreditPopup(!showCreditPopup);
                            setShowUserPopup(false)
                        }} className='flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full hover:bg-gray-100 transition text-gray-700 text-xs font-medium'>
                            <BsCoin size={14} className="text-amber-500" />
                            {userData?.credits || 0} Credits
                        </button>

                        <div className='relative'>
                            <button
                            onClick={()=>{
                                setShowUserPopup(!showUserPopup);
                                setShowCreditPopup(false)
                            }} className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xs cursor-pointer hover:opacity-90 transition'>
                                {userData?.name.slice(0, 1).toUpperCase()}
                            </button>

                            {showUserPopup && (
                                <div className='absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50'>
                                    <p className='text-sm text-blue-500 font-medium mb-2'>{userData?.name}</p>
                                    <button onClick={()=>navigate("/history")} className='w-full text-left text-sm py-2 hover:text-black text-gray-500'>Interview History</button>
                                    <button onClick={handleLogout} className='w-full text-left text-sm py-2 flex items-center gap-2 text-red-500 border-t border-gray-100 mt-1 pt-2'>
                                        <HiOutlineLogout size={14}/>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>

                        {showCreditPopup && (
                            <div className='absolute right-0 top-10 mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded-xl p-5 z-50'>
                                <p className='text-xs text-gray-500 mb-4 leading-relaxed'>Need more credits to continue interviews?</p>
                                <button onClick={()=>navigate("/pricing")} className='w-full bg-black text-white py-2 rounded-lg text-xs font-medium'>Buy more credits</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='flex items-center gap-6'>
                        <button onClick={() => setShowAuth(true)} className='hover:text-black transition cursor-pointer font-medium text-gray-500 hover:text-black'>
                            Sign in
                        </button>
                        <button onClick={() => setShowAuth(true)} className='bg-black hover:opacity-90 text-white px-5 py-2 rounded-full font-medium text-xs tracking-wide transition cursor-pointer'>
                            Try for free
                        </button>
                    </div>
                )}
            </div>
        </div>

        {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
    </header>
  )
}

export default Navbar
