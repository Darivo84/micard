import React, { useEffect, useState, useMemo } from 'react'
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          email: action.email,
          password: action.password,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          password: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          firstName: action.id,
          lastName: action.lastName,
          email: action.email,
          password: action.password,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    login: (email, password) => {
      // setUserToken('sdnfosangngaSLGNLFSNGlnfdlnlgndfglfmglLNKSFNGLFNG');
      // setIsLoading(false);
      let userToken;
      // userToken = null;
      email = null;
      if( email === 'test@test.com' && password == '123456') {
        userToken = 'sdnfosangngaSLGNLFSNGlnfdlnlgndfglfmglLNKSFNGLFNG';
      }
      dispatch({ type: 'LOGIN', email: email, userToken: userToken})
    },
    logout: () => {
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      // setUserToken('sdnfosangngaSLGNLFSNGlnfdlnlgndfglfmglLNKSFNGLFNG');
      // setIsLoading(false);
      let userToken;
      firstName = null;
      lastName = null;
      email = null;
      if( firstName == 'Jack' && lastName == 'Bowman' && email == 'test@test.com' && password == '123456') {
        userToken = 'sdnfosangngaSLGNLFSNGlnfdlnlgndfglfmglLNKSFNGLFNG';
      }
      dispatch({ type: 'REGISTER', firstName: action.id, lastName: lastName ,email: email, userToken: userToken})
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      dispatch({ type: 'RETRIEVE_TOKEN', userToken: 'sdnfosangngaSLGNLFSN'})
    }, 1000)
  }, []);

  if (loginState.isLoading) {
    return (
          <LinearGradient
              colors={['#733BC3', '#C4346C', '#C64156']}
              style={styles.container}
            >
              <Header />
              <ActivityIndicator size="large" />
              <Text style={styles.title}>Loading...</Text>
          </LinearGradient>
        )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer style={styles.container}>
        { loginState.userToken !== null ? (  
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        ):        
        <MainScreen />
        }
      </NavigationContainer>  
    </AuthContext.Provider>
  )
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
