import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SharedReport() {
  const { id } = useParams()
  const [report, setReport] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/public-report/" + id)
        setReport(result.data)
      } catch (error) {
        setError(true)
      }
    }
    fetchReport()
  }, [])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-700">Report not found</p>
          <p className="text-gray-500 mt-2">This report may not exist or is not yet completed.</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading Report...</p>
      </div>
    );
  }

  const { finalScore = 0, confidence = 0, communication = 0, correctness = 0, questionWiseScore = [], role, experience, company } = report;
  const percentage = (finalScore / 10) * 100;

  const skills = [
    { label: "Confidence", value: confidence },
    { label: "Communication", value: communication },
    { label: "Correctness", value: correctness },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 px-4 py-10'>

      {/* Header */}
      <div className='max-w-4xl mx-auto mb-8 text-center'>
        <div className='inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-4 py-1 rounded-full mb-3'>
          Shared Interview Report
        </div>
        <h1 className='text-3xl font-bold text-gray-800'>AI Interview Performance</h1>
        <p className='text-gray-500 mt-2'>
          {role} · {experience} experience {company && company !== "General" ? `· ${company}` : ""}
        </p>
      </div>

      <div className='max-w-4xl mx-auto space-y-6'>

        {/* Score + Skills */}
        <div className='grid sm:grid-cols-2 gap-6'>

          <div className='bg-white rounded-2xl shadow p-8 text-center'>
            <h3 className='text-gray-500 mb-4 text-sm'>Overall Score</h3>
            <div className='w-24 h-24 mx-auto'>
              <CircularProgressbar
                value={percentage}
                text={`${finalScore}/10`}
                styles={buildStyles({
                  textSize: "18px",
                  pathColor: "#6366f1",
                  textColor: "#6366f1",
                  trailColor: "#e5e7eb",
                })}
              />
            </div>
          </div>

          <div className='bg-white rounded-2xl shadow p-8'>
            <h3 className='text-gray-700 font-semibold mb-5'>Skill Breakdown</h3>
            <div className='space-y-4'>
              {skills.map((s, i) => (
                <div key={i}>
                  <div className='flex justify-between mb-1 text-sm'>
                    <span className='text-gray-500'>{s.label}</span>
                    <span className='font-semibold text-indigo-600'>{s.value}</span>
                  </div>
                  <div className='bg-gray-200 h-2 rounded-full'>
                    <div className='bg-indigo-500 h-full rounded-full' style={{ width: `${s.value * 10}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question Breakdown */}
        <div className='bg-white rounded-2xl shadow p-8'>
          <h3 className='text-gray-700 font-semibold mb-6'>Question Breakdown</h3>
          <div className='space-y-6'>
            {questionWiseScore.map((q, i) => (
              <div key={i} className='bg-gray-50 p-5 rounded-xl border border-gray-200'>
                <div className='flex justify-between items-start mb-3'>
                  <div>
                    <p className='text-xs text-gray-500'>Question {i + 1}</p>
                    <p className='font-semibold text-gray-800 text-sm leading-relaxed'>{q.question}</p>
                  </div>
                  <div className='bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-bold text-xs ml-3'>
                    {q.score}/10
                  </div>
                </div>

                <div className='bg-indigo-50 border border-indigo-200 p-3 rounded-lg'>
                  <p className='text-xs text-indigo-600 font-semibold mb-1'>AI Feedback</p>
                  <p className='text-sm text-gray-700'>{q.feedback || "No feedback available."}</p>
                </div>

                {q.idealAnswer && q.idealAnswer.trim() !== "" && (
                  <div className='mt-3 bg-blue-50 border border-blue-200 p-3 rounded-lg'>
                    <p className='text-xs text-blue-600 font-semibold mb-1'>💡 Ideal Answer</p>
                    <p className='text-sm text-gray-700'>{q.idealAnswer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer branding */}
        <div className='text-center text-gray-500 text-sm pb-6'>
          Powered by <span className='font-semibold text-indigo-600'>HireReady</span>
        </div>
      </div>
    </div>
  )
}

export default SharedReport
