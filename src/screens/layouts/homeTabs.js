import React from 'react';
import {icons} from '../../utils';

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
            icon: icons.home,
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
            name: 'History',
            passProps: {
              text: 'This is history tab',
            }
           }
         }],
         options: {
           bottomTab: {
             text: 'History',
             icon: icons.history,
             testID: 'SECOND_TAB_BAR_BUTTON',
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
           name: 'Search',
           passProps: {
             text: 'This is search tab',
           }
          }
        }],
        options: {
          bottomTab: {
            text: 'Search',
            icon: icons.search,
            testID: 'THIRD_TAB_BAR_BUTTON',
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

     },
   }
 };

 export default bottomTabs;
