import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { BannerAd } from './bannerAd';
import { Card, ListItem, Icon, Button } from 'react-native-elements';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(44, 130, 201, 1)';
const surveyold = [
    {
        questionType: 'Info',
        questionText: "\nPlease submit this survey at end of every day for better tracking. \n\n In this survey has questions related to daily eating habits and exercise"    },
    {
        questionType: 'SelectionGroup',
        questionText: " \nToday's Meal Count :              ",
        questionId: 'ddp1',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: '2 Meal',
                value: 40
            },
            {
                optionText: 'More than 2 Meal',
                value: 0
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '\nHave You Complete each Meal in 55 minute ?',
        questionId: 'ddp2',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 10
            },
            {
                optionText: 'No',
                value: 0
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '\nHave You Complete 2 Meal Within 8 Hour ?',
        questionId: 'ddp3',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 2
            },
            {
                optionText: 'No',
                value: 0
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: "\nToday's Water Intake :            ",
        questionId: 'ddp4',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Less than 3 Ltr',
                value: 0
            },
            {
                optionText: 'More than 3 Ltr',
                value: 2
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: "\nToday's  Sugar Intake :           ",
        questionId: 'ddp5',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Less than 3 spoon',
                value: 2
            },
            {
                optionText: 'More than 3 spoon',
                value: 1
            },
            {
                optionText: 'More than 5 spoon',
                value: 0
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '\nHave You Eat Fried Food Today ?',
        questionId: 'ddp6',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: 'Yes',
                value: 0
            },
            {
                optionText: 'No',
                value: 2
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: '\nSelect the Food which You take in between Meal :',
        questionId: 'ddp7',
        questionSettings: {
            maxMultiSelect: 2,
            minMultiSelect: 1,
        },
        options: [ {
                optionText: 'No food, Only Water',
                value: 2
            },
            {
                optionText: '1 Glass of Butter-Milk',
                value: 0
            },
            {
                optionText: '1 Glass of Coconut Water',
                value: 0
            },
            {
                optionText: 'A Tomato',
                value: 0
            },
            {
                optionText: 'Black Coffee Without Sugar',
                value: 0
            },
            {
                optionText: 'Green Tea Without Sugar',
                value: 0
            },
            {
                optionText: 'Other',
                value: -40
            } ]
    },
    {
        questionType: 'SelectionGroup',
        questionText: "\nToday's Workout Time :                      ",
        questionId: 'ddp8',
        questionSettings: {
            allowDeselect: false,
        },
        options: [ {
                optionText: '45 Minutes',
                value: 40
            },
            {
                optionText: '30 Minutes',
                value: 20
            },
            {
                optionText: 'No Workout',
                value: 0
            }]
    }

]

class AddDietForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            answersSoFar: '',
            survey : surveyold
        }
    }

    onSurveyFinished(answers) {
 
        const infoQuestionsRemoved = [...answers];
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }
        this.props.navigation.navigate('Submit Diet', { surveyAnswers: answersAsObj });
    }

    onAnswerSubmitted(answer) {
        this.setState({ answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2) });
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    onPress={onPress}
                    disabled={!enabled}
                    title={'Next'}
                />
            </View>
        );
    }
    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    onPress={onPress}
                    disabled={!enabled}
                    title={'Previous'}
                />
            </View>
        );
    }
    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    buttonStyle={isSelected ? {backgroundColor: 'green'}:{backgroundColor: 'royalblue'}}
                    style={isSelected ? { fontWeight: 'bold' } : {}} 
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.background}>
                    <View>
                        <BannerAd/>
                    </View>    
                    <View style={styles.container}>
                    <SimpleSurvey
                        ref={(s) => { this.surveyRef = s; }}
                        survey={this.state.survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        
                        renderInfo={this.renderInfoText}
                    />
                    </View>

                <ScrollView style={styles.answersContainer}> 
                </ScrollView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        maxHeight: '60%',
        justifyContent: 'center',
        elevation: 20,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column'
    },
    answersContainer: {
        width: '90%',
        maxHeight: '20%',
        marginTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    surveyContainer: {
        borderColor: '#ffa1d2',
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5,
        flexGrow: 0,
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    background: {
        flex: 1,
        minHeight: 800,
        maxHeight: 800,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 15
    },
    infoText: {
        marginBottom: 20,
        fontSize: 15,
        marginLeft: 10
    },
});



export default (AddDietForm);