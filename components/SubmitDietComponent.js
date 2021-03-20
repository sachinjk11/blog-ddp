import React from 'react';
import { Component } from 'react';
import { Text, View, AsyncStorage, FlatList, Modal, StyleSheet, Alert, ScrollView, Share } from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { BannerAd } from './bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class SubmitDietForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0,
            title: 'Need Improvement',
            achievement:'',
            improvement:''
        }
    }

    submit= async ()=> {
        let log = null;
        let logStr = await AsyncStorage.getItem('logdietdata');
        let today = [new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear(),this.state.score];
        console.log('---str--'+logStr);
        if(logStr != null) {
        log = JSON.parse(logStr);
        }
        if(log == null) {
             log = new Array();
             log.push(today);
             console.log('------new------'+log);
        } else {
             log.push(today);
             console.log('-----add------'+log);
        }
        AsyncStorage.setItem('logdietdata',JSON.stringify(log));  

        this.props.navigation.navigate('My Diet', { logdietdata3:JSON.stringify(log)});
    }

    componentWillMount(){
        const answers = this.props.route.params.surveyAnswers;//this.props.navigation.getParam('surveyAnswers', defaultAnswers);
    const total = answers.ddp1.value + answers.ddp2.value + answers.ddp3.value + answers.ddp4.value + answers.ddp5.value + answers.ddp6.value + answers.ddp7.value + answers.ddp8.value;
    this.setState({score:total});
    console.log('total'+total);
        if(total >= 100){
            this.setState({title:'Wow.. Awesome...!'});
        } else if(total >= 80){
            this.setState({title:'Good Job...!'});
        }
        const meal = (answers.ddp1.value == 40 && answers.ddp2.value == 10) 
        ?"# You take Only 2 Meal and Completed each Meal within 55 min."
        :"";

        const ifMeal = (answers.ddp1.value == 40 && answers.ddp3.value == 40) 
        ?" \n\n# You Complete your 2 Meal within 8 Hours you get addition benfit of Intermediate Fasting."
        :"";

        const water = (answers.ddp4.value == 2) ?"\n\n# You Completed your daily water Intake.":"";

        const Exercise = (answers.ddp8.value == 40) ?"\n\n# Daily Exercise : Done":"";
        
        this.setState({achievement:meal+ifMeal+water+Exercise});

        const imeal = (answers.ddp1.value == 0)?"# Only 2 Meals in a Day.":"";
        const imealTime = (answers.ddp2.value == 0)?"\n\n# Complete your Meal in 45 Min.":"";
        const iwater = (answers.ddp4.value == 0)?"\n\n# Human Body require Minimum 3 Ltr Water in a Day.":"";
        const isugar = (answers.ddp5.value == 0)?"\n\n# Try to Avoid Sugar, replace with Natural Sugar.":"";
        const ioil = (answers.ddp6.value == 0)?"\n\n# Try to avoid Fried food.":"";
        const iexcercise = (answers.ddp8.value == 0)?"\n\n# Exercise is Compulsory, because every steps count.":"";

        this.setState({improvement:imeal+imealTime+iwater+isugar+ioil+iexcercise});
    }

    render(){
        const { navigate } = this.props.navigation;
      
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <BannerAd/>
            <View>
                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Separator/>
                    <Text style={styles.text}>Today's Score : {this.state.score}</Text>  
                </Card>    

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Today's Achievement</Text>
                    <Separator/>
                    <Text style={styles.inst}>{this.state.achievement}</Text>  
                </Card>   

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Need to Improve</Text>
                    <Separator/>
                    <Text style={styles.inst}>{this.state.improvement}</Text>  
                </Card>    
            </View>           

                <View style={styles.container}>
                <Button
                    buttonStyle={{backgroundColor: 'tomato',}}
                    raised
                    icon={
                        <MaterialIcons name="done" size={24} color="white" />
                        }
                    title="Submit"
                    titleStyle={{ marginLeft: 10 }}
                    onPress={this.submit}
                />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    cardContainer:{
        borderColor:'red',
    },
    title:{
        fontFamily: 'monospace',
        fontSize:20,
        textAlign:"center"
    },
    text:{
        fontFamily: 'sans-serif-condensed',
        margin:10,
        textAlign:"center"
    },
    inst:{
        fontFamily: 'sans-serif-condensed',
        margin:10,
    },
    instTitle:{
        fontFamily: 'sans-serif-condensed',
        fontSize:20,
        textAlign:"center"
    },
    container: {
        flex: 1,
        marginTop : 15,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
export default (SubmitDietForm);