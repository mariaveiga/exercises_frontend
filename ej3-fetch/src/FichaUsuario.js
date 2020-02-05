import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserPosts from './UserPosts'

const getUser = id =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json())

const FichaUsuario = () => {
    const { id } = useParams()

    const [user, setUser] = useState()
    useEffect(() => {
        getUser(id).then(u => setUser(u))
    }, [id])
    return (
        <>
            <ul className="user">
                <li>
                    Nombre:
                    {user ? user.name : 'Loading...'}
                </li>
                <li>
                    Email:
                    {user ? user.email : 'Loading...'}
                </li>
                <li>
                    Teléfono:
                    {user ? user.phone : 'Loading...'}
                </li>
            </ul>
            <UserPosts id={id} />
        </>
    )
}

export default FichaUsuario
