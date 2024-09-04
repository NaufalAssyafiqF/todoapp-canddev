import { NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavbarComponents = () => {
  return (
    <div className="navbar border-2 border-[#1D232A] border-b-zinc-700">
      <div className="container">
        <div className="flex-1 items-center">
          <Link href="/">
            <NotebookPen className="inline mr-2"/>
            MyApp_
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className="btn btn-ghost">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
