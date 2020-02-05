import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const getPost = id =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(r => r.json())

const getUser = id =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(r => r.json())

const FichaPost = () => {
    const { id } = useParams()

    const [post, setPost] = useState()
    useEffect(() => {
        getPost(id).then(u => setPost(u))
    }, [id])

    const userId = post && post.userId
    const [user, setUser] = useState()
    useEffect(() => {
        if (userId) {
            getUser(userId).then(u => setUser(u))
        }
    }, [userId])

    return (
        <>
            <ul className="user">
                <li>
                    Autor:
                    {user ? user.name : 'Loading...'}
                </li>
                <li>
                    Titulo:
                    {post ? post.title : 'Loading...'}
                </li>
                <li>
                    Body:
                    {post ? post.body : 'Loading...'}
                </li>
            </ul>
        </>
    )
}

export default FichaPost
