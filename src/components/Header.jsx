import React from 'react'
import Logo from '../assets/images/logo.png'
import FlagEN from '../assets/icon/EN.png'
import FlagID from '../assets/icon/ID.png'

const Header = () => {
  return (
    <nav className='py-6'>
      <div className='container flex justify-between items-center'>
        <img src={Logo} alt='logo' className='w-52' />
        <div className='flex items-center justify-between'>
          <ul className='flex items-center justify-between'>
            <li className='text-nav-inActive px-4 py-2 mr-4'>Home</li>
            <li className='text-nav-inActive px-4 py-2 mr-4'>About Us</li>
            <li className='text-nav-inActive px-4 py-2 mr-4'>Visi & Mission</li>
            <li className='text-nav-inActive px-4 py-2 mr-4'>Services</li>
            <li className='text-nav-inActive px-4 py-2 mr-4'>Contact Us</li>
          </ul>
          <select className='ml-12'>
            <option value='en'>
              <img src={FlagEN} alt='flag-en' /> EN
            </option>
            <option value='id'>
              <img src={FlagID} className='rounded' alt='flag-en' /> ID
            </option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Header
