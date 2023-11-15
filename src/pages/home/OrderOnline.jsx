import { SectionHeading } from "../../components/SectionHeading"
import { Container } from "../../components/Container"
import { slider1, slider2, slider3, slider4, slider5 } from "../../assets/home"
import { OrderOnlineSlider } from "./OrderOnlineSlider"

const allSlider = [slider1, slider2, slider3, slider4, slider5]


export const OrderOnline = () => {
  return (
    <div className="mt-20">
      <Container>
        <SectionHeading title='ORDER ONLINE' subtitle='From 11:00am to 10:00pm'/>
        <OrderOnlineSlider allSlider={allSlider}/>
      </Container>
    </div>

  )
}
