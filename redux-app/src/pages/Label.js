import React from 'react'
import "../styles/showlabel.css"
import { useSelector } from 'react-redux'

const Label = () => {
  const val = useSelector((state) => {
    return (
      state.showLabel
    );
  })
  if (val===false){
    return null;
  }
  return (
    <div class="label">
        <label class="label1">hai</label>
        <label class="label2">all</label>
        <label class="label3">welcome</label>
    </div>
  )
}
export default Label;