import React, { Component } from 'react'
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "firebase"
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXv2JfpbCV8ZLsKY8yR5Nvb8rhjYPullU",
  authDomain: "mctest-6374a.firebaseapp.com",
  projectId: "mctest-6374a",
  storageBucket: "mctest-6374a.appspot.com",
  messagingSenderId: "898460944776",
  appId: "1:898460944776:web:edd3f954b597a2f1c2123d"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} 

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/shared/Header';

import { AuthContext } from './components/context';

// Auth Screens
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

// Main Screen function
import MainScreen from './components/Main';

const Stack = createStackNavigator()

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <LinearGradient
            colors={['#733BC3', '#C4346C', '#C64156']}
            style={styles.container}
          >
            <Header />
            <ActivityIndicator />
            <Text style={styles.title}>Loading...</Text>
        </LinearGradient>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer >
          <MainScreen />
        </NavigationContainer>
      </Provider> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 12,
    paddingTop: 60,
}
});

export default App
