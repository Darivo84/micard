import React, { useState, Component } from 'react';
import { Text, TextInput, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

import { AuthContext } from '../context';

const Register = ({ navigation }) => {

    const { signUp } = React.useContext(AuthContext);

    return (
        <LinearGradient
            colors={['#733BC3', '#C4346C', '#C64156']}  
            style={styles.container}
        >
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                >
                <Header />
                <Text style={styles.title}>Please Sign Up</Text>

                <TextInput
                    placeholder="First Name"
                    onChangeText={(text)=> setFirstName(text)}
                    returnKeyType = { "next" }
                    onSubmitEditing={() => { this.secondTextInput.focus() }}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    onChangeText={(text)=> setLastName(text)}
                    // ref={(input) => { this.secondTextInput = input; }}
                    returnKeyType = { "next" }
                    onSubmitEditing={() => { this.thirdTextInput.focus() }}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    onChangeText={(text)=> setEmail(text)}
                    // ref={(input) => { this.thirdTextInput = input; }}
                    returnKeyType = { "next" }
                    onSubmitEditing={() => { this.fourthTextInput.focus() }}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    onChangeText={(text)=> setPassword(text)}
                    // ref={(input) => { this.fourthTextInput = input; }}
                    secureTextEntry={true}
                    style={styles.inputs}
                />

                <FlatButton 
                    text="Sign Up"
                    onPress={() => {signUp()}}
                />
                <Text 
                    style={styles.goBack}
                    onPress={() => { navigation.goBack("Landing")}}
                >
                    back
                </Text>
                
                </KeyboardAwareScrollView>
            
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: 12,
        paddingTop: 20,
    },
    inputs: {
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginTop: 8,
        marginBottom: 8,
    },
    goBack: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: 12,
        paddingTop: 20,
    },
});

export default Register;
