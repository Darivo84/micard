import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    Avatar,
    // Title,
    // Caption,
    // Paragraph,
    // Drawer,
} from 'react-native-paper';

import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

export default function BusinessProfile() {
    return (
        <LinearGradient
            colors={['#733BC3', '#C4346C', '#C64156']}  
            style={styles.container}
        >
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
            >
                {/* <Header /> */}
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent:'center' }}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrP4qkO6SB3uOHkHc_ZzIqhbpizgCsOzbiw&usqp=CAU'
                        }}
                        size={125}
                    />
                </View>
                <ActivityIndicator size="large" />
                <Text style={styles.title}>Business Profile Loading...</Text>
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
