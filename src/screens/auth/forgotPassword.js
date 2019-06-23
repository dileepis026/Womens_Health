import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container,Item, Input,Button} from 'native-base';
import {images} from '../../utils';


export default class ForgotPassword extends Component {

  static options(passProps) {
     return {
       topBar: {
         title: {
           text: 'Create a new password',
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
    Username:'',
    newPassword: '',
    confirmationCode: ''
    }
 }

 confirmNewPassword = (Navigation,componentId) => {

  Navigation.push(componentId, {
        component: {
        name: 'Login',
        passProps: {Navigation,componentId}

            }
        });
 }

// Get user input
 onChangeText(key, value) {
   this.setState({
     [key]: value
   })
 }

 render() {
   const logo = images.logo;
   const componentId = this.props.componentId;
    return (
      <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              {/* App Logo */}
                <View style={styles.logoContainer}>
                    <Image
                       source={logo}
                       style={styles.image}/>
              </View>

          <Container style={styles.infoContainer}>
            <View style={styles.container}>
            <Item style={styles.itemStyle}>
          <Ionicons name="ios-person" style={styles.iconStyle} />
          <Input
          style={styles.input}
                      placeholder='Username'
                      placeholderTextColor='#adb4bc'
                      selectionColor={'white'}
                      keyboardType={'email-address'}
                      returnKeyType='go'
                      autoCapitalize='none'
                      autoCorrect={false}
                      onChangeText={value => this.onChangeText('Username', value)}
                      />
        </Item>
      <Button block style={{marginTop:25,marginHorizontal:10, backgroundColor:'#ff1493'}} onPress={() => this.sendCode(Navigation,componentId)}>
      <Text style={styles.textStyle}>Send Code</Text>
      </Button>
      <Item style={styles.itemStyle}>
        <Ionicons name="ios-lock" style={styles.iconStyle} />
        <Input
                      style={styles.input}
                      placeholder='New password'
                      selectionColor={'white'}
                      placeholderTextColor='#adb4bc'
                      returnKeyType='next'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={true}
                      onChangeText={value => this.onChangeText('newPassword', value)}
                      onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
        />
      </Item>
      {/* Code confirmation section  */}
      <Item style={styles.itemStyle}>
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
                      ref='SecondInput'
        onChangeText={value => this.onChangeText('confirmationCode', value)}
                      />
      </Item>
      <Button block style={{marginTop:20,marginHorizontal:10, backgroundColor:'#ff1493'}} onPress={() => this.confirmNewPassword(Navigation,componentId)}>
      <Text style={styles.textStyle}>Confirm the new password</Text>
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
    backgroundColor: '#8a2be2'
  },
  itemStyle: {
    marginBottom: 20,
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
    flex: 0.4
  },
})
