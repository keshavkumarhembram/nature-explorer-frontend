import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import HeroSection from "../components/tour/HeroSection";
import DetailsSection from "../components/tour/DetailsSection";
import CollageSection from "../components/tour/CollageSection";
import ReviewSection from "../components/tour/ReviewSection";
import BookingSection from "../components/tour/BookingSection";



function Tour() {
   const {tour} = useLoaderData();
  return (<div>
    <div>
      <HeroSection imageCover={tour.imageCover} name={tour.name} duration={tour.duration} startLocation={tour.startLocation.description} />
      <DetailsSection tour={tour} />
      <CollageSection images={tour.images} name={tour.name} />
      <ReviewSection reviews={tour.reviews} />
      <BookingSection  tourId={tour._id} images={tour.images} duration={tour.duration}  />
    </div>
  </div>);
}

export async function loader({params}) {
    const response = await axios.get(
      `/api/v1/tour/${params.slug}`
    );
    const tour = response.data.data.tour;
    return {tour};
};

export default Tour;
