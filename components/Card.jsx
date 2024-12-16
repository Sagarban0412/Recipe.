"use client";
import React from "react";
import Link from "next/link";

const Card = ({ name, src }) => {
  return (
    <Link href={`/Meal/${name}`}>
      <div className="border p-4 rounded-3xl min-w-[300px] max-w-[300px] flex-shrink-0 hover:shadow-xl">
        <img
          src={src}
          alt={name}
          className="h-[300px] w-[300px] object-cover"
        />
        <h1 className="text-center mt-2 font-normal text-xl">{name}</h1>
      </div>
    </Link>
  );
};

export default Card;
