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
    <div className="mt-7 w-full bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
      <h2 className="font-semibold text-xl ">Users Reviews</h2>
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
        >
          {data?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="w-full min-h-52 bg-gradient-to-b from-zinc-200 to-zinc-200 dark:from-darkOne dark:to-darkTwo border border-b-transparent dark:border-darkThree flex gap-3 rounded-xl shadow hover:shadow-lg p-5 my-10 transition-all hover:-translate-y-[6px] duration-500 ease-in-out">
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
                  <p className="text-sm mt-3">
                    &quot;{review?.feedback.slice(0, 150)}&quot;
                  </p>
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
