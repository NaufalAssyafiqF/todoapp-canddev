import { db } from "@/app/lib/db";
import BackButoon from "@/components/BackButoon";
import ButtonAction from "@/components/ButtonAction";
import React from "react";

interface BlogDetailParam {
  params: {
    id: string;
  };
}

async function getPosts(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    }
  });
  return response;
}

const BlogPage: React.FC<BlogDetailParam> = async ({ params }) => {

  const post = await getPosts(params.id);


  return (
    <div>
      <BackButoon />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction />
      </div>
      <div className="badge badge-accent mb-2">{post?.tag.name}</div>
      <p className="text-slate-300">{post?.content}</p>
    </div>
  );
};

export default BlogPage;
