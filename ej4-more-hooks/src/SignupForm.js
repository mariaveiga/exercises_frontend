import React, { useState } from 'react'
import Address from './Address'
import Company from './Company'

const useFormField = (valorInicial) => {
  const [value, setValue] = useState(valorInicial || '')
  const handleChange = e => setValue(e.target.value)
  return [value, handleChange]
}

const SignupForm = () => {
  const [name, handleName] = useFormField()
  const [username, handleUsername] = useFormField()
  const [email, handleEmail] = useFormField()
  const [address, setAddress] = useState({})
  const [company, setCompany] = useState({})
  const [status, setStatus] = useState()
  
  const handleSubmit = async e => {
    e.preventDefault()
    const user ={ name, username, email, address, company }
    setStatus('loading...')
    await fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'POST',
      body: JSON.stringify(user)
    })
    setStatus('ok!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handleName} placeholder="Name..." />
      <input value={username} onChange={handleUsername} placeholder="Username..." />
      <input value={email} onChange={handleEmail} placeholder="Email..." />
      <Address value={address} onChange={setAddress} />
      <Company value={company} onChange={setCompany} />
      <button>Enviar</button>
      {status}
    </form>
  )
}

export default SignupForm
