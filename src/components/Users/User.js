import {GrUser, GrUserAdmin} from 'react-icons/gr'
import {FaRegAddressCard, FaTrashAlt} from 'react-icons/fa'

const User = ({user, deleteUser, toggleAdmin}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
            {user.name} <FaRegAddressCard style={{color:'red'}} />
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.date}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="text-sm text-gray-900" onDoubleClick={ () => toggleAdmin(user.id)}>
        {user.is_admin ?
           <GrUserAdmin style={{cursor: 'pointer'}} />
           : <GrUser style={{cursor: 'pointer'}} />}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <FaTrashAlt style={{cursor: 'pointer'}} onClick={() => deleteUser(user.id)} />
      </td>
    </tr>
  )
}

export default User
