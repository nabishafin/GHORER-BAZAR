import React from "react";

const NoDataComponent = ({ message = "No Data Found" }) => {
  return (
    <div className="flex justify-center items-center h-96">
      <h1 className="text-4xl font-semibold">{message}</h1>
    </div>
  );
};

export default NoDataComponent;
