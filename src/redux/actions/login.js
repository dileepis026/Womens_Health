const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN = 'LOGIN';
import { Auth } from 'aws-amplify';

// Action Creator 1..
const login = (payload) => dispatch => {
  const email = payload.email;
  const password = payload.password;
      authAPI(email,password).then((response) => {
    console.log("login details",response)
    dispatch ({
      type: LOGIN_SUCCESS,
      response
    })
  }).catch(error => {
    dispatch ({
      type: LOGIN_FAILURE,
      error
     })
  });
}


// Action Creator 2..
const requestData = (data) => {
 dispatch ({
   type: LOGIN,
   data
 });
};


authAPI = (email,password) =>  Auth.signIn(email,password);



export {login,requestData};
