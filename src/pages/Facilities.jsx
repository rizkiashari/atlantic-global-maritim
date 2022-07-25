import React, { useEffect } from 'react'
import Header from '../components/Header'

const Facilities = () => {
  const lang = localStorage.getItem('lang')

  console.log(lang)

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Facilities'
  }, [])

  return (
    <>
      <Header />
      <div className='px-2 py-2 sm:px-4 container'>Facilities</div>
    </>
  )
}

export default Facilities
