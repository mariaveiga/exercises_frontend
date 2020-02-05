import React from 'react'
import ChatEntry from './ChatEntry'
import './ChatList.css'

const ChatList = ({ chats }) =>
  <main className="chat-list">
    {chats.map(chat =>
      <ChatEntry key={chat.id} chat={chat} />
    )}
  </main>

export default ChatList
