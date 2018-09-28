import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Form from './Form';
import Logo from './Logo';

export class Login extends React.Component { 
  

    _gotoSignup(){
        alert('Signup');
    }

 
  render(){
    return (
      <View style = {styles.container}>
            <Logo />
            
             <Form type="Login" pressChange = {this.props.navigation}/>

             <View style = {styles.signupTextCont}> 
                  <Text style = {styles.signupText}> Don't have an account yet? </Text>
                    <TouchableOpacity onPress = {this.pressHandle}> 
                        <Text style = {styles.signupButton}> SignUp </Text>
                    </TouchableOpacity> 
             </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8E3A9D',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },

    signupText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16, 
        fontWeight: '500'
    }
});
 
