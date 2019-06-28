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
import Snackbar from 'react-native-snackbar';
import {images} from '../../utils';
import {connect} from 'react-redux';
import {resetPassword} from '../../redux/actions/resetPassword';
import { goToAuth } from '../navigator';


export  class ResetPassword extends Component {

  static options(passProps) {
     return {
       topBar: {
         title: {
           text: 'Reset Password',
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
    password: '',
    authCode: ''
    }
 }

componentDidUpdate(prevProps, prevState) {
   if (this.props !== prevProps) {
      if (this.props.success && !prevProps.success) {
       goToAuth();
     }
     if (this.props.failure && !prevProps.failure) {
       Snackbar.show({
         title: this.props.errorMessage,
         duration: Snackbar.LENGTH_INDEFINITE,
         backgroundColor:'#000000',
         action: {
           title: 'UNDO',
            color: '#8a2be2',
          },
      });
     }
   }
 }
  resetPassword = async () => {

  const {password,authCode} = this.state;
  const {email} = this.props;
  const emptyCredentials = [password,authCode].filter(e => !e.length)
   if (emptyCredentials.length) {
     Snackbar.show({
       title: "All fields are are mandatory",
       duration: Snackbar.LENGTH_INDEFINITE,
       backgroundColor:'#000000',
       action: {
         title: 'UNDO',
          color: '#8a2be2',
        },
    });
       return;
     }
     const payload = {
       email: email,
       authCode: authCode,
       password: password
  }
   try {
       this.props.resetPassword(payload);

     }catch(error) {

     }
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
            <Container style={styles.infoContainer}>
            <View style={styles.container}>
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
                      onChangeText={value => this.onChangeText('password', value)}
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
        onChangeText={value => this.onChangeText('authCode', value)}
                      />
      </Item>
      <Button block style={{marginTop:20,marginHorizontal:10, backgroundColor:'#ff1493'}} onPress={this.resetPassword}>
      <Text style={styles.textStyle}>Reset Password</Text>
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
    fontSize: 18,
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
const mapStateToProps = state => ({
  userResetPasswordAuth: state.ResetPassword.userConfirmSignUpAuth,
  fetching: state.ResetPassword.fetching,
  success: state.ResetPassword.success,
  failure: state.ResetPassword.failure,
  errorMessage: state.ResetPassword.message
})

const mapDispatchToProps = {
  resetPassword
}

export default connect(mapStateToProps,mapDispatchToProps)(ResetPassword);
