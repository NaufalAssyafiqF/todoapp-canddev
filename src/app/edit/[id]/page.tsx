"use client";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const EditPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit Your Post</h1>
      <FormPost submit={handleEditPost} isEditing={true}/>
    </div>
  );
};

export default EditPage;
