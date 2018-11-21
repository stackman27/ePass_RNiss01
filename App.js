import React from 'react';
import {StyleSheet, TextInput,  Form, Text, View, StatusBar, FlatList, TouchableOpacity, Button, Dimensions, Platform } from 'react-native';
import { PopupAddPass } from './components/PopupAddPass'; 
import {createStackNavigator} from 'react-navigation';
 

import Overlay from './components/Overlay';
import { ShowPass } from './components/ShowPass';
import { Login } from './components/Login';
import {Register} from './components/Register';
import Testiss from './components/Testiss';
 
const AppNavigator = createStackNavigator({
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


    const MyStatusBar = ({backgroundColor, ...props}) => (
      <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    );
    


export default class App extends React.Component { 
   
  render(){
    return (
      <View style={styles.container}>    
       <MyStatusBar backgroundColor="#9C27B0" barStyle="light-content" /> 
           <AppNavigator />
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 24 : StatusBar.currentHeight;
 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  }, 
 
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
 
});
