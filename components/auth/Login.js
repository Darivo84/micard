import React from 'react';
import { Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../src/shared/Header';
import FlatButton from '../../src/shared/Button';

import { AuthContext } from '../context';

const Login = ({ navigation }) =>{

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { login } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (email, password) => {

        const foundUser = Users.filter( item => {
            return email == item.email && password == item.password;
        } );

        if ( data.email.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Email address or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }
    
    return (
        <LinearGradient
            colors={['#733BC3', '#C4346C', '#C64156']}  
            style={styles.container}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enable={true}
            >
                <ScrollView>
                <Header />
                <Text style={styles.title}>Please Login</Text>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // onChangeText={(email) => this.setState({ email })}
                    returnKeyType = { "next" }
                    onSubmitEditing={() => { secondTextInput.focus() }}
                    style={styles.inputs}
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="white"
                        size={20}
                    />
                </Animatable.View>
                : null}
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    // ref={(input) => { secondTextInput = input; }}
                    style={styles.inputs}
                    onChangeText={(val) => handlePasswordChange(val)}
                    secureTextEntry={data.secureTextEntry ? true : false}
                />
                { data.isValidPassword ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
                    </Animatable.View>
                }

                <FlatButton 
                    text="Login"
                    // onPress={() => {login()}}
                    onPress={() => {loginHandle( data.email, data.password )}}
                />
                <Text 
                    style={styles.goBack}
                    onPress={() => { navigation.goBack("Landing")}}
                >
                    back
                </Text>
                </ScrollView>
            </KeyboardAvoidingView>
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

export default Login;
