import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
 
import Dialog from "react-native-dialog";
 
export  class ConfirmoutPopup extends React.Component {  
  render(){
    return (
      <View>    
          <Dialog.Container visible = {this.props.visibility}>
            <Dialog.Title> Are you sure? </Dialog.Title> 
            <Dialog.Button label = "Cancel" onPress = {this.props.confirmCheckout} />
            <Dialog.Button label = "Checkout" onPress = {this.props.confirmCancel} />
        </Dialog.Container>

      </View>
    );
  }
}


const styles = StyleSheet.create({
   
})
 
