import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
 
import Dialog from "react-native-dialog";
 
export  class ConfirmoutPopup extends React.Component {  


    constructor(props){
        super(props);

        this.state = {
          passCode: null, 
          passId: null,
          uOut_id: null, 
          checkvis: false, 
        }

  

      this.checkoutUser = this.checkoutUser.bind(this); 
    }

 
  componentDidMount() { 
      this.setState({
          passCode: this.props.confirmOutPassCode,
          passId: this.props.confirmOutPassId, 
          uOut_id: this.props.uOut_id,  
      });
   }

   componentWillReceiveProps(props) {
    this.setState({checkvis: props.visibility,});
}


  checkoutUser(){
    fetch('http://10.0.2.2:8000/api/outsideuser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

          body: JSON.stringify({
            pass_owner_id: this.props.passOwnerid, 
            userout_id: this.state.uOut_id,
            pass_id: this.state.passId, 
            pass_code: this.state.passCode,
            idcard_num: 92780, 
        }), 
      }).then((response) => {
        alert('Success');
        this.setState({
          checkvis: false, 
        });
        this._gotoOverlay();
      });
  }

  _gotoOverlay = () => {
    this.props.pressgotoOverlay.navigate('OverlayScreen'); 
  }
  

  render(){
    return (
      <View>    
          <Dialog.Container visible = {this.state.checkvis}>
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
 
