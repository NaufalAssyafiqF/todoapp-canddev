"use client"
import { FormInputPost } from '@/types';
import { Tag } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';


interface FormPostProps {
  submit: SubmitHandler<FormInputPost>
  isEditing: Boolean;
  initialValue?: FormInputPost;
  isLoadingSubmit: boolean;
}

const FormPost: React.FC<FormPostProps> = ({
  submit,
  isEditing,
  initialValue,
  isLoadingSubmit,
}) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });

  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="post content..."
      ></textarea>
      {isLoadingTags ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered w-full max-w-lg"
          defaultValue={""}
        >
          <option disabled value="">
            Select tags
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isLoadingSubmit && <span className="loading loading-spinner"></span>}
        {isEditing
          ? isLoadingSubmit
            ? "Updateing..."
            : "Update Post"
          : isLoadingSubmit
          ? "Creating..."
          : "Create Post"}
      </button>
    </form>
  );
};

export default FormPost