"use client"
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const BackButoon = () => {
    const router = useRouter()
  return (
    <button onClick={() => router.back()} className='btn btn-ghost ps-0 pe-2'>
      <ChevronLeft />
      Back
    </button>
  );
}

export default BackButoon