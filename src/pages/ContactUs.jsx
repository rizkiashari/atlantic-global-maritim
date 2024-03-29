import React, { useEffect } from 'react'
import Header from '../components/Header'
import EmailContact from '../components/EmailContact'
import Footer from '../components/Footer'

const ContactUs = () => {
  const lang = localStorage.getItem('lang')

  useEffect(() => {
    document.title =
      'Atlantic Global Maritim - One Stop Solution for Ship Safety | Contact Us'
  }, [])

  return (
    <>
      <Header />
      <div className='hero hero-contactus flex justify-center'>
        <div className='container h-fit pb-2'>
          <h3 className='text-white text-base md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
            {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
          </h3>
        </div>
      </div>
      <EmailContact />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.203694413507!2d107.08160961476925!3d-6.236860695485393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f6e69c018f9%3A0x751b2e0d978f9478!2sPermata%20Regensi!5e0!3m2!1sid!2sid!4v1660484175906!5m2!1sid!2sid'
        title='map contact us'
        className='border-none w-full h-[80vh]'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <Footer />
    </>
  )
}

export default ContactUs
