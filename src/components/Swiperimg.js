import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, useAnimation, useInView } from "framer-motion"
import "swiper/css/effect-fade";
import 'swiper/css/thumbs';
// import required modules
import { Autoplay, Thumbs } from "swiper/modules";
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
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
        >
            <div className="flex flex-col mx-auto lg:mx-12   overflow-hidden  lg:h-[50rem] w-[90vw] lg:flex-row">
                <Swiper

                    style={{ width: "100%" }}
                    slidesPerView={1}
                    spaceBetween={200}
                    // cssMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Thumbs]}
                    className="mySwiper  m-0 "
                >
                    <SwiperSlide >
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {" "}
                        <img
                            src="https://rohininilekaniphilanthropies.org/wp-content/uploads/2022/12/Rohini_1.png"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="text-xl pl-8 py-8 text-justify">
                    <h1>
                        <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                            <svg class="w-8 h-8  text-gray-400 dark:text-gray-600 mb-4" style={{ transform: "rotateZ(180deg)" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                        </blockquote> </h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto,
                        laborum modi hic aspernatur obcaecati iure doloremque! Quae, ipsum?
                        Dolor ipsa incidunt repellat atque doloremque commodi pariatur maxime
                        error molestias distinctio rem iusto, nostrum officiis ipsam tenetur
                        ullam suscipit exercitationem labore, facilis quod? Beatae quidem
                        pariatur, itaque nihil eius ipsum? </p>

                    <p className="mt-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit natus ex excepturi corrupti quod laborum quaerat minima itaque illo, delectus provident repudiandae doloremque tempora alias eaque recusandae, eos expedita illum?
                    </p>

                    <button className="mt-5">
                        Join Now
                    </button>


                </div>
            </div>
        </motion.div>
    );
}

export default Swiperlist;
