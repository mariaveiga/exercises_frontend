import React, { useState } from 'react'
import './App.css'

const NumberPicker = () => {
  const [value, setValue] = useState(0)
  const handlePlus = () => setValue(value + 1)
  const handleMinus = () => setValue(value - 1)

  return (
    <div className="counter">
      <div className="number">{value}</div>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
    </div>
  )
}

const App = () => 
  <div className="App">
    Selecciona un número: <NumberPicker />
  </div>

export default App
