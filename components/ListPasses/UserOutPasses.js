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

    render(){
		return(
			<View> 
               {this.props.myOutPass.map((oUser, i) => (
                    (oUser.pass_id === this.props.itempassid) && (oUser.userout_id === this.props.itemuserid) ? 
                    <Text key = {i}> Outside  </Text>
                    :
                    null
               ))}
  			</View>
			)
	}
}

 

 