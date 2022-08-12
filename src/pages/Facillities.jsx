import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeadPage from '../components/HeadPage'

const Facilities = () => {
  const lang = localStorage.getItem('lang')

  console.log(lang)
  useEffect(() => {
    document.title = 'Atlantic Global Maritim | About Us'
  }, [])

  return (
    <>
      <Header />
      <div className='hero hero-facilities flex justify-center'>
        <div className='container'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
            Our Facilities
          </h3>
        </div>
      </div>
      <HeadPage title='Our Facilities' />
    </>
  )
}

export default Facilities
