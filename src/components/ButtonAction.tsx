"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
import { Span } from 'next/dist/trace';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

interface ButtonActionProps {
  id: string
}

const ButtonAction: React.FC<ButtonActionProps> = ({id}) => {
  const router = useRouter()
  console.log({idDelete: id});
  

  const {mutate: deletePost, isPending} = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`)
    },
    onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      router.push("/")
      router.refresh()
    }
  })
  

  return (
    <div>
      <Link href={`/edit/${id}`} className="btn mr-2">
        <Pencil />
        Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        <Trash2 />
        {isPending && <span className='loading loading-spinner'></span>}
         Delete
      </button>
    </div>
  );
}

export default ButtonAction