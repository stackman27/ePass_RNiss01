import React from 'react';
import {StyleSheet, TextInput,  Form, Text, View, StatusBar, FlatList, TouchableOpacity,   Button, Dimensions} from 'react-native';
import { PopupAddPass } from './components/PopupAddPass'; 
import {StackNavigator} from 'react-navigation';
 

import Overlay from './components/Overlay';
import { ShowPass } from './components/ShowPass';
import { Login } from './components/Login';
import {Register} from './components/Register';
import Testiss from './components/Testiss';
 
const AppNavigator = StackNavigator({
      LoginScreen: {
        screen: Login,    
        navigationOptions: {
          header: null,
        }
      },  

      RegisterScreen: {
        screen: Register, 
        navigationOptions: {
          header: null,
        }
      },  

      /* TestScreen: {
        screen: Testiss,
        navigationOptions: {
          header: null,
        }
      }, */

      OverlayScreen: { 
             screen: Overlay,  
          }, 
         
      ShowPassScreen: {  
        screen: ShowPass,
        navigationOptions: {
          header: null,
        }
      }, 
    }, {headerMode: 'screen'} );

export default class App extends React.Component { 
   
  render(){
    return (
      <View style={styles.container}>   
           <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 22, 
    backgroundColor: 'transparent', 
  }, 
 

});
