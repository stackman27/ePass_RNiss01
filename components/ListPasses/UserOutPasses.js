import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
} from 'react-native';
 
export default class UserOutPasses extends Component  {

    constructor(props){
        super(props);
        this.state = {
            myOutPass: [],
        }
    }



    componentWillMount(){
        let apiPassOut = `http://10.0.2.2:8000/api/allOutUsers/${this.props.u_id}`;
         
        return fetch(apiPassOut)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState ({
                    myOutPass: responseJson
                }); 
            }).done();
        
    }

    render(){
		return(
			<View> 
               {this.state.myOutPass.map((oUser, i) => (
                    (oUser.pass_id === this.props.itempassid) && (oUser.userout_id === this.props.itemuserid) ? 
                    <Text key = {i}> Outside  </Text>
                    :
                    null
               ))}
                
  			</View>
			)
	}
}

 

 