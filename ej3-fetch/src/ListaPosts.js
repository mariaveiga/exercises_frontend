import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const getPosts = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then(r => r.json())

const ListaPosts = ({ id }) => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        getPosts().then(u => setPosts(u))
    }, [])
    return (
        <ul className="user-list">
            {posts && posts.map(u =>
                <li
                    key={u.id}
                    className={u.id === id ? 'active' : ''}
                >
                    <Link to={`/posts/${u.id}`}>{u.title}</Link>
                </li>
            )}
        </ul>
    )
}

export default ListaPosts
