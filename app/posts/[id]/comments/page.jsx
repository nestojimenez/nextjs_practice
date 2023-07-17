import React from 'react'

const fetchSinglePostComments = async(id) => {

    await new Promise(resolve=>setTimeout(resolve, 3000));
    throw new Error('Error al cargar los comentarios')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function SingleComments ({params}){
    const {id} = params
    const comments = await fetchSinglePostComments(id)

    return(
        <ul style={{fontSize:'12px', background: '#eee'}}>
            {comments.map(comment=>(
                <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}