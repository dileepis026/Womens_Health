import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class  Dashboard extends Component {

  static options(passProps) {
     return {
       topBar: {
         title: {
           text: 'Dashboard',
           color: 'white'
         },
         background: {
           color: '#ff1493'
        }
      }
 }
}

render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to dashboard Screen!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
