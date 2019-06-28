import { Navigation } from 'react-native-navigation';
import Screens from './src/initScreen';

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:77dcf386-0c54-44c4-b602-9c189dfe5671',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "WeatherBot": {
        "name": "WeatherBot",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});

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
