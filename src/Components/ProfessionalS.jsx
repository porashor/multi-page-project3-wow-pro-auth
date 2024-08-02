import React from 'react'
import Post from "../assets/post/mobile-book.png"
import Button from './Button'
const ProfessionalS = () => {
  return (
    <div className='bg-[#e6e6e6] py-10 dark:bg-[#131313] text-black dark:text-white'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 my-10'>
            {/* image sections */}
            <div className='flex items-center justify-center'>
                <img src={Post} alt="" />
            </div>
            {/* textarea section */}
            <div className='space-y-4 flex flex-col gap-2 items-start'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                    Let's know how to complete any kinda course to success
                </h1>
                <p className='text-sm leading-6 text-slate-600 line-clamp-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum cupiditate eos deserunt quaerat! Porro animi perferendis magni, nam neque unde praesentium, distinctio quaerat at facilis iusto tempora architecto consequatur error dolore sunt delectus dignissimos dolorem exercitationem. Dignissimos repellat repudiandae libero reprehenderit quaerat. Dolore illum iste ducimus vero, quis tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt reprehenderit quidem porro ratione sint exercitationem eius omnis, illo cum.
                </p>
                <Button>Learn more...</Button>
            </div>
        </div>
    </div>
  )
}

export default ProfessionalS
