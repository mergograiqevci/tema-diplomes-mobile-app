import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import UserActions from '~/Store/User/Actions';
import State from '~/Store/State';

import Button from '~/Components/Button';
import Styles from './styles';

const LoginScreen = (props) => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.User);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPressed = () => {
        dispatch(UserActions.login(username, password))
    }

    const handleBackPressed = () => {
        props.navigation.pop();
    }

    return (
        <View style={Styles.container}>
            
            {
                userData.dataState === State.DONE ?
                <Text>
                    {JSON.stringify(userData.data)}
                </Text> :

                userData.dataState === State.FAILED ?
                <Text>
                    {userData.loginError.toString()}
                </Text> :

                null
            }

            <TextInput
                value={username}
                placeholder="Username"
                onChangeText={setUsername}/>
            
            <TextInput
                value={password}
                secureTextEntry
                placeholder="Password"
                onChangeText={setPassword}/>

            <Button
                text="Login"
                onPress={handleLoginPressed}/>

            <Button
                text="Back to Splash Screen"
                onPress={handleBackPressed}/>

        </View>
    );
}

export default LoginScreen;