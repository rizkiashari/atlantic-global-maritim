import React from 'react'
import HeadPage from './HeadPage'

const LifeSaving = () => {
  return (
    <>
      <div className='hero hero-life-saving flex justify-center'>
        <div className='container'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-5'>
            Life Saving Appliances
          </h3>
          <p className='text-white text-sm md:text-base lg:text-lg xl:text-xl max-w-4xl'>
            At Atlantic Global Maritim, we provide maintenance and repairs for
            lifeboats; rescue boats; and davit’s and which system.
          </p>
        </div>
      </div>
      <HeadPage title='Life Saving Appliances' />
    </>
  )
}

export default LifeSaving
