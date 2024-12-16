"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import MealCard from "@/components/MealCard";
import Link from "next/link";

const page = () => {
  const { mealwise } = useParams();
  const Meal = typeof mealwise === "string" ? mealwise.toLowerCase() : "";
  const [meal, setMeal] = useState([]);
  const getMeals = async () => {
    const res = await axios.get(
      `https://dummyjson.com/recipes/meal-type/${Meal}`
    );
    console.log(res.data.recipes);
    setMeal(res.data.recipes);
  };
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <h1 className="font-bold text-center text-5xl my-4">{mealwise}</h1>
      <div className="flex flex-wrap gap-5">
        {meal.map((items, index) => {
          return (
            <Link href={`/${items.id}/${items.name}`} key={index}>
              <div className="flex">
                <MealCard name={items.name} src={items.image} time={items.prepTimeMinutes} difficulty={items.difficulty}/>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default page;
