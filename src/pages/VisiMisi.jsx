import React, { useEffect } from 'react'
import Header from '../components/Header'

const VisiMisi = () => {
  const lang = localStorage.getItem('lang')

  console.log(lang !== undefined && lang)

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Visi & Misi'
  }, [])

  return (
    <>
      <Header />
      <div className='px-2 py-2 sm:px-4 container'>VisiMisi</div>
    </>
  )
}

export default VisiMisi
