import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
import { BannerAd } from './bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

class AboutForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
             <BannerAd/>
                 <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>UpComming Features</Text>
                    <Separator/>
                    <Text style={styles.inst}>{"# Graph View\n#Histoy in Shopping List\n# Water intake Calculator"}</Text>  
                </Card>   

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>UpComming Applications</Text>
                    <Separator/>
                    <Text style={styles.inst}>{"# Health News\n#Healthy Food and Habit Tracker\n"}</Text>  
                </Card>  

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Healthy Brain India</Text>
                    <Separator/>
                    <Text style={styles.inst}>{"# Suggestions mail us on\nhealthy.brain.india@gmail.com"}</Text>  
                </Card>   
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

export default (AboutForm);