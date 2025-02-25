"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Info from "@/components/Info";

const Page = () => {
  const { mealid, mealname } = useParams();
  const meal = decodeURIComponent(mealname);

  const [data, setData] = useState({});
  const [ingredientStatus, setIngredientStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMeal = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/recipes/${mealid}`);
      setData(res.data);
      console.log(res.data);

      // Initialize ingredient statuses
      const initialStatus = {};
      res.data.ingredients?.forEach((_, index) => {
        initialStatus[index] = false;
      });
      setIngredientStatus(initialStatus);

      setLoading(false);
    } catch (err) {
      setError("Failed to fetch meal data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeal();
  }, [mealid]);

  const toggleIngredientStatus = (index) => {
    setIngredientStatus((prevStatus) => ({
      ...prevStatus,
      [index]: !prevStatus[index],
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[500px]">
            <Info
              name={data.caloriesPerServing}
              cuision={data.cuisine}
              ctime={data.cookTimeMinutes}
              ptime={data.prepTimeMinutes}
              serve={data.servings}
              src={data.image}
            />
          </div>
          <h1 className="font-bold text-3xl">{data.name}</h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {/* Ingredients Section */}
          <div className="ingredient border min-w-[420px] p-4 rounded-3xl">
            <h1 className="font-bold text-2xl">Ingredients</h1>
            <ul>
              {data.ingredients &&
                data.ingredients.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-6"
                  >
                    <li
                      className={`${
                        ingredientStatus[index]
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {index + 1}. {item}
                    </li>
                    <div className="flex gap-4">
                      <button
                        className={`py-2 px-4 rounded-full ${
                          ingredientStatus[index]
                            ? "bg-gray-400"
                            : "bg-green-600"
                        }`}
                        onClick={() => toggleIngredientStatus(index)}
                      >
                        {ingredientStatus[index] ? "Undo" : "Done"}
                      </button>
                    </div>
                  </div>
                ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="instruction border min-w-[420px] p-4 rounded-3xl">
            <h1 className="font-bold text-2xl">Instructions</h1>
            <ul>
              {data.instructions &&
                data.instructions.map((item, index) => (
                  <li key={index} className="mb-4">
                    <span className="font-bold text-xl">{index + 1}.</span>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
