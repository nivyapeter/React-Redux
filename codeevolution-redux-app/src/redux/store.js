import { createStore } from "redux"

// action
function buyCake () {
    return {
        type:buyCake,
        info:'first redux action'
    }
}

// reducer
const initialState = {
    numOfCakes:10,
    flavour: choclate,

}

const cakeReducer = (state=initialState,action) => {
    switch(action.type) {
        case buyCake: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return  state;
    }
}

// store

const store = createStore(cakeReducer)
console.log('initialState', store.getState())
store.subscribe(() => console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
