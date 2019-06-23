import React from 'react';
import {icons} from '../utils';

export const bottomTabs = {
  id: 'HomeBottomTabsId',
  children: [
    {
      stack: {
        children: [{
          component: {
            name: 'Home',
            passProps: {
              text: 'This is home tab',
            },
          },
        }],
        options: {
          bottomTab : {
            text: 'Home',
            icon: icons.calendar,
            testID: 'FIRST_TAB_BAR_BUTTON',
            iconColor: '#000000',
            selectedIconColor: 'white',
            textColor: '#000000',
            selectedTextColor: 'white'
          },
        },
      },
    },
    {
      stack: {
        children: [{
          component: {
            name: 'Track',
            passProps: {
              text: 'This is Search Screen',
            }
           }
         }],
         options: {
           bottomTab: {
             text: 'Track',
             icon: icons.search,
             testID: 'SECOND_TAB_BAR_BUTTON',
             iconColor: '#000000',
             selectedIconColor: 'white',
             textColor: '#000000',
             selectedTextColor: 'white'
           }
        }
     }
   }],
   options: {
     bottomTabs: {
       backgroundColor: '#5f9ea0'
     },
   }
 };

 export default bottomTabs;
