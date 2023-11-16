import { useState } from 'react';
import { FreeMode, Pagination, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { img1, img2, img3, img4, img5, img6 } from "../../assets/home"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'
import 'swiper/css/thumbs';


const bannerImages = [img1, img2, img3, img4, img5, img6]

export const Banner = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(img1);

  return (
    <>
   <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': 'blue',
        }}
        loop={true}
        autoplay={true}
        spaceBetween={10}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
        className="mySwiper2 max-h-screen"
      >
       {bannerImages.map((img, idx) => 
        <SwiperSlide key={idx}>
          <img className='w-full object-cover' src={img} />
        </SwiperSlide>
       )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 max-w-xl"
      >
        {bannerImages.map((img, idx) => 
        <SwiperSlide key={idx}>
          <img className='h-12 cursor-pointer' src={img} />
        </SwiperSlide>
       )}
      </Swiper>
      </>
  )
}
