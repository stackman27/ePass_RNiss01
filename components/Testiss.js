import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  FlatList,
  
} from 'react-native';

import { ListItem } from 'react-native-elements'


/* 
 **********************
 ******* NOT USING THIS COMPONENT
*/
export default class Testiss extends Component  {

    constructor(props){
        super(props);

        this.state = {
            dataPasses: [],
            myRegPasses: [], 
            myOutPass: [],
            allData: [],
            selectedData: [],
        }

        
    }

    componentDidMount(){
        this._getUserRegPasses();
    }

    _getUserRegPasses = () => {
        let apiAllPasses = 'http://10.0.2.2:8000/api/allpasses';
        let apiMyRegPasses = 'http://10.0.2.2:8000/api/getregisterstudent';
        let apiPassOut = `http://10.0.2.2:8000/api/allOutUsers/1`;

      return fetch(apiAllPasses)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
              dataPasses: responseJson,
              allData: [...this.state.allData, responseJson],
            });
    
            console.log("DATAPASSES: ", this.state.dataPasses);
            console.log("ALLDATA", this.state.allData);
          }).then( () => {
            fetch(apiMyRegPasses)
              .then((response) => response.json())
              .then((responseJson) => {
                  this.setState({
                      myRegPasses: responseJson,
                      allData: [...this.state.allData, responseJson],
                  });
                  console.log("MYREGPASSES: ", this.state.myRegPasses);  
                  console.log("ALLDATA 1", this.state.allData);
              }).then(() => {
                 fetch(apiPassOut)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState ({
                        myOutPass: responseJson,
                        allData: [...this.state.allData, responseJson],
                    });
                    console.log("OUTUSER: ", this.state.myOutPass);  

                    console.log("ALLLLLLLL DATTAAA", this.state.allData)

                    this.setState({
                        selectedData:  this.state.allData[0].name
                    })
 
                }).done()
             }).done();  
          }).done(); 
    }
     
    render(){
		return(
          <View>
              <FlatList 
                data = {this.state.allData}
                renderItem = {({item}) => 
 
                    <ListItem 
                        key={item.id}
                        title={item[0].name }
                        subtitle={item.pass_code}
                    />
 
                }
              />
          </View>
	    )
	}
}

 
 