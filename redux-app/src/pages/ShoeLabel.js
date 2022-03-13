import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import "../styles/showlabel.css";

const ShoeLabel = () => {
    const dispatch = useDispatch();
    const handleShowChange = (e) => {
        const checkBoxValue= e.target.checked;
        dispatch ({
            type: 'show-label',
            payload: checkBoxValue
        });

    }
    const val = useSelector((state) => state.showLabel);
  return (
    <div class="show">
        <input checked={val} onChange={handleShowChange} type="checkbox"></input>Show Label
    </div>
  );
}
export default ShoeLabel