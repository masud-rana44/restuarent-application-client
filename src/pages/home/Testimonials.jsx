import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import { Navigation } from "swiper/modules"

import { SectionHeading } from "../../components/SectionHeading"
import 'swiper/css'
import { Container } from "../../components/Container"
import { Quote } from 'lucide-react'

export const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async() => {
      const res = await fetch('/reviews.json')
      const data = await res.json()
      console.log(data)
      setReviews(data)
    }
    fetchReviews()
  }, [])

  return (
    <Container className="mt-20">
      <SectionHeading title='TESTIMONIALS' subtitle='---What Our Clients Say---'/>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper mt-12'>
        {reviews.map(review => <SwiperSlide key={review._id}>
          <div className="text-center">
            <Quote size={50} className=" fill-black mx-auto mb-6"/>
            <p className="text-sm text-dark">{review.details}</p>
            <h6 className="text-xl mt-2 uppercase text-yellow-500">{review.name}</h6>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </Container>
  )
}
