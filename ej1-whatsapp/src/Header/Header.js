import React from 'react'
import './Header.css'

const Header = () =>
  <header className="main-header">
    <div className="top-bar">
      <span className="logo">WhatsApp</span>
      <span className="actions">...</span>
    </div>
    <div className="tabs">
      <div className="tab">Chats</div>
      <div className="tab">Estados</div>
      <div className="tab">Llamadas</div>
    </div>
  </header>

export default Header
