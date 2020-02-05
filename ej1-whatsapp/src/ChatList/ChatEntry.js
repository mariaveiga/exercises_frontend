import React from 'react'
import './ChatEntry.css'

const FunnyDate = ({ date }) => {
  // This is hard... let's cheat a bit
  return date.substring(11, 16)
}

const ChatEntry = ({ chat }) =>
  <div className="chat-entry">
    <div className="avatar">
      <img src={chat.image} alt="avatar" />
    </div>
    <div className="info">
      <div className="title">
        <span className="title-name">{chat.name}</span>
        <span className="title-date"><FunnyDate date={chat.lastMessage.date} /></span>
      </div>
      <div className="last-message">{chat.lastMessage.text}</div>
    </div>
  </div>

export default ChatEntry
