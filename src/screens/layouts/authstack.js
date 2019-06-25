import { Navigation } from 'react-native-navigation';

export function authRoot() {
  return Navigation.setRoot({
    root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login',
          }
        },
      ]
    }
  }
});
}

export default authRoot;
