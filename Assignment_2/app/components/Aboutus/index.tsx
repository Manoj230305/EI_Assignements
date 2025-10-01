import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Who We Are.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph:
            "We are pioneers in building mission-ready tracking tools that help astronauts, researchers, and teams stay organized with clarity and precision.",
        link: "Discover more"
    },
    {
        heading: "What We Do.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph:
            "From task scheduling to real-time progress tracking, our platform empowers teams to plan, monitor, and complete missions with confidence.",
        link: "Explore services"
    },
    {
        heading: "Our Vision.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph:
            "We aim to redefine productivity by creating elegant, futuristic solutions that make complex missions simple and achievable.",
        link: "See our work"
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>
                    Get to know the mission behind Astronaut Tracker.
                </h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div
                            key={i}
                            className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group transition duration-300'
                        >
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>
                                {item.heading}
                            </h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>
                                {item.paragraph}
                            </h4>
                            <Link
                                href="#"
                                className='flex items-center gap-2 text-lg font-semibold group-hover:text-white text-blue hover-underline'
                            >
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
