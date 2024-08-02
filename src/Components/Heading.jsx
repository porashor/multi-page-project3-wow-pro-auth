import React from 'react'

const Heading = ({head, para}) => {
  return (
    <div className='w-full md:w-[500px] mx-auto py-5 space-y-2'>
        <div className='text-center font-bold text-xl md:text-2xl lg:text-4xl text-slate-900 dark:text-slate-400 uppercase'>
            {head}
        </div>
        <div className='text-sm md:text-md lg:text-lg text-slate-500 text-center line-clamp-2'>
            {para}
        </div>
    </div>
  )
}

export default Heading
