"use client"
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";


const CreatePage = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data)
  }

  const {mutate: createPost, isPending:isLoadingSubmit} = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post("/api/posts/create", newPost)
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
        <h1 className="text-2xl my-4 font-bold text-center">Add New Post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} isLoadingSubmit={isLoadingSubmit}/>
    </div>
  );
};

export default CreatePage;
