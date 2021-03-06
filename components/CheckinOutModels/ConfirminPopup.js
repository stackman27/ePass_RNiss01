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
          uoutDate: null,
          myOutPass: [],  
        }
      this.checkinUser = this.checkinUser.bind(this); 
    }

 
  componentDidMount() { 
      this.setState({
          passCode: this.props.confirmInPassCode,
          passId: this.props.confirmInPassId, 
          uOut_id: this.props.uOut_id,   
      }, () => {
        this.userOutUpdateData();
      });
   }

   componentWillReceiveProps(props) {
    this.setState({checkvis: props.visibility});
}


  checkinUser(){ 
   //this._updStatsUser_perm(); 
   this._delOutsideUser_temp(); 
  }

 
  _delOutsideUser_temp(){ 

    console.log("STATE PARAMA UOUT",this.props.pressgotoOverlay.state.params.uOut_id );
    console.log("STATE PARAM PASSID", this.props.pressgotoOverlay.state.params.pass_id);

    // delete user from Outside User
   let apiStdCheckin = `http://fstedie.fatcow.com/public_html/index.php/api/outsideuser_custom/${this.props.pressgotoOverlay.state.params.uOut_id}/${this.props.pressgotoOverlay.state.params.pass_id}/${this.state.uoutDate}`;

    return fetch(apiStdCheckin, { 
        method: 'DELETE',
    }).then((response) => {
        this.getUserOut();
        this._gotoOverlay();
    }) 

}

getUserOut = () => { 
    let apiPassOut = `http://fstedie.fatcow.com/public_html/index.php/api/allOutUsers/${this.props.pressgotoOverlay.state.params.uOut_id}`;
         
  return fetch(apiPassOut)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState ({
              myOutPass: responseJson
          }); 
          console.log("CONFIRM IN POPUP OUT STUDENTS", this.state.myOutPass);
           
        }).done(); 
}

  userOutUpdateData = () => {
        let apiUpdateDatainfo = `http://fstedie.fatcow.com/public_html/index.php/api/getUpdateData/${this.props.pressgotoOverlay.state.params.uOut_id }/${this.props.pressgotoOverlay.state.params.pass_id}`;

        return fetch(apiUpdateDatainfo)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState ({
            uoutDate: responseJson.created_at
          });   
        }).done(); 
 
  }
 
  _updStatsUser_perm(){ 
    // Update the Checkin Time
      alert('Checkout User')
  }

  _gotoOverlay = () => {
    this.props.pressgotoOverlay.state.params.updateOut();
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
 
