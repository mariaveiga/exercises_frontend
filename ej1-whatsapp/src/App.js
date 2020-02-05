import React from 'react'
import Header from './Header/Header'
import ChatList from './ChatList/ChatList'
import data from './data.json'
import './App.css'

const App = () =>
  <div id="main-page">
    <Header />
    <ChatList chats={data.chatList} />
  </div>

export default App;
