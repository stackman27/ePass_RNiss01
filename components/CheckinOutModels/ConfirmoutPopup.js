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
          idnumber: null, 
          checkvis: false,   
           
        }
      this.checkoutUser = this.checkoutUser.bind(this); 
      this._gotoOverlay = this._gotoOverlay.bind(this);
    
    }

  componentDidMount() { 
      this.setState({
          passCode: this.props.confirmOutPassCode,
          passId: this.props.confirmOutPassId, 
          uOut_id: this.props.uOut_id,  
          idnumber: this.props.idnumber,
      });
   }

   componentWillReceiveProps(props) {
    this.setState({checkvis: props.visibility,});
}


  checkoutUser(){ 
   this._postStatsUser_perm();
   this._postOutsideUser_temp();
  }

  _postOutsideUser_temp(){
    fetch('http://fstedie.fatcow.com/public_html/index.php/api/outsideuser', {
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
          idcard_num: this.state.idnumber, 
      }), 
    })
    
     .then((response) => {
     /*  alert('Success');
      this.setState({
        checkvis: false, 
      });  */
      this._gotoOverlay();   
    });  


  }

  _postStatsUser_perm(){ 
    fetch('http://fstedie.fatcow.com/public_html/index.php/api/totalstats', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
 
        body: JSON.stringify({
          pass_owner_id: this.props.passOwnerid, 
          userout_id: this.state.uOut_id,
          pass_id: this.state.passId,  
          idcard_num: this.state.idnumber, 
      }), 
    }).done();
  }

  _gotoOverlay() {  
    this.props.pressgotoOverlay.state.params.updateOut();
    this.props.pressgotoOverlay.navigate('OverlayScreen');   
   }
  

  render(){
    return (
      <View>    
          <Dialog.Container visible = {this.state.checkvis}>
            <Dialog.Title> Are you sure? </Dialog.Title> 
            <Dialog.Button label = "Cancel" onPress = {this.props.confirmCheckout} /> 
            <Dialog.Button label = "Checkout" onPress = {this.checkoutUser}/>   
        </Dialog.Container>
 
      </View>
    );
  }
}


const styles = StyleSheet.create({
   
})
 
