import React from 'react'

const Button = ({children}) => {
  return (
    <div className='bg-[#4caca7] text-center dark:bg-[#0f1824] dark:text-white hover:bg-yellow-300 hover:text-black uppercase  text-lg py-2 px-3 transition-all duration-300 font-semibold rounded-md'>
      {children}
    </div>
  )
}

export default Button
