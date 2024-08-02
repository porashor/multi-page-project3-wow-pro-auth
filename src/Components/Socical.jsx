import React from 'react'
import PlayStore from "../assets/social/app_store.png"
import AppleStore from "../assets/social/play_store.png"
const Socical = () => {
  return (
    <div className='py-10'>
        <div className='w-[80%] mx-auto py-5 space-y-4'>
            {/* textarea */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900'>
                If you wanna connected with us and get any kinda offer, Just install our app service
            </h1>
            {/* image section */}
            <div className='flex items-end justify-start gap-5'>
                <img src={PlayStore} alt="" className='w-[180px]' />
                <img src={AppleStore} alt="" className='w-[180px]'  />
            </div>
        </div>
    </div>
  )
}

export default Socical
