import React from 'react'
import ReviewCard from './ReviewCard';

function ReviewSection({reviews}) {
  return (
    <section className='review_section mt-[100px] sm:mt-[700px] bg-gradient-to-br from-[#7dd56f] to-[#28b487] py-[200px] cover-clip'>
        <div className='review_section-container overflow-x-scroll flex p-12 gap-4'>
            {reviews.map(review => <ReviewCard key={review._id} review={review} />)}
        </div>
    </section>
  )
}

export default ReviewSection