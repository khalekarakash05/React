import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className="w-11/12 max-w-[1160px] flex flex-col sm:flex-row justify-between items-center h-full py-12 mx-auto gap-x-28 gap-y-8">
        <div>
            <h1 className='text-white text-2xl lg:text-[3rem] lg:leading-normal mt-[1rem] mb-[0.5rem] '>Flexible features to power your growth</h1>
            <p className='text-sm text-richblack-200 lg:text-[1.6rem] leading-10 mt-4'>
                Bring the power of automation to any process. 
                Visualize and build advanced workflows with custom logic, conditions, 
                and filters. No code needed.</p>
                <div className='mt-8'>
                    <Link to='/signup'>
                    <button className='bg-orange-500 text-white inline-block font-bold text-lg leading-6 text-center no-underline py-4 px-5 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-richblack-900 hover:shadow-lg'>
                        Sign up for free →</button>
                    </Link>
                </div>
        </div>
        <div>
            <img src={about} className='sm:rounded-full rounded-3xl  sm:h-[450px] sm:w-[1150px] '></img>
        </div>
    </div>
  )
}

export default About