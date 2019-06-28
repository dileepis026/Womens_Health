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
import { goToAuth } from '../navigator';
import { Auth } from 'aws-amplify';
import {connect} from 'react-redux';
import {confirmRegister} from '../../redux/actions/confirmSignUp';


export class ConfirmSignUp extends Component {

  static options(passProps) {
     return {
       topBar: {
         title: {
           text: 'Forgot Password',
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
    authCode: '',
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

// Get user input
 onChangeText(key, value) {
   this.setState({
     [key]: value
   })
 }

 // resend verification code...
 resendCode = async () => {


 }


 // confirmationCode for users  for email verification..
  confirmationCode = async () => {
    const {authCode} = this.state;
    const {email} = this.props;
    const emptyCredentials = [authCode].filter(e => !e.length)
     if (emptyCredentials.length) {
       Snackbar.show({
         title: "Confirmation code are mandatory",
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
         authCode: authCode
       }

       try {
         this.props.confirmRegister(payload);

       }catch(error) {

       }
    }

 render() {

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
             onChangeText={value => this.onChangeText('authCode', value)}/>
        </Item>
      <Button block style={{marginTop:25,backgroundColor:'#ff1493'}} onPress={this.confirmationCode}>
      <Text style={styles.textStyle}> Confirm Sign Up</Text>
      </Button>
      <Button block style={{marginTop:20, backgroundColor:'#ff1493'}} onPress={this.resendCode}>
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
})

const mapStateToProps = state => ({
  userConfirmSignUpAuth: state.ConfirmSignUp.userConfirmSignUpAuth,
  fetching: state.ConfirmSignUp.fetching,
  success: state.ConfirmSignUp.success,
  failure: state.ConfirmSignUp.failure,
  errorMessage: state.ConfirmSignUp.message
})

const mapDispatchToProps = {
  confirmRegister
}

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmSignUp);
