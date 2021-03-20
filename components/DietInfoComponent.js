import React from 'react';
import { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';

const Separator = () => (
    <View style={styles.separator} />
  );

class DietInfoForm extends Component {

    constructor(props){
        super(props);
    }

    logout(){
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <View>
                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>What is Dixit Diet ?</Text>
                    <Separator/>
                    <Text style={styles.inst}>{"Dixit diet is not dieting its eating habit.\nWorld's best hack is if you try anything more than 15 days then it converted to habit.\n\nDiet Plan :\n\n# 2 meal  a Day.\n# Each meal should be complete with 55 min.\n# 45 min Excersise"}</Text>  
                </Card>    

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Allowed in-between Meal</Text>
                    <Separator/>
                    <Text style={styles.inst}>{" \n# Water \n# Green tea without sugar \n# Black Coffee without sugar \n# 1 Glass of Homemade buttermilk  \n# 1 Glass  of coconut-water"}</Text>  
                </Card>   

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Avoid Food List</Text>
                    <Separator/>
                    <Text style={styles.inst}>{" while prepareing meal avoid below foods :\n\n# Sugar replace with natural sugar  \n# Oil replace with small amount of ghee \n# All purpose flour [Maida]"}</Text>  
                </Card>  

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Benefits of Dixit Diet </Text>
                    <Separator/>
                    <Text style={styles.inst}>{" \n# Wegiht loss \n# Diabetes prevention \n# Diabetes Reversal"}</Text>  
                </Card>  

                <Card containerStyle={styles.cardContainer}>
                    <Text style={styles.instTitle}>Addtional Benefits</Text>
                    <Separator/>
                    <Text style={styles.inst}>{"If you complete both the meals within 8 hours then you will get addtional benefits\n\n# Improved mental clarity and concentration \n# Increased energy \n# Increased growth hormone \n# Improved blood cholesterol profile"}</Text>  
                </Card>    
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

export default (DietInfoForm);