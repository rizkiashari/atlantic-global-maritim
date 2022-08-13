import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ImageContent from '../components/ImageContent'
import Metal from '../assets/images/service/repair/metal.webp'
import Insitu from '../assets/images/service/repair/insitu.webp'
import Piston from '../assets/images/service/repair/piston.webp'
import Pump from '../assets/images/service/repair/pump.webp'
import AutoPilot from '../assets/images/service/services/auto-pilot.webp'
import GPS from '../assets/images/service/services/gps.webp'
import FishFinder from '../assets/images/service/services/fish-finder.webp'
import Life1 from '../assets/images/service/life/life-1.webp'
import Life2 from '../assets/images/service/life/life-2.webp'
import Life3 from '../assets/images/service/life/life-3.webp'
import Life4 from '../assets/images/service/life/life-4.webp'
import Footer from '../components/Footer'
import HeadPage from '../components/HeadPage'

const Services = () => {
  const lang = localStorage.getItem('lang')
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Services'
  }, [])

  return (
    <>
      <Header />
      <div className='hero hero-services flex justify-center'>
        <div className='container'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-5'>
            {lang === 'id'
              ? 'Produk dan Layanan kami'
              : 'Our Product and Services'}
          </h3>
          <p className='text-white text-sm md:text-base lg:text-lg xl:text-xl'>
            {lang === 'id'
              ? 'Daftar produk dan layanan yang ditawarkan oleh kami'
              : 'List of products and services offered by us'}
          </p>
        </div>
      </div>
      <HeadPage title={lang === 'id' ? 'Layanan kami' : 'Our Services'} />
      <div className='container md:mt-10 mt-4'>
        <h3 className='text-primary text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-5'>
          Repair and Docking
        </h3>
        <div className='flex items-center md:mb-12 mb-8 justify-between'>
          <p className='font-medium text-secondary text-sm md:text-base md:max-w-4xl max-w-md w-full'>
            {lang === 'id'
              ? `Gearbox Bantalan Poros, Poros Engkol Mesin, Poros Pompa, Blok Drum,
              Blok Plummer, Bantalan Menengah, Bantalan Kepercayaan, Turbin dan
              Bantalan Genset.`
              : `Shaft Bearing Gearbox, Engine Crankshaft, Pump Shaft, Drum Block,
              Plummer Block, Intermediate Bearing, Trust Bearing, Turbine and
              Generator Bearing.`}
          </p>
          <p
            onClick={() => navigate('/services/repair-docking')}
            className='text-primary text-base md:text-lg font-semibold cursor-pointer max-w-fit w-full'
          >
            {lang === 'id' ? 'Lihat semua' : 'See all'}
          </p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Metal} isText text='Metal Spray' />
          <ImageContent image={Pump} isText text='Hydraulic Winch - Pump' />
          <ImageContent image={Piston} isText text='Piston Crown' />
          <ImageContent image={Insitu} isText text='Insitu Grinding' />
        </div>
        <div className='flex items-center justify-between mb-5'>
          <h3 className='text-primary text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-5'>
            Services Navigation Equipment
          </h3>
          <p
            onClick={() => navigate('/services/services-equipment')}
            className='text-primary text-base md:text-lg font-semibold cursor-pointer max-w-fit w-full'
          >
            {lang === 'id' ? 'Lihat semua' : 'See all'}
          </p>
        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:gap-12 gap-5 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={AutoPilot} isText text='Auto Pilot' />
          <ImageContent image={GPS} isText text='GPS Navigator' />
          <ImageContent image={FishFinder} isText text='Fish Finder' />
        </div>

        <h3 className='text-primary text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-5'>
          Life Saving Appliances
        </h3>
        <div className='flex items-center md:mb-12 mb-8 justify-between'>
          <p className='font-medium text-secondary text-sm md:text-base md:max-w-4xl max-w-md w-full'>
            {lang === 'id'
              ? `Di Atlantic Global Maritim, kami menyediakan perawatan dan perbaikan untuk
              sekoci; perahu penyelamat; dan davit dan sistem mana`
              : `At Atlantic Global Maritim, we provide maintenance and repairs for
              lifeboats; rescue boats; and davit’s and which system`}
          </p>
          <p
            onClick={() => navigate('/services/life-saving')}
            className='text-primary text-base md:text-lg font-semibold cursor-pointer max-w-fit w-full'
          >
            {lang === 'id' ? 'Lihat semua' : 'See all'}
          </p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-12 gap-5 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Life1} />
          <ImageContent image={Life2} />
          <ImageContent image={Life3} />
          <ImageContent image={Life4} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
