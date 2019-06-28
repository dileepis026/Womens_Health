const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN = 'LOGIN';
import {initialState}  from '../initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
    return Object.assign({}, {
        fetching: true
    })
    case LOGIN_SUCCESS:
    return Object.assign({}, {
      userAuth: action.response, success: true, failure: false, fetching: false
    })
    case LOGIN_FAILURE:
     return Object.assign({}, {
       userAuth: action.error, success: false, failure : true, message:action.error["message"], fetching:false
    })
    default:
     return state
   }
}
