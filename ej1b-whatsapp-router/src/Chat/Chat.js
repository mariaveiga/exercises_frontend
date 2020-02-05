import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'

const Chat = ({ chats }) => {
  // Leemos el parámetro de la ruta (/chat/:id)
  const { id } = useParams()
  // Buscamos el chat con este id
  const chat = chats.find(c => c.id.toString() === id)
  // Nos inventamos unos mensajes
  const [ messages, setMessages ] = useState(randomMessages)

  // Manejo del footer
  const [ typing, setTyping ] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setTyping('')
  }

  // Montamos todo
  if (!chat) return 'Chat not found'

  return (
    <main className="chat">
      <div className="messages">
        {messages.map((msg, i) =>
          <div className={'message ' + (msg.isOwn ? 'sent' : 'recv')} key={i}>
            {!msg.isOwn &&
              <div className="title">{chat.name}</div>
            }
            <div className="text">{msg.text}</div>
          </div>
        )}
      </div>
      <form className="footer" onSubmit={handleSubmit}>
        <input
          placeholder="Escribe un mensaje"
          value={typing}
          onChange={e => setTyping(e.target.value)}
          autoFocus
        />
      </form>
    </main>
  )
}

// Generador de mensajes aleatorios
const randomMessages = () => {
  const texts = [
    'Hola!', 'Qué tal?', 'Bien', 'Y tu?', '...',
    'Qué tal el tiempo?', 'Cuanta lluvia...',
    'Por la horda!', 'Ya ves', 'Si, o qué?'
  ]
  const messages = []
  for (let i = 0; i < 10; i++) {
    const isOwn = Math.random() > 0.5
    const text = texts[Math.floor(Math.random() * texts.length)]
    messages.push({ isOwn, text })
  }
  return messages
}

export default Chat
