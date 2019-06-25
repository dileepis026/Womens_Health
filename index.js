import { Navigation } from 'react-native-navigation';
import Screens from './src/initScreen';

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

// register screens
Screens();

// start the app
Navigation.events().registerAppLaunchedListener(() => {
Navigation.setRoot({
  root: {
    component: {
            name: 'AuthLoading',
          },
        },
    });
});
