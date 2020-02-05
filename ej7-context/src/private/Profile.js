import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Profile.css'

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  const logout = () => dispatch({ type: 'logout' })

  const tema = useSelector(s => s.tema)

  return (
    <div className={'profile theme-' + tema}>
      <h2>Tu perfil:</h2>
      <div>Usuario: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Avatar: <img src={user.avatar} alt="Avatar" /></div>
      <div>Tema: {tema}</div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
