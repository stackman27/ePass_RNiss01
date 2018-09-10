import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
 
import Dialog from "react-native-dialog";
 
export  class ConfirmoutPopup extends React.Component {  


    constructor(props){
        super(props);

        this.state = {
          passCode: null, 
          passId: null,
        }

      this.checkoutUser = this.checkoutUser.bind(this); 
    }



  componentDidMount() { 
      this.setState({
          passCode: this.props.confirmOutPassCode,
          passId: this.props.confirmOutPassId, 
      })
 }

  checkoutUser(){
    fetch('https://mysterious-wildwood-71460.herokuapp.comapi/outsideuser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

          body: JSON.stringify({
            pass_owner_id: 1, 
            pass_id: this.state.passId, 
            pass_code: this.state.passCode,
            idcard_num: 92780, 
        }), 
      }).then((response) => {
        alert('Success');
      });
  }

  render(){
    return (
      <View>    
          <Dialog.Container visible = {this.props.visibility}>
            <Dialog.Title> Are you sure? </Dialog.Title> 
            <Dialog.Button label = "Cancel" onPress = {this.props.confirmCheckout} />
            <Dialog.Button label = "Checkout" onPress = {this.checkoutUser} />
        </Dialog.Container>

      </View>
    );
  }
}


const styles = StyleSheet.create({
   
})
 
