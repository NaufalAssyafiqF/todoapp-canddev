"use client";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { Tag } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

interface editPostPageProps {
  params: {
    id: string;
  };
}

const EditPage: React.FC<editPostPageProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter()

  const { data: dataPost, isLoading: isLoadingPost } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const { mutate: updatePost, isPending: isLoadingSubmit} = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
    
  };

  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit Your Post</h1>
      <FormPost
        isLoadingSubmit={isLoadingSubmit}
        submit={handleEditPost}
        initialValue={dataPost}
        isEditing={true}
      />
    </div>
  );
};

export default EditPage;
