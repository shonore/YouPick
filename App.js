import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//custom components use capital letters traditionally
import FetchLocation from './components/FetchLocation'

export default class App extends React.Component {
//method to get the user's Location
getUserLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  }, err => console.log(err));
}
  render() {
    return (
      <View style={styles.container}>
      //binds handler to class
      <Text>YouPick</Text>
      <FetchLocation onGetLocation={this.getUserLocationHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
