import { Navigation } from 'react-native-navigation';

export function options() {
  return Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893',
      },
      title: {
        color: 'white',
        fontFamily: 'Roboto-Medium'
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white',
      },
      buttonColor: 'white',
      animate: true
    },
    statusBar: {
      style: 'light',
      visible: true,
      backgroundColor: '#008080'
    },
    layout: {
      direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
      backgroundColor: 'white',
      orientation: ['portrait'] // An array of supported orientations
    },
    overlay: {
      interceptTouchOutside: true,
      handleKeyboardEvents: true
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      visible: true,
      animate: true,
      drawBehind: false,
      backgroundColor: '#039893'
    },
    bottomTab: {
      iconColor: 'black',
      selectedIconColor: 'white',
      textColor: 'black',
      selectedTextColor: 'white',
      fontSize: 10,
      fontFamily: 'Roboto-Medium',
    },
  });
}

export default options;
