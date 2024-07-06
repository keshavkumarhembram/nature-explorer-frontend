import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

function HeroSection({imageCover, name, startLocation, duration}) {
  return (
    <section className='hero-section'>
        <div className='hero-section-container relative sm:h-[620px] overflow-hidden cover-clip__hero-section'>
            <div className='relative'>
                <div className='image-cover-overlay absolute w-[100%] h-[100%] sm:h-[100%] bg-gradient-to-br from-[#7dd56f] to-[#28b487] opacity-75 sm:opacity-80 z-10 ' />
                <img className='w-[100%] sm:mt-[-8rem]' src={`/images/tours/${imageCover}`} alt='image cover' />
            </div>
            <div className='absolute top-[3rem] left-0 h-[100%] w-[100%] flex flex-col justify-start items-center  z-20'>
            <h1 className='w-[250px] sm:w-[400px] text-white text-center'>
                <span className='px-4 py-2 leading-relaxed uppercase font-light text-3xl sm:text-[3rem] box-decoration-clone bg-gradient-to-br from-[#7dd56f] to-[#28b487] '>{name} tour</span>
            </h1>
            <div className='mt-10 w-[200px] sm:w-[300px] flex justify-between text-white sm:text-xl uppercase font-semibold'>
                <div><FontAwesomeIcon icon={faClock}/> {duration} days</div>
                <div><FontAwesomeIcon icon={faLocationDot}/> {startLocation}</div>
            </div>
            </div>
        </div>

    </section>
  )
}

export default HeroSection