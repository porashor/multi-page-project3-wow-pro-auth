import React from 'react'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { navbar } from '../Data/Data'
const Foother = () => {
  return (
    <div className='bg-slate-900 py-10 text-white'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* Brand details area */}
            <div className='space-y-3'>
                <h1 className='text-2xl uppercase font-bold'>Wow Pro</h1>
                <p className='text-slate-400'>
                    All kind of Copyright reserevd by ParasharDxp
                </p>
                <div className='flex gap-2 text-2xl'>
                    <FaFacebook/>
                    <BsInstagram/>
                    <LiaLinkedin/>
                    <BsTelegram/>
                </div>
            </div>
            {/* main links */}
            <div>
                <h1 className='text-xl font-semibold'>Main Links</h1>
                <ul>
                    {
                        navbar.map((item, index)=>(
                            <li key={index}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* professional links */}
            <div>
            <h1 className='text-xl font-semibold'>Professional Links</h1>
                <ul>
                    {
                        navbar.map((item, index)=>(
                            <li key={index}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* search section */}
            <div className='space-y-5'>
                <h1 className='text-xl font-semibold'>search here what do you from here...</h1>
                <input type="search" className='w-full h-10 text-slate-900 px-3 outline-none bg-white/80 rounded-lg' placeholder='search here..' />
            </div>
        </div>
    </div>
  )
}

export default Foother
