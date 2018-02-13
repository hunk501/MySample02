import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    
    // Images
    let pic = {
      uri: 'https://reactjs.org/logo-og.png'
    };

    return (
      <View style={styles.container}>
        
        <Greeting name="Dennis"/>
        <Greeting name="Sam"/>
        <Greeting name="Marian"/>

        <View style={{alignItems: 'center'}}>
          <Image source={pic} style={{width: 193, height: 110}}/>  
        </View>

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
