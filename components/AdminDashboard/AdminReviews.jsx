"use client";
import Container from "@/components/library/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import usePublicFetch from "@/hooks/usePublicFetch";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const AdminReviews = () => {
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
          <div className="  p-4 mt-5 w-full rounded text-black dark:text-white shadow bg-white dark:bg-tertiary">
              <h2 className="font-semibold ">Users Reviews</h2> 
              <Container className="py-5">
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
        {data?.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="min-h-52 bg-white dark:bg-black flex gap-3 border border-gray-400 dark:border-darkThree rounded-xl shadow hover:shadow-2xl p-5 ">
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
                <p className="text-xs">Address N/A</p>
                <p className="text-sm mt-3">&quot;{review?.feedback.slice(0,150)}&quot;</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
          </div>
     );
};

export default AdminReviews;