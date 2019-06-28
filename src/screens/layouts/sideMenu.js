import React from 'react';
import {bottomTabs as appTabs} from './homeTabs';

export const sideMenu = {
      left: {
        stack: {
         children: [
           {
        component: {
          name: 'Drawer',
          id: 'drawer'
          }
       }
     ]
   }
},
      center: {
        bottomTabs: appTabs,
      },
      options: {
        left: {
          width: 260,
          visible: true,
          enabled: true,
           }
         }
    };

export default sideMenu;
