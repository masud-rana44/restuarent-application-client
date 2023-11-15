import { Cover } from "../../components/Cover";
import { Banner } from "./Banner";
import { OrderOnline } from "./OrderOnline";
import { banner } from "../../assets/home";
import { Container } from "../../components/Container";

const HomePage = () => {
  return <div >
    <Banner/>
    <OrderOnline/>
    <Container className='mt-20'>
      <Cover bgImg={banner} bgColor='#fff' title='Bistro Boss' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'/>
    </Container>
  </div>;
};

export default HomePage;
