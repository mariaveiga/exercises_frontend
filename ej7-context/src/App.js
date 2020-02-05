import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Login from './Login'
import Private from './private/Private'
import Modals from './modal/Modals'
import './App.css'

const Content = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  const tema = useSelector(s => s.tema)
  const setTema = (tema) => dispatch({ type: 'tema', tema })
  const handleClick = () => setTema(tema === 'dark' ? 'light': 'dark')
  return (
    <div className="App">
      {!user && <Login />}
      {user && <Private />}
      <button onClick={handleClick}>Cambiar tema: {tema}</button>
      <Modals />
    </div>
  )
}

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Content />
      </Router>
    </Provider>
  )
}

export default App
