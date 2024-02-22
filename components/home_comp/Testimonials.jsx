"use client";

import Container from "@/components/library/Container";
import Title from "@/components/library/Title";
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
        <Container className="py-10">
            <Title>Testimonials</Title>
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
                            <h3 className="text-lg py-5 font-semibold">{review.name}</h3>
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
        </Container>
    );
};

export default Testimonials;