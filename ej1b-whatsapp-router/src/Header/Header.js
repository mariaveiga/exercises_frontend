import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () =>
  <header className="main-header">
    <div className="top-bar">
      <Link className="logo" to="/">WhatsApp</Link>
      <span className="actions">...</span>
    </div>
    <div className="tabs">
      <Link className="tab" to="/">Chats</Link>
      <div className="tab">Estados</div>
      <div className="tab">Llamadas</div>
    </div>
  </header>

export default Header
