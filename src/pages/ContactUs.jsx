import React, { useEffect } from 'react'
import Header from '../components/Header'

const ContactUs = () => {
  const lang = localStorage.getItem('lang')

  console.log(lang)

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Contact Us'
  }, [])

  return (
    <>
      <Header />
      <div className='px-2 py-2 sm:px-4 container'>Contact Us</div>
    </>
  )
}

export default ContactUs
