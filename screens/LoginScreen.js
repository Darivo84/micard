import React from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    return (
        <View>
            <LinearGradient
                colors={['#733BC3', '#C4346C', '#C64156']}  
                style={styles.container}
            >
                <Input 
                    placeholder="Enter your email address."
                />
                <Input 
                    placeholder="Enter your password."
                />
            </LinearGradient>
        </View>
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
    errorMsg: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default LoginScreen
