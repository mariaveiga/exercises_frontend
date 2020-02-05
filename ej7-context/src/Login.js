import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'

const Login = () => {
  const dispatch = useDispatch()
  const login = (user) => dispatch({ type: 'login', user })
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí haríamos fetch para hacer login, y
    // obtendríamos los datos del user y un token...
    console.log('Login:', username, password)
    login({
      username,
      email: 'demo-email@spamherelots.com',
      avatar: 'https://i.imgur.com/VVq6KcT.png',
      token: 'fake-token'
    })
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button>Log in!</button>
    </form>
  )
}

export default Login
