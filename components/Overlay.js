import React from 'react';
import {StyleSheet, Text, View, FlatList,Platform, TouchableOpacity,TouchableHighlight, Button, Dimensions} from 'react-native';
import { PopupAddPass } from './PopupAddPass';
 
import {BoxShadow} from 'react-native-shadow'


export default class Overlay extends React.Component {

  constructor(props){
    super(props);  
      this.state = {
        dialogVisible: false
    }; 

    this.showDialog = this.showDialog.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
showDialog(){
  this.setState({
    dialogVisible: true,
  })
}

handleCancel() {
    this.setState({
        dialogVisible: false 
    });
}

handleSubmit ()  {
    this.setState({
        dialogVisible: false
    });
}

_OnPassPressed(){
  alert('Pressed');
}
 
 render = () =>{

  const shadowOpt = {
    width:50,
    height:50,
    color:"#000",

    border:50,
    radius:50,
    opacity:0.2,

    x:0,
    y:3,
    style:{marginVertical:5}
}
    return (
      <View style = {{flex: 1}}> 

              <PopupAddPass visibility = {this.state.dialogVisible} onCancelClick = {this.handleCancel} onSubmitClick = {this.handleSubmit}/>
              
              <FlatList  
                data = {[
                  {
                    key: 'Bathroom P1'
                  },

                  {
                    key: 'Bathroom P2'
                  },

                  {
                    key: 'Bathroom P3',
                  },

                  {
                    key: 'Bathroom P4'
                  },

                  {
                    key: 'Bathroom P5'
                  },

                  {
                    key: 'Bathroom P6',
                  },

                ]} 

                renderItem = {({item}) => 
                
                <TouchableOpacity onPress={this._OnPassPressed}> 
                    <View style = {styles.myPasses}> 
                        <Text style = {styles.mypassTxt}> {item.key} </Text>
                    </View>
                </TouchableOpacity>
                  
                }
              />     
              

              <View style = {styles.positionInBottom}>  
                    <TouchableOpacity onPress = {this.showDialog} > 
                        <Text style = {styles.addPasstxt} > + </Text>
                    </TouchableOpacity>   
              </View>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  myPasses: {
    padding: 30, 
    borderBottomColor: '#D9D9DA',
    borderBottomWidth: 1, 
  },

  mypassTxt: {
    fontSize: 21,
    fontWeight: 'bold',
  },

  positionInBottom: {    
    width: 50,
    height: 50,
    bottom: 15,
    left: Dimensions.get('window').width - 70,
    backgroundColor: '#4A8AF4',
    zIndex: 100,
    borderRadius: 100,  
    alignItems: 'center',
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    android: {
        elevation: 10

    },
    })
 
},

addPasstxt: {
  fontSize: 32,
  color: 'white',  
}
 
});
