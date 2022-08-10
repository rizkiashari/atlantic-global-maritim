import React from 'react'
import IGIcon from '../assets/icon/ig-icon.webp'
import GmailIcon from '../assets/icon/gmail-icon.webp'
import LinkedLncon from '../assets/icon/linkedln-icon.webp'
import WaIcon from '../assets/icon/wa-icon.webp'

const ContactUs = () => {
  return (
    <div className='contact-us mb-3 py-5'>
      <div className='flex gap-6 w-full'>
        <div className='w-1/2'>
          <div className='bg-white mb-4 md:pl-40 pl-4 pr-4 rounded-tr-md rounded-br-md pt-10 pb-12'>
            <h3 className='text-secondary font-semibold xl:text-4xl lg:text-3xl md:text-xl text-base mb-2'>
              Want to cooperate with
            </h3>
            <h3 className='text-primary font-semibold xl:text-4xl lg:text-3xl md:text-xl text-base mb-5'>
              PT. Atlantic Global Maritim?
            </h3>
            <p className='text-secondary font-medium xl:text-xl lg:text-lg md:text-base text-sm'>
              Let's start collaborating to optimize ship safety and security.
            </p>
          </div>
          <div className='bg-white mb-4 md:pl-40 pl-4 pr-4 rounded-tr-md rounded-br-md py-4'>
            <p className='text-secondary font-medium xl:text-xl lg:text-lg md:text-base text-sm'>
              Please tell us what you need by filling out the side form.
            </p>
          </div>
          <div className='flex items-center justify-center xl:gap-x-16 lg:gap-x-12 md:gap-x-10 sm:gap-x-8 gap-x-5 mt-14'>
            <img
              src={IGIcon}
              alt='ig icon'
              className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
            />
            <img
              src={WaIcon}
              alt='wa icon'
              className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
            />
            <img
              src={GmailIcon}
              alt='gmail icon'
              className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
            />
            <img
              src={LinkedLncon}
              alt='linkedln icon'
              className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
            />
          </div>
        </div>
        <div className='bg-white w-1/2 px-4 rounded-tl-md rounded-bl-md pt-8 pb-10'>
          2
        </div>
      </div>
    </div>
  )
}

export default ContactUs
