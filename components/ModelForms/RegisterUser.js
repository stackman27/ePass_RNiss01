import React from 'react';
import {StyleSheet, TextInput,  Form, Text, View, StatusBar, FlatList, TouchableOpacity,   Button, Dimensions} from 'react-native';
 
export default class RegisterUser extends React.Component { 
  
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      c_password: '', 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);

    let apiPostUser = 'http://10.0.2.2:8000/api/register';

    fetch(apiPostUser, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        name: this.state.name, 
        email: this.state.email, 
        password: this.state.password, 
        c_password: this.state.c_password
      }), 
    })
    .then(function (data) {  
      alert('Success');
      this.clearStates();
    })  
    .catch(function (error) {  
      console.log('Request failure: ', error);  
    }); 
    
    clearStates = () => {
        this.setState({
          name: '',
          email: '',
          password: '',
          c_password: '',
        })
      }
  
  }

   
  
  render(){
    return (
      <View>   
 
          <TextInput style={styles.inputBox}  
              placeholder="Name"
              name = "name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText = {(name) => this.setState({name}) }
              value = {this.state.name}
              />

          <TextInput style={styles.inputBox}  
              placeholder="Email"
              name = "email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff" 
              keyboardType="email-address"
              onChangeText = {(email) => this.setState({email})}
              value = {this.state.email}
              />

          <TextInput style={styles.inputBox}  
              placeholder="Password"
              name = "password"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff" 
              secureTextEntry={true}
              onChangeText = {(password) => this.setState({password})}
              value = {this.state.password}
              />

          <TextInput style={styles.inputBox}  
              placeholder="Confirm Password"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff" 
              name = "c_password"
              secureTextEntry={true}
              onChangeText = {(c_password) => this.setState({c_password})}
              value = {this.state.c_password}
              />

            <TouchableOpacity style={styles.button} onPress = {this.handleSubmit}>
             <Text style={styles.buttonText}>Sign Up</Text>
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
    paddingLeft: 20, 
    fontSize:16,
    color:'white',
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