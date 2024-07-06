import React from 'react'

function DetailsRightContainer({name, description}) {
  return (
    <div className='w-[100%] sm:w-[50%]'>
      <h2 className='uppercase text-3xl font-semibold bg-gradient-to-r from-[#7dd56f] to-[#28b487] bg-clip-text text-transparent my-4'>About {name} tour</h2>
      <p>{description} </p>
    </div>
  )
}

export default DetailsRightContainer