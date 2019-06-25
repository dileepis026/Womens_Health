import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Alert,
    StyleSheet,
    AsyncStorage
} from 'react-native';
 import Icon from 'react-native-vector-icons/Feather';
 import {Avatar} from 'react-native-paper'
import { Grid, Row } from 'react-native-easy-grid'
import LinearGradient from 'react-native-linear-gradient';
import { goToAuth} from './navigator';
import { Auth } from 'aws-amplify';
import {Navigation} from 'react-native-navigation';


 const styles = StyleSheet.flatten({
    icon: {
        width: 18,
        marginTop: 3,
    },
    rnvicon: {
        width: 18,
    },
    sidebarItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: '85%', // <---
        paddingLeft: 30,
        paddingTop: 10,
    },
    logout: {
        padding: 10,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        height: 40,
        color: '#454F63',
        paddingRight: 200,
        marginTop: 15,
    },
    iconText: {
        padding: 10,
        marginVertical: 5,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        height: 40,
        color: '#454F63',
    },
    nameText: {
        color: '#FFF',
        marginTop: 8,
        marginBottom: 5,
        fontFamily: 'Roboto-Medium',
    },
    emailText: {
        color: '#FFF',
        fontSize: 12,
        fontFamily: 'Roboto-Medium',
    }
});

const sidebar_items = [
  {
    name: "Dashboard",
    icon: "box",
    route: "dashboard",

  },
  {
    name: "Track",
    icon: "navigation",
    route: "track",

  },
  {
    name: "Learn More",
    icon: "book",
    route: "learnMore",

  },
  {
    name: "Chatbox",
    icon: "message-square",
    route: "chatbot",

  }
];



export default class  Drawer extends Component {

  static get options() {
      return {
        topBar: {
              title: {
                  text: 'Drawer'
              },
              visible: false,
              drawBehind: true,
              animate: false
          },
          layout: {
              backgroundColor: 'white',
          }
      };
  }

  constructor(props) {
        super(props)
    }

  signOut = async () => {

    await Auth.signOut()
    .then(() => {
      console.log('Sign out complete')
      goToAuth();
    })
    .catch(err => console.log('Error while signing out!', err))
  }

   render() {
     return (
       <Grid style={{ display: 'flex', backgroundColor: '#FFF' }}>
                   <Row size={1}>
                       <LinearGradient
                           style={{
                               flex: 1,
                               display: 'flex',
                               justifyContent: 'center',
                           }}
                           colors={['#329999', '#008080']}
                       >
                           <View
                               style={{
                                   flex: 1,
                                   display: 'flex',
                                   justifyContent: 'center',
                                   paddingLeft: 30,
                               }}
                           >
                               <TouchableOpacity
                                   onPress={() => {}}
                                   style={{
                                       flexGrow: 1,
                                   }}
                               >
                                   <Avatar.Icon
                                       size={70}
                                       icon="person"
                                       style={{
                                           height: '36%', width: '30%',
                                           marginTop: 75,backgroundColor:'#5f9ea0'
                                       }}
                                   />
                                   <View style={{ marginBottom: 10 }}>
                                       <Text
                                           adjustsFontSizeToFit
                                           style={styles.nameText}
                                       >
                                           dileep kumar
                                       </Text>
                                       <Text
                                           adjustsFontSizeToFit
                                           style={styles.emailText}
                                       >
                                           dileepis026@gmail.com
                                       </Text>
                                   </View>
                               </TouchableOpacity>
                           </View>
                       </LinearGradient>
                   </Row>
                   <Row size={2} style={{ marginVertical: 10, paddingLeft: 30 }}>
                       <FlatList
                           data={sidebar_items}
                           keyExtractor={(item, index) => index.toString()}
                           style={{ marginBottom: 20 }}
                           renderItem={({ item }) => (
                               <TouchableOpacity
                                   onPress={() => {
                                     Navigation.push(this.props.componentId, {
        component: {
        name: 'Dashboard',

            }
        });
                                       // if (item.route) {
                                       //     props.navigation.navigate(item.route)
                                       // } else {
                                       //     console.log('am pressed');
                                       // }
                                       //alert('am pressed')
                                   }}
                                   style={[
                                       styles.sidebarItem,
                                       {bottom: 5, marginVertical: 5},
                                   ]}
                               >
                                   <Icon
                                       name={item.icon}
                                       size={15}
                                       style={styles.rnvicon}
                                   />
                                   <Text
                                       style={styles.iconText}
                                   >
                                       {item.name}
                                   </Text>
                               </TouchableOpacity>
                           )}
                           ref={el => (this.sidebarRef = el)}
                           onEndReached={() => this.sidebarRef.flashScrollIndicators()}
                           onEndReachedThreshold={0.2}
                       />
                       <TouchableOpacity
                           onPress={this.signOut}
                           style={[ styles.sidebarItem, styles.logoutContainer]}
                       >
                           <Icon
                               name="log-out"
                               style={[styles.icon, { marginTop: 15 }]}
                           />
                           <Text
                               style={styles.logout}
                           >
                               Log Out
                           </Text>
                       </TouchableOpacity>
                   </Row>
               </Grid>


      );
    }
}
