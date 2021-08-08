import React, { useState, useEffect  } from 'react'
import {FormattedMessage} from 'react-intl'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, useLocation, Switch } from 'react-router-dom'
import './App.css';
// eslint-disable-next-line
import Header from './components/Header/Header'
import Footer from './components/Footer'
import About from './components/About'
import NotFound from './components/NotFound';
import Table from './components/Users/Table';
import ShowUser from './components/Users/ShowUser';

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
    data["test_ar"] = 'عربى'
    data["test_en"] = 'english'
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
      <p>
        <FormattedMessage id="lang"
            defaultMessage="English"
            description="English"/>
      </p>
      <Switch>
      <Route
        path='/'
        exact
        component={() => (<Table showAddUser={showAddUser} users={users} deleteUser={deleteUser} toggleAdmin={toggleAdmin} addUser={addUser} setShowAddUser={setShowAddUser} />)}
      />
      <Route path="/users/:id" component={ShowUser} />
      <Route path='/about' component={About} />
      <Route exact component={NotFound} />
      </Switch>
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
