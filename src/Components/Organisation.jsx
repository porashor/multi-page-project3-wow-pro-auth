import React from 'react'
import Heading from './Heading'
import { Community } from '../Data/Data'
import Button from "../Components/Button"
const Organisation = () => {
  return (
    <div className='py-10 w-[80%] mx-auto'>
      <Heading head={"Community skills"} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur voluptas rem esse. Expedita provident vero dolor fugiat, ipsam odit?'}/>
      <div className='grid col-span-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5'>
        {
          Community.map((item, index)=>(
            <div key={index}>
              <div className='border group hover:scale-105 transition-all duration-300 my-10 border-slate-300 rounded-lg min-h-[300px] flex flex-col items-center justify-center gap-2 bg-[#e6e6e6] py-10 dark:bg-[#131313] text-black dark:text-white'>
                <div className='text-5xl text-white group-hover:scale-105 bg-[#4caca7] p-3 rounded-full group-hover:-translate-y-20 transition-all duration-500'>
                  {item.icon}
                </div>
                <h1 className='text-2xl font-semibold text-center py-4 text-slate-800'>
                  {item.name}
                </h1>
                <p className='text-center text-sm line-clamp-2 text-slate-500 w-[80%]'>
                  {item.para}
                </p>
                <div className='py-2'>
                <Button>See more...</Button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Organisation
