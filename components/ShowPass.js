import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Platform, Dimensions} from 'react-native';
import { ConfirmoutPopup } from './CheckinOutModels/ConfirmoutPopup';
import { ConfirminPopup } from './CheckinOutModels/ConfirminPopup';
 
var {width } = Dimensions.get('window');

export  class ShowPass extends React.Component {  

    constructor(props){
        super(props);

        this.state = {
            dialogConfirmOutVisible: false,  
            dialogConfirmInVisible: false, 
            teacherInfo: [],
            outDetails: [],
            outsideUser_id: '',
        };

        this._showConfirmOutDialog = this._showConfirmOutDialog.bind(this);
        this._showConfirmOutDialogCancel = this._showConfirmOutDialogCancel.bind(this);
        this._showConfirmOutDialogCheckout = this._showConfirmOutDialogCheckout.bind(this);
        this._showConfirmInDialog = this._showConfirmInDialog.bind(this);
        this._showConfirmInDialogCancel = this._showConfirmInDialogCancel.bind(this);
        this._showConfirmInDialogCheckout = this._showConfirmInDialogCheckout.bind(this);
        this._getOutsideDetails = this._getOutsideDetails.bind(this);

    }

    componentWillMount(){
        this._findUsersDetails();
        this._getOutsideDetails();
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
        this.setState({
            dialogConfirmInVisible: true
        })
    }

    _showConfirmInDialogCancel(){
        this.setState({
            dialogConfirmInVisible: false
        })
    }

    _showConfirmInDialogCheckout(){
        this.setState({
            dialogConfirmInVisible: false
        })
    }

    _getOutsideDetails(){
        let apiStdCheckin = `http://fstedie.fatcow.com/public_html/index.php/api/outsideuser`;

        return fetch(apiStdCheckin)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    outDetails: responseJson
                });
                console.log("OUTSIDE STUDENTS DETAILS", this.state.outDetails); 
            })  
    }
 
    _findUsersDetails(){ 
        let apiTeachInfo = `http://fstedie.fatcow.com/public_html/index.php/api/getteachinfo/${this.props.navigation.state.params.teacId}`;

        return fetch(apiTeachInfo)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    teacherInfo: responseJson
                });
            }).done(); 
    }

   
  render(){
    
    return (
      <View style = {styles.contWrap}> 

       <ConfirmoutPopup pressgotoOverlay = {this.props.navigation} passOwnerid = {this.props.navigation.state.params.teacId} confirmOutPassId = {this.props.navigation.state.params.pass_id} uOut_id = {this.props.navigation.state.params.uOut_id} confirmOutPassCode = {this.props.navigation.state.params.pass_code} visibility = {this.state.dialogConfirmOutVisible} confirmCancel = {this._showConfirmOutDialogCancel} confirmCheckout = {this._showConfirmOutDialogCheckout}/>
        <ConfirminPopup _checkinfunc = {this._delOutsideUser_temp} pressgotoOverlay = {this.props.navigation} passOwnerid = {this.props.navigation.state.params.teacId} confirmOutPassId = {this.props.navigation.state.params.pass_id} uOut_id = {this.props.navigation.state.params.uOut_id} confirmInPassCode = {this.props.navigation.state.params.pass_code} visibility = {this.state.dialogConfirmInVisible} confirmCancel = {this._showConfirmInDialogCancel} confirmCheckout = {this._showConfirmInDialogCheckout}/>

        <View style = {styles.wrapTitle}>  
             <Text style = {styles.wrapiss01TTitle}>{this.props.navigation.state.params.pass_name} </Text>
             <Text style = {styles.wrapiss01TTitle1}>{this.state.teacherInfo.name}</Text>  
        </View>

  <View style = {styles.wrapbtns}>
  
        <TouchableOpacity  onPress = {this._showConfirmOutDialog} style = {[styles.btnOutIn, styles.btnCheckout]}>
                <View  >
                        <Text style = {styles.checkoText}> Check Out </Text>
                </View>
            </TouchableOpacity>   


            <TouchableOpacity onPress = {this._showConfirmInDialog}  style = {[styles.btnOutIn, styles.btnCheckin]} > 
            <View>
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
 
