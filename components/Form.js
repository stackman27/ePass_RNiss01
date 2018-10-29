import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button
} from 'react-native';
 
 
export default class Form extends Component {

  constructor(props){
    super(props);

    this.state = {
        email: '',
        password: '', 
        apiToken: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this); 
    
}

 
  handleSubmit(e){
    e.preventDefault(); 

    fetch('http://fstedie.fatcow.com/public_html/index.php/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    body: JSON.stringify({
      email: this.state.email, 
      password: this.state.password
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.success.token);  

        this.setState({
          apiToken: responseJson.success.token
        });
        this.gotoOverlay();
 
      })
      .catch((error) => {
        console.error(error);
      }); 
  }

  gotoOverlay = () => {
    this.props.pressChange.navigate('OverlayScreen', {u_apiToken: this.state.apiToken});
}
 

	render(){
 
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              name = "email"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText = {(email) => this.setState({email})}
              value = {this.state.email}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              name = "password"
              ref={(input) => this.password = input}
              onChangeText = {(password) => this.setState ({password})}
              value = {this.state.password}
              />  
           <TouchableOpacity style={styles.button} onPress = {this.handleSubmit}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
 
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    padding:10,
    paddingLeft: 20, 
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
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