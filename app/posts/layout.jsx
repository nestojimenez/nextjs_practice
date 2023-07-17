'use client'

import Counter from "./Counter"

export default function PostLayout({ children }) {
    
    return (
        <>
            <small>Home &bull; Posts</small>
            {children}
        </>


    )
}