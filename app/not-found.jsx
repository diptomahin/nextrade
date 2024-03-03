import React from "react";
import Link from "next/link";
import Button from "@/components/library/Button";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="2xl:text-[400px] md:text-[300px] text-[190px] text-center font-bold relative mt-8">
        404
      </div>
      <h1 className="2xl:text-5xl md:text-4xl text-xl mb-8 md:-mt-16 -mt-10 text-center text-white font-semibold">
        Sorry, This Page Doesn&apos;t Exist.
      </h1>
      <Link href="/">
        <Button className="text-center">BACK TO HOMEPAGE</Button>
      </Link>
    </div>
  );
};

export default NotFound;
