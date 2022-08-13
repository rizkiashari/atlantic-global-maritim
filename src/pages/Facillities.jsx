import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeadPage from '../components/HeadPage'
import ImageContent from '../components/ImageContent'
import Footer from '../components/Footer'
import Faci1 from '../assets/images/facilities/faci-1.webp'
import Faci2 from '../assets/images/facilities/faci-2.webp'
import Faci3 from '../assets/images/facilities/faci-3.webp'
import Faci4 from '../assets/images/facilities/faci-4.webp'
import Faci5 from '../assets/images/facilities/faci-5.webp'
import Faci6 from '../assets/images/facilities/faci-6.webp'
import Faci7 from '../assets/images/facilities/faci-7.webp'
import Faci8 from '../assets/images/facilities/faci-8.webp'
import Faci9 from '../assets/images/facilities/faci-9.webp'
import Faci10 from '../assets/images/facilities/faci-10.webp'
import Faci11 from '../assets/images/facilities/faci-11.webp'
import Faci12 from '../assets/images/facilities/faci-12.webp'
import Faci13 from '../assets/images/facilities/faci-13.webp'
import Faci14 from '../assets/images/facilities/faci-14.webp'
import Faci15 from '../assets/images/facilities/faci-15.webp'

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
      <div className='container mb-12 md:mt-10 mt-4'>
        <div className='flex justify-center gap-6 md:gap-10 md:flex-nowrap flex-wrap mb-10'>
          <div className='flex flex-col gap-6 md:gap-10'>
            <img
              src={Faci1}
              alt='Facilitas 1'
              className='w-full object-cover'
            />
            <div className='flex justify-center items-center flex-col'>
              <img
                src={Faci2}
                alt='Facilitas 4'
                className='w-full object-cover'
              />
              <p className='text-primary text-center font-semibold mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                Mesin Bubut 300 x 2000 MM
              </p>
            </div>
          </div>
          <div className='flex flex-col h-full'>
            <img
              src={Faci3}
              alt='Facilitas 3'
              className='w-full object-cover h-2/4'
            />
            <p className='text-primary text-center font-semibold mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
              Workshop
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <img src={Faci4} alt='Facilitas 5' className='w-full object-cover' />
          <img src={Faci5} alt='Facilitas 5' className='w-full object-cover' />
        </div>
        <p className='text-primary text-center font-semibold mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-10'>
          Mesin Bubut 500 x 3000 MM
        </p>
        <div className='grid grid-cols-2 gap-6 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Faci6} isText text='Mesin Bubut 800 x 2800 MM' />
          <ImageContent
            image={Faci7}
            isText
            text='Mesin Bubut 1000 x 3000 MM'
          />
        </div>
        <div className='grid grid-cols-4 gap-6 md:px-0 px-4 md:mb-12 mb-5'>
          <div className='col-span-2'>
            <ImageContent
              image={Faci8}
              isText
              text='Mesin Bubut 500 x 2000 MM'
            />
          </div>
          <ImageContent image={Faci9} isText text='Mesin Hobing Cap 1000 MM' />
          <ImageContent
            image={Faci10}
            isText
            text='Mesin Slotting Cap 800 MM'
          />
        </div>
        <div className='grid grid-cols-2 gap-6 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Faci11} isText text='Area Kerja Workshop' />
          <ImageContent
            image={Faci12}
            isText
            text='Mesin Bubut 300 x 1000 MM'
          />
        </div>
        <h3 className='text-primary text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-7 mt-5'>
          Area Kerja ( Workshop)
        </h3>
        <div className='mb-8'>
          <ImageContent image={Faci13} isText text='Sumur Electrolysis' />
        </div>
        <div className='mb-8'>
          <ImageContent
            image={Faci14}
            isText
            text='Mesin Bubut 300 x 1500 MM'
          />
        </div>
        <ImageContent image={Faci15} isText text='Hasil Hardcroming' />
      </div>
      <Footer />
    </>
  )
}

export default Facilities
