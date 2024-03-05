import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = ({ value }) => {
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {value}</div>
      {/* <div className="font-semibold ml-6 text-lg">balance is {count}</div> */}
    </div>
  );
};
