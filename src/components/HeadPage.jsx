import React from 'react'

const HeadPage = ({ title }) => {
  return (
    <div className='flex items-center justify-center mt-14'>
      <div className='w-1/3'>
        <div className='bg-[#ADADF5] h-5'></div>
        <div className='bg-[#1616A3] h-5'></div>
      </div>
      <p className='text-primary w-1/3 text-center text-base md:text-base lg:text-2xl xl:text-3xl font-semibold'>
        {title}
      </p>
      <div className='w-1/3'>
        <div className='bg-[#ADADF5] h-5'></div>
        <div className='bg-[#1616A3] h-5'></div>
      </div>
    </div>
  )
}

export default HeadPage
