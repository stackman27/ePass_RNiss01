import React from 'react';
import {StyleSheet, TextInput,  Form, Text, View, StatusBar, FlatList, TouchableOpacity,   Button, Dimensions} from 'react-native';
import { PopupAddPass } from './components/PopupAddPass'; 
import {StackNavigator} from 'react-navigation';
 

import Overlay from './components/Overlay';
import { ShowPass } from './components/ShowPass';
import { Login } from './components/Login';
import {Register} from './components/Register';
 
const AppNavigator = StackNavigator({
    /*  LoginScreen: {
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

      OverlayScreen: { 
             screen: Overlay,  
          },  */
          
      ShowPassScreen: {  
        screen: ShowPass,
        navigationOptions: {
           headerTitle:    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -15}}> 
                              <Text style = {{color: 'white', fontSize: 24, paddingLeft: 20, fontWeight: 'bold' }}>Checkout</Text>  
                              <TouchableOpacity onPress = {() => alert('Log out')}>
                                  <Text style = {{color: 'white', fontSize: 18,  paddingRight: 20 }}> Log Out</Text>
                          </TouchableOpacity>
                      </View>,

          headerTintColor: '#ffffff',
          headerLeft: null,
          headerRight: null,
           headerStyle: {
            backgroundColor: '#8E3A9D',   
           },  
        
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
