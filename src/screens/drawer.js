import React, {Component} from 'react';
import {StyleSheet, Image, FlatList} from 'react-native';
import {
  Content,
  Text,
  ListItem,
  Container,
  Left
 } from 'native-base';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import {images} from '../utils';


const sideMenuCover = images.switzerland;

const sideMenudata = [
  {
    name: "Dashboard",
    icon: "ios-list-box",

  },
  {
    name: "Track",
    icon: "ios-navigate",

  },
  {
    name: "Learn More",
    icon: "ios-help-circle",

  },
  {
    name: "chatbox",
    icon: "ios-chatboxes",

  },
  {
    name: "logout",
    icon: "ios-log-out",

  }
];



export default class  SideMenuScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pressStatus:false,
      selectedItem: ''
    };
  }
  onPressList = (item,index,componentId) => {
  Navigation.push(componentId, {
        component: {
        name: 'DashboardScreen',
        id:'Dashboard',
        options: {
       topBar: {
         title: {
           text: 'Dashboard'
         },
         backButton: {
         color: 'white'
            }
          }
        }
      }
        });
    this.setState({ pressStatus : true, selectedItem: index});
  }



  render() {
    const componentId = this.props.componentId;
    return (
      <Container>
       <Content
          style={{ flex: 1, backgroundColor: "#F5FCFF"}}>
          <Image source={sideMenuCover} style={{height: 200,width:278}} />
        <FlatList
           data={sideMenudata}
           keyExtractor={(item, index) => index.toString()}
           renderItem={({ item, index}) => {
             const { selectedItem: sd } = this.state
              const localColor ={backgroundColor: sd === index ? "#cde1f9" : "transparent"}
               return (
           <ListItem
           button
           noBorder
           style={localColor}
           onPress={() => this.onPressList(item, index,componentId)}
           >
            <Left>
            <Ionicons
               name={item.icon}
               style={styles.iconStyle}
            />
           <Text
           style={styles.textStyle}>
           {item.name}
           </Text>
            </Left>
           </ListItem>
            )
         }}
         />
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  iconStyle: {
    color: '#8b4513',
    fontSize: 28,
    marginRight: 15
  }
})
