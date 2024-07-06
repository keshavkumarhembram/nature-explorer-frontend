import React from 'react'
import DetailsLeftContainer from './DetailsLeftContainer'
import DetailsRightContainer from './DetailsRightContainer'

function DetailsSection({tour}) {
  return (
    <section className='details_section font-light'>
        <div className='details_section-container w-[80%] flex flex-col sm:flex-row gap-16 justify-between my-12 mx-auto'>
            <DetailsLeftContainer nextDate={tour.startDates[0]} difficulty={tour.difficulty} participants={tour.maxGroupSize} rating={tour.ratingsAverage} guides={tour.guides} />
            <DetailsRightContainer name={tour.name} description={tour.description} />
        </div>
    </section>
  )
}

export default DetailsSection