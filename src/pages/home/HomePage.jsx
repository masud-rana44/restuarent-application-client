import { Cover } from "../../components/Cover";
import { Banner } from "./Banner";
import { OrderOnline } from "./OrderOnline";
import { chefService } from "../../assets/home";
import { Container } from "../../components/Container";
import { FromOurMenu } from "./FromOurMenu";
import { CallUs } from "./CallUs";

const HomePage = () => {
  return <div >
    <Banner/>
    <OrderOnline/>
    <Container className='mt-20'>
      <Cover bgImg={chefService} bgColor='#fff' textColor='#151515' title='Bistro Boss' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'/>
    </Container>
    <FromOurMenu/>
    <CallUs/>
  </div>;
};

export default HomePage;
