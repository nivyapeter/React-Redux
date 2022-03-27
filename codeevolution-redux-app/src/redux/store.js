import { combineReducers, createStore } from "redux"

// action
function buyCake () {
    return {
        type:buyCake,
        info:'first redux action'
    }
}

function iceCreame () {
    return {
        type:iceCreame,
        info:'first redux action'
    }
}

// reducer
const initialState = {
    numOfCakes:10,
    flavour: choclate,
    numberOfIcecreams:20,
    iceCreameFlavour: pistha,

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

const iceCreameReducer = (state=initialState,action) => {
    switch(action.type) {
        case iceCreame: return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams-1
        }
        default: return  state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCreame: iceCreameReducer,
})
// store

const store = createStore(rootReducer)
console.log('initialState', store.getState())
const unSubscribe = store.subscribe(() => console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(iceCreame ())
store.dispatch(iceCreame ())
unSubscribe();