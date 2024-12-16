import React from "react";
import Card from "@/components/Card.jsx";
import Tag from "@/components/Tag.jsx";
import Hero from "@/components/Hero.jsx";

const Page = () => {
  return (
    <>
      <Hero/>
      <div id="meal" className="mt-5">
        <h1 className="text-2xl font-bold text-center">Meals</h1>
        <div className="flex overflow-x-scroll gap-5 px-5 scrollbar-hide">
          <Card name="Dinner" src="./images/dinner.png" />
          <Card name="Lunch" src="./images/lunch.png" />
          <Card name="Breakfast" src="./images/breakfast.png" />
          <Card name="Beverage" src="./images/beverage.png" />
          <Card name="Snacks" src="./images/snacks.png" />
          <Card name="Tiffin" src="./images/tiffin.png" />
        </div>
      </div>
      <div id="tag">
        <div className="flex flex-wrap py-10 px-5">
          <Tag />
        </div>
      </div>
    </>
  );
};

export default Page;
