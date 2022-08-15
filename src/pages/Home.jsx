import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeadOne from '../assets/images/home/head-1.webp'
import HeadTwo from '../assets/images/home/head-2.webp'
import HeadThree from '../assets/images/home/head-3.webp'
import HeadAbout from '../assets/images/home/home-about.webp'
import HeadVisi from '../assets/images/home/home-visi.webp'
import Footer from '../components/Footer'
import EmailContact from '../components/EmailContact'

const Home = () => {
  const lang = localStorage.getItem('lang')

  useEffect(() => {
    document.title = 'Atlantic Global Maritim | Home'
  }, [])

  return (
    <>
      <Header />
      <div className='hero hero-home mb-3'>
        <div className='md:pt-16 sm:pt-12 pt-5 overflow-y-hidden container px-4'>
          <p className='head-text'>
            {lang === 'id'
              ? 'Solusi Satu Atap untuk Keselamatan Kapal'
              : 'One-stop Solution for Ship Safety'}
          </p>
          <h1 className='font-semibold text-base  md:text-2xl lg:text-4xl 2xl:text-5xl md:mt-6 my-3 md:mb-12 max-w-2xl w-full leading-normal'>
            {lang === 'id'
              ? 'Kami Adalah Perusahaan Kelautan Profesional di Indonesia'
              : 'We Are Professional Marine Company in Indonesia'}
          </h1>
          <p className='paragraf'>
            <b className='text-primary'>
              {lang === 'id'
                ? 'sebuah perusahaan spesialis dan berpengalaman '
                : 'a specialist and experienced company '}
            </b>
            {lang === 'id'
              ? 'di bidang Pelayanan, Pemeliharaan, Pemasangan dan Perbaikan Alat Pemadam Kebakaran, Alat Penyelamat Jiwa, Sekoci/Perahu Penyelamat dan peralatan keselamatan lainnya.'
              : 'in Service, Maintenance, Installation and Repair of the Fire-Fighting Appliances, Life-Saving Appliances, Lifeboat/Rescue boat and others safety equipments.'}
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full md:mb-24 mb-8 sm:mb-12'>
        <img src={HeadOne} alt='head-1' className='w-1/3' />
        <img src={HeadTwo} alt='head-2' className='w-1/3' />
        <img src={HeadThree} alt='head-1' className='w-1/3' />
      </div>
      <div
        className='flex justify-between gap-6 md:flex-row flex-col'
        id='about-us'
      >
        <img
          src={HeadAbout}
          alt='head-1'
          className='md:w-1/3 sm:w-2/3 w-full mx-auto md:px-0 px-4 object-cover'
        />
        <div className='relative'>
          <div className='w-3/5 absolute top-20 hidden lg:block xl:block -z-10 right-0'>
            <div className='bg-[#ADADF5] h-5'></div>
            <div className='bg-[#1616A3] h-5'></div>
          </div>
          <p className='head-text md:px-0 px-4'>
            {lang === 'id' ? 'Tentang kami' : 'About Us'}
          </p>
          <h3 className='heading md:px-0 px-4'>
            {lang === 'id'
              ? 'PT. Atlantic Global Maritim adalah'
              : 'PT. Atlantic Global Maritim is'}
          </h3>
          <p className='paragraf md:mb-5 mb-3 md:px-2 px-4'>
            {lang === 'id'
              ? ` sebuah perusahaan spesialis dan berpengalaman di bidang Jasa, Pemeliharaan, Pemasangan dan Perbaikan Alat Pemadam Kebakaran, Alat Penyelamat Jiwa, Sekoci/Perahu Penyelamat dan peralatan keselamatan lainnya.`
              : ` a specialist and experienced company in Service, Maintenance,
            Installation and Repair of the Fire-Fighting Appliances, Life-Saving
            Appliances, Lifeboat/Rescue boat and others safety equipments.`}
          </p>
          <p className='paragraf md:px-2 px-4'>
            {lang === 'id'
              ? `Kami juga bertanggung jawab untuk Service Maintenance, Perbaikan Api
              Sistem Deteksi Alarm, Listrik, Mesin Diesel, Petir
              Sistem Proteksi dan Lainnya.`
              : `We also take responsible to Service Maintenance, Repair of the Fire
              Alarm Detection System, Electricity, Diesel Engine, Lightning
              Protection and Others System.`}
          </p>
        </div>
      </div>
      <div className='w-[15rem] absolute hidden lg:block xl:block -z-10 top-[112rem] left-0'>
        <div className='bg-[#ADADF5] h-5'></div>
        <div className='bg-[#1616A3] h-5'></div>
      </div>
      <div className='w-[15rem] absolute hidden lg:block xl:block -z-10 top-[126rem] left-0'>
        <div className='bg-[#ADADF5] h-5'></div>
        <div className='bg-[#1616A3] h-5'></div>
      </div>
      <div
        className='container mt-12 md:mb-14 mb-6 overflow-y-hidden flex justify-between flex-wrap'
        id='visi-misi'
      >
        <div>
          <p className='head-text'>
            {lang === 'id' ? 'Visi & Misi Kami' : 'Our Vision & Mission'}
          </p>
          <h3 className='heading'>{lang === 'id' ? 'Visi' : 'Vision'}</h3>
          <p className='paragraf mt-2 mb-12'>
            {lang === 'id'
              ? `Mengutamakan kegiatan usaha yang terintegrasi dan terprogram untuk memberikan hasil dan kepuasan yang optimal kepada konsumen, dengan hubungan dengan semua konsumen.`
              : `Prioritize business activities are integrated and programmed to provide optimum results and satisfaction to the consumer, with good relations to all consumers.`}
          </p>
          <h3 className='heading'>{lang === 'id' ? 'Misi' : 'Mision'}</h3>
          <p className='paragraf mt-2'>
            <b className='text-primary'>PT. Atlantic Global Maritim,</b> a
            {lang === 'id'
              ? `perusahaan perdagangan umum di bidang jasa maritim di a
              profesional dan terorganisir dengan dukungan tenaga ahli, dan
              berdedikasi dan disiplin untuk menghasilkan kualitas terbaik`
              : ` general trading company in the field of maritime services in a
              professional and organized with the support of experts, and
              dedicated and disciplined to produce the best quality`}
          </p>
        </div>
        <img
          src={HeadVisi}
          alt='head-1'
          className='md:w-1/3 sm:w-2/3 w-full mx-auto md:mt-0 mt-5 object-cover'
        />
      </div>
      <div className='mb-8'>
        <EmailContact />
      </div>
      <Footer />
    </>
  )
}

export default Home
