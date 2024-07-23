import React from 'react'
import { Link } from 'react-router-dom';

function TourCardButton({price, ratingsAverage, ratingsQuantity, slug}) {
  return (
    <div className='tour-card__button tour-card__rating tour-card__price'>
        <div className='tour-card-button-container bg-[#f7f7f7] flex justify-between items-center p-4'>
            <div className='price rating text-gray-500'>
            <p>${price} per person</p>
            <p>{`${ratingsAverage} rating (${ratingsQuantity})`}</p>
            </div>
            <Link className=' text-white rounded-full bg-green-400 px-6 py-2 hover:shadow-lg'  to={`/tour/${slug}`}>DETAILS</Link>
        </div>
    </div>
  )
}

export default TourCardButton