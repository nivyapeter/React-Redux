
// class component

import React from "react";
import { useDispatch } from "react-redux";
import "../styles/ussage.css";
import {connect} from "react-redux";

class Settings extends React.Component {
   
    return(){
        console.log(this.props);
        const {
            value,
            dispatch,
        } = this.props
        return (
            <div>
            <div class="ussage">
              <button class="btn"  onClick={() => {
            dispatch({
                type:'increment'
            });
        }}>Increment</button>
              <label class="label">{value}</label>
              <button class="btn" onClick={() => {
             dispatch({
                type:'decrement'
            });
        }}>decrement</button>
            </div>
          </div>
        );
    }
}

const mapStateToProps =(state)=> {
    return {
        value1:state.value,
    }
}
export default connect((mapStateToProps))(Settings)