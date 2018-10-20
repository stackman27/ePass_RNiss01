import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
 
import Dialog from "react-native-dialog";
 
 
export  class ConfirminPopup extends React.Component {  
 
    constructor(props){
        super(props);

        this.state = {
          passCode: null, 
          passId: null,
          uOut_id: null, 
          checkvis: false,  
          myOutPass: [],  
        }
      this.checkinUser = this.checkinUser.bind(this); 
    }

 
  componentDidMount() { 
      this.setState({
          passCode: this.props.confirmInPassCode,
          passId: this.props.confirmInPassId, 
          uOut_id: this.props.uOut_id,  
           
      });
   }

   componentWillReceiveProps(props) {
    this.setState({checkvis: props.visibility,});
}


  checkinUser(){ 
   this._delOutsideUser_temp();
   
  // this._updStatsUser_perm(); 
  }

 
  _delOutsideUser_temp(){ 

    console.log("STATE PARAMA UOUT",this.props.pressgotoOverlay.state.params.uOut_id );
    console.log("STATE PARAM PASSID", this.props.pressgotoOverlay.state.params.pass_id);

    // delete user from Outside User
   let apiStdCheckin = `http://10.0.2.2:8000/api/outsideuser_custom/${this.props.pressgotoOverlay.state.params.uOut_id}/${this.props.pressgotoOverlay.state.params.pass_id}`;

    return fetch(apiStdCheckin, { 
        method: 'DELETE',
  
    }).then((response) => {
        alert('Success')
        this.setState({
          checkvis: false, 
        });
        this.getUserOut();
        this._gotoOverlay();
    }) 

}

getUserOut = () => {
 
    let apiPassOut = `http://10.0.2.2:8000/api/allOutUsers/${this.props.pressgotoOverlay.state.params.uOut_id}`;
         
  return fetch(apiPassOut)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState ({
              myOutPass: responseJson
          }); 
          console.log("CONFIRM IN POPUP OUT STUDENTS", this.state.myOutPass);
           
        }).done();
 
}

  _updStatsUser_perm(){ 
    // Update the Checkin Time

  }

  _gotoOverlay = () => {
    this.props.pressgotoOverlay.navigate('OverlayScreen', {updatedMyPassOut: this.state.myOutPass}); 
  }
  

  render(){
    return (
      <View>    
          <Dialog.Container visible = {this.state.checkvis}>
            <Dialog.Title> Are you sure? </Dialog.Title> 
            <Dialog.Button label = "Cancel" onPress = {this.props.confirmCheckout} />
            <Dialog.Button label = "Checkin" onPress = {this.checkinUser} />
        </Dialog.Container>

      </View>
    );
  }
}


const styles = StyleSheet.create({
   
})
 
