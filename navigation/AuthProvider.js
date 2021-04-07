import React, { createContext, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{ 
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (firstName, lastName, email, password) => { 
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(firstName, lastName, email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await firebase.auth().signOut();
                    } catch (e) {
                        
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}