import React from 'react'
import About1 from '../assets/About1.png'
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
const Heroin = () => {
  const config = {
    subtitle : "Iam a FullStack Developer",
    social : {
      instagram :'www.instagram.com',
      email : 'sinegakaran@gmail.com',
      linkedin : 'https://www.linkedin.com/in/sneha-karan-2b519933a/'
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className=' w-full md:w-1/2 flex flex-col md:flex-row items-center'>
    <div className='md:w-1/2 flex flex-col '>
        <h1 className='text-white text-6xl font-heroin-font'>Hi, <br/>Im Sneha
        <p className='text-6xl'>{config.subtitle}</p></h1>
        <div className='flex px-10 py-10'>
            <a href = {config.social.instagram} className='pr-5 hover:text-white'><RiInstagramFill className= 'text-4xl' alt="
            instagram" /></a>
            <a href = {config.social.email} className='pr-5 hover:text-white'><MdEmail className= 'text-4xl'alt="Email" /></a>
            <a href = {config.social.linkedin} className='pr-5 hover:text-white'><IoLogoLinkedin className= 'text-4xl' alt = "linkedin" /></a>
        </div>
        </div>
        <img className="h-[300px] w-auto mx-auto justify-center" src = {About1} alt ="MyImage" />
        </div>
    </section>
  )
}

export default Heroin