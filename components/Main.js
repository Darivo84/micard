import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

import ProfileScreen from './main/Profile';
import BusinessProfileScreen from './main/BusinessProfile';
import BasicInfoScreen from './main/BasicInfo';
import MedicalInfoScreen from './main/MedicalInfo';
import CameraScreen from './main/Camera';
import SearchScreen from './main/Search';
import InviteScreen from './main/Invite';

import { DrawerContent } from '../screens/DrawerContent'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

export default function Home ({ navigation }) {
  //*
  // Use below to sign out!!!
  //

  // useLayoutEffect(() => { 
  //   navigation.setOptions({
  //     headerRight: () => { 
  //       <TouchableOpacity 
  //         style={{ marginRight: 30 }}
  //         onPress={signOut}
  //       >
  //         <AntDesign name="logout" size={24} color="black" />
  //       </TouchableOpacity>
  //     }
  //   })
  // })

  // const signOut = () => {
  //   firebase.auth().signOut().then(() => {
  //     navigation.replace('LandingScreen')
  //   })
  // }

  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="BasicInfo" component={BasicInfoScreen} />
        <Drawer.Screen name="MedicalInfo" component={MedicalInfoScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="BusinessProfile" component={BusinessProfileScreen} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Invite" component={InviteScreen} />
      </Drawer.Navigator>
  );
}

