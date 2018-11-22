import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar, Dimensions} from 'react-native';


import Logo from './Logo';
import LoginUser from './ModelForms/LoginUser';

var {width } = Dimensions.get('window');

export class Login extends React.Component { 
  

    _gotoSignup = () => {
        this.props.navigation.navigate('RegisterScreen'); 
    }

 
  render(){
    return (
      <View style = {styles.container}>
            <Logo />

            <View style = {styles.fidgetSpinner}>  
            </View> 
             
            <LoginUser type="Login" pressChange = {this.props.navigation}/>
             
             <View style = {styles.signupTextCont}> 
                  <Text style = {styles.signupText}> Don't have an account yet?</Text>
                    <TouchableOpacity onPress = {this._gotoSignup}> 
                        <Text style = {styles.signupButton}> SignUp </Text>  
                    </TouchableOpacity>  
             </View>    

             <View style = {styles.creator} > 
                <Text style = {styles.creatorText}> A Sishir Giri Production © 2018</Text>
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
        alignItems: 'center',
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
        fontSize: 18, 
        fontWeight: '700'
    },
    creator: {
        width: width, 
        padding: 5,
        backgroundColor: '#9650A2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    creatorText: {
        color: '#eee',
        textAlign: 'center'
    }
});
 
