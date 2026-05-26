import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App';
import Step3Report from '../components/Step3Report';
import { FaShareAlt, FaCheck } from 'react-icons/fa';

function InterviewReport() {
  const {id} = useParams()
  const [report, setReport] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(()=>{
    const fetchReport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id , {withCredentials:true})
        setReport(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReport()
  },[])

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/shared-report/${id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading Report...</p>
      </div>
    );
  }

  return (
    <div className='relative'>
      <button
        onClick={handleShare}
        className='fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg transition font-semibold text-sm'>
        {copied ? <FaCheck /> : <FaShareAlt />}
        {copied ? "Link Copied!" : "Share Report"}
      </button>
      <Step3Report report={report}/>
    </div>
  )
}

export default InterviewReport
