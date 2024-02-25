"use client";

import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import usePublicAPI from "@/hooks/usePublicAPI"; // Import your usePublicAPI hook

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const publicAPI = usePublicAPI(); // Get the instance of the public API

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await publicAPI.get("/feedback");
      if (!response.data) {
        throw new Error('Failed to fetch reviews');
      }
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return (
    <Container className="py-10">
      <Title>Trader&apos;s Feedback</Title>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="my-5 mx-16 flex flex-col items-center">
              <Image
                className="rounded-full"
                src={review?.photo}
                alt="avatar"
                width={100}
                height={100}
              />
              <h3 className="text-lg py-5 font-semibold">{review?.reviewerName}</h3>
              <p className="py-8">{review?.feedback}</p>
              <Rating
                style={{ maxWidth: 180 }}
                value={review?.rating}
                readOnly
                className="mb-5"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;