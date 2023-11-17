import { SectionHeading } from "../../../components/SectionHeading"
import { AddOrUpdateItemForm } from "../AddOrUpdateItemForm"

const AddItemPage = () => {
  return (
    <div className="px-16 py-6 bg-white min-h-screen">
      <SectionHeading title='ADD AN ITEM' subtitle="---What's new?---"/>
      <AddOrUpdateItemForm/>
    </div>
  )
}

export default AddItemPage