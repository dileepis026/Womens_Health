const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
import {initialState}  from '../initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case FORGOT_PASSWORD:
    return Object.assign({}, {
      fetching: true
    })
    case FORGOT_PASSWORD_SUCCESS:
    return Object.assign({}, {
      userForgotPasswordAuth: action.response, success: true, failure: false, fetching: false
    })
    case FORGOT_PASSWORD_FAILURE:
     return Object.assign({}, {
       userForgotPasswordAuth: action.error, success: false, failure : true, message:action.error["message"], fetching:false
    })
    default:
     return state
   }
}
