import React, {Component} from 'react';
import {Platform, StyleSheet, View, SafeAreaView, Alert, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { ChatBot } from 'aws-amplify-react-native';
import { Interactions }  from 'aws-amplify';


export default class  Chatbot extends Component {

  state = {
        botName: 'WeatherBot',
        welcomeMessage: 'Welcome, How we can help you?',
    };

    constructor(props) {
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
      }

       handleComplete(err, confirmation) {
           if (err) {
           Alert.alert('Error', 'Bot conversation failed', [{ text: 'OK' }]);
           return;
           }
          this.setState({
           botName: 'WeatherBot',
           });
      }

   render() {

   const { botName, showChatBot, welcomeMessage } = this.state;

     return (
       <SafeAreaView style={styles.container}>
        <Header style={{backgroundColor:'#f5deb3'}}>
           <Left>
             <Button transparent>
               <Icon name='person' />
               <Text style={styles.textStyle}>Ask Lola</Text>
             </Button>
           </Left>
         </Header>
            <ChatBot
            botName={botName}
            welcomeMessage={welcomeMessage}
            onComplete={this.handleComplete}
            clearOnComplete={false}
            styles={StyleSheet.create({
               container: {
                     backgroundColor: '#fff5ee',
                           },
                itemMe: {
                     color: 'white',
                     backgroundColor: '#f4a460'
                },
                itemBot: {
                     color: 'white',
                     backgroundColor: '#a0522d'
                },
                textInput: {
                      backgroundColor: "#e6e6fa",
                      color: '#a52a2a'
                },
                button: {
                  backgroundColor: 'green'
                }
            })}
            />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  textStyle : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
   },
});
