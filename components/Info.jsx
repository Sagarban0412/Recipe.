import React from "react";

const Info = (props) => {
  return (
    <div
      className="h-[500px] rounded-2xl p-4 w-full text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex flex-col justify-center items-center">
        <p className="italic">
          <span className="font-bold text-xl">Calories:</span> {props.name} calorie
        </p>
        <p className="italic">
          <span className="font-bold text-xl">Cuisine:</span> {props.cuision}
        </p>
        <p className="italic">
          <span className="font-bold text-xl">Cook Time:</span> {props.ctime} Min
        </p>
        <p className="italic">
          <span className="font-bold text-xl">Prepare Time:</span> {props.ptime} Min
        </p>
        <p className="italic">
          <span className="font-bold text-xl">Tag:</span> Salad
        </p>
        <p className="italic">
          <span className="font-bold text-xl">Serving:</span> {props.serve}
        </p>
      </div>
    </div>
  );
};

export default Info;
