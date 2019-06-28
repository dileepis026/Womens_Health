const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
const RESET_PASSWORD = 'RESET_PASSWORD';
import {initialState}  from '../initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case RESET_PASSWORD:
    return Object.assign({}, {
      fetching: true
    })
    case RESET_PASSWORD_SUCCESS:
    return Object.assign({}, {
      userResetPasswordAuth: action.response, success: true, failure: false, fetching: false
    })
    case RESET_PASSWORD_FAILURE:
     return Object.assign({}, {
       userResetPasswordAuth: action.error, success: false, failure : true, message:action.error["message"], fetching:false
    })
    default:
     return state
   }
}
