import React from 'react'

/**
 * Mostrar un radio para cada option
 * name: el nombre para todos los radios
 * options: un array con los valores que se pueden escojer
 * value: el valor marcado actualmente
 * onChange: el manejador del evento change
 */
const Radios = ({ name, options, value, onChange }) => {
  return (
    <div className="radios">
      {options.map(option =>
        <label key={option}>
          <input type="radio" name={name} value={option}
            checked={value === option} onChange={onChange} />
          {option}
        </label>
      )}
    </div>
  )
}

export default Radios
