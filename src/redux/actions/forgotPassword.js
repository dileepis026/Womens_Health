const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
const FORGOT_PASSWORD= 'FORGOT_PASSWORD';
import { Auth } from 'aws-amplify';


// Action Creator
const forgotPassword = (email) => dispatch => {
      authForgotPasswordAPI(email).then((response) => {
    console.log("forgot Password response...",response)
    dispatch ({
      type: FORGOT_PASSWORD_SUCCESS,
      response
    })
  }).catch(error => {
    dispatch ({
      type: FORGOT_PASSWORD_FAILURE,
      error
     })
  });
}



authForgotPasswordAPI= (email) =>  Auth.forgotPassword(email);


export {forgotPassword};
