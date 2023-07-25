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
            <div className="flex flex-col mx-12   overflow-hidden  h-[50rem] w-[90vw] lg:flex-row">
                <Swiper

                    style={{ width: "200%" }}
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
