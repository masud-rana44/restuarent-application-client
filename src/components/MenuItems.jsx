import { Container } from "./Container"
import { MenuItem } from "./MenuItem"

export const MenuItems = ({ items }) => {
  return (
    <Container className='grid md:grid-cols-2 gap-4 mt-10'>
      {items.map(item => <MenuItem key={item._id} item={item}/>)}
    </Container>
  )
}
