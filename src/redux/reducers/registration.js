const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const REGISTER = 'REGISTER';
import {initialState}  from '../initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case REGISTER:
    return Object.assign({}, {
       fetching: true
    })
    case REGISTER_SUCCESS:
    return Object.assign({}, {
      userSignUpAuth: action.response, success: true, failure: false, fetching: false
    })
    case REGISTER_FAILURE:
     return Object.assign({}, {
       userSignUpAuth: action.error, success: false, failure : true, message:action.error["message"], fetching:false
    })
    default:
     return state
   }
}
