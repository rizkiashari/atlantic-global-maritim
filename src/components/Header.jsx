import React, { useState } from 'react'
import Logo from '../assets/images/logo.webp'
import FlagEN from '../assets/icon/EN.webp'
import FlagID from '../assets/icon/ID.webp'
import { Dropdown, Navbar } from 'flowbite-react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const currentRoute = useLocation().pathname
  const [language, setLanguage] = useState(localStorage.getItem('lang'))

  return (
    <div className='py-4'>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href='/'>
          <img src={Logo} alt='logo' className='md:w-52 sm:w-40 w-full' />
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Dropdown
            label={
              <p className='flex gap-3 items-center font-poppins text-primary'>
                <img
                  src={language === 'en' ? FlagEN : FlagID}
                  alt='flag-en'
                  className={`${language === 'en' ? 'w-7 h-5' : 'w-8 h-5'}`}
                />
                {language === 'en' ? 'EN' : 'ID'}
              </p>
            }
            color='white'
          >
            <Dropdown.Item
              onClick={() => {
                setLanguage(localStorage.setItem('lang', 'en'))
                window.location.reload()
              }}
            >
              <p className='flex gap-3 items-center font-poppins text-primary'>
                <img src={FlagEN} alt='flag-en' className='w-7 h-5' />
                EN
              </p>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setLanguage(localStorage.setItem('lang', 'id'))
                window.location.reload()
              }}
            >
              <p className='flex gap-3 items-center font-poppins text-primary'>
                <img src={FlagID} alt='flag-en' className='w-7 h-5' />
                ID
              </p>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href='/'>
            <p
              className={`${
                currentRoute === '/'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
              } font-poppins pb-2`}
            >
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link href='/#about-us'>
            <p
              className={`${
                currentRoute === '/#about-us'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
              } font-poppins pb-2`}
            >
              About Us
            </p>
          </Navbar.Link>
          <Navbar.Link href='/#visi-misi'>
            <p
              className={`${
                currentRoute === '/#visi-misi'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
              } font-poppins pb-2`}
            >
              Visi & Mission
            </p>
          </Navbar.Link>
          <Navbar.Link href='/services'>
            <p
              className={`${
                currentRoute === '/services' ||
                currentRoute === '/services/repair-docking' ||
                currentRoute === '/services/services-equipment' ||
                currentRoute === '/services/life-saving'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
              } font-poppins pb-2`}
            >
              Services
            </p>
          </Navbar.Link>
          <Navbar.Link href='/facilities'>
            <p
              className={`${
                currentRoute === '/facilities'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
              } font-poppins pb-2`}
            >
              Facilities
            </p>
          </Navbar.Link>
          <Navbar.Link href='/contact-us'>
            <p
              className={`${
                currentRoute === '/contact-us'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
              } font-poppins pb-2`}
            >
              Contact Us
            </p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
