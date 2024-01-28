import Image from "next/image";
import React from "react";

import notFoundPage from "../assets/404.jpg";
import Link from "next/link";
import Button from "@/components/library/buttons/root_button/RootButton";

const NotFound = () => {
  return (
    <div>
      <Image
        src={notFoundPage}
        alt=""
        className="w-[500px] h-screen mx-auto object-cover mt-10"
      />
      <div className=" flex items-center justify-center">
        <Link href={"/"}>
          {" "}
          <Button>Go Home</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
