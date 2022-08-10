import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeadOne from '../assets/images/home/head-1.webp'
import HeadTwo from '../assets/images/home/head-2.webp'
import HeadThree from '../assets/images/home/head-3.webp'
import HeadAbout from '../assets/images/home/home-about.webp'
import HeadVisi from '../assets/images/home/home-visi.webp'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const Home = () => {
  const lang = localStorage.getItem('lang')

  console.log(lang)

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Home'
  }, [])

  return (
    <>
      <Header />
      <div className='hero hero-home mb-3'>
        <div className='md:pt-16 sm:pt-12 pt-5 overflow-y-hidden container  md:px-0 px-4'>
          <p className='head-text'>One-stop Solution for Ship Safety</p>
          <h1 className='font-semibold text-base  md:text-2xl lg:text-4xl 2xl:text-5xl md:mt-6 my-3 md:mb-12 max-w-2xl w-full leading-normal'>
            We Are Professional Marine Company in Indonesia
          </h1>
          <p className='paragraf'>
            <b className='text-primary'>a specialist and experienced company</b>{' '}
            in Service, Maintenance, Installation and Repair of the
            Fire-Fighting Appliances, Life-Saving Appliances, Lifeboat/Rescue
            boat and others safety equipments.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full md:mb-24 mb-8 sm:mb-12'>
        <img src={HeadOne} alt='head-1' className='w-1/3' />
        <img src={HeadTwo} alt='head-2' className='w-1/3' />
        <img src={HeadThree} alt='head-1' className='w-1/3' />
      </div>
      <div className='flex justify-between gap-6'>
        <img src={HeadAbout} alt='head-1' className='w-1/3 object-cover' />
        <div className='relative'>
          <div className='w-3/5 absolute top-20 hidden lg:block xl:block -z-10 right-0'>
            <div className='bg-[#ADADF5] h-5'></div>
            <div className='bg-[#1616A3] h-5'></div>
          </div>
          <p className='head-text'>About Us</p>
          <h3 className='heading'>PT. Atlantic Global Maritim is</h3>
          <p className='paragraf md:mb-5 mb-3'>
            a specialist and experienced company in Service, Maintenance,
            Installation and Repair of the Fire-Fighting Appliances, Life-Saving
            Appliances, Lifeboat/Rescue boat and others safety equipments.
          </p>
          <p className='paragraf'>
            We also take responsible to Service Maintenance, Repair of the Fire
            Alarm Detection System, Electricity, Diesel Engine, Lightning
            Protection and Others System.
          </p>
        </div>
      </div>
      <div className='w-[15rem] absolute hidden lg:block xl:block -z-10 top-[112rem] left-0'>
        <div className='bg-[#ADADF5] h-5'></div>
        <div className='bg-[#1616A3] h-5'></div>
      </div>
      <div className='w-[15rem] absolute hidden lg:block xl:block -z-10 top-[126rem] left-0'>
        <div className='bg-[#ADADF5] h-5'></div>
        <div className='bg-[#1616A3] h-5'></div>
      </div>
      <div className='container mt-12 md:mb-14 mb-6 overflow-y-hidden flex justify-between'>
        <div>
          <p className='head-text'>Our Vision & Mission</p>
          <h3 className='heading'>Vision</h3>
          <p className='paragraf mt-2 mb-12'>
            Prioritize business activities are integrated and programmed to
            provide optimum results and satisfaction to the consumer, with good
            relations to all consumers.
          </p>
          <h3 className='heading'>Mision</h3>
          <p className='paragraf mt-2'>
            <b className='text-primary'>PT. Atlantic Global Maritim,</b> a
            general trading company in the field of maritime services in a
            professional and organized with the support of experts, and
            dedicated and disciplined to produce the best quality
          </p>
        </div>
        <img src={HeadVisi} alt='head-1' className='w-1/3 object-cover' />
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
