import React from 'react'
import Logo from '../assets/images/logo.png'
import FlagEN from '../assets/icon/EN.png'
import FlagID from '../assets/icon/ID.png'
import { Dropdown, Navbar } from 'flowbite-react'

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='/'>
        <img src={Logo} alt='logo' className='w-52' />
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Dropdown
          label={
            <p className='flex gap-3 items-center'>
              <img src={FlagEN} alt='flag-en' className='w-7 h-5' />
              EN
            </p>
          }
          color='white'
        >
          <Dropdown.Item>
            <p className='flex gap-3 items-center'>
              <img src={FlagEN} alt='flag-en' className='w-7 h-5' />
              EN
            </p>
          </Dropdown.Item>
          <Dropdown.Item>
            <p className='flex gap-3 items-center'>
              <img src={FlagID} alt='flag-en' className='w-7 h-5' />
              ID
            </p>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='/' active={true}>
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href='/about-us'>
          <p className='text-nav-inActive'>About Us</p>
        </Navbar.Link>
        <Navbar.Link href='/visi-misi'>
          <p className='text-nav-inActive'>Visi & Mission</p>
        </Navbar.Link>
        <Navbar.Link href='/services'>
          <p className='text-nav-inActive'>Services</p>
        </Navbar.Link>
        <Navbar.Link href='/facilities'>
          <p className='text-nav-inActive'>Facilities</p>
        </Navbar.Link>
        <Navbar.Link href='/contact-us'>
          <p className='text-nav-inActive'>Contact Us</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
