import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import firebase from 'firebase'
import "firebase/firestore";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const onLogout = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrP4qkO6SB3uOHkHc_ZzIqhbpizgCsOzbiw&usqp=CAU'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>Email: user@gmail.com</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>80</Paragraph>
                                <Caption style={styles.caption}>Shared</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption}>100</Paragraph>
                                <Caption style={styles.caption}>Revoked</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Business Profile"
                            onPress={() => {props.navigation.navigate('Business Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="information-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Basic Information"
                            onPress={() => {props.navigation.navigate('Basic Information')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="hospital-box-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Medical Information"
                            onPress={() => {props.navigation.navigate('Medical Information')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="select-search"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Search"
                            onPress={() => {props.navigation.navigate('Search')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="camera-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Camera"
                            onPress={() => {props.navigation.navigate('Camera')}}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Logout"
                    onPress={() => onLogout()}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });