import React, { useLayoutEffect } from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

export default function BasicInfo({ navigation }) {

   
    return (
        <LinearGradient
                colors={['#733BC3', '#C4346C', '#C64156']}
                style={styles.container}
        >
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
            >
            {/* <Header 
                style={{ marginTop: 30 }}
            />
                <Text style={styles.title}>Basic Information</Text> */}
                <TextInput
                    placeholder="First Name"
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.secondTextInput.focus() }}
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // onChangeText={(firstName) => this.setState({ firstName })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.secondTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.thirdTextInput.focus() }}
                    // onChangeText={(lastName) => this.setState({ lastName })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.thirdTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.fourthTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Postal / Zip Code"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.fourthTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.fifthTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Address 1"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.fifthTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.sixthTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Address 2"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.sixthTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.seventhTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Town / City"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.seventhTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.eighthTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Country"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.eighthTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.ninethTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { this.ninethTextInput = input; }}
                    returnKeyType = { "next" }
                    // onSubmitEditing={() => { this.ninethTextInput.focus() }}
                    // onChangeText={(email) => this.setState({ email })}
                    style={styles.inputs}
                />
                
                <FlatButton 
                        text="Continue to Step 2"
                        onPress={() => navigation.navigate("Medical Information")}
                />
                
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
        fontSize: 16,
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
    buttonBottom: {
        paddingBottom: 75,
    }
});
