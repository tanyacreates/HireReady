import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react";
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Pricing() {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [loadingPlan, setLoadingPlan] = useState(null);
  const dispatch = useDispatch()

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      credits: 100,
      description: "Perfect for beginners starting interview preparation.",
      features: [
        "100 AI Interview Credits",
        "Basic Performance Report",
        "Voice Interview Access",
        "Limited History Tracking",
      ],
      default: true,
    },
    {
      id: "basic",
      name: "Starter Pack",
      price: "₹100",
      credits: 150,
      description: "Great for focused practice and skill improvement.",
      features: [
        "150 AI Interview Credits",
        "Detailed Feedback",
        "Performance Analytics",
        "Full Interview History",
      ],
    },
    {
      id: "pro",
      name: "Pro Pack",
      price: "₹500",
      credits: 650,
      description: "Best value for serious job preparation.",
      features: [
        "650 AI Interview Credits",
        "Advanced AI Feedback",
        "Skill Trend Analysis",
        "Priority AI Processing",
      ],
      badge: "Best Value",
    },
  ];

  const handlePayment = async (plan) => {
    try {
      if (!window.Razorpay) {
        alert("Razorpay SDK failed to load. Please refresh the page.");
        return;
      }

      setLoadingPlan(plan.id)

      const amount =  
      plan.id === "basic" ? 100 :
      plan.id === "pro" ? 500 : 0;

      const result = await axios.post(ServerUrl + "/api/payment/order" , {
        planId: plan.id,
        amount: amount,
        credits: plan.credits,
      },{withCredentials:true})
      

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: result.data.amount,
        currency: "INR",
        name: "HireReady",
        description: `${plan.name} - ${plan.credits} Credits`,
        order_id: result.data.id,

        handler:async function (response) {
          const verifypay = await axios.post(ServerUrl + "/api/payment/verify" ,response , {withCredentials:true})
          dispatch(setUserData(verifypay.data.user))

          alert("Payment Successful 🎉 Credits Added!");
          navigate("/")
        },
        theme:{
          color: "#000000",
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()

      setLoadingPlan(null);
    } catch (error) {
      console.log(error)
      setLoadingPlan(null);
      const msg = error?.response?.data?.message || error.message || "Something went wrong"
      alert(`Payment failed: ${msg}`)
    }
  }

  return (
    <div className='min-h-screen bg-[#FCFAF7] text-black font-sans antialiased relative overflow-hidden py-16 px-6'>
      
      {/* Background Aurora Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Container */}
      <div className='max-w-6xl mx-auto mb-16 flex items-start gap-6'>
        <button 
          onClick={() => navigate("/")} 
          className='mt-1 p-3 rounded-full bg-white border border-gray-200/80 hover:bg-gray-50 hover:border-gray-300 transition shrink-0 active:scale-95 shadow-2xs cursor-pointer'
          aria-label="Go back to homepage"
        >
          <FaArrowLeft className='text-gray-700 w-4 h-4' />
        </button>

        <div className="w-full flex flex-col gap-2">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 font-semibold tracking-tight leading-tight mt-2">
            Choose Your Plan
          </h1>
          <p className="text-gray-500 text-xs md:text-sm font-light tracking-wide max-w-xl">
            Flexible pricing options loaded with mock credits to match your interview preparation speed.
          </p>
        </div>
      </div>

      {/* Grid wrapper */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch'>
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id
          const isPro = plan.id === "pro"

          return (
            <motion.div 
              key={plan.id}
              whileHover={!plan.default && { y: -6 }}
              onClick={() => !plan.default && setSelectedPlan(plan.id)}
              className={`relative rounded-[32px] p-8 md:p-10 transition-all duration-300 border flex flex-col justify-between
                ${isPro
                  ? isSelected
                    ? "bg-black text-white border-amber-400 shadow-xl"
                    : "bg-[#18181B] text-white border-zinc-800 shadow-md hover:border-zinc-700"
                  : isSelected
                    ? "bg-white text-black border-black shadow-xl"
                    : "bg-white text-black border-gray-200/80 shadow-2xs hover:border-gray-400"
                }
                ${plan.default ? "cursor-default" : "cursor-pointer"}
              `}
            >
              <div>
                {/* Badge for Pro Tier */}
                {plan.badge && (
                  <div className="absolute top-6 right-6 bg-amber-400 text-black text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-2xs">
                    {plan.badge}
                  </div>
                )}

                {/* Default Tag for Free Tier */}
                {plan.default && (
                  <div className="absolute top-6 right-6 bg-gray-100 text-gray-500 text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-gray-200/40">
                    Default
                  </div>
                )}

                {/* Plan Name */}
                <h3 className={`text-xl font-semibold ${isPro ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                {/* Pricing / Credits Section */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`text-4xl md:text-5xl font-serif font-bold ${isPro ? 'text-amber-400' : 'text-black'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs ${isPro ? 'text-gray-400' : 'text-gray-500'} font-light`}>
                    / pack
                  </span>
                </div>

                <div className={`mt-2 text-xs font-semibold uppercase tracking-wider ${isPro ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {plan.credits} AI Credits Included
                </div>

                {/* Description */}
                <p className={`mt-4 text-xs md:text-sm leading-relaxed font-light ${isPro ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="mt-8 space-y-3.5">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                        ${isPro 
                          ? 'bg-amber-400/10 text-amber-400' 
                          : 'bg-black/5 text-black'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className={`text-xs md:text-sm font-light ${isPro ? 'text-zinc-200' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {!plan.default && (
                <button
                  disabled={loadingPlan === plan.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isSelected) {
                      setSelectedPlan(plan.id)
                    } else {
                      handlePayment(plan)
                    }
                  }} 
                  className={`w-full mt-10 py-3 rounded-full font-semibold transition active:scale-95 cursor-pointer text-xs uppercase tracking-wider
                    ${isPro
                      ? isSelected
                        ? "bg-amber-400 text-black hover:bg-amber-300 shadow-md"
                        : "bg-zinc-800 text-white hover:bg-zinc-700"
                      : isSelected
                        ? "bg-black text-white hover:bg-zinc-900 shadow-md"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {loadingPlan === plan.id
                    ? "Processing..."
                    : isSelected
                      ? "Proceed to Pay"
                      : "Select Plan"}
                </button>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Pricing
