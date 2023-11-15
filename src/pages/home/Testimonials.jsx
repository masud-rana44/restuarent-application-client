import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import { Navigation } from "swiper/modules"
import { Rating } from '@smastrom/react-rating'

import { SectionHeading } from "../../components/SectionHeading"
import { Container } from "../../components/Container"
import { Quote } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import '@smastrom/react-rating/style.css'

export const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async() => {
      const res = await fetch('/reviews.json')
      const data = await res.json()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  return (
    <Container className="my-20">
      <SectionHeading title='TESTIMONIALS' subtitle='---What Our Clients Say---'/>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper mt-8'>
        {reviews.map(review => <SwiperSlide key={review._id}>
          <div className="text-center">
            <Rating style={{ maxWidth: 180}} value={review.rating} readOnly className="mx-auto mb-6" />
            <Quote size={50} className=" fill-black mx-auto mb-6"/>
            <p className="text-sm text-dark">{review.details}</p>
            <h6 className="text-xl mt-2 uppercase text-yellow-500">{review.name}</h6>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </Container>
  )
}
