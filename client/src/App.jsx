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
import { auth, provider } from './utils/firebase'

export const ServerUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:8000"

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    // Handle Google redirect result (fires after signInWithRedirect)
    getRedirectResult(auth).then(async (result) => {
      if (result) {
        const name = result.user.displayName
        const email = result.user.email
        const res = await axios.post(ServerUrl + "/api/auth/google", { name, email }, { withCredentials: true })
        dispatch(setUserData(res.data))
      }
    }).catch((err) => {
      console.log("Redirect auth error:", err)
    })

    // Check existing session
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true})
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }
    getUser()

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
