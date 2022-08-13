import React from 'react'
import LogoFooter from '../assets/icon/logo-footer.webp'
import EmailIcon from '../assets/icon/gmail-icon.webp'
import WebIcon from '../assets/icon/website.webp'

const Footer = () => {
  const lang = localStorage.getItem('lang')

  return (
    <div className='footer-hero md:px-14 px-6 md:py-6 py-4 text-white'>
      <img
        src={LogoFooter}
        className='w-40 h-36 object-cover mb-5'
        alt='Logo'
      />
      <div className='flex md:flex-wrap flex-nowrap md:flex-row sm:flex-row flex-col gap-5 justify-between items-start'>
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
          {/* Here Map */}
        </div>
      </div>
    </div>
  )
}

export default Footer
