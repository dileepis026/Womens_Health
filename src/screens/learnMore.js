import React, {Component} from 'react';
import {
  FlatList,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { Container, Header, Content, Card, Button, CardItem, Text, Body, Right } from 'native-base';
import { SearchBar } from 'react-native-elements';
import jsonData from '../mockData/contentData.json';

 export default class LearnMore extends Component {

   constructor(props) {
     super(props);
     this.state = {
       data: jsonData
     };
}

displayMoreData(item) {
  if(item.id===this.props.jsonListId){
    console.log(this.props.jsonListId)
    return (
        <Text>{item.description}</Text>
      );
     }
  }

  searchFilterFunction = text => {
  const newData = jsonData.filter(item => {
    const itemData = `${item.title.toUpperCase()}`;
     const textData = text.toUpperCase();

     return itemData.indexOf(textData) > -1;
  });
  this.setState({ data: newData });
};


  renderHeader = () => {
  return (
    <SearchBar
      lightTheme
      round
      containerStyle={{
        backgroundColor:'#add8e6',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
}}
      selectionColor={'black'}
      inputContainerStyle={{backgroundColor:'white'}}
      inputStyle={{color:'black'}}
      onChangeText={text => this.searchFilterFunction(text)}
      autoCorrect={false}
    />
  );
};

  renderItem(item) {
    return (
        <TouchableHighlight  underlayColor = 'lightgray'
        onPress={()=>this.props.showListData(item.id)}>
        <View style={{paddingLeft: 20,paddingVertical: 20}}>
         <Text style={{marginBottom: 10}}>{item.title}</Text>
         {this.displayMoreData(item)}
         </View>
          </TouchableHighlight>
    );
  }
  render() {
  console.log("DATA drom store--", this.props.jsonListId)
    return (
   <FlatList
       data ={this.state.data}
       renderItem={({item}) => (
             <Card style={styles.CardStyle}>
               <CardItem header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                 <Text>{item.title}</Text>
               </CardItem>
               <CardItem>
                 <Body>
                   <Text>
                     {item.description}
                   </Text>
                 </Body>
               </CardItem>
               <Right>
               <Button transparent onPress={() => alert("View more Content...")}>
                 <Text>View Details</Text>
               </Button>
             </Right>
            </Card>
        )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={this.renderHeader}
      keyExtractor={(item,index)=>item.title}
      id={(item) => item.id}
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  CardStyle:{
    borderRadius:18,
    marginTop:10,
    marginBottom:10,
    },
});
