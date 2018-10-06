import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Platform, Dimensions} from 'react-native';
import { ConfirmoutPopup } from './ConfirmoutPopup';
 
var {width } = Dimensions.get('window');

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

    _showConfirmInDialog() {
        alert("Confirm In");
    }

      
  render(){
    
    return (
      <View style = {styles.contWrap}> 

       <ConfirmoutPopup passOwnerid = {this.props.navigation.state.params.teacId} confirmOutPassId = {this.props.navigation.state.params.pass_id} uOut_id = {this.props.navigation.state.params.uOut_id} confirmOutPassCode = {this.props.navigation.state.params.pass_code} visibility = {this.state.dialogConfirmOutVisible} confirmCancel = {this._showConfirmOutDialogCancel} confirmCheckout = {this._showConfirmOutDialogCheckout}/>
 
        <View style = {styles.wrapTitle}>  
             <Text style = {styles.wrapiss01TTitle}>{this.props.navigation.state.params.pass_name} </Text>
             <Text style = {styles.wrapiss01TTitle1}>{this.props.navigation.state.params.teacId}</Text>  
        </View>


        <View style = {styles.wrapbtns}>

            <TouchableOpacity  onPress = {this._showConfirmOutDialog} style = {[styles.btnOutIn, styles.btnCheckout]}>
                <View  >
                        <Text style = {styles.checkoText}> Check Out </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress = {this._showConfirmInDialog}  style = {[styles.btnOutIn, styles.btnCheckin]} > 
                <View >
                        <Text style = {styles.checkiText}> Check In </Text>
                </View>
            </TouchableOpacity>
        </View>
 
 
      </View>
    );
  }
}


const styles = StyleSheet.create({
    contWrap: {
        flex: 1,    
        flexDirection: 'column', 
        justifyContent:'space-evenly',
    },

    wrapTitle: {
      flex: 4,   
      backgroundColor: '#8E3A9D', 
      justifyContent: 'center',
      alignItems: 'center'
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

    wrapbtns: {
        flex: 2, 
        backgroundColor: 'gray'
    },

    btnOutIn: {
        flex: 1, 
    },
    
    btnCheckin: {
        backgroundColor: '#DC4E41',
        width: width, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    btnCheckout: {
        backgroundColor: '#4B8BF4',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: 'transparent'
      
    },

    checkoText: {
        fontSize: 26, 
        color: 'white'
    },

    checkiText: {
        fontSize: 26, 
        color: 'white'
    }
 
})
 
