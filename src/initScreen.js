import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Login,Registration,ForgotPassword,ConfirmSignUp} from './screens/auth';
import  Home from './screens/home';
import  Drawer from './screens/drawer';
import  History from './screens/history';
import  Search from './screens/search';
import  Dashboard from './screens/dashboard';
import  Chatbot from './screens/chatbot';
import  LearnMore from './screens/learnMore';
import  Track from './screens/track';
import AuthLoading from './screens/authLoading';


const registerScreens = () => {

Navigation.registerComponentWithRedux('Home',() => Home);
Navigation.registerComponentWithRedux('Login',() => Login);
Navigation.registerComponentWithRedux('Registration',() => Registration);
Navigation.registerComponentWithRedux('ForgotPassword',() => ForgotPassword);
Navigation.registerComponentWithRedux('ConfirmSignUp',() => ConfirmSignUp);
Navigation.registerComponentWithRedux('Drawer',() =>  Drawer);
Navigation.registerComponentWithRedux('Dashboard',() => Dashboard);
Navigation.registerComponentWithRedux('Chatbot',() => Chatbot);
Navigation.registerComponentWithRedux('LearnMore',() => LearnMore);
Navigation.registerComponentWithRedux('Track',() => Track);
Navigation.registerComponentWithRedux('History',() => History);
Navigation.registerComponentWithRedux('Search',() => Search);
Navigation.registerComponentWithRedux('AuthLoading',() => AuthLoading);

console.info('All screens have been registered...');

};

export default registerScreens;
