import React from 'react'

export default function page({params}:any) {
  return (
    <div>Blog details 
    <h1>details of blogs{params.blogId}</h1>
</div>
  )
}
