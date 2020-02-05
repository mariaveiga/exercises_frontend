import React from 'react'
import { Link } from 'react-router-dom'
import './ChatEntry.css'

const FunnyDate = ({ date }) => {
  // This is hard... let's cheat a bit
  return date.substring(11, 16)
}

const ChatEntry = ({ chat }) =>
  <Link className="chat-entry" to={'/chat/' + chat.id}>
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
  </Link>

export default ChatEntry
