import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FoodCard } from '../../components/FoodCard';
import { Container } from '../../components/Container';
import { useMenu } from '../../hooks/useMenu';
import { Loader2 } from 'lucide-react';

export const ShopTabs = () => {
  const { menus, isPending } = useMenu()
  const categories = ['salads','pizza' , 'soups', 'deserts', 'drinks']

    if(isPending) return <div className="w-full my-28 flex items-center justify-center">
    <Loader2 className="animate-spin text-primary"/>
  </div>

  const deserts = menus.filter(item => item.category === 'dessert')
  const pizza = menus.filter(item => item.category === 'pizza')
  const salads = menus.filter(item => item.category === 'salad')
  const soups = menus.filter(item => item.category === 'soup')
  const drinks = menus.filter(item => item.category === 'drinks')

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
