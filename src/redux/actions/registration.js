const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const REGISTER = 'REGISTER';
import { Auth } from 'aws-amplify';

// Action Creator
const register = (payload) => dispatch => {
  const name = payload.name;
  const email = payload.email;
  const password = payload.password;
  const birthdate = payload.birthdate;
  const locale = payload.locale;
  const phoneNumber = payload.phoneNumber;
  // rename variable to conform with Amplify Auth field phone attribute
    const phone_number = phoneNumber
      authRegisterAPI(name,email,password,birthdate,locale,phone_number).then((response) => {
    console.log("register details",response)
    dispatch ({
      type: REGISTER_SUCCESS,
      response
    })
  }).catch(error => {
    dispatch ({
      type: REGISTER_FAILURE,
      error
     })
  });
}


authRegisterAPI = (name,email,password,birthdate,locale,phone_number) =>  Auth.signUp({
  username: email,
   password,
   attributes: {name, phone_number, birthdate, locale}
 });



export {register};
