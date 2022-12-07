import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import 'swiper/swiper-bundle.css'
// import 'swiper/swiper-bundle.min.css'
 //import 'swiper/swiper.min.css'
  //import 'swiper/modules/navigation/navigation.scss';
// import 'swiper/modules/thumbs/thumbs.min.css';
// import 'swiper/modules/pagination/pagination.min.css'
import './Dropdown.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Dropdown() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const images = [];
  for (let i = 0; i < 5; i += 1) {
    images.push(
     
         `https://picsum.photos/id/${i + 1}/500/300`
        
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }

  const images2 = [];
  for (let i = 9; i < 14; i += 1) {
    images2.push(
      `https://picsum.photos/id/${i + 1}/500/300`
         
    );
  }

  return (

        <div className="carousel" data-droplet>
          <div className="swipe-1">
          <Swiper
                            spaceBetween={0}
                            loop={true}
                            controller={{ control: controlledSwiper }}
                            navigation={true}
                            modules={{ Navigation }}
                            breakpoints={{
                                390: {
                                    slidesPerView: 2,
                                },
                                450: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 1,
                                },
                                991: {
                                    slidesPerView: 1,
                                },

                                1200: {
                                    slidesPerView: 1,
                                },
                            }}
                            // autoplay={{
                            //     delay: 2500,
                            //     disableOnInteraction: false,
                            // }}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {images &&
                                images.map((img, idx) => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <div
                                                className="swiper-images"
                                                
                                            >
                                                <img
                                                    src={img}
                                                    alt={`bene-product-${img}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                        
                        </Swiper>
      </div>
      {/* <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper> */}
      <div className="swipe-1">
      <Swiper id="controller" onSwiper={setControlledSwiper}
         loop={true}>
      {images2 &&
                                images2.map((img, idx) => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <div
                                                className="swiper-images"
                                                
                                            >
                                                <img
                                                    src={img}
                                                    alt={`bene-product-${img}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
      </Swiper>
      </div>
      </div>
  
  );
}

export default Dropdown;