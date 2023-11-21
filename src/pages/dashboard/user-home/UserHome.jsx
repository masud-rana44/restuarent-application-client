import { useAuth } from "../../../contexts/AuthContext"

const UserHome = () => {
  const { user } = useAuth()

  return (
    <div className="mx-4 py-10">
      <h2 className='text-2xl uppercase font-semibold font-cinzel'>Hi, Welcome {user.displayName.split(' ')[0] || 'Back'}</h2>
    </div>
  )
}

export default UserHome