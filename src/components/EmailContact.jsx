import React from 'react'
import IGIcon from '../assets/icon/ig-icon.webp'
import GmailIcon from '../assets/icon/gmail-icon.webp'
import LinkedLncon from '../assets/icon/linkedln-icon.webp'
import WaIcon from '../assets/icon/wa-icon.webp'

const EmailContact = () => {
  const lang = localStorage.getItem('lang')

  const [valueEmail, setValueEmail] = React.useState({
    email: '',
    fullname: '',
    company: '',
    services: '',
    message: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()

    const { email, fullname, company, services, message } = valueEmail

    window.location.href = `mailto:info@atlanticglobalmaritim.com?subject=${services}&body=Hi, I'm ${fullname}|${email}%0DFrom ${company}%0D${message}`
  }

  return (
    <div className='contact-us py-5'>
      <div className='flex gap-6 w-full flex-wrap md:flex-nowrap'>
        <div className='md:w-1/2 w-full'>
          <div className='bg-white mb-4 md:pl-40 pl-4 pr-4 rounded-tr-md rounded-br-md pt-10 pb-12'>
            <h3 className='text-secondary font-semibold xl:text-4xl lg:text-3xl md:text-xl text-base mb-2'>
              {lang === 'id'
                ? 'Ingin bekerja sama dengan'
                : 'Want to cooperate with'}
            </h3>
            <h3 className='text-primary font-semibold xl:text-4xl lg:text-3xl md:text-xl text-base mb-5'>
              PT. Atlantic Global Maritim?
            </h3>
            <p className='text-secondary font-medium xl:text-xl lg:text-lg md:text-base text-sm'>
              {lang === 'id'
                ? 'Mari mulai berkolaborasi untuk mengoptimalkan keselamatan dan keamanan kapal.'
                : "Let's start collaborating to optimize ship safety and security."}
            </p>
          </div>
          <div className='bg-white mb-4 md:pl-40 pl-4 pr-4 rounded-tr-md rounded-br-md py-4'>
            <p className='text-secondary font-medium xl:text-xl lg:text-lg md:text-base text-sm'>
              {lang === 'id'
                ? 'Tolong beritahu kami apa yang Anda butuhkan dengan mengisi formulir disamping.'
                : 'Please tell us what you need by filling out the side form.'}
            </p>
          </div>
          <div className='flex items-center justify-center xl:gap-x-16 lg:gap-x-12 md:gap-x-10 sm:gap-x-8 gap-x-5 mt-14'>
            <img
              src={IGIcon}
              alt='ig icon'
              className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
            />
            <a
              rel='noreferrer'
              target='_blank'
              href='https://api.whatsapp.com/send?phone=6281376000256'
            >
              <img
                src={WaIcon}
                alt='wa icon'
                className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
              />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='mailto:info@atlanticglobalmaritim.com'
            >
              <img
                src={GmailIcon}
                alt='gmail icon'
                className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
              />
            </a>
            <img
              src={LinkedLncon}
              alt='linkedln icon'
              className='md:w-16 md:h-16 h-10 w-10 bg-primary rounded-full p-2'
            />
          </div>
        </div>
        <div className='bg-white md:w-1/2 w-full md:px-6 px-4 rounded-tl-md rounded-bl-md md:pt-8 pt-6 md:pb-10 pb-8'>
          <form
            className='flex md:flex-nowrap flex-wrap gap-5'
            onSubmit={onSubmit}
          >
            <div className='w-full'>
              <h3 className='text-secondary font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-3'>
                {lang === 'id' ? 'Nama Lengkap' : 'Fullname'}
              </h3>
              <input
                name='fullname'
                type='text'
                onChange={(e) =>
                  setValueEmail({ ...valueEmail, fullname: e.target.value })
                }
                placeholder={
                  lang === 'id'
                    ? 'Tolong isi naam lengkap anda'
                    : 'Please input your fullname'
                }
                className='text-secondary border border-[#CCCCCC] rounded-md px-4 py-3 focus:ring-1 w-full focus:ring-secondary mb-5 md:text-base text-sm placeholder:text-[#CCCCCC]'
              />
              <h3 className='text-secondary font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-3'>
                Email
              </h3>
              <input
                name='email'
                type='email'
                onChange={(e) =>
                  setValueEmail({ ...valueEmail, email: e.target.value })
                }
                placeholder={
                  lang === 'id'
                    ? 'Tolong isi email anda'
                    : 'Please input your email'
                }
                className='text-secondary border border-[#CCCCCC] rounded-md px-4 py-3 focus:ring-1 w-full md:text-base text-sm focus:ring-secondary mb-5 placeholder:text-[#CCCCCC]'
              />
              <h3 className='text-secondary font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-3'>
                {lang === 'id' ? 'Perusahaan' : 'Company'}
              </h3>
              <input
                name='company'
                type='text'
                onChange={(e) =>
                  setValueEmail({ ...valueEmail, company: e.target.value })
                }
                placeholder={
                  lang === 'id'
                    ? 'Tolong isi nama perusahaan anda'
                    : 'Please input your company'
                }
                className='text-secondary border border-[#CCCCCC] rounded-md px-4 py-3 focus:ring-1 w-full md:text-base text-sm focus:ring-secondary mb-5 placeholder:text-[#CCCCCC]'
              />
              <h3 className='text-secondary font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-3'>
                Services
              </h3>
              <select
                className='border border-[#CCCCCC] rounded-md px-4 py-3 focus:ring-1 focus:ring-secondary w-full text-secondary'
                onChange={(e) =>
                  setValueEmail({ ...valueEmail, services: e.target.value })
                }
              >
                <option value=''>Services</option>
                <option value='Repair and Docking'>Repair and Docking</option>
                <option value='Services Navigation Equipment'>
                  Services Navigation Equipment
                </option>
                <option value='Life Saving Appliances'>
                  Life Saving Appliances
                </option>
              </select>
            </div>
            <div className='w-full'>
              <h3 className='text-secondary font-semibold text-sm md:text-base lg:text-lg xl:text-xl mb-3'>
                {lang === 'id' ? 'Pesan' : 'Message'}
              </h3>
              <textarea
                name='message'
                onChange={(e) =>
                  setValueEmail({ ...valueEmail, message: e.target.value })
                }
                placeholder={
                  lang === 'id'
                    ? 'Silahkan masukan kebutuhan anda'
                    : 'Please input your needs'
                }
                className='text-secondary border border-[#CCCCCC] rounded-md px-4 py-3 focus:ring-1 w-full focus:ring-secondary mb-12 placeholder:text-[#CCCCCC] resize-none'
                rows={8}
              ></textarea>

              <button
                type='submit'
                className='w-full md:text-lg text-base bg-primary text-white text-center py-4 rounded-full font-semibold'
              >
                {lang === 'id' ? 'Kirim' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailContact
