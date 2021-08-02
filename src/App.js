import React, { useState, useEffect  } from 'react'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'
import './App.css';
// eslint-disable-next-line
import Header from './components/Header/Header'
import Users from './components/Users/Users'
import AddUser from './components/Users/AddUser'
import Button from './components/Parts/Button'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [users, setUsers] = useState([])
  const [showAddUser, setShowAddUser]  = useState(false)
  useEffect(() => {
    const getUsers = async () => {
      const UsersFromServer = await fetchUsers()
      setUsers(UsersFromServer)
    }
    getUsers()
    document.title = `Welcome`;
  }, []);


  const fetchUsers = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER + '/users')
    return await res.json()
  }

  const addUser = async (data) => {
    const id = Math.floor(Math.random() * 10000) + 1
    data["is_admin"] = (data["is_admin"] === 'true')
    const res = await fetch(`${process.env.REACT_APP_SERVER}/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({id, ...data}),
    })
    const user = await res.json()
    setUsers([...users, user])
    return true
  }
  const deleteUser = async  (id) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER}/users/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setUsers(users.filter((user) => user.id !== id))
      : alert('Error Deleting This Task')
  }
  const toggleAdmin = async  (id) => {
    const updateUser = users.filter((user) => user.id === id)[0]
    updateUser['is_admin'] = !updateUser['is_admin']
    await fetch(`${process.env.REACT_APP_SERVER }/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateUser),
    }).then((req) => {
      if(req.status === 200){
        setUsers(users.map((user) => user.id === id ? {...user, updateUser } : user ))
      }
    })
  }
  const NAME = "Mohamed"
  const location = useLocation()
  return (
    <div className="App">
      {/* <Header data="Hello From App.js" /> */}
      <h1>Hello {NAME} to {process.env.REACT_APP_APP_NAME} you are at {location.pathname} path</h1>
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <Button color={showAddUser ? 'red' : 'green'} doAction={() => setShowAddUser(!showAddUser)} text={showAddUser ? 'Close Form' : 'Add User' } />
              <div className="flex items-center justify-center">
                {showAddUser && <AddUser addUser={addUser} />}
              </div>
              { users.length <= 0 ? 'No Users':
              <Users users={users} deleteUser={deleteUser} toggleAdmin={toggleAdmin} />}
            </>
          )}
        />

        <Route path='/about' component={About} />
      <div className="flex items-center justify-center">
        <Footer />
      </div>
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
