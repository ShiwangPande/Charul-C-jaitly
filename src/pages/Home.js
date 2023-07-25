import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './styles.css';
import Swiperimg from "../components/Swiperimg";
import { motion, useAnimation, useInView } from "framer-motion"
// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Swiperlist from '../components/Swiperlist';
export default function App() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    // animation for the text



    return (
        <div >



            <Swiper
                data-replace='{ "translate-y-12": "translate-y-0" }'
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                cssMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper mt-20 lg:mt-0"
            >
                <SwiperSlide>
                    <div className='flex flex-row items-center ml-4' >
                        <div className='flex flex-col content-start m-5 text-start'>
                            <h1 className='text-4xl my-2 font-extrabold	'>
                                Lorem ipsum dolor sit
                            </h1>
                            <p className='my-2'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo.

                            </p>
                            <button>
                                Join Now
                            </button>
                        </div>
                        <div>
                            <img src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/10/Header-01-BG.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='flex flex-col content-start m-5 text-start'>
                            <h1 className='text-5xl my-2 font-extrabold	'>
                                Lorem ipsum dolor sit
                            </h1>
                            <p className='my-2'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo.

                            </p>
                            <button>
                                Join Now
                            </button>
                        </div>
                        <div>
                            <img src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/10/Header-01-BG.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='flex flex-col content-start m-5 text-start'>
                            <h1 className='text-5xl my-2 font-extrabold	'>
                                Lorem ipsum dolor sit
                            </h1>
                            <p className='my-2'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo.

                            </p>
                            <button>
                                Join Now
                            </button>
                        </div>
                        <div>
                            <img src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/10/Header-01-BG.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
            >

                <div>
                    <div className='flex flex-col items-center ml-4 lg:flex-row 	'>
                        <div>
                            <img src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/10/Our-Approche.png" alt="" />
                        </div>
                        <div className='flex flex-col content-end m-10 p-5 text-start'>
                            <h1 className='text-5xl my-2 font-extrabold	 transition-all delay-1000 '>
                                Hello world
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo.
                            </p>
                            <button>
                                Join Now
                            </button>
                        </div>
                    </div>

                </div>
            </motion.div>

            <Swiperlist className="my-12" />


            <div className="my-8" >
                <div className='flex flex-col-reverse items-center mx-4 lg:flex-row'>
                    <div className='flex flex-col content-end m-10 p-5 text-start'>
                        <h1 className='text-5xl my-2 font-extrabold	'>
                            Lorem ipsum dolor sit
                        </h1>
                        <p className='my-2 text-xl'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo.
                        </p>
                        <button>
                            Join Now
                        </button>
                    </div>
                    <div>
                        <img src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/10/Our-Approche.png" alt="" />
                    </div>

                </div>

            </div>

            <Swiperimg />

        </div >
    );
}
