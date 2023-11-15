import { SectionHeading } from "../../components/SectionHeading"
import { featured} from '../../assets/home'

export const FeaturedItem = () => {
  return (
    <div style={{ backgroundImage: `url(${featured})`}} className="bg-cover bg-center py-20 mt-20 bg-blend-multiply">
      <SectionHeading title='FROM OUR MENU' subtitle='---Check it out---' color='#fff'/>
      <div className="flex space-x-10 items-center max-w-3xl mx-auto mt-8">
        <img src={featured} alt="Featured item" className="flex-1 max-w-sm"/>
        <div className="flex-1 text-white">
          <span>March 20, 2023</span>
          <h6>WHERE CAN I GET SOME?</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        </div>
      </div>
    </div>
  )
}
