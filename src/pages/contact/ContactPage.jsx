import { PageBanner } from "../../components/PageBanner"
import { PageTitle } from "../../components/PageTitle"
import bannerImg from '../../assets/contact/banner.jpg'
import { OurLocation } from "./OurLocation"
import { ContactForm } from "./ContactForm"

const ContactPage = () => {
  return (
    <div>
      <PageTitle title='Contact | Bistro Boss'/>
      <PageBanner title='CONTACT US' description='Would you like to try a dish?' bgImg={bannerImg}/>
      <OurLocation/>
      <ContactForm/>
    </div>
  )
}

export default ContactPage