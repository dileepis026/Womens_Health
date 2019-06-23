import {Navigation} from 'react-native-navigation';
import registerScreens from './navScreen';
import {Platform} from 'react-native';

registerScreens();

// start the app
Navigation.events().registerAppLaunchedListener(() => {
Navigation.setRoot({
  root: {
    stack: {
      options: {
        topBar: {
          visible: true,
          title: {
             color: 'white',
             fontSize: 18
               },
              background: {
               color: '#5f9ea0'
             }
        }
      },
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
})
