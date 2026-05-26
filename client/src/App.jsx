import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'
import SharedReport from './pages/SharedReport'
import { getRedirectResult } from 'firebase/auth'
import { auth } from './utils/firebase'

export const ServerUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000"

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const initAuth = async () => {
      try {
        // Step 1: Check if returning from Google redirect
        const result = await getRedirectResult(auth)
        if (result) {
          // User just signed in via Google redirect — send to our backend
          const name = result.user.displayName
          const email = result.user.email
          const res = await axios.post(ServerUrl + "/api/auth/google", { name, email }, { withCredentials: true })
          dispatch(setUserData(res.data))
          return // Done — don't run getUser below
        }
      } catch (err) {
        console.log("Redirect result error:", err)
      }

      // Step 2: No redirect result — check existing session cookie
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true })
        dispatch(setUserData(result.data))
      } catch (error) {
        dispatch(setUserData(null))
      }
    }

    initAuth()
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>
      <Route path='/shared-report/:id' element={<SharedReport/>}/>
    </Routes>
  )
}

export default App
