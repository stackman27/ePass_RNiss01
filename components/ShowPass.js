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

       {/*  <ConfirmoutPopup confirmOutPassId = {this.props.navigation.state.params.pass_id} uOut_id = {this.props.navigation.state.params.uOut_id} confirmOutPassCode = {this.props.navigation.state.params.pass_code} visibility = {this.state.dialogConfirmOutVisible} confirmCancel = {this._showConfirmOutDialogCancel} confirmCheckout = {this._showConfirmOutDialogCheckout}/>
 */}
        <View style = {styles.wrapiss}> 

            <View style = {styles.wrapTitles}> 
                <Text style = {styles.wrapiss01TTitle}> Bathroom Pass 1</Text>
                <Text style = {styles.wrapiss01TTitle1}> Sishir Giri </Text> 

            </View>


        <View style = {styles.selecbtns}>

        <View style = {styles.selecbtnsCheckout}> 
                <TouchableOpacity onPress = {this._showConfirmOutDialog}>   
                    <Text> Check Out </Text> 
            </TouchableOpacity>
        </View> 

           <View style = {styles.selecbtnsCheckout}> 
                <TouchableOpacity onPress = {this._showConfirmOutDialog}>   
                    <Text> Check Out </Text>
                {/*  <Text style = {styles.wrapiss01TTitle}> {this.props.navigation.state.params.pass_name} </Text>  
                    <Text style = {styles.wrapiss01TTitle1}> {this.props.navigation.state.params.teacId} </Text>   */}
            </TouchableOpacity>
        </View>

        </View>
        
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

    wrapiss: {
      flex: 1,   
      backgroundColor: '#8E3A9D',  
      justifyContent: 'space-between',
      flexDirection: 'column',
    },

    wrapTitles: {
        flex: 4,
        padding: 15, 
        
    },
    
    wrapiss01TTitle: {
        fontSize: 30,
        color: 'white', 
        fontWeight: 'bold'
    },

    wrapiss01TTitle1: {
        fontSize: 18,
        color: 'white', 
    },

    selecbtns: {
        backgroundColor: 'white',
        flex: 2, 
    },

    selecbtnsCheckout: {
        width: '300',
        flex: 1, 
    }

 
})
 
