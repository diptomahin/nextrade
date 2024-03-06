"use client";

import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import usePublicFetch from "@/hooks/usePublicFetch";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Subtitle from "../library/Subtitle";

const Testimonials = () => {
  const {
    data = [],
    isPending,
    isLoading,
    refetch,
    isError,
  } = usePublicFetch("/feedback", "testimonials");
  refetch();

  if (isLoading || isError || isPending) {
    return;
  }

  return (
    <Container className="py-10">
      <Title>Traders Testimonial</Title>
      <Subtitle>
        Hear from traders who&apos;ve found success with us. Dive into their
        stories and see how our platform has helped them thrive in the markets.
      </Subtitle>
      <Swiper
        slidesPerView={20}
        spaceBetween={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
      >
        {data?.slice(0, 15).map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="min-h-52 bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree flex gap-3 rounded-xl shadow hover:shadow-2xl p-5 my-10 transition-all hover:-translate-y-[6px] duration-500 ease-in-out">
              <Image
                className="w-12 h-12 rounded-full"
                src={review?.photo}
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="w-full">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-semibold text-primary">
                    {" "}
                    {review?.reviewerName}
                  </h3>
                  <Rating
                    style={{ maxWidth: 90 }}
                    value={review?.rating}
                    readOnly
                  />
                </div>
                {/* <p className="text-xs">{review?.address}</p> */}
                <p className="text-sm mt-3">{review?.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
