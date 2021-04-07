import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

import firebase from 'firebase'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <LinearGradient
                colors={['#733BC3', '#C4346C', '#C64156']}  
                style={styles.container}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enable={true}
                >
                    <ScrollView>
                    <Header />
                    <Text style={styles.title}>Please Login</Text>

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'rgba(255,255,255,0.5)'}
                        onChangeText={(email) => this.setState({ email })}
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.secondTextInput.focus() }}
                        style={styles.inputs}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'rgba(255,255,255,0.5)'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                        ref={(input) => { this.secondTextInput = input; }}
                        style={styles.inputs}
                    />

                    <FlatButton 
                        text="Login"
                        onPress={() => {this.onLogin()}}
                    />
                    <Text 
                        style={styles.goBack}
                        onPress={() => { this.props.navigation.goBack("Landing")}}
                    >
                        back
                    </Text>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        )
    }
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

export default Login
