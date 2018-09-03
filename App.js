import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity,   Button, Dimensions} from 'react-native';
import { PopupAddPass } from './components/PopupAddPass';
import Overlay from './components/Overlay';
import { ShowPass } from './components/ShowPass';
 

export default class App extends React.Component { 
 
  render(){
    return (
      <View style={styles.container}>   
          <Overlay />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    marginTop: 22
  }, 

});
