const usersArray = [
  {
    id: 5041,
    name: "Colton",
    email: "Aenean.massa@dolorQuisque.ca",
    data: "17/06/2022",
    is_admin: false
  },
  {
    id: 1776,
    name: "Linus",
    email: "Nunc.mauris.elit@ultrices.com",
    data: "21/12/2021",
  is_admin:   true
  },
  {
    id: 7913,
    name: "Daquan",
    email: "purus@ultricies.co.uk",
    data: "10/08/2021",
    is_admin: false
  },
  {
    id: 3866,
    name: "Howard",
    email: "placerat@pedeCrasvulputate.ca",
    data: "25/11/2020",
  is_admin:   true
  },
  {
    id: 7149,
    name: "Logan",
    email: "tempor@Proin.net",
    data: "01/07/2021",
    is_admin: false
  },
  {
    id: 2102,
    name: "Mariam",
    email: "justo.Proin.non@velitduisemper.net",
    data: "09/08/2021",
    is_admin: false
  },
  {
    id: 2394,
    name: "Britanni",
    email: "mattis@duisemperet.edu",
    data: "25/05/2021",
    is_admin: false
  }
]
const Users = ({color, text, doAction}) => {
  return (
    <>
      {usersArray.map((user) => (<p key={user.id}>{user.name}</p>))}
    </>
  )
}

export default Users
