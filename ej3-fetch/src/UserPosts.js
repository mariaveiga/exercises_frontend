import React, { useState, useEffect } from 'react'

const getUserPosts = userId =>
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(r => r.json())

const useUserPosts = id => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        getUserPosts(id).then(p => setPosts(p))
    }, [id])
    return posts
}

const UserPosts = ({ id }) => {
    const posts = useUserPosts(id)
    return (
        <ul className="post-list">
            {posts && posts.map(p =>
                <li key={p.id}>
                    {p.title}
                </li>
            )}
        </ul>
    )
}

export default UserPosts
