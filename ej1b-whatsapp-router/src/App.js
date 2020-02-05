import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import ChatList from './ChatList/ChatList'
import Chat from './Chat/Chat'
import data from './data.json'
import './App.css'

const App = () =>
  <Router>
    <div id="main-page">
      <Header />
      <Switch>
        <Route path="/chat/:id">
          <Chat chats={data.chatList} />
        </Route>
        <Route path="/">
          <ChatList chats={data.chatList} />
        </Route>
      </Switch>
    </div>
  </Router>

export default App;
