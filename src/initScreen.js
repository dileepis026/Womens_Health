import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Login,Registration,ForgotPassword,ConfirmSignUp,ResetPassword} from './screens/auth';
import  Home from './screens/home';
import  Drawer from './screens/drawer';
import  History from './screens/history';
import  Search from './screens/search';
import  Dashboard from './screens/dashboard';
import  Chatbot from './screens/chatbot';
import  LearnMore from './screens/learnMore';
import  Track from './screens/track';
import AuthLoading from './screens/authLoading';

import {Provider} from 'react-redux';
import Store from './redux/store';


const registerScreens = () => {

Navigation.registerComponentWithRedux('Home',() => Home, Provider, Store);
Navigation.registerComponentWithRedux('Login',() => Login, Provider, Store);
Navigation.registerComponentWithRedux('Registration',() => Registration, Provider, Store);
Navigation.registerComponentWithRedux('ForgotPassword',() => ForgotPassword, Provider, Store);
Navigation.registerComponentWithRedux('ResetPassword',() => ResetPassword, Provider, Store);
Navigation.registerComponentWithRedux('ConfirmSignUp',() => ConfirmSignUp, Provider, Store);
Navigation.registerComponentWithRedux('Drawer',() =>  Drawer, Provider, Store);
Navigation.registerComponentWithRedux('Dashboard',() => Dashboard, Provider, Store);
Navigation.registerComponentWithRedux('Chatbot',() => Chatbot, Provider, Store);
Navigation.registerComponentWithRedux('LearnMore',() => LearnMore, Provider, Store);
Navigation.registerComponentWithRedux('Track',() => Track, Provider, Store);
Navigation.registerComponentWithRedux('History',() => History, Provider, Store);
Navigation.registerComponentWithRedux('Search',() => Search, Provider, Store);
Navigation.registerComponentWithRedux('AuthLoading',() => AuthLoading, Provider, Store);

console.info('All screens have been registered...');

};

export default registerScreens;
