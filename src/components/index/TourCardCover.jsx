import React from 'react'

function TourCardCover({imageCover, name}) {
  return (
    <div className='image-cover relative'>
      <div className='image-cover-container relative cover-clip__card-cover'>
        <div className='image-cover-overlay absolute w-[100%] h-[100%] bg-gradient-to-br from-[#7dd56f] to-[#28b487] opacity-50 z-10 ' />
          <img className='h-[200px] w-[100%]' src={`/images/tours/${imageCover}`}/>
        </div>
        <h3 className='absolute w-[70%] bottom-4 right-4 text-white text-right'>
          <span className='px-4 py-2 leading-relaxed uppercase text-3xl box-decoration-clone bg-gradient-to-br from-[#7dd56f] to-[#28b487] opacity-75 '>{name}</span>
        </h3>
    </div>
  )
}

export default TourCardCover;