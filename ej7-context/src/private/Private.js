import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Profile from './Profile'
import Products from './Products'
import { useSelector } from 'react-redux'

import './Private.css'

const Private = () => {
  const user = useSelector(s => s.user)
  console.log(user)
  return (
    <div className="private-layout">
      <header>
        <div className="user">
          <span className="username">{user.username}</span>
          <img src={user.avatar} alt="Avatar" />
        </div>
      </header>
      <div className="private-middle">
        <Menu />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  )
}

export default Private
