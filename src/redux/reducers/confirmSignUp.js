const REGISTER_CONFIRM_SUCCESS = 'REGISTER_CONFIRM_SUCCESS';
const REGISTER_CONFIRM_FAILURE = 'REGISTER_CONFIRM_FAILURE';
const REGISTER_CONFIRM = 'REGISTER_CONFIRM';
import {initialState}  from '../initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_CONFIRM:
    return Object.assign({}, {
        fetching: true
    })
    case REGISTER_CONFIRM_SUCCESS:
    return Object.assign({}, {
      userConfirmSignUpAuth: action.response, success: true, failure: false, fetching: false
    })
    case REGISTER_CONFIRM_FAILURE:
     return Object.assign({}, {
       userConfirmSignUpAuth: action.error, success: false, failure : true, message:action.error["message"], fetching:false
    })
    default:
     return state
   }
}
