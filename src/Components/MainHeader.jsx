import React from 'react'

const MainHeader = ({children}) => {
  return (
    <div className='text-center text-3xl md:text-4xl font-semibold py-10'>
      {children}
    </div>
  )
}

export default MainHeader
