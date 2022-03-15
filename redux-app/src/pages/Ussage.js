import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/ussage.css";
import { increment,decrement } from "../redux/store";

export default function Ussage() {
    const value = useSelector((state) => {
        return state.value;
    })
    const dispatch = useDispatch();
  return (
    <div>
      <div class="ussage">
        <button class="btn" onClick={() => {
            dispatch(increment());
        }}>Increment</button>
        <label class="label">{value}</label>
        <button class="btn" onClick={() => {
             dispatch(decrement());
        }}>decrement</button>
      </div>
    </div>
  );
}