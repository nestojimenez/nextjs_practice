import React from 'react'
import Link from 'next/link'

const fetchSinglePost = async(id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ children, params }) {
    const { id } = params
    const post = await fetchSinglePost(id);
    return (
        <article>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
            {children}
        </article>
    )
}

