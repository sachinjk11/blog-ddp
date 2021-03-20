import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, AsyncStorage, StyleSheet, Alert, ScrollView, Share } from 'react-native';
import { Input } from 'react-native-elements';
import { Card, Icon, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

class TrackWeightForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            week1:0,
            week2:0,
            week3:0,
            week4:0,
            week5:0,
            week6:0,
            week7:0,
            week8:0,
            week9:0,
            week10:0,
            week11:0,
            week12:0,
            total:0
        }
    }

    componentDidMount = async () => {
        let w1 = await AsyncStorage.getItem('week1');
        let w2 = await AsyncStorage.getItem('week2');
        let w3 = await AsyncStorage.getItem('week3');
        let w4 = await AsyncStorage.getItem('week4');
        let w5 = await AsyncStorage.getItem('week5');
        let w6 = await AsyncStorage.getItem('week6');
        let w7 = await AsyncStorage.getItem('week7');
        let w8 = await AsyncStorage.getItem('week8');
        let w9 = await AsyncStorage.getItem('week9');
        let w10 = await AsyncStorage.getItem('week10');
        let w11 = await AsyncStorage.getItem('week11');
        let w12 = await AsyncStorage.getItem('week12');
        let tot = await AsyncStorage.getItem('total');
        
        this.setState({week1:(w1 == null)?0:Number(w1)});
        this.setState({week2:(w2 == null)?0:Number(w2)});
        this.setState({week3:(w3 == null)?0:Number(w3)});
        this.setState({week4:(w4 == null)?0:Number(w4)});
        this.setState({week5:(w5 == null)?0:Number(w5)});
        this.setState({week6:(w6 == null)?0:Number(w6)});
        this.setState({week7:(w7 == null)?0:Number(w7)});
        this.setState({week8:(w8 == null)?0:Number(w8)});
        this.setState({week9:(w9 == null)?0:Number(w9)});
        this.setState({week10:(w10 == null)?0:Number(w10)});
        this.setState({week11:(w11 == null)?0:Number(w11)});
        this.setState({week12:(w12 == null)?0:Number(w12)});
        this.setState({total:(tot == null)?0:Number(tot)});
        console.log('tot....'+tot);

        const total = Number(this.state.week1)+Number(this.state.week2)+
        Number(this.state.week3)+Number(this.state.week4)+Number(this.state.week5)+
        Number(this.state.week6)+Number(this.state.week7)+Number(this.state.week8)+
        Number(this.state.week9)+Number(this.state.week10)+Number(this.state.week11)+
        Number(this.state.week12);

        console.log('call....'+total);
        this.setState({ 'total':total})
        AsyncStorage.setItem('total',this.state.total.toString());
    }

    totalCalculate = () => {
        console.log('call....'+this.state.total);
        //let week1 = this.state.week1;
        AsyncStorage.setItem('week1',this.state.week1).toString();
        AsyncStorage.setItem('week2',this.state.week2.toString());
        AsyncStorage.setItem('week3',this.state.week3.toString());
        AsyncStorage.setItem('week4',this.state.week4.toString());
        AsyncStorage.setItem('week5',this.state.week5.toString());
        AsyncStorage.setItem('week6',this.state.week6.toString());
        AsyncStorage.setItem('week7',this.state.week7.toString());
        AsyncStorage.setItem('week8',this.state.week8.toString());
        AsyncStorage.setItem('week9',this.state.week9.toString());
        AsyncStorage.setItem('week10',this.state.week10.toString());
        AsyncStorage.setItem('week11',this.state.week11.toString());
        AsyncStorage.setItem('week12',this.state.week12.toString());
        
        const total = Number(this.state.week1)+Number(this.state.week2)+
        Number(this.state.week3)+Number(this.state.week4)+Number(this.state.week5)+
        Number(this.state.week6)+Number(this.state.week7)+Number(this.state.week8)+
        Number(this.state.week9)+Number(this.state.week10)+Number(this.state.week11)+
        Number(this.state.week12);

        console.log('call....'+total);
        this.setState({ 'total':total})
        AsyncStorage.setItem('total',this.state.total.toString());
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#ffffff'}}> 
            <View style={{margin:15}}>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 1:</Text>
                    <TextInput keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week1) => this.setState({ week1 })}
                    onSubmitEditing={this.totalCalculate}
                    value={""+this.state.week1}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 2:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week2) => this.setState({ week2 })}
                    value={""+this.state.week2}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 3:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week3) => this.setState({ week3 })}
                    value={""+this.state.week3}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 4:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week4) => this.setState({ week4 })}
                    value={""+this.state.week4}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 5:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week5) => this.setState({ week5 })}
                    value={""+this.state.week5}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 6:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week6) => this.setState({ week6 })}
                    value={""+this.state.week6}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 7:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week7) => this.setState({ week7 })}
                    value={""+this.state.week7}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 8:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week8) => this.setState({ week8 })}
                    value={""+this.state.week8}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 9:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week9) => this.setState({ week9 })}
                    value={""+this.state.week9}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 10:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week10) => this.setState({ week10 })}
                    value={""+this.state.week10}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 11:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week11) => this.setState({ week11 })}
                    value={""+this.state.week11}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Week 12:</Text>
                    <TextInput maxLength={4} keyboardType={'numeric'} style={styles.textInput} label="Weight in Kg"  placeholder='0 Kg'
                    onChangeText={(week12) => this.setState({ week12 })}
                    value={""+this.state.week12}
                    onSubmitEditing={this.totalCalculate}
                    />
                    <Text style={styles.text}>Kg</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}>Wow Awesome...!</Text>
                    <Text style={styles.text}>Total Weight Lost :   {this.state.total}  Kg</Text>
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:10
      },
    rowContainer: {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin:5,
        borderWidth: 0.5,
        borderColor: 'tomato', 
      },
      text: {
        fontSize: 15,
        margin: 4,
        padding: 10,
      },
      headlineText: {
        marginTop: 30,
        marginBottom: 10,
        color: "black"  
      }
      
});

export default (TrackWeightForm);