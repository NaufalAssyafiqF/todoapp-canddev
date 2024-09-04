import ButtonAction from "@/components/ButtonAction";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-300">Post One Content</p>
    </div>
  );
};

export default BlogPage;
