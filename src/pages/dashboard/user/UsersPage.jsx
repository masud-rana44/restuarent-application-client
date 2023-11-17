import { PageLoader } from "../../../components/PageLoader"
import { useUser } from "../../../hooks/useUser"
import { SectionHeading } from "../../../components/SectionHeading"
import UsersTable from "./UsersTable"

const UsersPage = () => {
  const { users, isPending} = useUser()

  if(isPending) return <PageLoader/>

  return (
    <div className="mx-16 py-6">
      <SectionHeading title='MANAGE ALL USERS' subtitle='---How many??---'/>
            <div className="mt-10 bg-white p-10">
        <div className="text-2xl font-bold font-cinzel mb-10 flex justify-between uppercase">
          <p>Total Users: {users.length}</p>
        </div>

        <UsersTable data={users}/>
      </div>
    </div>
  )
}

export default UsersPage