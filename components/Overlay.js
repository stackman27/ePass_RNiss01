import React from 'react';
import {StyleSheet, Text, View, FlatList,Platform, TouchableOpacity, TextInput,  TouchableHighlight, Button, Dimensions} from 'react-native';
import { PopupAddPass } from './PopupAddPass';
 
import {BoxShadow} from 'react-native-shadow'


export default class Overlay extends React.Component {

  constructor(props){
    super(props);  
      this.state = {
        dialogVisible: false,
        dataPasses: null,
        myRegPasses: null, 
        txtVal: '',
    }; 

    this.showDialog = this.showDialog.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitCodeHandle = this.submitCodeHandle.bind(this);
    this.txtValChange = this.txtValChange.bind(this);
  }

  componentDidMount(){

    let apiAllPasses = 'http://10.0.2.2:8000/api/allpasses';
    let apiMyRegPasses = 'http://10.0.2.2:8000/api/getregisterstudent';

  return fetch(apiAllPasses)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataPasses: responseJson,
        });

        console.log("DATAPASSES: ", this.state.dataPasses);
      }).then( () => {
        fetch(apiMyRegPasses)
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  myRegPasses: responseJson,
              });
              console.log("MYREGPASSES: ", this.state.myRegPasses);
          }).done();
      }).done();

  }

  submitCodeHandle(e){
    e.preventDefault();
    let subTxtCode = this.state.txtVal; 
    let arrPasses = [];
    let correctCode; 

    this.state.dataPasses.map((item) => {
      arrPasses.push(item.code);
    })

    for (let index = 0; index < arrPasses.length; index++) {

          if(subTxtCode == arrPasses[index]) {
            console.log("TRUE", subTxtCode);
            this.createstdPass(2, subTxtCode);

            break;
          } else {
            console.log('FALSE', subTxtCode);
          }

    }
  }

  createstdPass(uId, passCode) {
    fetch('http://10.0.2.2:8000/api/postregisterstudent', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user_id: uId,
          pass_code: passCode
      }),
  });
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

txtValChange(value){
  this.setState({
    txtVal: value
  })
}
 
 render = () =>{

  const shadowOpt = {
    width:65,
    height:65,
    color:"#000",

    border:50,
    radius:50,
    opacity:0.2,

    x:0,
    y:3,
    style:{marginVertical:5}
}

 
    return (
      <View style = {{flex: 1, backgroundColor: '#eee'}}> 

              <PopupAddPass setVal = {this.state.txtVal} setChangeText = {this.txtValChange} setSubmitPass = {this.submitCodeHandle} visibility = {this.state.dialogVisible} onCancelClick = {this.handleCancel} onSubmitClick = {this.handleSubmit}/>
            
                    <View style = {styles.PassesContainer}> 

                        <View style = {styles.admitClasses}> 
                          

                            <FlatList 
                              data= {this.state.myRegPasses}
                              renderItem = {({item}) => 
                
                              <TouchableOpacity onPress = {() => this.props.navigation.navigate('ShowPassScreen', {pass_code: item.pass_code, pass_id: item.pass_id})}> 
                                  <View style = {styles.myPasses}> 
                                      <Text style = {styles.mypassTxt}> {item.pass_code} || pass_id: {item.pass_id} </Text>
                                  </View>
                              </TouchableOpacity>
                                
                              }
                        
                            />
                        </View>
            </View>

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
    color: 'black'
  },

  positionInBottom: {  
    position: 'absolute',  
    width: 65,
    height: 65,
    bottom: 15,
    left: Dimensions.get('window').width - 80,
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
  fontSize: 38,
  color: 'white',  
},

PassesContainer: {
  flex: 2,
},

allPasses: {
  flex: 1, 
},

admitClasses: {
  flex: 1, 
},
 
});
