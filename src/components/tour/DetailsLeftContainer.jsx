import React from 'react'
import GuidesCard from './GuidesCard'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function DetailsLeftContainer({nextDate, difficulty, participants, rating, guides}) {
  const date = new Date(nextDate);
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return (
    <div>
      <div className='w-[200px] sm:min-w-[400px] w-50%] mb-12'>
        <h2 className='uppercase text-3xl font-semibold bg-gradient-to-r from-[#7dd56f] to-[#28b487] bg-clip-text text-transparent my-4'>Quick Facts</h2>
        <div >
          <p className='my-4'><span className='field font-bold uppercase text-gray-400 '>Next Date </span> <span className='value'>{month} {year}</span></p>
          <p className='my-4'><span className='field font-bold uppercase text-gray-400 '>Difficulty </span> <span className='value'>{difficulty}</span></p>
          <p className='my-4'><span className='field font-bold uppercase text-gray-400 '>Participants </span> <span className='value'>{participants}</span></p>
          <p className='my-4'><span className='field font-bold uppercase text-gray-400 '>Rating </span> <span className='value'>{rating}/5</span></p>
        </div>
      </div>
      <div>
        <h2 className='uppercase text-3xl font-semibold bg-gradient-to-br from-[#7dd56f] to-[#28b487] bg-clip-text text-transparent my-4'>Your tour Guides</h2>
        {guides.map(guide => <GuidesCard key={guide._id} guide={guide} />)}
      </div>
    </div>
  )
}

export default DetailsLeftContainer