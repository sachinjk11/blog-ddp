import React from 'react';
import { Component } from 'react';
import { Text, View, AsyncStorage, FlatList, Modal, StyleSheet, Alert, ScrollView, Share } from 'react-native';
import { connect } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

class MyDietForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            HeadTable: ['Date', 'Score'],
            DataTable: [
              ['No Data', 'No Data']
            ]
          }
        this.loadData();
    }

    componentWillReceiveProps(){
        this.loadData();
    }

    loadData = () => AsyncStorage.getItem('logdietdata').then((value) =>{ 
    console.log('recieved data'+value);
    this.setState({ 'DataTable': JSON.parse(value) })
        if(value == null){
            this.setState({ 'DataTable':  [['No Data', 'No Data']]})
        }
    });

    addDiet = () => {
        var flag = true;
        let arr = this.state.DataTable;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] instanceof Array){
                var date = arr[i][0];
                var res = date.split('/');
                if(res[0] == new Date().getDate() &&
                res[1] == (new Date().getMonth()+1) &&
                res[2] == new Date().getFullYear()){
                    flag = false;
                    Alert.alert(
                        "Status",
                        "You already submitted today's data. Please try again tomorrow.",
                        [
                          {},
                          { text: "OK"}
                        ],
                        { cancelable: true }
                      );
                  
                }
            }
        }
        if(flag) {
        this.props.navigation.navigate('Add Diet');
        }
    }

    render(){
        const state = this.state;
        const { navigate } = this.props.navigation;
        
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}>
                <View style={styles.container}>              
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen'}}
                    raised
                    icon={
                        <MaterialIcons name="add-box" size={24} color="white" />
                        }
                    title="Add Todays Diet"
                    titleStyle={{ marginLeft: 10 }}
                    onPress={this.addDiet}
                    />
                    <Button
                     buttonStyle={{backgroundColor: 'tomato'}}
                    raised
                    icon={
                        <FontAwesome5 name="weight" size={24} color="white" />
                        }
                    title="Track Weight loss"
                    titleStyle={{ marginLeft: 10 }}
                    onPress={()=>{navigate('Track Weight-loss');}}
                    />
                </View>

                <View style={styles.TableContainer}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginTop : 15,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    TableContainer: { 
        flex: 1,
        padding: 18,
        paddingTop: 15,
        backgroundColor: '#ffffff' 
      },
      HeadStyle: { 
        height: 40,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
      },
      TableText: { 
        margin: 10
      }
  });

export default (MyDietForm);