import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/ussage.css";

export default function Ussage() {
    const value = useSelector((state) => {
        return state.value;
    })
    const dispatch = useDispatch();
  return (
    <div>
      <div class="ussage">
        <button class="btn" onclick={() => {
            dispatch({
                type:'increment'
            });
        }}>Increment</button>
        <label class="label">{value}</label>
        <button class="btn" onclick={() => {
             dispatch({
                type:'decrement'
            });
        }}>decrement</button>
      </div>
    </div>
  );
}