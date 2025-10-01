"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Dr. Elena Ramirez",
        profession: "Mission Control Scientist, NASA",
        comment: "The Astronaut Tracker has completely changed how we monitor crew activities in real-time. It’s reliable, accurate, and user-friendly.",
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "James Thornton",
        profession: "Flight Director, ESA",
        comment: "With this tool, tracking mission progress has become seamless. The timeline visualization is exactly what our teams needed.",
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Sofia Chen",
        profession: "Space Systems Engineer, ISRO",
        comment: "I was impressed by the precision of updates. Having astronaut data consolidated in one dashboard makes our work much easier.",
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Capt. Daniel Moore",
        profession: "Astronaut, International Space Station",
        comment: "Using this tracker gave me and my crew a clearer understanding of our mission schedule. It feels like having Mission Control in your pocket.",
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Prof. Aditi Mehra",
        profession: "Astrophysics Researcher, JAXA",
        comment: "An elegant solution that bridges the gap between space research teams and mission data. It’s a tool built for both engineers and scientists.",
        imgSrc: '/images/testimonial/user2.svg',
    },
    
]

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false }
                },
                {
                    breakpoint: 800,
                    settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false }
                },
                {
                    breakpoint: 450,
                    settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false }
                }
            ]
        };

        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">What space experts are saying</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">What space experts are saying</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">What space experts are saying</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
