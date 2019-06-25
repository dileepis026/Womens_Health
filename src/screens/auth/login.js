import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Animated
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';
import { Container, Item, Input, Button} from 'native-base';
import sideMenu from '../layouts/sideMenu';
import {images} from '../../utils';
import Snackbar from 'react-native-snackbar';
import { goToAuth, goHome } from '../navigator';
import { Auth } from 'aws-amplify';


export default class Login extends Component {

  static options(passProps) {
    return {
         topBar: {
           visible: false
     }
  }
}

 constructor(props) {
    super(props);
    this.state = {
     email: '',
     password: '',
     fadeIn:  new Animated.Value(0),
     fadeOut: new Animated.Value(0),
     isHidden: false
    }
}


// Get user input
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }






  // Sign in users with Auth
 async getStarted(Navigation,componentId) {

  const { email, password } = this.state
    await Auth.signIn(email,password)
    .then((user) => {
      console.log(user);
      goHome();
})
 .catch((err) => {
   console.log(err)
   Snackbar.show({
title: err["message"],
duration: Snackbar.LENGTH_INDEFINITE,
backgroundColor:'#ff1493',
action: {
 title: 'UNDO',
 color: 'black',
 onPress: () => { /* Do something. */ },
},
});
   })

}


  createAccount = (Navigation,componentId) => {

   Navigation.push(componentId, {
         component: {
         name: 'Registration',
         passProps: {Navigation,componentId},
         options: {
        topBar: {
          title: {
            text: 'Create a new account'
          },
          backButton: {
          color: 'white'
             }
           }
         }
       }
         });
}

forgotPassword = (Navigation,componentId) => {

 Navigation.push(componentId, {
       component: {
       name: 'ForgotPassword',
       passProps: {Navigation,componentId},
       options: {
      topBar: {
        title: {
          text: 'Create a new password'
        },
        backButton: {
        color: 'white'
           }
         }
       }
     }
       });
}

   render() {
  const componentId = this.props.componentId;
  const logo = images.logo;
  let { fadeOut, fadeIn, isHidden } = this.state;

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.container}>
          {/* App Logo */}
              <View style={styles.logoContainer}>
                <Image
                   source={logo}
                   style={styles.image}/>
                   <Text style={styles.logoTextStyle}>Womens Health</Text>
              </View>
       <Container style={styles.infoContainer}>
        <View style={styles.container}>
        <Item style={styles.itemStyle}>
          <Ionicons name="ios-mail" style={styles.iconStyle} />
            <Input
                 style={styles.input}
                 placeholder='Email'
                 placeholderTextColor='#adb4bc'
                 selectionColor={'white'}
                 keyboardType={'email-address'}
                 returnKeyType='next'
                 autoCapitalize='none'
                 autoCorrect={false}
                 onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                 onChangeText={value => this.onChangeText('email', value)}
                 />
              </Item>

          <Item style={styles.itemStyle}>
            <Ionicons name="ios-lock" style={styles.iconStyle} />
                <Input
                 style={styles.input}
                 placeholder='Password'
                 placeholderTextColor='#adb4bc'
                 selectionColor={'white'}
                 returnKeyType='next'
                 autoCapitalize='none'
                 autoCorrect={false}
                 secureTextEntry={true}
                 ref='SecondInput'
                 onChangeText={value => this.onChangeText('password', value)}
                 />
              </Item>
            <Button block  style={{marginTop:50,paddingHorizontal: 25, backgroundColor:'#ff1493'}} onPress={() => this.getStarted(Navigation,componentId)}>
            <Text style={styles.textStyle}>GET STARTED</Text>
            </Button>
            <View style={{flexDirection: 'row'}}>
            <Button block transparent style={{marginTop:20,marginRight:10}} onPress={() => this.createAccount(Navigation,componentId)}>
            <Text  style={styles.textStyle}>Create Account</Text>
            </Button>
            <Button block   transparent style={{marginTop:20}} onPress={() => this.forgotPassword(Navigation,componentId)}>
            <Text style={styles.textStyle}>Forgot Password?</Text>
            </Button>
            </View>
            </View>
            </Container>
            </View>
      </SafeAreaView>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#8a2be2'
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    backgroundColor: '#8a2be2',
  },
  itemStyle: {
    marginBottom: 10,
  },
  iconStyle: {
    color: '#fff',
    fontSize: 28,
    marginRight: 15
  },
  logoTextStyle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 140/2,
    borderColor: 'grey',
    borderWidth: 1.5,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 0.5
  },
})
