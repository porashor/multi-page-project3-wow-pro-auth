import React from 'react'
import Button from './Button';
import banner from "../assets/banner/porashor.jpg" 
const Hero = () => {
  return (
    <div className='bg-[#e6e6e6] py-10 dark:bg-[#131313] text-black dark:text-white'>
      <div className='w-[80%] mx-auto min-h-[550px] grid md:grid-cols-2 items-center justify-between gap-5'>
        {/* textarea for banner  */}
        <div className='flex flex-col items-center md:items-start gap-2 order-2 md:order-1'>
            <h1 className='sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#4caca7] py-3'>Am a Professional</h1>
            {/* re-typing area */}
            <h1 className='sm:text-3xl md:text-4xl lg:text-5xl font-bold '>Web developer</h1>
            {/* paragraph area */}
            <p className='w-[80%] text-slate-500 py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab excepturi doloribus et saepe illo optio, nam cumque eveniet commodi!
            </p>
            <Button>Register</Button>
        </div>
        {/* image area for me  */}
        <div className='flex items-center justify-center order-1 md:order-2'>
            <img src={banner} alt="" className='w-[300px] h-[320px] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Hero
