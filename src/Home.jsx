import React from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

import TourCard from './components/index/TourCard';

function Home() {
  const { tours } = useLoaderData();
  return (
    <main className='mx-auto'>
        <div className='home-container w-[96%] md:w-[90%] lg:w-[80%] my-8 lg:my-16 flex items-center flex-col mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {tours.map(tour => <TourCard key={tour.slug} tour={tour}/>)}
        </div>
    </main>
  )
}

export async function getTours() {
  const response = await axios.get('/api/v1/tours');
  const tours = response.data.data.doc;
    return tours;
}

export async function loader() {
  const tours = await getTours();
  return {tours};
}

export default Home;