import React, { useState } from 'react'
import './Acordeon.css'

/**
 * Componente "acordeón", que permite expandir contenidos,
 * o volverlos a ocultar, mediante un botón.
 * Recibe como children el contenido a mostrar.
 */
function Acordeon({ children }) {
  const [ isExpanded, setExpanded ] = useState(false)
  const toggle = () => setExpanded(!isExpanded)

  return (
    <div className={'acordeon ' + (isExpanded ? 'abierto' : 'cerrado')}>
      <button onClick={toggle}>
        {isExpanded ? 'Ver menos...' : 'Ver más...'}
      </button>
      {isExpanded && <div className="contenido">{children}</div>}
    </div>
  )
}

export default Acordeon
