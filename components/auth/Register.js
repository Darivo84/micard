import React, { Component } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase'
import "firebase/firestore";

import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { firstName, lastName, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        firstName,
                        lastName,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
                alert(error.message)
            })
    }

    render() {
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
                            placeholder="Enter your first name"
                            onChangeText={(firstName) => this.setState({ firstName })}
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.secondTextInput.focus() }}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder="Enter your last name"
                            onChangeText={(lastName) => this.setState({ lastName })}
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            returnKeyType = { "next" }
                            ref={(input) => { this.secondTextInput = input; }}
                            onSubmitEditing={() => { this.thirdTextInput.focus() }}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder="Enter your email address"
                            onChangeText={(email) => this.setState({ email })}
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            returnKeyType = { "next" }
                            ref={(input) => { this.thirdTextInput = input; }}
                            onSubmitEditing={() => { this.fourthTextInput.focus() }}
                            style={styles.inputs}
                        />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            ref={(input) => { this.fourthTextInput = input; }}
                            style={styles.inputs}
                        />

                        <FlatButton 
                            text="Sign Up"
                            onPress={() => this.onSignUp()}
                        />

                        <Text 
                            style={styles.goBack}
                            onPress={() => { this.props.navigation.goBack("Landing")}}
                        >
                            back
                        </Text>
                    
                    </KeyboardAwareScrollView>
                
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

export default Register;
