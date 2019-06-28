const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
const RESET_PASSWORD = 'RESET_PASSWORD';
import { Auth } from 'aws-amplify';


// Action Creator
const resetPassword = (payload) => dispatch => {
  const email = payload.email;
  const password = payload.password;
  const authCode = payload.authCode;
      authResetPasswordAPI(email,authCode,password).then((response) => {
    console.log("reset Password response...",response)
    dispatch ({
      type: RESET_PASSWORD_SUCCESS,
      response
    })
  }).catch(error => {
    dispatch ({
      type: RESET_PASSWORD_FAILURE,
      error
     })
  });
}



authResetPasswordAPI = (email,authCode,password) =>  Auth.forgotPasswordSubmit(email,authCode,password);


export {resetPassword};
