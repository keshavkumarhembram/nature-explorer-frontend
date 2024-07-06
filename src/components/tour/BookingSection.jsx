import React from 'react'
import axios from 'axios';
import logo from './../../assets/brand/logo-green-round.png';

function BookingSection({tourId,images, duration}) {
    async function bookTourButtonHandler (e) {
        tourId = e.target.dataset.tourId;
        try {
            const res = await axios.post(`/api/v1/bookings/checkout-session/${tourId}`, {
              headers: {
                  'Origin': window.location.origin,
                  'Referer': window.location.href,
              }
          });
            console.log(res);
            const {session} = res.data;
            location.assign(session.url);
      
          }catch(err) {
            console.log(err);
          }
    }
  return (
    <section className='booking_section bg-gray-200'>
        <div className='booking_section-container pb-[100px] pt-[300px] -mt-[200px]  flex justify-center items-center'>
            <div className='booking_section-banner bg-white rounded-xl verflow-hidden overflow-hidden flex flex-col sm:flex-row sm:py-16 p-8 sm:px-0 shadow-lg w-[80%] sm:w-[60%] gap-8'>
                <div className='booking_section-collage relative h-24 w-32'>
                    <img className='h-24 w-24 rounded-full absolute z-40 -left-8' src={logo} />
                    <img className='h-24  w-24 rounded-full absolute z-30 -left-4' src={`/images/tours/${images[0]}`} />
                    <img className='h-24  w-24 rounded-full absolute z-20 left-0' src={`/images/tours/${images[1]}`} />
                    <img className='h-24  w-24 rounded-full absolute z-10 left-4' src={`/images/tours/${images[2]}`} />
                </div>
                <div className='booking_section-slogan'>
                    <h2 className='uppercase text-3xl font-semibold bg-gradient-to-r from-[#7dd56f] to-[#28b487] bg-clip-text text-transparent my-4'>What are you waiting for?</h2>
                    <p>{duration} days. 1 adventure. Infinite memories. Make it yours today!</p>
                </div>
                <button onClick={(e) => bookTourButtonHandler(e)} data-tour-id={tourId} type='button' className=' text-white bg-green-400 px-16 py-4 sm:py-0 rounded-full uppercase font-bold text-xl'>Book Tour</button>
            </div>
        </div>
    </section>
  )
}

export default BookingSection