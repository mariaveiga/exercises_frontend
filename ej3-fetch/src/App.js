import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import UserView from './UserView'
import PostView from './PostView'

import './App.css'

const Timer = () => {
  const [valor, setValor] = useState(10)
  useEffect(() => {
    console.log("Start timer")
    const t = setInterval(() => setValor(v =>  v > 0 ? v - 1 : 0), 1000)
    return () => {
      console.log("Clear timer")
      clearInterval(t)
    }
  }, [])
  return <span>Cuenta atrás: {valor}</span>
}

const App = () => {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <NavLink to="/users" activeClassName="active">Users</NavLink>
        <Link to="/posts">Posts</Link>
      </header>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <div>
              Welcome! Check our sections:
              <ul>
                <li><Link to="/users">users</Link></li>
                <li><Link to="/posts">posts</Link></li>
              </ul>
            </div>
          </Route>
          <Route path="/users">
            <UserView />
            <Timer />
          </Route>
          <Route path="/posts">
            <PostView />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
