import React from 'react'

function GuidesCard({guide}) {
  return (
    <div className='flex w-[50%] justify-between gap-4 my-2'>
        <img className='w-12 rounded-full' src={`/images/users/${guide.photo}`} />
        <p className='uppercase font-bold'>{guide.role === 'guide'? 'tour guide': 'lead guide'}</p>
        <p>{guide.name}</p>
    </div>
  )
}

export default GuidesCard