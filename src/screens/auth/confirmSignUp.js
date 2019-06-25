import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container,Item, Input, Button, Icon} from 'native-base';
import Snackbar from 'react-native-snackbar';
import { Auth } from 'aws-amplify';



export default class ConfirmSignUp extends Component {

  static options(passProps) {
     return {
       topBar: {
         title: {
           text: 'Confirm Sign Up',
           color: 'white'
         },
         background: {
           color: '#ff1493'
        }
      }
 }
}

constructor(props) {
   super(props);
   this.state = {
    confirmationCode: '',
   }
}

// Get user input
 onChangeText(key, value) {
   this.setState({
     [key]: value
   })
 }

 async confirmationCode(Navigation,componentId) {

   const email = "dileepis026@gmail.com";
   const authCode = "823278";
    await Auth.confirmSignUp(email, authCode)
    .then(() => {
      console.log('Confirm sign up successful');
    })
    .catch(err => {
      console.log(err);
    })


 }

 render() {

   const componentId = this.props.componentId;

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.container}>
    <Container style={styles.infoContainer}>

    <View style={styles.container}>

      {/* confirm section  */}

        <Item>
          <Ionicons name="md-apps" style={styles.iconStyle} />
          <Input
          style={styles.input}
                    placeholder='Confirmation code'
                    placeholderTextColor='#adb4bc'
                    selectionColor={'white'}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={false}
             onChangeText={value => this.onChangeText('confirmationCode', value)}/>
        </Item>
      <Button block style={{marginTop:25,backgroundColor:'#ff1493'}} onPress={() => this.confirmationCode(Navigation,componentId)}>
      <Text style={styles.textStyle}> Confirm Sign Up</Text>
      </Button>
      <Button block style={{marginTop:20, backgroundColor:'#ff1493'}} onPress={() => this.resendCode(Navigation,componentId)}>
      <Text style={styles.textStyle}>Resend Code</Text>
      </Button>
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
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
})
