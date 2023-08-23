import React, { useContext, useState } from 'react'
import Admin from './Admin'
import Guest from './Guest'
import User from './User'
import { GlobalContext } from './Context/context'

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

const ComponentByRoles={
  'admin' : Admin,
  'user' : User,
  'guest' : Guest
}


export default function App() {


  const {state,dispatch} = useContext(GlobalContext)
  // console.log(state)


  // const [role,setRole] = useState('admin')

  const CurrentUser = getUserRole(state.role)
  return <CurrentUser/>   
  
}
