import React from 'react'
import HeadPage from './HeadPage'
import ImageContent from './ImageContent'
import AutoPilot from '../assets/images/service/services/auto-pilot.webp'
import GPS from '../assets/images/service/services/gps.webp'
import FishFinder from '../assets/images/service/services/fish-finder.webp'
import GpsPlotter from '../assets/images/service/services/gps-plotter.webp'
import GpsAis from '../assets/images/service/services/gps-ais.webp'
import GpsFish from '../assets/images/service/services/gps-fish.webp'
import MarineRadar from '../assets/images/service/services/marine-radar.webp'
import AisProduct from '../assets/images/service/services/ais-product.webp'
import VFHRadio from '../assets/images/service/services/vhf-radio.webp'

const ServicesEquipment = () => {
  const lang = localStorage.getItem('lang')

  return (
    <>
      <div className='hero hero-services-equipment flex justify-center'>
        <div className='container'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-5'>
            Services Navigation Equipment
          </h3>
        </div>
      </div>
      <HeadPage title='Services Navigation Equipment' />
      <div className='container md:mt-14 mt-6 mb-7'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={AutoPilot} isText text='Auto Pilot' />
          <ImageContent image={GPS} isText text='GPS Navigator' />
          <ImageContent image={FishFinder} isText text='Fish Finder' />
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={GpsPlotter} isText text='GPS Plotter' />
          <ImageContent image={GpsAis} isText text='GPS AIS Plotter' />
          <ImageContent image={GpsFish} isText text='GPS Fish Finder' />
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={MarineRadar} isText text='Marine Radar' />
          <ImageContent image={AisProduct} isText text='AIS Product' />
          <ImageContent image={VFHRadio} isText text='VHF Radio' />
        </div>
      </div>
    </>
  )
}

export default ServicesEquipment
