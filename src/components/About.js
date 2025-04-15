import React from 'react'
import About2 from "../assets/About2.png"

const About = () => {
  const config = {
    line1 : 'Wanna know who Iam?',
    line2 : 'Im a FullStack Developer.Im proficient in FrontEnd Technologies like HTML, CSS, Tailwind CSS, Javascript, React',
    line3: 'This Personal Portfolio was built using React and Tailwind CSS. I also have knowledge in BackEnd Technologies like Node.js,Express.js,MongoDB,Mongoose and tools like Postman and axios.'
  }
  return (
    <section id ='about' className='flex flex-col md:flex-row bg-secondary px-5 py-10'>
      <div className='md:w-1/2 py-5'>
        <img src = {About2} alt = "About_Image" className="h-[400px] w-auto mx-auto"/>
      </div>
      <div className='w-full md:w-1/2 flex justify-center'>
      <div className='md:flex flex-col justify-center text-white px-4'>
        <h1 className='text-4xl border-b-4 border-white mb-5 w-[180px] font-bold'>About Me </h1>
        <p className='pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
        <p className='pb-5'>{config.line3}</p>
        </div>
      </div>
    </section>
  )
}

export default About

