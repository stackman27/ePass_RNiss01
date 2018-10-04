import React from 'react';
import {StyleSheet, Text, View, FlatList,Platform, TouchableOpacity, TextInput,  TouchableHighlight, Button, Dimensions} from 'react-native';
import { PopupAddPass } from './PopupAddPass';
 
import {BoxShadow} from 'react-native-shadow'
import HeaderBasic from './header/HeaderBasic';

 
export default class Overlay extends React.Component {
 
  constructor(props){
    super(props);  
      this.state = {
        dialogVisible: false,
        dataPasses: null,
        myRegPasses: null,  
        txtVal: '', 
        u_id: '',
        u_name: '',
        u_email: '',
    }; 

    this.showDialog = this.showDialog.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitCodeHandle = this.submitCodeHandle.bind(this);
    this.txtValChange = this.txtValChange.bind(this);
   // this.logOutUser = this.logOutUser.bind(this);
   this._apigetUserInfo = this._apigetUserInfo.bind(this);
  }

  static navigationOptions = ({navigation}) => { 
    const {params = {}} = navigation.state;
 
    return {
      headerTitle: <HeaderBasic uName = {params.userName}/>, 
      headerTintColor: '#ffffff',
      headerLeft: null,
      headerRight: null,
       headerStyle: {
        backgroundColor: '#8E3A9D',  
        
       }, 
    }
   
}
 
 
  componentDidMount(){ 
    this._apigetUserInfo();
    this.get_UserRegPasses();

  }


  get_UserRegPasses(){
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

  _apigetUserInfo(){
     
    fetch('http://10.0.2.2:8000/api/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.props.navigation.state.params.u_apiToken}` 
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        
        this.setState({
          u_name: responseJson.success.name,
          u_id: responseJson.success.id
        });

        this.props.navigation.setParams({
          userName: responseJson.success.name
        })

      }).catch((error) => {
        console.log("ERROR FOR SURE", error);
      });

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
            this.createstdPass(this.state.u_id, subTxtCode);
            alert('Success'); 
            this.get_UserRegPasses();
            console.log("MYREGPASSES_AFTER REG: ", this.state.myRegPasses); 

            this.setState({ 
             dialogVisible: false
            })

            break;
          } else {
            console.log('FALSE', subTxtCode);
          }

    }
  }

/*   logOutUser(e){
    e.preventDefault();
 
    fetch('http://10.0.2.2:8000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.state.u_apiToken}` 
        }
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      }).catch((error) => {
        console.log(error);
      });

  } */

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
  console.log('CLICKED');
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
                               this.state.dataPasses.map((pCode, i) => ( 
                                (pCode.code === item.pass_code) && (item.user_id === this.state.u_id)  ?  
                                  <TouchableOpacity key = {i} onPress = {() => this.props.navigation.navigate('ShowPassScreen', {pass_code: item.pass_code, pass_name: pCode.name, pass_id: item.pass_id, teacId: item.teacher_id, uOut_id: this.state.u_id})}>  
                                            <View style = {styles.myPasses}  > 
                                                <Text style = {styles.mypassTxt}>  {pCode.name} </Text>  
                                        
                                          <Text style = {styles.minOut}>9 m</Text>
                                                 
                                            </View>
                                  </TouchableOpacity>
                                    :
                                    null  
                                   )) 
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
    padding: 20, 
    borderBottomColor: '#D9D9DA',
    borderBottomWidth: 1,  
    flexDirection: 'row',
    flex: 1, 
    justifyContent: 'flex-end',
  },

  mypassTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flex: 3, 
 
  },

  minOut: {
    flex: 1,
    padding: 0, 
    fontSize: 18,
    textAlign: 'right',
    marginRight: 10, 
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
