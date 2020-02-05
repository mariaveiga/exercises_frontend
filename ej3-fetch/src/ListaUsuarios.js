import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const getUsers = () =>
    fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(r => r.json())

const ListaUsuarios = ({ id }) => {
    const [users, setUsers] = useState()
    useEffect(() => {
        getUsers().then(u => setUsers(u))
    }, [])
    return (
        <ul className="user-list">
            {users && users.map(u =>
                <li
                    key={u.id}
                    className={u.id === id ? 'active' : ''}
                >
                    <Link to={`/users/${u.id}`}>{u.name}</Link>
                </li>
            )}
        </ul>
    )
}

export default ListaUsuarios
