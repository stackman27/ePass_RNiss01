import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Platform} from 'react-native';
import { ConfirmoutPopup } from './ConfirmoutPopup';
 
export  class ShowPass extends React.Component {  

    constructor(props){
        super(props);

        this.state = {
            dialogConfirmOutVisible: false, 
        };

        this._showConfirmOutDialog = this._showConfirmOutDialog.bind(this);
        this._showConfirmOutDialogCancel = this._showConfirmOutDialogCancel.bind(this);
        this._showConfirmOutDialogCheckout = this._showConfirmOutDialogCheckout.bind(this);

    }
  
    _showConfirmOutDialog(){
        this.setState({
            dialogConfirmOutVisible: true
        })
    }

    _showConfirmOutDialogCancel(){
        this.setState({
            dialogConfirmOutVisible: false
        })
    }

    _showConfirmOutDialogCheckout(){
        this.setState({
            dialogConfirmOutVisible: false
        })
    }

      
  render(){
    
    return (
      <View style = {styles.contWrap}>   

        <ConfirmoutPopup confirmOutPassId = {this.props.navigation.state.params.pass_id} confirmOutPassCode = {this.props.navigation.state.params.pass_code} visibility = {this.state.dialogConfirmOutVisible} confirmCancel = {this._showConfirmOutDialogCancel} confirmCheckout = {this._showConfirmOutDialogCheckout}/>

        <View style = {styles.wrapiss01}> 
        <TouchableOpacity onPress = {this._showConfirmOutDialog}> 
                <Text style = {styles.wrapiss01TTitle}> {this.props.navigation.state.params.pass_name} </Text> 
                <Text style = {styles.wrapiss01TTitle1}> Sishir Giri </Text>  
            </TouchableOpacity>
        </View>
 
        <View style = {styles.wrapiss02}> 
        </View>

 
      </View>
    );
  }
}


const styles = StyleSheet.create({
    contWrap: {
        flex: 1,    
        flexDirection: 'column', 
    },

    wrapiss01: {
      flex: 1,  
      borderBottomColor: 'gray',
      backgroundColor: '#DB4C40',
      borderBottomWidth: 1,  
      padding: 15,
      justifyContent:'space-evenly',
      flexDirection: 'column',

      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
      },
      android: {
          elevation: 2
      },
      })

    },
 
    wrapiss01TTitle: {
        fontSize: 26,
        color: 'white', 
        fontWeight: 'bold'
    },

    wrapiss01TTitle1: {
        fontSize: 16,
        color: 'white', 
    },

    wrapiss02: {
        flex: 4,
        padding: 15,
    }
})
 
