"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MealCard from "@/components/MealCard";
import Head from "next/head";

const Page = () => {
  const { tagwise } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMeal = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/recipes/tag/${tagwise}`);
      setData(res.data.recipes);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeal();
  }, [tagwise]);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <Head>
        <title>{capitalize(tagwise)} Recipes</title>
        <meta
          name="description"
          content={`Browse delicious ${tagwise} recipes tailored for your taste.`}
        />
      </Head>
      <div>
        <h1 className="font-bold text-center text-5xl my-4">
          {capitalize(tagwise)} Recipes
        </h1>
        {loading && <p className="text-center text-xl">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="flex flex-wrap justify-center gap-5">
          {!loading && !error && data.length > 0 ? (
            data.map((item) => (
              <Link href={`/${item.id}/${item.name}`} key={item.id}>
                <div className="flex">
                  <MealCard
                    name={item.name}
                    src={item.image}
                    time={item.prepTimeMinutes}
                    difficulty={item.difficulty}
                  />
                </div>
              </Link>
            ))
          ) : (
            !loading &&
            !error && <p className="text-center text-gray-500">No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
