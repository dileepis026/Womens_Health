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
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';
import {forgotPassword} from '../../redux/actions/forgotPassword';


export  class ForgotPassword extends Component {

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
    email:''
    }
 }

componentDidUpdate(prevProps, prevState) {
   if (this.props !== prevProps) {
      if (this.props.success && !prevProps.success) {
       const email = this.state.email;
       Navigation.push(this.props.componentId, {
       component: {
       name: 'ResetPassword',
       passProps: {email},
       options: {
      topBar: {
        title: {
          text: 'Reset Password'
        },
        backButton: {
        color: 'white'
           }
         }
       }
     }
   });
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





// forgot_Password users with Auth
  forgotPassword = async () => {
   const {email} = this.state;
   const emptyCredentials = [email].filter(e => !e.length)
    if (emptyCredentials.length) {
      Snackbar.show({
        title: "email is mandatory",
        duration: Snackbar.LENGTH_INDEFINITE,
        backgroundColor:'#000000',
        action: {
          title: 'UNDO',
           color: '#8a2be2',
         },
     });
        return;
      }

      try {
        this.props.forgotPassword(email);

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
    return (
      <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              {/* App Logo */}
                <View style={styles.logoContainer}>
                    <Image
                       source={logo}
                       style={styles.image}/>
              </View>
              <View style={{paddingHorizontal:25,marginTop:15}}>
              <Text style={{fontSize: 16,color: '#fff'}}>To reset your password, please enter  {'\n'} your
                    Register email address.
                    An  {'\n'}verification code  will be sent to that email address.
                    </Text>
                    </View>

          <Container style={styles.infoContainer}>
            <View style={styles.container}>
            <Item style={styles.itemStyle}>
          <Ionicons name="ios-mail"  style={styles.iconStyle} />
          <Input
          style={styles.input}
                      placeholder='Email'
                      placeholderTextColor='#adb4bc'
                      selectionColor={'white'}
                      keyboardType={'email-address'}
                      returnKeyType='go'
                      autoCapitalize='none'
                      autoCorrect={false}
                      onChangeText={value => this.onChangeText('email', value)}
                      />
        </Item>
      <Button block style={{marginTop:25,marginHorizontal:10, backgroundColor:'#ff1493'}} onPress={this.forgotPassword}>
      <Text style={styles.textStyle}>Forgot Password</Text>
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
  userForgotPasswordAuth: state.ForgotPassword.userConfirmSignUpAuth,
  fetching: state.ForgotPassword.fetching,
  success: state.ForgotPassword.success,
  failure: state.ForgotPassword.failure,
  errorMessage: state.ForgotPassword.message
})

const mapDispatchToProps = {
  forgotPassword
}

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword);
