import React, {Component} from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import data from '../../mockData/countriesData';
import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';
import { Container, Content, Item, Input, Button, View, Text} from 'native-base';
import Snackbar from 'react-native-snackbar';
import { Auth } from 'aws-amplify';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/registration';


// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'India'
)[0].flag;

// Default render of country code
const defaultCode = data.filter(
  obj => obj.name === 'India'
)[0].dial_code;


export class Registration extends Component {

  static options(passProps) {
     return {
       topBar: {
         title: {
           text: 'Create a new account',
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
    name:'',
    email: '',
    password: '',
    birthdate: '',
    locale: '',
    phoneNumber: '',
    flag: defaultFlag,
    modalVisible: false,
    authCode: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
       if (this.props.success && !prevProps.success) {
        const email = this.state.email;
        Navigation.push(this.props.componentId, {
        component: {
        name: 'ConfirmSignUp',
        passProps: {email},
        options: {
       topBar: {
         title: {
           text: 'Confirm Sign Up'
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

// Get user input
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }


  // Functions for Phone Input
  showModal() {
    this.setState({ modalVisible: true })
    // console.log('Shown')
  }
  hideModal() {
    this.setState({ modalVisible: false })
    // refocus on phone Input after selecting country and/or closing Modal
    this.refs.FourthInput._root.focus()
    // console.log('Hidden')
  }


  async getCountry(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag
      // Set data from user choice of country
      this.setState({ phoneNumber: countryCode, flag: countryFlag })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }
// Sign up user with AWS Amplify Auth
signUp = async () => {

 const {
  name,
  email,
  password,
  birthdate,
  locale,
  phoneNumber
} = this.state;

const emptyCredentials = [name,email,password,birthdate,locale,phoneNumber].filter(e => !e.length)
 if (emptyCredentials.length) {
   Snackbar.show({
     title: "All fields are required",
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
     name: name,
     email: email,
     password: password,
     birthdate: birthdate,
     locale: locale,
     phoneNumber: phoneNumber

   }
   try {
        this.props.register(payload);
      }catch(error) {
   }
}


render() {
  const  flag = this.state.flag;
   const countryData = data;
   const window = Dimensions.get('window');

    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.container}>
      <Container style={styles.infoContainer}>

      <View style={styles.container}>

      {/* username section  */}
            <Item style={styles.itemStyle}>
            <Ionicons name="ios-person" style={styles.iconStyle} />
            <Input
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='#adb4bc'
                    selectionColor={'white'}
                    keyboardType={'email-address'}
                    returnKeyType='next'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={(event) => {this.refs.SecondInput._root.focus()}}
                    onChangeText={value => this.onChangeText('name', value)}
            />
          </Item>

          {/* email section */}
            <Item  style={styles.itemStyle}>
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
                      secureTextEntry={false}
                      ref='SecondInput'
                      onSubmitEditing={(event) => {this.refs.ThirdInput._root.focus()}}
                      onChangeText={value => this.onChangeText('email', value)}
                      />
            </Item>

            {/*  password section  */}
           <Item  style={styles.itemStyle}>
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
                    ref='ThirdInput'
                    onSubmitEditing={(event) => {this.refs.FourthInput._root.focus()}}
                    onChangeText={value => this.onChangeText('password', value)}/>
            </Item>

            {/*  calendar section  */}
            <Item  style={styles.itemStyle}>
            <Ionicons name="ios-calendar" style={styles.iconStyle} />
            <Input
              style={styles.input}
               placeholderTextColor='#adb4bc'
               selectionColor={'white'}
               returnKeyType='next'
               autoCapitalize='none'
               autoCorrect={false}
               ref='FourthInput'
               onSubmitEditing={(event) => {this.refs.FifthInput._root.focus()}}
              />
          <DatePicker
           date={this.state.birthdate}
           style={{width: 300}}
           mode="date"
           format="YYYY-MM-DD"
           confirmBtnText="Confirm"
           cancelBtnText="Cancel"
           customStyles={{
             dateText: {
               color: 'white',
                 fontSize: 18,
                 fontWeight: 'bold'
             },
             dateInput: {
             borderWidth: 1.5,
             }
          }}
           onDateChange={(date) => this.onChangeText('birthdate', date)}
         />
            </Item>

            {/* map section  */}
            <Item  style={styles.itemStyle}>
            <Ionicons name="ios-map" style={styles.iconStyle} />
              <Input
              style={styles.input}
               placeholder='Location'
               placeholderTextColor='#adb4bc'
               selectionColor={'white'}
               returnKeyType='next'
               autoCapitalize='none'
               autoCorrect={false}
               ref='FifthInput'
               onSubmitEditing={(event) => {this.refs.SixthInput._root.focus()}}
              onChangeText={value => this.onChangeText('locale', value)}/>
            </Item>

              {/* phone section  */}
               <Item  style={styles.itemStyle} >
                <Ionicons name="ios-call"  style={styles.iconStyle} />
                {/* country flag */}
                <View><Text style={{fontSize: 40}}>{flag}</Text></View>
                 {/* open modal */}
                <Ionicons name="md-arrow-dropdown"
                    style={[styles.iconStyle, { marginLeft: 5 }]}
                    onPress={() => this.showModal()}
                      />
             <Input
              style={styles.input}
                      placeholder='+917665544336'
                      placeholderTextColor='#adb4bc'
                      selectionColor={'white'}
                      keyboardType={'phone-pad'}
                      returnKeyType='done'
                      autoCapitalize='none'
                      autoCorrect={false}
                      ref='SixthInput'
                      value={this.state.phoneNumber}
                      onChangeText={(val) => {
                        if (this.state.phoneNumber===''){
                          // render UK phone code by default when Modal is not open
                          this.onChangeText('phoneNumber', defaultCode + val)
                        } else {
                          // render country code based on users choice with Modal
                          this.onChangeText('phoneNumber', val)
                        }}
                      }
                      />
                      {/* Modal for country code and flag */}
                      <Modal
                      animationType="slide" // fade
                      transparent={false}
                      visible={this.state.modalVisible}>
                      <View style={{ flex: 1 }}>
                        <View style={{ flex: 10, paddingTop: 80, backgroundColor: '#5059ae' }}>
                          <FlatList
                            data={countryData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                              ({ item }) =>
                                <TouchableWithoutFeedback
                                  onPress={() => this.getCountry(item.name)}>
                                  <View
                                    style={
                                      [
                                        styles.countryStyle,
                                        {
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'space-between'
                                        }
                                      ]
                                    }>
                                    <Text style={{fontSize: 45}}>
                                      {item.flag}
                                    </Text>
                                    <Text style={{fontSize: 20, color: '#fff'}}>
                                      {item.name} ({item.dial_code})
                                    </Text>
                                  </View>
                                </TouchableWithoutFeedback>
                            }
                          />
                        </View>
                        <TouchableOpacity
                          onPress={() => this.hideModal()}
                          style={styles.closeButtonStyle}>
                          <Text style={styles.textStyle}>
                            Close
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>
                  </Item>
                  {/* End of phone input */}
     <Button block style={{marginTop:20,marginHorizontal:10, backgroundColor:'#ff1493'}} id='signUpBtn' onPress={this.signUp}>
          <Text style={styles.textStyle}>Sign Up</Text>
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
    backgroundColor: '#8a2be2',
    paddingVertical: 50,
    flexDirection: 'column'
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
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#b44666',
    padding: 14,
    marginBottom: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
  textStyle: {
    padding: 5,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#5059ae',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#b44666',
  }
})
const mapStateToProps = state => ({
  userSignUpAuth: state.Registration.userSignUpAuth,
  fetching: state.Registration.fetching,
  success: state.Registration.success,
  failure: state.Registration.failure,
  errorMessage: state.Registration.message

})

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration)
