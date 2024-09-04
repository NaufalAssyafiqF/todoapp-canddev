"use client"
import { FormInputPost } from '@/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';


interface FormPostProps {
  submit: SubmitHandler<FormInputPost>
}

const FormPost: React.FC<FormPostProps> = ({submit}) => {
  const {register, handleSubmit} = useForm<FormInputPost>()

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
      <input
        type="text"
        {...register("title", {required: true})}
        placeholder="post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
      {...register("content", {required: true})}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="post content..."
      ></textarea>
      <select {...register("tags", {required: true})} className="select select-bordered w-full max-w-lg" defaultValue={''}>
        <option disabled value=''>
          Select tags
        </option>
        <option>Java Script</option>
        <option>PHP</option>
        <option>Python</option>
      </select>
      <button type='submit' className='btn btn-primary w-full max-w-lg'>Create</button>
    </form>
  );
}

export default FormPost