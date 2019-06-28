const REGISTER_CONFIRM_SUCCESS = 'REGISTER_CONFIRM_SUCCESS';
const REGISTER_CONFIRM_FAILURE = 'REGISTER_CONFIRM_FAILURE';
const REGISTER_CONFIRM = 'REGISTER_CONFIRM';
import { Auth } from 'aws-amplify';

// Action Creator
const confirmRegister = (payload) => dispatch => {
  const email = payload.email;
  const authCode = payload.authCode;
      authConfirmRegisterAPI(email,authCode).then((response) => {
    console.log("confirmRegister details...",response)
    dispatch ({
      type: REGISTER_CONFIRM_SUCCESS,
      response
    })
  }).catch(error => {
    dispatch ({
      type: REGISTER_CONFIRM_FAILURE,
      error
     })
  });
}



authConfirmRegisterAPI = (email,authCode) =>  Auth.confirmSignUp(email,authCode);


export {confirmRegister};
