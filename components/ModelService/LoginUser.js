import React from 'react';
import {StyleSheet, TextInput,  Form, Text, View, StatusBar, FlatList, TouchableOpacity,   Button, Dimensions} from 'react-native';
 
export default class LoginUser extends React.Component { 
   
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
 
        let apiPostUser = 'http://10.0.2.2:8000/api/login';

        fetch(apiPostUser, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
      
            body: JSON.stringify({
              name: this.state.name, 
              email: this.state.email,  
            }), 
          })
          .then(function (data) {  
            alert('Success', data);
            this.clearStates();
          })  
          .catch(function (error) {  
            console.log('Request failure: ', error);  
          }); 

          clearStates = () => {
            this.setState({
              name: '',
              email: '', 
            })
          }

    }


  render(){
    return (
      <View>   
          <Text> Login User</Text>

          <TextInput style={styles.inputBox} 
              underlineColorAndroid='gray' 
              placeholder="emailss"
              name = "email"
              placeholderTextColor = "#9C9A9C"
              selectionColor="gray" 
              keyboardType="email-address"
              onChangeText = {(email) => this.setState({email})}
              value = {this.state.email}
              />

        <TextInput style={styles.inputBox} 
            underlineColorAndroid='gray' 
            placeholder="password"
            name = "password"
            placeholderTextColor = "#9C9A9C"
            selectionColor="gray" 
            secureTextEntry={true}
            onChangeText = {(password) => this.setState({password})}
            value = {this.state.password}
        />

        
        <TouchableOpacity style={styles.button} onPress = {this.handleSubmit}>
             <Text style={styles.buttonText}>Sign In</Text>
           </TouchableOpacity>  

      </View>
    );
  }
}

const styles = StyleSheet.create({
 
    inputBox: {
        width: 280,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        padding:10,
        paddingLeft: 10, 
        fontSize:16,
        color:'black',
        marginVertical: 10
      },
    
      
      button: {
        width: 280,
        backgroundColor:'#1c313a',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
});
