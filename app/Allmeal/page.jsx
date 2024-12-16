"use client";

import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MealCard from "@/components/MealCard";
import Head from "next/head";

const Page = () => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10); // Initial limit

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/recipes?limit=${limit}&sortBy=name`);
      setMeal(res.data.recipes);
      setLoading(false);
    } catch (err) {
      setError("Failed to load recipes. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [limit]);

  const loadMore = () => {
    setLimit(limit + 10); // Increase limit to fetch more recipes
  };

  return (
    <>
      <Head>
        <title>All Recipes</title>
        <meta
          name="description"
          content="Explore a wide variety of recipes. Find delicious meals with prep time, difficulty, and more."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-center text-5xl my-4">All Recipes</h1>
        {loading && <p className="text-center text-xl">Loading recipes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="flex flex-wrap gap-5 justify-center">
          {!loading &&
            !error &&
            meal.map((items) => (
              <Link href={`/${items.id}/${items.name}`} key={items.id}>
                <div className="flex">
                  <MealCard
                    name={items.name}
                    src={items.image}
                    time={items.prepTimeMinutes}
                    difficulty={items.difficulty}
                  />
                </div>
              </Link>
            ))}
        </div>
        {!loading && !error && meal.length > 0 && (
          <div className="text-center my-6">
            <button
              onClick={loadMore}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
