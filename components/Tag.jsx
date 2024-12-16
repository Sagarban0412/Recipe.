"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const Tag = () => {
  const [tag, setTag] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTag = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/recipes/tags");
      setTag(res.data.slice(0, 30)); 
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tags. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getTag();
  }, []);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <Head>
        <title>Recipe Tags</title>
        <meta
          name="description"
          content="Explore a variety of recipe tags to find meals that match your taste."
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-center font-bold text-4xl mb-6">Recipe Tags</h1>
        {loading && <p className="text-center text-lg">Loading tags...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          {!loading && !error && tag.length > 0 ? (
            tag.map((item, index) => (
              <div key={index}>
                <Link href={`/Tag/${item}`}>
                  <h1 className="bg-red-300 max-w-[200px] text-center p-3 border rounded-full hover:bg-red-400 transition-colors">
                    {capitalize(item)}
                  </h1>
                </Link>
              </div>
            ))
          ) : (
            !loading && !error && (
              <p className="text-center text-gray-500">No tags available.</p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Tag;

