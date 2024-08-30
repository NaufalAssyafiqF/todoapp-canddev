import Link from "next/link";
import React from "react";

const NavbarComponents = () => {
  return (
    <div className="navbar bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link href="/">Icon</Link>
        </div>
        <div className="flex-none">
          <Link href="/post" className="btn btn-ghost">Create Post</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
