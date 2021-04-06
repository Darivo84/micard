import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Header() {
    
    return (
        <View style={styles.headerContainer}>
            <View style={styles.contentContainer}>
                <Image 
                    source={require('../../src/img/logo.png')}
                    style={styles.logoLeft}
                    resizeMode="contain"
                />
                <Text style={styles.logoRight}>MICard</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
    },
    contentContainer: {
        flex:1,
        alignItems: 'center',
    },
    logoLeft: {
        width: 204,
        height: 202,
        marginTop: 65,

    },
    logoRight: {
        color: 'white',
        fontSize: 38,
    }
})
