import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from './main/Profile';
import BusinessProfileScreen from './main/BusinessProfile';
import BasicInfoScreen from './main/BasicInfo';
import MedicalInfoScreen from './main/MedicalInfo';
import CameraScreen from './main/Camera';
import SearchScreen from './main/Search';
import InviteScreen from './main/Invite';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

// import { AuthContext } from '../components/context';

export default function Home () {

  // const { logout } = React.useContext();

  return (
      <Drawer.Navigator initialRouteName="Home" options={{ 
        title: 'Basic Information',
        headerLeft: () => {
          <Icon.Button name="ios-menu" size={25}
          backgroundColor='rgba(0,0,0,0.5)' onPress={() => {navigation.openDrawer()}} ></Icon.Button>
        }
      }}>
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

