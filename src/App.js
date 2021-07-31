import { useState } from 'react'
import React from 'react'
import './App.css';
// eslint-disable-next-line
import Header from './components/Header/Header'
import Users from './components/Users/Users'
import AddUser from './components/Users/AddUser'

function App() {
  // eslint-disable-next-line
  const [users, setUsers] = useState([
    {
      id: 5041,
      name: "Colton",
      email: "Aenean.massa@dolorQuisque.ca",
      date: "17/06/2022",
      is_admin: false
    },
    {
      id: 1776,
      name: "Linus",
      email: "Nunc.mauris.elit@ultrices.com",
      date: "21/12/2021",
    is_admin:   true
    },
    {
      id: 7913,
      name: "Daquan",
      email: "purus@ultricies.co.uk",
      date: "10/08/2021",
      is_admin: false
    },
    {
      id: 3866,
      name: "Howard",
      email: "placerat@pedeCrasvulputate.ca",
      date: "25/11/2020",
    is_admin:   true
    },
    {
      id: 7149,
      name: "Logan",
      email: "tempor@Proin.net",
      date: "01/07/2021",
      is_admin: false
    },
    {
      id: 2102,
      name: "Mariam",
      email: "justo.Proin.non@velitduisemper.net",
      date: "09/08/2021",
      is_admin: false
    },
    {
      id: 2394,
      name: "Britanni",
      email: "mattis@duisemperet.edu",
      date: "25/05/2021",
      is_admin: false
    }
  ])
  const addUser = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setUsers([...users, {id, ...data}])
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
      <h1>Hello {NAME}</h1>
      <div className="flex items-center justify-center">
        <AddUser addUser={addUser} />
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
