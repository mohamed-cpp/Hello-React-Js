import React from 'react'
import Users from './Users'
import AddUser from './AddUser'
import Button from '../Parts/Button'

const Table = (props) => {
  return (
    <div>
      <Button color={props.showAddUser ? 'red' : 'green'} doAction={() => props.setShowAddUser(!props.showAddUser)} text={props.showAddUser ? 'Close Form' : 'Add User' } />
      <div className="flex items-center justify-center">
        {props.showAddUser && <AddUser addUser={props.addUser} />}
      </div>
      { props.users.length <= 0 ? 'No Users':
      <Users users={props.users} deleteUser={props.deleteUser} toggleAdmin={props.toggleAdmin} />}
    </div>
  )
}

export default Table
