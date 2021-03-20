import 'react-native-gesture-handler';
import * as React from 'react';
import Nevigate from './components/navigationComponent';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Loading } from './components/LoadingComponent';

const { persistor, store } = ConfigureStore();

export default class App extends React.Component {
 
  componentWillMount() {
    const config = {     
        apiKey: "AIzaSyDx6S9jKFWM4ecQ4A2F_kHnuA9ETaer0hQ",
        authDomain: "login1-2d562.firebaseapp.com",
        databaseURL: "https://login1-2d562.firebaseio.com",
        projectId: "login1-2d562",
        storageBucket: "login1-2d562.appspot.com",
        messagingSenderId: "887262968634",
        appId: "1:887262968634:web:71c533a99b2f3b8e352e03"
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={store}>
      <PersistGate 
        loading={<Loading />}
        persistor={persistor}>
          <Nevigate/>
      </PersistGate>
    </Provider>
    );
       
  }
}
