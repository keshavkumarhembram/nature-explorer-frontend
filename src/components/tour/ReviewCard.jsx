import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function ReviewCard({review}) {
  return (
    <div className='review_card'>
        <div className='review_card-container rounded p-8 w-[300px] h-[250px] bg-white  relative'>
            <div className='review_card-user_info flex gap-4 items-center'>
                <img className='h-12 rounded-full' src={`/images/users/${review.user.photo}`} />
                <p className='uppercase font-semibold' >{review.user.name}</p>
            </div>
            <div className='review_card-user_review'>
                <p>{review.review}</p>
            </div>
            <div className='review_card-user_rating absolute bottom-4'>
            {Array.from({ length: 5 }, (_, index) => <FontAwesomeIcon className={`${index < review.rating ?'text-green-500': 'text-gray-400'}`} key={review._id+index} icon={faStar} />) }
            </div>
        </div>
    </div>
  )
}

export default ReviewCard