import React from 'react'

function CollageSection({name, images}) {
  return (
    <section className='collage-section'>
        <div  className='sm:relative flex overflow-x-scroll'>
        <img className={`sm:absolute sm:left-0 sm:w-1/3 sm:top-[10rem] sm:-skew-y-6 `}src={`/images/tours/${images[0]}`}/>
        <img className={`sm:absolute sm:left-1/3 sm:w-1/3 sm:top-[6.625rem] sm:-skew-y-6`} src={`/images/tours/${images[1]}`}/>
        <img className={`sm:absolute sm:right-0 sm:w-1/3 sm:top-[3.25rem] sm:-skew-y-6`}src={`/images/tours/${images[2]}`}/>
        </div>
    </section>
  )
}

export default CollageSection