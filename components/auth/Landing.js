import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import FlatButton from '../../src/shared/Button';
import Header from '../../src/shared/Header';

export default function Landing({ navigation }) {
    return (
        <LinearGradient 
            colors={['#733BC3', '#C4346C', '#C64156']}
            style={styles.container}
        >
            <SafeAreaView>
                <ScrollView>
                    <Header style={{ marginTop: 25 }} />
                    <Text style={styles.title}>Please Login if you have an account. If not, Please Sign Up.</Text>
                    <FlatButton 
                        text="Sign Up"
                        onPress={() => navigation.navigate("Register")}
                    />
                    <FlatButton 
                        text="Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                </ScrollView>
            </SafeAreaView>
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
        paddingTop: 60,
    }
});
