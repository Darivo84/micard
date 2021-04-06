import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

export default function MedicalInfo ({ navigation }) {
    
    return (
        <LinearGradient
                colors={['#733BC3', '#C4346C', '#C64156']}
                style={styles.container}
        >
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
            >
            <Header />
            <Text style={styles.title}>Medical Information</Text>
            <Text style={styles.questions}>Do you have any allergies?</Text>
            <TextInput
                placeholder="Yes / No"
                returnKeyType = { "next" }
                // onSubmitEditing={() => { this.secondTextInput.focus() }}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // onChangeText={(firstName) => this.setState({ firstName })}
                style={styles.inputs}
            />
            <TextInput
                placeholder="If yes, please tell us about them"
                // ref={(input) => { this.secondTextInput = input; }}
                returnKeyType = { "next" }
                // onSubmitEditing={() => { this.thirdTextInput.focus() }}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // onChangeText={(firstName) => this.setState({ firstName })}
                style={styles.inputs}
            />
            <Text style={styles.questions}>Do you have any Condition(s) / Illness(es)?</Text>
            
            <TextInput
                placeholder="Yes / No"
                // ref={(input) => { this.thirdTextInput = input; }}
                returnKeyType = { "next" }
                // onSubmitEditing={() => { this.fourthTextInput.focus() }}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // onChangeText={(firstName) => this.setState({ firstName })}
                style={styles.inputs}
            />
            <TextInput
                placeholder="If yes, please tell us about them"
                // ref={(input) => { this.fourthTextInput = input; }}
                returnKeyType = { "next" }
                // onSubmitEditing={() => { this.fifthTextInput.focus() }}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // onChangeText={(firstName) => this.setState({ firstName })}
                style={styles.inputs}
            />
            <Text style={styles.questions}>Are you talking any Medications / Vitamins / Supplements?</Text>
            <TextInput
                placeholder="Yes / No"
                // ref={(input) => { this.fifthTextInput = input; }}
                returnKeyType = { "next" }
                // onSubmitEditing={() => { this.sixthTextInput.focus() }}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // onChangeText={(firstName) => this.setState({ firstName })}
                style={styles.inputs}
            />
            <TextInput
                placeholder="If yes, please tell us about them"
                // ref={(input) => { this.sixthTextInput = input; }}
                returnKeyType = { "next" }
                // onSubmitEditing={() => { this.seventhTextInput.focus() }}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // onChangeText={(firstName) => this.setState({ firstName })}
                style={styles.inputs}
            />
            <FlatButton 
                text="Continue to Step 3"
                // ref={(input) => { seventhTextInput = input; }}
                onPress={() => navigation.navigate("Profile")}
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
    questions: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "600",
        textAlign: 'left',
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
});
