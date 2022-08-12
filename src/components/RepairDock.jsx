import React from 'react'
import HeadPage from './HeadPage'
import ImageContent from './ImageContent'
import Metal from '../assets/images/service/repair/metal.webp'
import Insitu from '../assets/images/service/repair/insitu.webp'
import Piston from '../assets/images/service/repair/piston.webp'
import Pump from '../assets/images/service/repair/pump.webp'
import Engine from '../assets/images/service/repair/overhaul-engine.webp'
import Pump2 from '../assets/images/service/repair/pump-2.webp'
import Volve from '../assets/images/service/repair/valve.webp'
import Boiler from '../assets/images/service/repair/boiler.webp'
import Turbo from '../assets/images/service/repair/turbo-charger.webp'
import Electric from '../assets/images/service/repair/electrical-system.webp'
import GasDetec from '../assets/images/service/repair/gas-detector.webp'
import Docking from '../assets/images/service/repair/docking.webp'
import Anchor from '../assets/images/service/repair/anchor-gipsi.webp'
import Plummer from '../assets/images/service/repair/plummer.webp'
import Expantion from '../assets/images/service/repair/expantion-joint.webp'
import GearWheels1 from '../assets/images/service/repair/gear-wheels.webp'
import GearWheels2 from '../assets/images/service/repair/gear-wheels-2.webp'
import GearWheels3 from '../assets/images/service/repair/geer-wheels-3.webp'
import FanBlade from '../assets/images/service/repair/fan-blade.webp'
import Boulders from '../assets/images/service/repair/boulders.webp'
import Casting1 from '../assets/images/service/repair/costing-1.webp'
import Casting2 from '../assets/images/service/repair/costing-2.webp'
import Capstans from '../assets/images/service/repair/capstans.webp'
import CoverWaters from '../assets/images/service/repair/cover-water.webp'
import Welding1 from '../assets/images/service/repair/welding-1.webp'
import Welding2 from '../assets/images/service/repair/welding-2.webp'
import Welding3 from '../assets/images/service/repair/welding-3.webp'
import Welding4 from '../assets/images/service/repair/welding-4.webp'
import Welding5 from '../assets/images/service/repair/welding-5.webp'

const RepairDock = () => {
  return (
    <>
      <div className='hero hero-repair flex justify-center'>
        <div className='container'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-5'>
            Repair and Docking
          </h3>
          <p className='text-white text-sm md:text-base lg:text-lg xl:text-xl max-w-4xl'>
            Shaft Bearing Gearbox, Engine Crankshaft, Pump Shaft, Drum Block,
            Plummer Block, Intermediate Bearing, Trust Bearing, Turbine and
            Generator Bearing.
          </p>
        </div>
      </div>
      <HeadPage title='Repair and Docking' />
      <div className='container md:mt-10 mt-4'>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Metal} isText text='Metal Spray' />
          <ImageContent image={Pump} isText text='Hydraulic Winch - Pump' />
          <ImageContent image={Piston} isText text='Piston Crown' />
          <ImageContent image={Insitu} isText text='Insitu Grinding' />
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Engine} isText text='Overhaul Engine' />
          <ImageContent image={Pump2} isText text='Pump' />
          <ImageContent image={Volve} isText text='Valve Maintenance' />
          <ImageContent image={Boiler} isText text='Boiler' />
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Turbo} isText text='Turbo Charger' />
          <ImageContent image={Electric} isText text='Electrical System' />
          <ImageContent image={GasDetec} isText text='Gas Detector' />
          <ImageContent image={Docking} isText text='Docking' />
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Anchor} isText text='Anchor - Gipsi' />
          <ImageContent image={Plummer} isText text='Plummer Bearing' />
          <ImageContent image={GearWheels1} isText text='Gear Wheels' />
          <ImageContent image={Expantion} isText text='Expantion Joint' />
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={GearWheels2} isText text='Gear Wheels' />
          <ImageContent image={GearWheels3} isText text='Gear Wheels' />
          <ImageContent image={FanBlade} isText text='Fan Blade' />
          <ImageContent image={Boulders} isText text='Boulders' />
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <ImageContent image={Casting1} isText text='Casting Coolers' />
          <ImageContent image={Casting2} isText text='Casting Coolers' />
          <ImageContent image={Capstans} isText text='Capstans' />
          <ImageContent
            image={CoverWaters}
            isText
            text='Cover Watertight Window'
          />
        </div>
        <h3 className='text-primary text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-7 mt-5'>
          Welding
        </h3>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <img
            src={Welding1}
            alt='welding 1'
            className='object-cover h-full w-full'
          />
          <img
            src={Welding3}
            alt='welding 2'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='grid  grid-cols-1 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <img
            src={Welding2}
            alt='welding 3'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:px-0 px-4 md:mb-12 mb-5'>
          <img
            src={Welding4}
            alt='welding 4'
            className='object-cover h-full w-full'
          />
          <img
            src={Welding5}
            alt='welding 5'
            className='object-cover h-full w-full'
          />
        </div>
      </div>
    </>
  )
}

export default RepairDock
