import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeCompnent';
import About from './AboutComponent';
import Diet from './MyDietComponent';
import Shop from './ShoppingComponent';
import Info from './DietInfoComponent';
import BlogDetails from './blogDetailsComponent';
import AddDiet from './AddDietComponent';
import SubmitDiet from './SubmitDietComponent';
import TrackWeight from './TrackWeightComponent';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const MyStack = createStackNavigator();
const ShopStack = createStackNavigator();
const AboutStack = createStackNavigator();
const DietStack = createStackNavigator();
const InfoStack = createStackNavigator();

function MyStackScreen() {
    return (
      <MyStack.Navigator
      screenOptions={{
        headerStatusBarHeight:15
      }}>
       <MyStack.Screen name="Blogs" component={Home} />             
       <MyStack.Screen options={{headerShown: false}} name="Details" component={BlogDetails} />
      </MyStack.Navigator>
     );
}

function ShoppingStackScreen() {
    return (
      <ShopStack.Navigator
      screenOptions={{
        headerStatusBarHeight:15
      }}>
        <ShopStack.Screen name="Shopping List" component={Shop} />             
      </ShopStack.Navigator>
     );
}

function InfoStackScreen() {
  return (
    <InfoStack.Navigator
    screenOptions={{
      headerStatusBarHeight:15
    }}>
     <InfoStack.Screen name="Diet Plan" component={Info} />             
    </InfoStack.Navigator>
   );
}

function AboutStackScreen() {
    return (
      <AboutStack.Navigator
      screenOptions={{
        headerStatusBarHeight:15
      }}>
       <AboutStack.Screen name="Contact Us" component={About} />             
      </AboutStack.Navigator>
     );
}

function DietStackScreen() {
    return (
      <DietStack.Navigator
      screenOptions={{
        headerStatusBarHeight:15
      }}
      >
      <DietStack.Screen name="My Diet" component={Diet} />  
      <DietStack.Screen name="Add Diet" component={AddDiet} />  
      <DietStack.Screen name="Submit Diet" component={SubmitDiet} />  
      <DietStack.Screen name="Track Weight-loss" component={TrackWeight} />             
      </DietStack.Navigator>
     );
}


function MyTabs(){
    return (
        <Tab.Navigator
        activeColor="#ff6347"
        inactiveColor="#20b2aa"
        barStyle={{ backgroundColor: '#FFFFFF' }}
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
            name="My Diet"
            component={DietStackScreen}
            options={{
            tabBarLabel: 'My Diet',
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="tasks" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Plan"
            component={InfoStackScreen}
            options={{
            tabBarLabel: 'Plan',
            tabBarIcon: ({ color }) => (
                <Foundation name="clipboard-notes" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Blog"
            component={MyStackScreen}
            options={{
            tabBarLabel: 'Blogs',
            tabBarIcon: ({ color }) => (
                <FontAwesome name="book" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Shopping List"
            component={ShoppingStackScreen}
            options={{
            tabBarLabel: 'Shopping',
            tabBarIcon: ({ color }) => (
                <FontAwesome name="cart-plus" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="About Us"
            component={AboutStackScreen}
            options={{
            tabBarLabel: 'Contact Us',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
    );
}

class Nevigate extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return (
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          );
    }
}

export default Nevigate;