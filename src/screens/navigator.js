// navigation.js
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { authRoot, appRoot } from './layouts'
import options from '../config/navigation/options';

export const goToAuth = () => {
  options();
  authRoot();
};

export const goHome = () => {
  options();
  appRoot();
}

export const goOnboard = () => {
  options();
  onboardRoot();
}
