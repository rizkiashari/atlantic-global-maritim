import React from 'react'
import HeadPage from './HeadPage'
import ImageContent from './ImageContent'
import LifeJacket from '../assets/images/service/life/life-jacket.webp'
import WorkVest from '../assets/images/service/life/work-vest.webp'
import Inflatable from '../assets/images/service/life/inflatable.webp'
import LifeLED from '../assets/images/service/life/led.webp'
import Life1 from '../assets/images/service/life/life-1.webp'
import Life2 from '../assets/images/service/life/life-2.webp'
import Life3 from '../assets/images/service/life/life-3.webp'
import Life4 from '../assets/images/service/life/life-4.webp'
import Life5 from '../assets/images/service/life/life-5.webp'
import Life6 from '../assets/images/service/life/life-6.webp'
import Life7 from '../assets/images/service/life/life-7.webp'
import Life8 from '../assets/images/service/life/life-8.webp'
import Life9 from '../assets/images/service/life/life-9.webp'
import Life10 from '../assets/images/service/life/life-10.webp'
import Life11 from '../assets/images/service/life/life-11.webp'
import Life12 from '../assets/images/service/life/life-12.webp'
import Life13 from '../assets/images/service/life/life-13.webp'
import Life14 from '../assets/images/service/life/life-14.webp'
import Life15 from '../assets/images/service/life/life-15.webp'
import Life16 from '../assets/images/service/life/life-16.webp'

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
      <div className='container md:mt-10 mt-4'>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-7 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={LifeJacket} isText text='Life Jacket' />
          <ImageContent image={WorkVest} isText text='Work Vest' />
          <ImageContent
            image={Inflatable}
            isText
            text='Inflatable Life Jacket'
          />
          <ImageContent image={LifeLED} isText text='Life Jacket LED' />
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:px-0 px-4 md:mb-12 mb-5 justify-center items-center'>
          <ImageContent image={Life1} />
          <ImageContent image={Life2} />
          <ImageContent image={Life3} />
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:px-0 px-4 md:mb-12 mb-5 justify-center items-center'>
          <ImageContent image={Life4} />
          <ImageContent image={Life5} />
          <ImageContent image={Life6} />
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:px-0 px-4 md:mb-12 mb-5 justify-center items-center'>
          <ImageContent image={Life7} />
          <ImageContent image={Life8} />
          <ImageContent image={Life9} />
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:px-0 px-4 md:mb-12 mb-5 justify-center items-center'>
          <ImageContent image={Life10} />
          <ImageContent image={Life11} />
          <ImageContent image={Life12} />
        </div>
        <div className='grid grid-cols-2 md:gap-8 gap-4 md:px-0 px-4 md:mb-12 mb-5 justify-center items-center'>
          <img
            src={Life13}
            alt='Life 13'
            className='object-cover w-full h-full'
          />
          <img
            src={Life14}
            alt='Life 14'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='grid grid-cols-2 md:gap-8 gap-4 md:px-0 px-4 md:mb-12 mb-5 justify-center items-center'>
          <img src={Life15} alt='Life 15' className='w-full h-full' />
          <img
            src={Life16}
            alt='Life 16'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </>
  )
}

export default LifeSaving
