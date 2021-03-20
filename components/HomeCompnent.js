import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Modal, StyleSheet, Alert, ScrollView, Share } from 'react-native';
import { connect } from 'react-redux';
import { dataFetch } from '../redux/ActionCreators';
import _ from 'lodash';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import { BannerAd } from './bannerAd';

const mapStateToprops = state => {
    return {
      products: _.map(state.products, (val, uid) => {
        return { ...val, uid };
      })
    }
  }
const mapDispatchToProps = dispatch => ({
    dataFetch : () => dispatch(dataFetch())
});


class HomeForm extends Component {

    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.props.dataFetch();
      }

    myName(){
        const { navigate } = this.props.navigation;
        navigate('About', { name: 'sachin kore' });
    }

    render(){
        const { navigate } = this.props.navigation;

        const renderItem = ({item, index}) => {
            return(
                <View>
                <Card
                    title={item.title}
                    image={{uri:item.img}}
                    imageStyle={{
                        resizeMode: 'contain'
                    }}
                    containerStyle={{borderColor:'red'}}
                >
                    <Text style={{margin: 10, textAlign: 'justify'}}> {item.desc}</Text>
                    <Button
                    buttonStyle={{backgroundColor: 'lightseagreen', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='View Full Article' 
                    onPress={()=>{navigate('Details', { name:item.uid });}}/>
                </Card>
                {
                (index%2==0)?<View style={{margin:11}}><BannerAd/></View>:<View></View>
                }
                </View>
            );
        }

        return(
            <ScrollView>
                <FlatList  
                        data={this.props.products}
                        renderItem={renderItem}
                /> 
            </ScrollView>
        );
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(HomeForm);