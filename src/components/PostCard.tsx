import Link from 'next/link';
import React from 'react'

const PostCard = ({...item}) => {
  return (
    <div className="card bg-base-100 min-w-80 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.content}</p>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-accent">{item.tag.name}</div>
          <Link href={`/blog/${item.id}`} className="btn btn-primary">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard