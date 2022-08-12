import React from 'react'

const ImageContent = ({ isText, image, text }) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={image}
        className='object-cover rounded h-3/4 md:h-full'
        alt={text}
      />
      {isText && (
        <p className='text-primary text-center font-semibold mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
          {text}
        </p>
      )}
    </div>
  )
}

export default ImageContent
