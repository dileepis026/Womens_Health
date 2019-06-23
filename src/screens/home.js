
import React, {Component} from 'react';
import {Platform, StyleSheet, View,Image} from 'react-native';
import { Navigation } from "react-native-navigation";
import {icons,images} from '../utils';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class Home extends Component {


  static options(passProps) {
     return {
       topBar: {
         leftButtons:[{
           id:'menu',
           icon: icons.menu,
           color:'white'

         }],
         title: {
           text: 'Home',
           color: 'white'
         },
         background: {
           color: '#5f9ea0'
        },
      },
   }
}


constructor(props) {
  super(props);
  this.state = {
   selected: false
  };
}

componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
      if (this.navigationEventListener) {
        this.navigationEventListener.remove();
      }
    }

 navigationButtonPressed({ buttonId }) {
   if (buttonId === "menu"){
     if(this.state.selected === false) {
    Navigation.mergeOptions(this.props.componentId, {
     sideMenu: {
       left: {
         visible: true,
         component: {
           name: 'Drawer'
          }
       }
     }
   });
   this.setState({ selected : true});
}
 else {
   Navigation.mergeOptions(this.props.componentId, {
    sideMenu: {
      left: {
        visible: false,
        component: {
          name: 'Drawer'
        }
      }
    }
  });
   this.setState({ selected : false});
     }
   }
 }

render() {
    const componentId = this.props.componentId;
    return (
          <Content style={styles.container}>
            <Card style={styles.CardStyle}>
              <CardItem cardBody>
              <Image source= {images.dashboard} style={{height: 80,width:80, marginRight: 20}} />
              <Text style={styles.textStyle}>Dashboard</Text>
              </CardItem>
            </Card>
            <Card style={styles.CardStyle}>
              <CardItem cardBody>
              <Image source={images.track} style={{height: 80,width:80, marginRight: 20}} />
              <Text style={styles.textStyle}>Track</Text>
              </CardItem>
            </Card>
            <Card style={styles.CardStyle}>
              <CardItem cardBody>
              <Image source={images.learnMore} style={{height: 80,width:80, marginRight: 20}} />
              <Text style={styles.textStyle}>Learn More</Text>
              </CardItem>
            </Card>
            <Card style={styles.CardStyle}>
              <CardItem cardBody>
              <Image source={images.questionChat} style={{height: 80,width:80,marginRight: 20}} />
              <Text style={styles.textStyle}>Questions?  {'\n'} Chat!</Text>
              </CardItem>
            </Card>
          </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#87ceeb',
  },
  CardStyle:{
    borderRadius:18,
    borderWidth: 2,
    borderColor: '#808080',
    shadowColor:'#000000',
    shadowOffset:{width:1,height:1},
    shadowOpacity: 1,
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 10

    },
    textStyle: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'
    },
});
