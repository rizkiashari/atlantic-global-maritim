import React, { useEffect } from 'react'
import Header from '../components/Header'

const Home = () => {
  const lang = localStorage.getItem('lang')

  console.log(lang)

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Home'
  }, [])

  return (
    <>
      <Header />
      <div className='bg'></div>
      <div className='px-2 py-2 5 sm:px-4 container'>Home</div>
    </>
  )
}

export default Home
