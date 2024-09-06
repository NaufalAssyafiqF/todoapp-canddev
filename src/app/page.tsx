import PostCard from "@/components/PostCard";
import Image from "next/image";
import { db } from "./lib/db";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

export default async function Home() {
  const post = await getPosts();

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {post?.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
      {post.length==0 && <div className="">belum ada postingan</div>}
    </main>
  );
}
