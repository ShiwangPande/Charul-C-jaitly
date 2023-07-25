
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { motion, useAnimation, useInView } from "framer-motion"
// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
function Swiperlist() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);
    return (
        <div>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
            >
                <Swiper

                    style={{ width: "90%", }}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={200}
                    cssMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper mx-auto my-8"
                >
                    <SwiperSlide className='flex flex-col'>
                        <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                    <SwiperSlide className='flex flex-col'>   <img style={{ width: "75%" }} src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2023/01/03_Fields-of-Work-315x315-px.png" alt="" />
                        <div>
                            <h1 className='text-3xl my-2 font-extrabold	'>
                                Lorem ipsum
                            </h1>
                            <p className='my-2 text-xl'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
                            </p>
                        </div></SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Swiperlist