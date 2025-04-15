import React from 'react'
import ecommerce_Website from '../assets/ecommerce_website.jpg'
import food_ecommerce from '../assets/food_ecommerce.jpg'
import blog_website from '../assets/website_blog.jpg'

const Projects = () => {
  const config = {
    project : [
      {
        image:ecommerce_Website,
        description : 'These are some of my works.I have built these projects using HTML, CSS, Javascript,React.And currently practising Backend Technologies like Node.js Express.js, MongoDB, Compass, POSTMAN',
        link : 'https://github/sneha/ecommerce'
      },
      {
        image:food_ecommerce,
        description : 'This Ecommerce Website is built using Mern stack',
        link : 'https://github/sneha/food'
      },
      {
        image:blog_website,
        description : 'This Blog Website is built using Fullstack',
        link : 'https://github/sneha/blog'
      }
    ]

  }
  return (
    <section id = "projects" className='flex flex-col px-5 py-20 justify-center bg-primary text-white'>
        <div className='w-full'>
        <div className='flex flex-col px-10 py-5 justify-center'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
        <p>    </p>
        </div>
        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5 justify-center'>
        {config.project.map((project)=>(<div className='relative'>
           <img className='h-[200px] w-[350px]' src = {project.image} alt = "Project_Image"  />
           <div className= 'project-desc'>
           <p className='text-center px-5 py-5'>{project.description}</p>
           <div className='flex justify-center'>
            <a className='btn' target='_blank' rel="noreferrer" href={project.link}>View Project</a>
           </div>
           </div>
           
           </div>
           ))}
        </div>
        </div>
       
    </section>
  )
}

export default Projects

