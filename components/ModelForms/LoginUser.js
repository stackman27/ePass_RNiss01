import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Button,
  Platform
} from 'react-native';
 
var width = Dimensions.get('window').width; //full width

export default class LoginUser extends Component {

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
        alert('Incorrect Email or Password.')
        //console.error(error);
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
    width: width - 30,
    backgroundColor:'#A167AC',
    borderRadius: 25,
    paddingLeft: 20, 
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10,
    ...Platform.select({
      ios: {
        padding:15,
      },
      android: {
        padding:10,
      },
    }),
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