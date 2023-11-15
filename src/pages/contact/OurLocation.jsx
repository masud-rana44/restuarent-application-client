import { Container } from "../../components/Container"
import { SectionHeading } from "../../components/SectionHeading"

export const OurLocation = () => {
  const info = [{}, {}, {}]

  return (
    <Container className="mt-20">
      <SectionHeading title='OUR LOCATION' subtitle='Visit Us'/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {info.map((info, index) => <div key={index} className="h-[200px] w-full bg-gray-300"></div>)}
      </div>
    </Container>
  )
}
