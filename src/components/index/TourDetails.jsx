import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFlag, faLocationDot, faUser, faCalendar} from '@fortawesome/free-solid-svg-icons';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function TourDetails({difficulty, duration, summary, startLocation, stops, date, maxGroupSize}) {
    const dateObj = new Date(date);
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

  return (
    <div className='tour-details'>
        <div className='tour-details-container p-4'>
            <p className='tour-details__duration tour-details__difficulty uppercase text-sm font-medium'>{difficulty}{duration}-days tour</p>
            <p className='tour-details__summary text-[.9rem] italic my-3' >{summary}</p>
            <ul className='tour-details__details-list text-m grid grid-cols-2 gap-4 my-3 '>
                <li className='tour-details__details-list__list-items text-ellipsis'><FontAwesomeIcon className='location-icon text-green-500' icon={faLocationDot} /> <span className='text-ellipsis'>{startLocation}</span></li>
                <li className='tour-details__details-list__list-items text-ellipsis'><FontAwesomeIcon className='location-icon text-green-500' icon={faCalendar} /><span className='text-ellipsis'> {month} {year}</span></li>
                <li className='tour-details__details-list__list-items text-ellipsis'><FontAwesomeIcon className='location-icon text-green-500' icon={faFlag} /><span className='text-ellipsis'> {stops} stops</span></li>
                <li className='tour-details__details-list__list-items text-ellipsis'><FontAwesomeIcon className='location-icon text-green-500' icon={faUser} /><span className='text-ellipsis'> {maxGroupSize} people</span></li>
            </ul>
        </div>
    </div>
  )
}

export default TourDetails