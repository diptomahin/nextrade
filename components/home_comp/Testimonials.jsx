"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="p-8">
            <h2 className="text-red-600 pt-2 text-center mx-auto font-bold text-4xl">Testimonials</h2>
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
                {
                    reviews.map(review => <SwiperSlide key={review._id} >
                        <div className="my-5 mx-16 flex flex-col items-center">
                            <img className="rounded-full md:w-1/6" src={review.avatar} alt="avatar" />
                            <h3 className="text-2xl text-red-600">{review.name}</h3>
                            <p className="py-8">{review.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                                className="mb-5"
                            />
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;