import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {icons} from '../utils';
import { Navigation } from "react-native-navigation";


export default class  History extends Component {

  static  get options() {
     return {
       topBar: {
         title: {
           text: 'History',
         },
         drawBehind: false,
         visible: true,
         animate: false,
         hideOnScroll: true,
         leftButtons:[{
           id:'menuBtn',
           icon: icons.menu,
           color:'white',
           buttonFontSize: 15,
           buttonFontWeight: '600',
          }],
       },
   };
}


constructor(props) {
  super(props);
  this.state = {
   selected: false
  };
}

componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
      if (this.navigationEventListener) {
        this.navigationEventListener.remove();
      }
    }

 navigationButtonPressed({ buttonId }) {
   if (buttonId === "menuBtn"){
     if(this.state.selected === false) {
    Navigation.mergeOptions(this.props.componentId, {
     sideMenu: {
       left: {
         visible: true,
         component: {
           name: 'Drawer'
          }
       }
     }
   });
   this.setState({ selected : true});
}
 else {
   Navigation.mergeOptions(this.props.componentId, {
    sideMenu: {
      left: {
        visible: false,
        component: {
          name: 'Drawer'
        }
      }
    }
  });
   this.setState({ selected : false});
     }
   }
 }



 render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to History</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87ceeb',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});
