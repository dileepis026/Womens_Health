import { Navigation } from 'react-native-navigation';
import sideMenu from './sideMenu';

export function appRoot() {
  return Navigation.setRoot({
    root: {
      sideMenu,
    },
  });
}

export default appRoot;
