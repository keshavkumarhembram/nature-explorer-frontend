import React from 'react'

import TourCardCover from './TourCardCover';
import TourDetails from './TourDetails';
import TourCardButton from './TourCardButton';

function TourCard({tour}) {
    console.log(tour);
  return (
    <div className="tour-card w-[330px]">
        <div className='tour-card-container shadow-xl hover:shadow-2xl'>
            <TourCardCover imageCover={tour.imageCover} name={tour.name} />
            <TourDetails difficulty={tour.difficulty} duration={tour.duration} summary={tour.summary} startLocation={tour.startLocation.description} date={tour.startDates[0]} stops={tour.locations.length} maxGroupSize={tour.maxGroupSize} />
            <TourCardButton price={tour.price} ratingsQuantity={tour.ratingsQuantity} ratingsAverage={tour.ratingsAverage} slug={tour.slug} />
        </div>
    </div>
  )
}

export default TourCard