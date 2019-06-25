// Initializing.js
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import {images} from '../utils';
import { goToAuth, goHome } from './navigator';
import { Auth } from 'aws-amplify';


export default class AuthLoading extends Component {

  constructor(props) {
     super(props);
     this.state = {
       userToken: null
     }
 }

 componentDidMount() {
    StatusBar.setHidden(true, 'none');
    setTimeout(
      () => this.navigate(),
      2000
    )
  }

  componentWillUnmount() {
    StatusBar.setHidden(false, 'fade');
  }


// Get the logged in users and remember them
navigate = async () => {
  await Auth.currentAuthenticatedUser()
  .then(user => {
    this.setState({userToken: user.signInUserSession.accessToken.jwtToken});
    console.log("user token----->>>",this.state.userToken);
      if (this.state.userToken != null) {
        goHome();
      } else {
        goToAuth();
      }
 })
 .catch(err => console.log(err));
   goToAuth();
 }
 render() {
     return (
       <View style={styles.container}>
         <Image
           source={images.logo_transparent}
           style={{ width: 140, height: 140, resizeMode: 'cover' }}
         />
       </View>
     )
   }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
