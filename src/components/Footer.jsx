/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import LogoFooter from '../assets/icon/logo-footer.webp'
import EmailIcon from '../assets/icon/gmail-icon.webp'
import WebIcon from '../assets/icon/website.webp'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const Footer = () => {
  const lang = localStorage.getItem('lang')

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  return (
    <div className='footer-hero md:px-14 px-6 md:py-6 py-4 text-white'>
      <img
        src={LogoFooter}
        className='w-40 h-36 object-cover mb-5'
        alt='Logo'
      />
      <div className='flex flex-wrap md:flex-nowrap md:flex-row sm:flex-row flex-col gap-5 justify-between items-start'>
        <div>
          <h3 className='text-white text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-5'>
            {lang === 'id' ? 'Alamat kami' : 'Our Address'}
          </h3>
          <p className='text-white text-xs md:text-base mb-10 md:max-w-md max-w-sm'>
            Perum Permata Regency Blok G4 No.8 Rt.006/Rw.022 Kel.Wanasari
            Kec.Cibitung, Kab.Bekasi Jawa Barat 17520
          </p>
          <div className='flex flex-col gap-2'>
            <p className='inline-flex items-center text-xs md:text-base'>
              <img
                src={EmailIcon}
                alt='email icon'
                className='mr-3 md:w-8 md:h-8 w-6 h-6'
              />
              Atlantic.global.maritim@gmail.com
            </p>
            <p className='inline-flex items-center text-xs md:text-base'>
              <img
                src={WebIcon}
                alt='email icon'
                className='mr-3 md:w-8 md:h-8 w-6 h-6'
              />
              www.Atlanticglobalmaritim.com
            </p>
          </div>
        </div>
        <div>
          <h3 className='text-white text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-5'>
            {lang === 'id' ? 'Peta Situs' : 'Site Map'}
          </h3>
          <ul className='list-disc ml-8'>
            <li className='text-white text-xs md:text-base mb-4'>
              <a href='/'>Home</a>
            </li>
            <li className='text-white text-xs md:text-base mb-4'>
              <a href='/#about-us'>About Us</a>
            </li>
            <li className='text-white text-xs md:text-base mb-4'>
              <a href='/#visi-misi'>Visi & Mission</a>
            </li>
            <li className='text-white text-xs md:text-base mb-4'>
              <a href='/services'>Services</a>
            </li>
            <li className='text-white text-xs md:text-base mb-4'>
              <a href='/contact-us'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-white text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-5'>
            {lang === 'id' ? 'Peta Lokasi' : ' Map Location'}
          </h3>
          {/* {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <GoogleMap
              zoom={10}
              center={{ lat: -6.236631390735907, lng: 107.08383048390209 }}
              mapContainerClassName='map-footer'
            >
              <Marker
                position={{ lat: -6.236631390735907, lng: 107.08383048390209 }}
              />
            </GoogleMap>
          )} */}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.203694413507!2d107.08160961476925!3d-6.236860695485393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f6e69c018f9%3A0x751b2e0d978f9478!2sPermata%20Regensi!5e0!3m2!1sid!2sid!4v1660484175906!5m2!1sid!2sid'
            title='map footer'
            className='border-none md:w-52 w-full h-full'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Footer
