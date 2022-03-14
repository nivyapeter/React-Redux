import { createStore ,combineReducers, applyMiddleware} from "redux";
import testMiddleWare from "./middleware/testMiddleware";

// const initialState = {
//   value: 0,
//   showLabel: true
// };

// function appReducer(prevState = initialState, action) {
  // switch (action.type) {
  //   case "increment":
  //     return {
  //       ...prevState,
  //       value: prevState.value + 1,
  //     };
  //   case "decrement":
  //     return {
  //       ...prevState,
  //       value: prevState.value - 1,
  //     };
  //     case "show-label":
  //       return {
  //         ...prevState,
  //         showLabel: action.payload,
  //       }

  //   default:
  //     return prevState;
  // }

//   return {
//     value: valueReducer(prevState.value,action),
//     showLabel: showLabelReducer(prevState.showLabel,action)
//   };
// }

const appReducer = combineReducers({
  value: valueReducer,
  showLabel: showLabelReducer
})

function showLabelReducer(prevState =true, action) {
  switch (action.type) {
    case 'show-label':
      return action.payload;
    default:
    return prevState;
  }
}

function valueReducer(prevState =0, action) {
  switch (action.type) {
    case "increment":
      return  prevState + 1;
    case "decrement":
      return prevState - 1;
    default:
      return prevState;
  }
}


// Action creator

function increment() {
  return {
    type: 'increment'
  }
}
function decrement() {
  return {
    type: 'decrement'
  }
}
function setShowLabel(payload) {
  return {
    type: 'show-label',
    payload: payload
  }
}

const store = createStore(appReducer , applyMiddleware(testMiddleWare));
export default store;
export {
  increment,
  decrement,
  setShowLabel
}
