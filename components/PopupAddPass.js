import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput, Dimensions} from 'react-native';

import Dialog from "react-native-dialog";
 
export  class PopupAddPass extends React.Component { 
  
  render(){
    return (
      <View >    
        <Dialog.Container visible = {this.props.visibility}>
            <Dialog.Title> Enter the Code </Dialog.Title>
                <TextInput 
                    editable = {true}
                    autoFocus = {true}
                    style = {{
                        padding: 20, 
                        fontSize: 24
                    }}
                />
            <Dialog.Button label = "Cancel" onPress = {this.props.onCancelClick} />
            <Dialog.Button label = "Submit" onPress = {this.props.onSubmitClick} />
        </Dialog.Container>
      </View>
    );
  }
}
 
