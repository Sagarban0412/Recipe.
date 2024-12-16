import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
const MealCard = ({ src, name, time,difficulty}) => {
  return (
    <>
      <div className="border rounded-md p-10 hover:shadow-xl max-w-[400px]">
        <img src={src} alt={name} className="h-[270px] w-[270px] " />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 my-4">
            <FontAwesomeIcon icon={faClock} className="font-bold text-xl"/>
            <p>{time}Min</p>
          </div>
          <div>
            {difficulty=="Easy"? <h1 className="bg-green-400 p-2 rounded-full py-2 px-4">{difficulty}</h1>:(difficulty=='Medium'? <h1 className="bg-blue-400 p-2 rounded-full py-2 px-4">{difficulty}</h1>: <h1 className="bg-red-400 p-2 rounded-full py-2 px-4">{difficulty}</h1> ) }
          </div>
        </div>
        <div>
        <h1 className="text-xl text-center">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default MealCard;
