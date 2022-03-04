import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";

export default function Counter() {
  const amount = useSelector((state) => state.amount);
  return (
    <div className="App-header">
      <h1>Counter</h1>
      <p>{amount}</p>
      <Buttons />
    </div>
  );
}
