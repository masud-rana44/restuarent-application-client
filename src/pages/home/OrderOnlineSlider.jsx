import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const OrderOnlineSlider = ({ allSlider }) => {
  return (
    <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {allSlider.map((slide, idx) => <SwiperSlide key={idx}>
          <img src={slide} alt="slide" className="w-full h-[360px] object-cover"/>
        </SwiperSlide>)}
      </Swiper>
  )
}
