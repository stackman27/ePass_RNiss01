import React, {Component} from 'react';
import {StyleSheet,Text, View,TouchableOpacity } from 'react-native';

class HeaderBasic extends Component{

    constructor(props){
        super(props);
 
        this.logOutUser = this.logOutUser.bind(this);
    }

   
    
    logOutUser(){
        this.props.navigation.navigate('LoginScreen');
   /*      e.preventDefault();
     
        fetch('http://fstedie.fatcow.com/public_html/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json',
              'Authorization': `Bearer ${this.props.UapiToken}` 
            }
        }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.props.navigation.navigate('LoginScreen');
          }).catch((error) => {
            console.log(error);
          });  */
      } 
    

    render(){
        return(
            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -15}}> 
                <Text style = {{color: 'white', fontSize: 24, paddingLeft: 20, fontWeight: 'bold' }}> {this.props.uName}</Text>  
                <TouchableOpacity onPress = {this.logOutUser}>
                    <Text style = {{color: 'white', fontSize: 18,  paddingRight: 20 }}> Log Out</Text>
            </TouchableOpacity>
         </View>
        );
    }
}

export default HeaderBasic;
