import React, {Component} from 'react';
import {StyleSheet,Text, View,TouchableOpacity } from 'react-native';

class HeaderBasic extends Component{
    render(){
        return(
            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -15}}> 
                <Text style = {{color: 'white', fontSize: 24, paddingLeft: 20, fontWeight: 'bold' }}> {this.props.uName}</Text>  
                <TouchableOpacity onPress = {() => alert('Log out')}>
                    <Text style = {{color: 'white', fontSize: 18,  paddingRight: 20 }}> Log Out</Text>
            </TouchableOpacity>
         </View>
        );
    }
}

export default HeaderBasic;
