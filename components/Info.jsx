import React from "react";

const Info = (props) => {
  return (
    <>
      <div className=" bg-red-300 h-[260px] rounded-2xl p-4">
        <p className="italic"><span className="font-bold text-xl">Calories:</span>{props.name} calorie </p>
        <p className="italic"><span className="font-bold text-xl">Cuision:</span>{props.cuision} </p>
        <p className="italic"><span className="font-bold text-xl">CookTime:</span>{props.ctime} Min </p>
        <p className="italic"><span className="font-bold text-xl">PrepareTime:</span>{props.ptime} Min </p>
        <p className="italic"><span className="font-bold text-xl">Tag:</span>salad  </p>
        <p className="italic"><span className="font-bold text-xl">serving:</span>{props.serve} </p>
      </div>
    </>
  );
};

export default Info;
