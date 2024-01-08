import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" w-full h-[100dvh] bg-background  flex flex-col justify-center items-center ">
      <h2 className="text-3xl">
        <span className=" text-primary">404:</span> Planet Not Found
      </h2>
      <p className=" text-gray-500">
        The Page you are looking has been lost in space
      </p>
      <Link href={"/"} className=" text-primary underline">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
