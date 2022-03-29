import { createStore } from "redux"
const initialState= {
   loading: false,
   users:[],
   error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// action 

const fetchUsersRequest = () => {
    return {
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

//  reducers 

const reducer =(state=initialState,action) => {
 switch (action.type) {
     case FETCH_USERS_REQUEST:
         return {
             ...state,
             loading: true
         }
         case FETCH_USERS_SUCCESS:
         return {
             ...state,
             loading: false,
             users: action.payload,
             error:''
         }
         case FETCH_USERS_FAILURE:
         return {
             ...state,
             loading: false,
             users: [],
             error:action.payload
         }
         
         break;
 
     default:
         break;
 }
}

const store = createStore(reducer)