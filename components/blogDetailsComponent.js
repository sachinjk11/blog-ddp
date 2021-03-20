import React from 'react';
import { Component } from 'react';
import { Text, TextInput, FlatList, Modal, StyleSheet, Button, Alert, ScrollView, Share } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { WebView } from 'react-native-webview';
import { Loading } from './LoadingComponent';

const mapStateToprops = state => {
    return {
      products: _.map(state.products, (val, uid) => {
        return { ...val, uid };
      })
    }
  }

class BlogDetailsForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const uid = this.props.route.params.name;
        const object = this.props.products.find((obj)=>{
           return obj.uid == uid;
        });
        console.log(object.link);
        return(
            <WebView 
            startInLoadingState={true}
            source={{ uri:object.link }}
            renderLoading={() => <Loading/>}
            />
        );
    }
}

export default  connect(mapStateToprops)(BlogDetailsForm);