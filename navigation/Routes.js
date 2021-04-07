import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';

import firebase from 'firebase';
import 'firebase/auth';

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    }, []);

    if(initializing) return null;
    
    return(
        <NavigationContainer>
            { user ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    )
}

export default Routes;