import React from 'react'
import MyResume from "../assets/MyResume.jpg"

const Resume = () => {
  const config = {
    link : 'https://resume.io/resume-templates/simple'
  }
  return (
    <section id = "resume" className='flex flex-col md:flex-row bg-secondary px-5 py-10'>
      <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
        <img className = "h-[400px] w-300 mx-auto " src = {MyResume} />
      </div>
      <div className='w-full md:w-1/2 flex justify-left'>
      <div className='md:flex justify-center text-white px-4'>
        <h1 className='text-4xl py-5 border-b-4 border-white mb-5 w-[135px] font-bold'>Resume </h1>
        <p className='pb-5 flex flex-col'>You can view my resume <a className = "btn" href ={config.link} >Download</a></p>
        </div>
      </div>
    </section>
  )
}

export default Resume

