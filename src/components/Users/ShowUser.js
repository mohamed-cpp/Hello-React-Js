import React, {useState, useEffect, useContext} from 'react'
import { getIdFromSlug } from "../../helper/helper"
import {Context} from "../Context/Wrapper"
// import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";
const ShowUser = (props) => {
  const [user, setUser] = useState({})
  const context = useContext(Context)


  useEffect(() => {
    const slug = getIdFromSlug(props.match.params.id)
    const getUser = async (slug) => {
      const UserFromServer = await fetchUser(slug)
      if(Object.keys(UserFromServer).length === 0){
        props.history.push('/404')
      }
      setUser(UserFromServer)
    }
    if(Number.isInteger(parseInt(slug))){
      getUser(slug)
    }else{
      props.history.push('/404')
    }
  },[]);

  const fetchUser = async (slug) => {
    const res = await fetch(process.env.REACT_APP_SERVER + '/users/' + slug)
    return await res.json()
  }

  return (
    <div>
      <Helmet>
        <title>{user.name}</title>
        <meta name="description" content={user.name} />
        <meta property="og:title" content={user.name} />
      </Helmet>
      {user.id} <br />
      {user.name} <br />
      {user.email} <br />
      {user['test_'+context.locale]} <br />
    </div>
  )
}

export default ShowUser
