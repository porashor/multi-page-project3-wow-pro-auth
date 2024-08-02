import React from 'react'
import MainHeader from '../MainHeader'
import { faq } from '../../Data/Data'

const Faq = () => {
  return (
    <div className='w-[80%] mx-auto py-10'>
      <MainHeader>
        Some most Frequently ask questions
      </MainHeader>
      <div className='space-y-5'>
        {faq.map((item, index)=>(
            <div key={index} className='space-y-2'>
                <div className='text-red-600 font-bold text-2xl'>
                    Question: {item.ques}
                </div>
                <div className='text-green-500 font-bold text-xl'>
                    Answer: {item.ans}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
