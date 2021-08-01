import React, { useState } from 'react'
import './App.css';
// eslint-disable-next-line
import Header from './components/Header/Header'
import Users from './components/Users/Users'
import AddUser from './components/Users/AddUser'
import Button from './components/Parts/Button'

function App() {
  // eslint-disable-next-line
  const [users, setUsers] = useState([])
  const [showAddUser, setShowAddUser]  = useState(false)
  const addUser = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const id = Math.floor(Math.random() * 10000) + 1
        setUsers([...users, {id, ...data}])
        resolve(true);
      }, 2000);
    });
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id ))
  }
  const toggleAdmin = (id) => {
    setUsers(users.map((user) => user.id === id ? {...user, is_admin: !user.is_admin} : user ))
  }
  const NAME = "Mohamed"
  return (
    <div className="App">
      {/* <Header data="Hello From App.js" /> */}
      <h1>Hello {NAME} to {process.env.REACT_APP_APP_NAME}</h1>
      <Button color={showAddUser ? 'red' : 'green'} doAction={() => setShowAddUser(!showAddUser)} text={showAddUser ? 'Close Form' : 'Add User' } />
      <div className="flex items-center justify-center">
        {showAddUser && <AddUser addUser={addUser} />}
      </div>
      { users.length <= 0 ? 'No Users':
      <Users users={users} deleteUser={deleteUser} toggleAdmin={toggleAdmin} />}

    </div>
  );
}
// if you want use classes
// class App extends React.Component {
//   render() {
//     return <h1>Here</h1>
//   }
// }

export default App;
