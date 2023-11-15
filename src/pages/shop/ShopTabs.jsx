import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenuData } from '../../hooks/useMenuData';
import { FoodCard } from '../../components/FoodCard';
import { Container } from '../../components/Container';

export const ShopTabs = () => {
  const { menu } = useMenuData()
  const categories = ['salads','pizza' , 'soups', 'deserts', 'drinks']

  const deserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salads = menu.filter(item => item.category === 'salad')
  const soups = menu.filter(item => item.category === 'soup')
  const drinks = menu.filter(item => item.category === 'drinks')

  const categoriesData = [salads, pizza , soups, deserts, drinks]

  return (
    <Container className='my-20'>
      <Tabs>
      <TabList className='text-center mb-6'>
        {categories.map((category, index) => <Tab key={index}>{category}</Tab>)}
      </TabList>

        {categoriesData.map((category, index) => 
          <TabPanel key={index}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {category.map(item => <FoodCard key={item._id} item={item}/>)}
            </div>
          </TabPanel>
        )}
    </Tabs>
    </Container>
  )
}
