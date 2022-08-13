import React, { useEffect } from 'react'
import Header from '../components/Header'
import EmailContact from '../components/EmailContact'
import Footer from '../components/Footer'

const ContactUs = () => {
  const lang = localStorage.getItem('lang')

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Contact Us'
  }, [])

  return (
    <>
      <Header />
      <div className='hero hero-contactus flex justify-center'>
        <div className='container'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
            {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
          </h3>
        </div>
      </div>
      <EmailContact />
      <p>Google Map Here</p>
      <Footer />
    </>
  )
}

export default ContactUs
